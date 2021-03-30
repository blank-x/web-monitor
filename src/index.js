// import ErrorBoundary from './ErrorBoundary/index';
import defaultConfig from "./config";
import { merge, validateConfig, getErrType, ajax, getBaseInfo, getResourceSrc } from "./utils";
let Cfg = {};

export const start = (config = {}) => {
  if (!validateConfig(config)) {
    return false;
  }
  Cfg = merge(defaultConfig, config);

  listenBasicErr();
  listenPromiseErr();
  listenAjaxErr();
  // uploadPv(config);
  // 监听全局的点击事件
  // listenTriggerEvent(config);
  uploadPerformance();
};

function sendErrData(data) {
  ajax({
    url: Cfg.logUrl,
    method: "POST",
    data,
  });
}

function sendPerformData(data) {
  ajax({
    url: Cfg.performanceUrl,
    method: "POST",
    data,
  });
}
function listenBasicErr() {
  let baseInfo = getBaseInfo();

  window.addEventListener(
    "error",
    (err) => {
      console.log(err);
      let data;
      //
      if (err instanceof ErrorEvent) {
        data = {
          ...baseInfo,
          errMessage: err.message,
          errLineNo: err.lineno,
          errColNo: err.colno,
          fileName: err.filename,
          errorStack: err.error && err.error.stack,
          errType: getErrType(err.message),
        };
      } else if (err instanceof Event) {
        data = {
          resourceSrc: getResourceSrc(err),
          errType: "resource",
        };
      }

      sendErrData(data);
    },
    true
  );
}

function listenPromiseErr() {
  let baseInfo = getBaseInfo();

  window.addEventListener("unhandledrejection", (err) => {
    console.log(err);
    // reject出来的错误 ，信息放到了err.reason
    let errMessage = err.reason;
    let errorStack = "";
    let lineno, colNo, fileName;

    // 语法错误，err.reason是一个对象
    console.log(err.reason.errMessage, err.reason.stack);
    if (err.reason && err.reason.message && err.reason.stack) {
      errMessage = err.reason.message;
      errorStack = err.reason.stack;

      let matches = errorStack.match(/at (.*):(\d+):(\d+)/);
      if (matches) {
        fileName = matches[1];
        lineno = matches[2];
        colNo = matches[3];
      }
    }

    const data = {
      ...baseInfo,
      errMessage,
      errorStack,
      errLineNo: lineno,
      errColNo: colNo,
      fileName,
      errType: "unhandledrejection",
    };
    console.log(data);
    sendErrData(data);
  });
}

function listenAjaxErr() {
  function ajaxEventTrigger(event) {
    var ajaxEvent = new CustomEvent(event, { detail: this });
    window.dispatchEvent(ajaxEvent);
  }

  var oldXHR = window.XMLHttpRequest;

  function newXHR() {
    var xhrProto = oldXHR.prototype,
      origOpen = xhrProto.open;
    xhrProto.open = function (method, url) {
      this._apiurl = url;
      return origOpen.apply(this, arguments);
    };
    var realXHR = new oldXHR();

    realXHR.addEventListener(
      "error",
      function () {
        ajaxEventTrigger.call(this, "ajaxError");
      },
      false
    );

    realXHR.addEventListener(
      "timeout",
      function (a) {
        console.log(a);
        ajaxEventTrigger.call(this, "ajaxTimeout");
      },
      false
    );

    realXHR.addEventListener(
      "loadend",
      function () {
        if (this.status > 400) {
          ajaxEventTrigger.call(this, "ajaxServerError");
        }
      },
      false
    );

    return realXHR;
  }

  window.XMLHttpRequest = newXHR;
  let baseInfo = getBaseInfo();
  window.addEventListener("ajaxError", (err) => {
    console.log(err);
    let detail = err.detail || {};
    // error
    var data = {
      ...baseInfo,
      apiUrl: detail._apiurl,
      errMessage: "",
      responseText: "",
      errType: "ajaxError",
    };
    sendErrData(data);
  });
  window.addEventListener("ajaxTimeout", (err) => {
    console.log(err);
    let detail = err.detail || {};
    // error
    var data = {
      ...baseInfo,
      apiUrl: detail._apiurl,
      errMessage: "",
      responseText: "",
      errType: "ajaxTimeout",
    };
    sendErrData(data);
  });
  window.addEventListener("ajaxServerError", (err) => {
    console.log(err);
    let detail = err.detail || {};
    // error
    var data = {
      ...baseInfo,
      apiUrl: detail.responseURL,
      errMessage: detail.statusText,
      responseText: detail.responseText,
      errType: "ajaxServerError",
    };
    sendErrData(data);
  });
}

function uploadPerformance() {
  window.onload = function () {
    const { domainLookupEnd, domainLookupStart, connectEnd, connectStart, secureConnectionStart, responseStart, requestStart, responseEnd, domInteractive, loadEventStart, domContentLoadedEventEnd, fetchStart } = window.performance.timing;
    const performanceParams = {
      dns: domainLookupEnd - domainLookupStart,
      tcp: connectEnd - connectStart,
      ssl: connectEnd - secureConnectionStart,
      ttfb: responseStart - requestStart,
      trans: responseEnd - responseStart,
      dom: domInteractive - responseEnd,
      res: loadEventStart - domContentLoadedEventEnd,
      firstbyte: responseStart - domainLookupStart,
      fpt: responseEnd - fetchStart,
      tti: domInteractive - fetchStart,
      ready: domContentLoadedEventEnd - fetchStart,
      load: loadEventStart - fetchStart,
    };
    const baseInfo = getBaseInfo()
    sendPerformData({
      ...baseInfo,
      ...performanceParams
    });
  };
}

export const Version = "0.0.1";
