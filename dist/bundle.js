(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ZS_M"] = factory();
	else
		root["ZS_M"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  logUrl: 'http://152.136.155.216/payment/errlog',
  performanceUrl: 'http://152.136.155.216/payment/errlog'
});

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "getBaseInfo": () => (/* binding */ getBaseInfo),
/* harmony export */   "getErrType": () => (/* binding */ getErrType),
/* harmony export */   "validateConfig": () => (/* binding */ validateConfig),
/* harmony export */   "getGrammerErr": () => (/* binding */ getGrammerErr),
/* harmony export */   "getPromiseErr": () => (/* binding */ getPromiseErr),
/* harmony export */   "getResourceErr": () => (/* binding */ getResourceErr),
/* harmony export */   "getResourceSrc": () => (/* binding */ getResourceSrc)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

function ajax(params) {
  var xhr = new XMLHttpRequest();
  xhr.open(params.method, params.url, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onload = function (e) {
    if (this.status == 200 || this.status == 304) {
      params.success && params.success(); // console.log(this.responseText);
    }
  };

  xhr.send(JSON.stringify(params.data));
}
function merge(...args) {
  return Object.assign({}, ...args);
}
function getBaseInfo() {
  return {
    url: location.href,
    client: navigator.userAgent
  };
}
function getErrType(message = '') {
  let type = _constants__WEBPACK_IMPORTED_MODULE_0__.errorType.find(item => message.includes(item));
  return type;
}
function validateConfig(config) {
  return true;

  if (!config.appId) {
    console.warn('需要appId');
    return false;
  }

  return true;
}
function getGrammerErr(err) {}
function getPromiseErr(err) {}
function getResourceErr(err) {}
function getResourceSrc(err) {
  if (err.target.tagName.toLowerCase() === 'link') {
    return err.target.link;
  }

  return err.target.src;
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorType": () => (/* binding */ errorType)
/* harmony export */ });
const errorType = ['SyntaxError', 'ReferenceError', 'RangeError', 'TypeError', 'URLError', 'EvalError']; // EvalError 浏览器不再抛出

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "Version": () => (/* binding */ Version)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
// import ErrorBoundary from './ErrorBoundary/index';


let Cfg = {};
const start = (config = {}) => {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.validateConfig)(config)) {
    return false;
  }

  Cfg = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.merge)(_config__WEBPACK_IMPORTED_MODULE_0__.default, config);
  listenBasicErr();
  listenPromiseErr();
  listenAjaxErr(); // uploadPv(config);
  // 监听全局的点击事件
  // listenTriggerEvent(config);

  uploadPerformance();
};

function sendErrData(data) {
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.ajax)({
    url: Cfg.logUrl,
    method: "POST",
    data
  });
}

function sendPerformData(data) {
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.ajax)({
    url: Cfg.performanceUrl,
    method: "POST",
    data
  });
}

function listenBasicErr() {
  let baseInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getBaseInfo)();
  window.addEventListener("error", err => {
    console.log(err);
    let data; //

    if (err instanceof ErrorEvent) {
      data = { ...baseInfo,
        errMessage: err.message,
        errLineNo: err.lineno,
        errColNo: err.colno,
        fileName: err.filename,
        errorStack: err.error && err.error.stack,
        errType: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getErrType)(err.message)
      };
    } else if (err instanceof Event) {
      data = {
        resourceSrc: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getResourceSrc)(err),
        errType: "resource"
      };
    }

    sendErrData(data);
  }, true);
}

function listenPromiseErr() {
  let baseInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getBaseInfo)();
  window.addEventListener("unhandledrejection", err => {
    console.log(err); // reject出来的错误 ，信息放到了err.reason

    let errMessage = err.reason;
    let errorStack = "";
    let lineno, colNo, fileName; // 语法错误，err.reason是一个对象

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

    const data = { ...baseInfo,
      errMessage,
      errorStack,
      errLineNo: lineno,
      errColNo: colNo,
      fileName,
      errType: "unhandledrejection"
    };
    console.log(data);
    sendErrData(data);
  });
}

function listenAjaxErr() {
  function ajaxEventTrigger(event) {
    var ajaxEvent = new CustomEvent(event, {
      detail: this
    });
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
    realXHR.addEventListener("error", function () {
      ajaxEventTrigger.call(this, "ajaxError");
    }, false);
    realXHR.addEventListener("timeout", function (a) {
      console.log(a);
      ajaxEventTrigger.call(this, "ajaxTimeout");
    }, false);
    realXHR.addEventListener("loadend", function () {
      if (this.status > 400) {
        ajaxEventTrigger.call(this, "ajaxServerError");
      }
    }, false);
    return realXHR;
  }

  window.XMLHttpRequest = newXHR;
  let baseInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getBaseInfo)();
  window.addEventListener("ajaxError", err => {
    console.log(err);
    let detail = err.detail || {}; // error

    var data = { ...baseInfo,
      apiUrl: detail._apiurl,
      errMessage: "",
      responseText: "",
      errType: "ajaxError"
    };
    sendErrData(data);
  });
  window.addEventListener("ajaxTimeout", err => {
    console.log(err);
    let detail = err.detail || {}; // error

    var data = { ...baseInfo,
      apiUrl: detail._apiurl,
      errMessage: "",
      responseText: "",
      errType: "ajaxTimeout"
    };
    sendErrData(data);
  });
  window.addEventListener("ajaxServerError", err => {
    console.log(err);
    let detail = err.detail || {}; // error

    var data = { ...baseInfo,
      apiUrl: detail.responseURL,
      errMessage: detail.statusText,
      responseText: detail.responseText,
      errType: "ajaxServerError"
    };
    sendErrData(data);
  });
}

function uploadPerformance() {
  window.onload = function () {
    const {
      domainLookupEnd,
      domainLookupStart,
      connectEnd,
      connectStart,
      secureConnectionStart,
      responseStart,
      requestStart,
      responseEnd,
      domInteractive,
      loadEventStart,
      domContentLoadedEventEnd,
      fetchStart
    } = window.performance.timing;
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
      load: loadEventStart - fetchStart
    };
    const baseInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getBaseInfo)();
    sendPerformData({ ...baseInfo,
      ...performanceParams
    });
  };
}

const Version = "0.0.1";
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9aU19NL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9aU19NLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9aU19NLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL1pTX00vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL1pTX00vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vWlNfTS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vWlNfTS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1pTX00vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9aU19NLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvZ1VybCIsInBlcmZvcm1hbmNlVXJsIiwiYWpheCIsInBhcmFtcyIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm1ldGhvZCIsInVybCIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWQiLCJlIiwic3RhdHVzIiwic3VjY2VzcyIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIm1lcmdlIiwiYXJncyIsIk9iamVjdCIsImFzc2lnbiIsImdldEJhc2VJbmZvIiwibG9jYXRpb24iLCJocmVmIiwiY2xpZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZ2V0RXJyVHlwZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiZXJyb3JUeXBlIiwiaXRlbSIsImluY2x1ZGVzIiwidmFsaWRhdGVDb25maWciLCJjb25maWciLCJhcHBJZCIsImNvbnNvbGUiLCJ3YXJuIiwiZ2V0R3JhbW1lckVyciIsImVyciIsImdldFByb21pc2VFcnIiLCJnZXRSZXNvdXJjZUVyciIsImdldFJlc291cmNlU3JjIiwidGFyZ2V0IiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwibGluayIsInNyYyIsIkNmZyIsInN0YXJ0IiwiZGVmYXVsdENvbmZpZyIsImxpc3RlbkJhc2ljRXJyIiwibGlzdGVuUHJvbWlzZUVyciIsImxpc3RlbkFqYXhFcnIiLCJ1cGxvYWRQZXJmb3JtYW5jZSIsInNlbmRFcnJEYXRhIiwic2VuZFBlcmZvcm1EYXRhIiwiYmFzZUluZm8iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9nIiwiRXJyb3JFdmVudCIsImVyck1lc3NhZ2UiLCJlcnJMaW5lTm8iLCJsaW5lbm8iLCJlcnJDb2xObyIsImNvbG5vIiwiZmlsZU5hbWUiLCJmaWxlbmFtZSIsImVycm9yU3RhY2siLCJlcnJvciIsInN0YWNrIiwiZXJyVHlwZSIsIkV2ZW50IiwicmVzb3VyY2VTcmMiLCJyZWFzb24iLCJjb2xObyIsIm1hdGNoZXMiLCJtYXRjaCIsImFqYXhFdmVudFRyaWdnZXIiLCJldmVudCIsImFqYXhFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIm9sZFhIUiIsIm5ld1hIUiIsInhoclByb3RvIiwicHJvdG90eXBlIiwib3JpZ09wZW4iLCJfYXBpdXJsIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWFsWEhSIiwiY2FsbCIsImEiLCJhcGlVcmwiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZVVSTCIsInN0YXR1c1RleHQiLCJkb21haW5Mb29rdXBFbmQiLCJkb21haW5Mb29rdXBTdGFydCIsImNvbm5lY3RFbmQiLCJjb25uZWN0U3RhcnQiLCJzZWN1cmVDb25uZWN0aW9uU3RhcnQiLCJyZXNwb25zZVN0YXJ0IiwicmVxdWVzdFN0YXJ0IiwicmVzcG9uc2VFbmQiLCJkb21JbnRlcmFjdGl2ZSIsImxvYWRFdmVudFN0YXJ0IiwiZG9tQ29udGVudExvYWRlZEV2ZW50RW5kIiwiZmV0Y2hTdGFydCIsInBlcmZvcm1hbmNlIiwidGltaW5nIiwicGVyZm9ybWFuY2VQYXJhbXMiLCJkbnMiLCJ0Y3AiLCJzc2wiLCJ0dGZiIiwidHJhbnMi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TWEsT0FBTyxHQUFHLE9BQWhCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiWlNfTVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJaU19NXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGRlZmF1bHQge1xuICBsb2dVcmw6J2h0dHA6Ly8xNTIuMTM2LjE1NS4yMTYvcGF5bWVudC9lcnJsb2cnLFxuICBwZXJmb3JtYW5jZVVybDonaHR0cDovLzE1Mi4xMzYuMTU1LjIxNi9wYXltZW50L2VycmxvZydcbn0iLCJpbXBvcnQge2Vycm9yVHlwZX0gZnJvbSAnLi9jb25zdGFudHMnXG5leHBvcnQgZnVuY3Rpb24gYWpheChwYXJhbXMpe1xuIFxuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgeGhyLm9wZW4ocGFyYW1zLm1ldGhvZCwgcGFyYW1zLnVybCwgdHJ1ZSk7XG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdjb250ZW50LXR5cGUnLCdhcHBsaWNhdGlvbi9qc29uJylcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZih0aGlzLnN0YXR1cyA9PSAyMDB8fHRoaXMuc3RhdHVzID09IDMwNCl7XG4gICAgICBwYXJhbXMuc3VjY2VzcyAmJiBwYXJhbXMuc3VjY2VzcygpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KTtcbiAgICB9XG4gIH07XG4gIFxuICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMuZGF0YSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UgKC4uLmFyZ3Mpe1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwuLi5hcmdzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFzZUluZm8oKXtcbiAgcmV0dXJuIHtcbiAgICB1cmw6bG9jYXRpb24uaHJlZixcbiAgICBjbGllbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVyclR5cGUobWVzc2FnZT0nJyl7XG4gIGxldCB0eXBlID0gZXJyb3JUeXBlLmZpbmQoaXRlbT0+bWVzc2FnZS5pbmNsdWRlcyhpdGVtKSlcbiAgcmV0dXJuIHR5cGVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlnKGNvbmZpZyl7XG4gIHJldHVybiB0cnVlXG4gIGlmICghY29uZmlnLmFwcElkKSB7XG4gICAgY29uc29sZS53YXJuKCfpnIDopoFhcHBJZCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1lckVycihlcnIpe1xuXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbWlzZUVycihlcnIpe1xuXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzb3VyY2VFcnIoZXJyKXtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzb3VyY2VTcmMoZXJyKXtcbiAgaWYoZXJyLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaW5rJyl7XG4gICAgcmV0dXJuIGVyci50YXJnZXQubGlua1xuICB9XG4gIHJldHVybiBlcnIudGFyZ2V0LnNyY1xufSIsImV4cG9ydCBjb25zdCBlcnJvclR5cGUgPSBbJ1N5bnRheEVycm9yJywgJ1JlZmVyZW5jZUVycm9yJywgJ1JhbmdlRXJyb3InLCAnVHlwZUVycm9yJywgJ1VSTEVycm9yJywnRXZhbEVycm9yJ11cbi8vIEV2YWxFcnJvciDmtY/op4jlmajkuI3lho3mipvlh7pcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9FcnJvckJvdW5kYXJ5L2luZGV4JztcbmltcG9ydCBkZWZhdWx0Q29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgbWVyZ2UsIHZhbGlkYXRlQ29uZmlnLCBnZXRFcnJUeXBlLCBhamF4LCBnZXRCYXNlSW5mbywgZ2V0UmVzb3VyY2VTcmMgfSBmcm9tIFwiLi91dGlsc1wiO1xubGV0IENmZyA9IHt9O1xuXG5leHBvcnQgY29uc3Qgc3RhcnQgPSAoY29uZmlnID0ge30pID0+IHtcbiAgaWYgKCF2YWxpZGF0ZUNvbmZpZyhjb25maWcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIENmZyA9IG1lcmdlKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG5cbiAgbGlzdGVuQmFzaWNFcnIoKTtcbiAgbGlzdGVuUHJvbWlzZUVycigpO1xuICBsaXN0ZW5BamF4RXJyKCk7XG4gIC8vIHVwbG9hZFB2KGNvbmZpZyk7XG4gIC8vIOebkeWQrOWFqOWxgOeahOeCueWHu+S6i+S7tlxuICAvLyBsaXN0ZW5UcmlnZ2VyRXZlbnQoY29uZmlnKTtcbiAgdXBsb2FkUGVyZm9ybWFuY2UoKTtcbn07XG5cbmZ1bmN0aW9uIHNlbmRFcnJEYXRhKGRhdGEpIHtcbiAgYWpheCh7XG4gICAgdXJsOiBDZmcubG9nVXJsLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRQZXJmb3JtRGF0YShkYXRhKSB7XG4gIGFqYXgoe1xuICAgIHVybDogQ2ZnLnBlcmZvcm1hbmNlVXJsLFxuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5mdW5jdGlvbiBsaXN0ZW5CYXNpY0VycigpIHtcbiAgbGV0IGJhc2VJbmZvID0gZ2V0QmFzZUluZm8oKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImVycm9yXCIsXG4gICAgKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGxldCBkYXRhO1xuICAgICAgLy9cbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgLi4uYmFzZUluZm8sXG4gICAgICAgICAgZXJyTWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgZXJyTGluZU5vOiBlcnIubGluZW5vLFxuICAgICAgICAgIGVyckNvbE5vOiBlcnIuY29sbm8sXG4gICAgICAgICAgZmlsZU5hbWU6IGVyci5maWxlbmFtZSxcbiAgICAgICAgICBlcnJvclN0YWNrOiBlcnIuZXJyb3IgJiYgZXJyLmVycm9yLnN0YWNrLFxuICAgICAgICAgIGVyclR5cGU6IGdldEVyclR5cGUoZXJyLm1lc3NhZ2UpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChlcnIgaW5zdGFuY2VvZiBFdmVudCkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIHJlc291cmNlU3JjOiBnZXRSZXNvdXJjZVNyYyhlcnIpLFxuICAgICAgICAgIGVyclR5cGU6IFwicmVzb3VyY2VcIixcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc2VuZEVyckRhdGEoZGF0YSk7XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblByb21pc2VFcnIoKSB7XG4gIGxldCBiYXNlSW5mbyA9IGdldEJhc2VJbmZvKCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgLy8gcmVqZWN05Ye65p2l55qE6ZSZ6K+vIO+8jOS/oeaBr+aUvuWIsOS6hmVyci5yZWFzb25cbiAgICBsZXQgZXJyTWVzc2FnZSA9IGVyci5yZWFzb247XG4gICAgbGV0IGVycm9yU3RhY2sgPSBcIlwiO1xuICAgIGxldCBsaW5lbm8sIGNvbE5vLCBmaWxlTmFtZTtcblxuICAgIC8vIOivreazlemUmeivr++8jGVyci5yZWFzb27mmK/kuIDkuKrlr7nosaFcbiAgICBjb25zb2xlLmxvZyhlcnIucmVhc29uLmVyck1lc3NhZ2UsIGVyci5yZWFzb24uc3RhY2spO1xuICAgIGlmIChlcnIucmVhc29uICYmIGVyci5yZWFzb24ubWVzc2FnZSAmJiBlcnIucmVhc29uLnN0YWNrKSB7XG4gICAgICBlcnJNZXNzYWdlID0gZXJyLnJlYXNvbi5tZXNzYWdlO1xuICAgICAgZXJyb3JTdGFjayA9IGVyci5yZWFzb24uc3RhY2s7XG5cbiAgICAgIGxldCBtYXRjaGVzID0gZXJyb3JTdGFjay5tYXRjaCgvYXQgKC4qKTooXFxkKyk6KFxcZCspLyk7XG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICBmaWxlTmFtZSA9IG1hdGNoZXNbMV07XG4gICAgICAgIGxpbmVubyA9IG1hdGNoZXNbMl07XG4gICAgICAgIGNvbE5vID0gbWF0Y2hlc1szXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgLi4uYmFzZUluZm8sXG4gICAgICBlcnJNZXNzYWdlLFxuICAgICAgZXJyb3JTdGFjayxcbiAgICAgIGVyckxpbmVObzogbGluZW5vLFxuICAgICAgZXJyQ29sTm86IGNvbE5vLFxuICAgICAgZmlsZU5hbWUsXG4gICAgICBlcnJUeXBlOiBcInVuaGFuZGxlZHJlamVjdGlvblwiLFxuICAgIH07XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgc2VuZEVyckRhdGEoZGF0YSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5BamF4RXJyKCkge1xuICBmdW5jdGlvbiBhamF4RXZlbnRUcmlnZ2VyKGV2ZW50KSB7XG4gICAgdmFyIGFqYXhFdmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IHRoaXMgfSk7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoYWpheEV2ZW50KTtcbiAgfVxuXG4gIHZhciBvbGRYSFIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG5cbiAgZnVuY3Rpb24gbmV3WEhSKCkge1xuICAgIHZhciB4aHJQcm90byA9IG9sZFhIUi5wcm90b3R5cGUsXG4gICAgICBvcmlnT3BlbiA9IHhoclByb3RvLm9wZW47XG4gICAgeGhyUHJvdG8ub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICAgICAgdGhpcy5fYXBpdXJsID0gdXJsO1xuICAgICAgcmV0dXJuIG9yaWdPcGVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICB2YXIgcmVhbFhIUiA9IG5ldyBvbGRYSFIoKTtcblxuICAgIHJlYWxYSFIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiZXJyb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWpheEV2ZW50VHJpZ2dlci5jYWxsKHRoaXMsIFwiYWpheEVycm9yXCIpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHJlYWxYSFIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGltZW91dFwiLFxuICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coYSk7XG4gICAgICAgIGFqYXhFdmVudFRyaWdnZXIuY2FsbCh0aGlzLCBcImFqYXhUaW1lb3V0XCIpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHJlYWxYSFIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibG9hZGVuZFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPiA0MDApIHtcbiAgICAgICAgICBhamF4RXZlbnRUcmlnZ2VyLmNhbGwodGhpcywgXCJhamF4U2VydmVyRXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVhbFhIUjtcbiAgfVxuXG4gIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IG5ld1hIUjtcbiAgbGV0IGJhc2VJbmZvID0gZ2V0QmFzZUluZm8oKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJhamF4RXJyb3JcIiwgKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgbGV0IGRldGFpbCA9IGVyci5kZXRhaWwgfHwge307XG4gICAgLy8gZXJyb3JcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIC4uLmJhc2VJbmZvLFxuICAgICAgYXBpVXJsOiBkZXRhaWwuX2FwaXVybCxcbiAgICAgIGVyck1lc3NhZ2U6IFwiXCIsXG4gICAgICByZXNwb25zZVRleHQ6IFwiXCIsXG4gICAgICBlcnJUeXBlOiBcImFqYXhFcnJvclwiLFxuICAgIH07XG4gICAgc2VuZEVyckRhdGEoZGF0YSk7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFqYXhUaW1lb3V0XCIsIChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIGxldCBkZXRhaWwgPSBlcnIuZGV0YWlsIHx8IHt9O1xuICAgIC8vIGVycm9yXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICAuLi5iYXNlSW5mbyxcbiAgICAgIGFwaVVybDogZGV0YWlsLl9hcGl1cmwsXG4gICAgICBlcnJNZXNzYWdlOiBcIlwiLFxuICAgICAgcmVzcG9uc2VUZXh0OiBcIlwiLFxuICAgICAgZXJyVHlwZTogXCJhamF4VGltZW91dFwiLFxuICAgIH07XG4gICAgc2VuZEVyckRhdGEoZGF0YSk7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImFqYXhTZXJ2ZXJFcnJvclwiLCAoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICBsZXQgZGV0YWlsID0gZXJyLmRldGFpbCB8fCB7fTtcbiAgICAvLyBlcnJvclxuICAgIHZhciBkYXRhID0ge1xuICAgICAgLi4uYmFzZUluZm8sXG4gICAgICBhcGlVcmw6IGRldGFpbC5yZXNwb25zZVVSTCxcbiAgICAgIGVyck1lc3NhZ2U6IGRldGFpbC5zdGF0dXNUZXh0LFxuICAgICAgcmVzcG9uc2VUZXh0OiBkZXRhaWwucmVzcG9uc2VUZXh0LFxuICAgICAgZXJyVHlwZTogXCJhamF4U2VydmVyRXJyb3JcIixcbiAgICB9O1xuICAgIHNlbmRFcnJEYXRhKGRhdGEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBsb2FkUGVyZm9ybWFuY2UoKSB7XG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeyBkb21haW5Mb29rdXBFbmQsIGRvbWFpbkxvb2t1cFN0YXJ0LCBjb25uZWN0RW5kLCBjb25uZWN0U3RhcnQsIHNlY3VyZUNvbm5lY3Rpb25TdGFydCwgcmVzcG9uc2VTdGFydCwgcmVxdWVzdFN0YXJ0LCByZXNwb25zZUVuZCwgZG9tSW50ZXJhY3RpdmUsIGxvYWRFdmVudFN0YXJ0LCBkb21Db250ZW50TG9hZGVkRXZlbnRFbmQsIGZldGNoU3RhcnQgfSA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmc7XG4gICAgY29uc3QgcGVyZm9ybWFuY2VQYXJhbXMgPSB7XG4gICAgICBkbnM6IGRvbWFpbkxvb2t1cEVuZCAtIGRvbWFpbkxvb2t1cFN0YXJ0LFxuICAgICAgdGNwOiBjb25uZWN0RW5kIC0gY29ubmVjdFN0YXJ0LFxuICAgICAgc3NsOiBjb25uZWN0RW5kIC0gc2VjdXJlQ29ubmVjdGlvblN0YXJ0LFxuICAgICAgdHRmYjogcmVzcG9uc2VTdGFydCAtIHJlcXVlc3RTdGFydCxcbiAgICAgIHRyYW5zOiByZXNwb25zZUVuZCAtIHJlc3BvbnNlU3RhcnQsXG4gICAgICBkb206IGRvbUludGVyYWN0aXZlIC0gcmVzcG9uc2VFbmQsXG4gICAgICByZXM6IGxvYWRFdmVudFN0YXJ0IC0gZG9tQ29udGVudExvYWRlZEV2ZW50RW5kLFxuICAgICAgZmlyc3RieXRlOiByZXNwb25zZVN0YXJ0IC0gZG9tYWluTG9va3VwU3RhcnQsXG4gICAgICBmcHQ6IHJlc3BvbnNlRW5kIC0gZmV0Y2hTdGFydCxcbiAgICAgIHR0aTogZG9tSW50ZXJhY3RpdmUgLSBmZXRjaFN0YXJ0LFxuICAgICAgcmVhZHk6IGRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCAtIGZldGNoU3RhcnQsXG4gICAgICBsb2FkOiBsb2FkRXZlbnRTdGFydCAtIGZldGNoU3RhcnQsXG4gICAgfTtcbiAgICBjb25zdCBiYXNlSW5mbyA9IGdldEJhc2VJbmZvKClcbiAgICBzZW5kUGVyZm9ybURhdGEoe1xuICAgICAgLi4uYmFzZUluZm8sXG4gICAgICAuLi5wZXJmb3JtYW5jZVBhcmFtc1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVmVyc2lvbiA9IFwiMC4wLjFcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=