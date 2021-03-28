// import { UPLOAD_URL, EVENT_PREFIX, MAX_CACHE_UPLOAD_NUMBER } from './constants.js';
// import { parseParams, getCurrentTime, getCurrentRoute } from './utils';
// import './ListenHistroy';
import { sendData, getBaseInfo, getErrType } from "./utils";
export default function register (config) {
  if (!validateParams(config)) {
    return false;
  }
  // if (config.source !== window.location.host) {
  //   console.warning('当前环境与配置不符，不上报pv信息');
  //   return false;
  // }
  // uploadPv(config);
  // 注册监听错误事件
  listenGlobalError();
  // 监听全局的点击事件
  // listenTriggerEvent(config);
}
const validateParams = (config) => {
  return true;
  const fields = ["project", "source"];
  const result = fields.find((field) => !config[field]);
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
const listenGlobalError = (config) => {
  let baseInfo = getBaseInfo()
  
 
  window.addEventListener('error',err => {
    console.log( err);
    const data = {
      ...baseInfo,
      errMessage:err.message,
      errLineNo:err.lineno,
      colno:err.colno,
      filename:err.filename,
      error:err.error && err.error.stack,
      getErrType:getErrType(err.message)
    }
  
    sendData(data);
  },true);
  window.addEventListener('unhandledrejection',err => {
    const data = {
      ...baseInfo,
      errMessage:err.message,
      errLineNo:err.lineno,
      colno:err.colno,
      filename:err.filename,
      error:err.error && err.error.stack,
      getErrType:getErrType(err.message)
    }
    sendData(data);
  });
};
 
// 语法错误
// 调用api接口报错
// 测试环境不发错误
