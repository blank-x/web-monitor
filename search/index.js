
 
/*
function recordJavaScriptError() {
  // 重写console.error, 可以捕获更全面的报错信息
  var oldError = console.error;
  console.error = function () {
    // arguments的长度为2时，才是error上报的时机
    // if (arguments.length < 2) return;
    var errorMsg = arguments[0] && arguments[0].message;
    var url = WEB_LOCATION;
    var lineNumber = 0;
    var columnNumber = 0;
    var errorObj = arguments[0] && arguments[0].stack;
    if (!errorObj) errorObj = arguments[0];
    // 如果onerror重写成功，就无需在这里进行上报了
    !jsMonitorStarted && siftAndMakeUpMessage(errorMsg, url, lineNumber, columnNumber, errorObj);
    return oldError.apply(console, arguments);
  };
  // 重写 onerror 进行jsError的监听
  window.onerror = function(errorMsg, url, lineNumber, columnNumber, errorObj)
  {
    jsMonitorStarted = true;
    var errorStack = errorObj ? errorObj.stack : null;
    siftAndMakeUpMessage(errorMsg, url, lineNumber, columnNumber, errorStack);
  };

  function siftAndMakeUpMessage(origin_errorMsg, origin_url, origin_lineNumber, origin_columnNumber, origin_errorObj) {
    var errorMsg = origin_errorMsg ? origin_errorMsg : '';
    var errorObj = origin_errorObj ? origin_errorObj : '';
    var errorType = "";
    if (errorMsg) {
      var errorStackStr = JSON.stringify(errorObj)
      errorType = errorStackStr.split(": ")[0].replace('"', "");
    }
    var javaScriptErrorInfo = new JavaScriptErrorInfo(JS_ERROR, errorType + ": " + errorMsg, errorObj);
    javaScriptErrorInfo.handleLogInfo(JS_ERROR, javaScriptErrorInfo);
  };
};
 */

  

// Promise.reject(1212)


var p = Promise.reject('sdfsd')

setTimeout(()=>{
  p.catch(()=>{})
},1000)