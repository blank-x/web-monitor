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
/* harmony export */   "sendData": () => (/* binding */ sendData),
/* harmony export */   "merge": () => (/* binding */ merge),
/* harmony export */   "getBaseInfo": () => (/* binding */ getBaseInfo),
/* harmony export */   "getErrType": () => (/* binding */ getErrType)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

function sendData(data) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', window.ZS_M_CONFIG.logUrl, true);
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.onload = function (e) {
    if (this.status == 200 || this.status == 304) {
      console.log(this.responseText);
    }
  };

  xhr.send(JSON.stringify(data));
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

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import { UPLOAD_URL, EVENT_PREFIX, MAX_CACHE_UPLOAD_NUMBER } from './constants.js';
// import { parseParams, getCurrentTime, getCurrentRoute } from './utils';
// import './ListenHistroy';

function register(config) {
  if (!validateParams(config)) {
    return false;
  } // if (config.source !== window.location.host) {
  //   console.warning('当前环境与配置不符，不上报pv信息');
  //   return false;
  // }
  // uploadPv(config);
  // 注册监听错误事件


  listenGlobalError(); // 监听全局的点击事件
  // listenTriggerEvent(config);
}

const validateParams = config => {
  return true;
  const fields = ["project", "source"];
  const result = fields.find(field => !config[field]);
  return !result;
};
/* 
const uploadPv = (config) => {
  const payload = {
    ...config,
    type: 'info',
    client: navigator.userAgent,
    content: '',
  };
  // 监听路由变化和页面加载
  listenHistory(payload);
}
// 监听history对象变化 + onload事件，发送pv
const listenHistory = (params) => {
  window.onload = function() {
    params.route = getCurrentRoute();
    params.createTime = getCurrentTime();
    sendRequest(params);
  }
  window.addHistoryListener('history', function() {
    params.route = getCurrentRoute();
    params.createTime = getCurrentTime();
    sendRequest(params);
  });
}
// 监听全局事件埋点
const listenTriggerEvent = (config) => {
  document.addEventListener('click', (e) => {
    if (e.target.id && e.target.id.startsWith(EVENT_PREFIX)) {
      const eventName = e.target.id.split(EVENT_PREFIX)[1];
      const eventContent = e.target.innerHtml || '';
      const payload = {
        ...config,
        type: 'event',
        client: navigator.userAgent,
        content: eventName + eventContent,
      };
      sendRequest(payload);
    }
  });
}
// 上传埋点信息
const sendRequest = (params) => {
  params.route = window.location.origin + window.location.pathname;
  params.createTime = (new Date().getTime()/1000).toFixed(0);
  if (params.cacheUpload && Number(params.cacheUpload) < MAX_CACHE_UPLOAD_NUMBER + 1 && Number(params.cacheUpload) > 0) {
    recordCacheLog(params);
  } else {
    const image = new Image();
    image.src = UPLOAD_URL + '?' + parseParams(params);
  }
}
// 记录，批量上传
const recordCacheLog = (params) => {
  const oldCount = localStorage.getItem('longanCount');
  const oldContent = localStorage.getItem('longanContent') ? JSON.parse(localStorage.getItem('longanContent')) : [];
  if (oldCount === String(params.cacheUpload - 1)) {
    oldContent.push(params);
    const image = new Image();
    image.src = UPLOAD_URL + '?cacheUpload=' + JSON.stringify(oldContent);
    // 重置localstorage
    localStorage.setItem('longanCount', 0);
    localStorage.setItem('longanContent', JSON.stringify([]));
  } else {
    localStorage.setItem('longanCount', Number(oldCount || 0) + 1);
    localStorage.setItem('longanContent', JSON.stringify(oldContent.concat([params])));
  }
}
 */
// 监听全局错误，并上报


const listenGlobalError = config => {
  let baseInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getBaseInfo)();
  window.addEventListener('error', err => {
    console.log(err);
    const data = { ...baseInfo,
      errMessage: err.message,
      errLineNo: err.lineno,
      colno: err.colno,
      filename: err.filename,
      error: err.error && err.error.stack,
      getErrType: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getErrType)(err.message)
    };
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendData)(data);
  }, true);
  window.addEventListener('unhandledrejection', err => {
    const data = { ...baseInfo,
      errMessage: err.message,
      errLineNo: err.lineno,
      colno: err.colno,
      filename: err.filename,
      error: err.error && err.error.stack,
      getErrType: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getErrType)(err.message)
    };
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sendData)(data);
  });
}; // 语法错误
// 调用api接口报错
// 测试环境不发错误

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  logUrl: 'http://152.136.155.216/payment/errlog'
});

/***/ }),
/* 4 */
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
// import ErrorBoundary from './ErrorBoundary/index';



const start = (config = {}) => {
  let mergedCfg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.merge)(_config__WEBPACK_IMPORTED_MODULE_1__.default, config);
  window.ZS_M_CONFIG = mergedCfg;
  (0,_register_js__WEBPACK_IMPORTED_MODULE_0__.default)();
};
const Version = '0.0.1';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Version);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});