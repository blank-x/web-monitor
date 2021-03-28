import {errorType} from './constants'
export function sendData(data){
 
  var xhr = new XMLHttpRequest()
  xhr.open('POST', window.ZS_M_CONFIG.logUrl, true);
  xhr.setRequestHeader('content-type','application/json')
  xhr.onload = function(e) {
    if(this.status == 200||this.status == 304){
        console.log(this.responseText);
    }
  };
  
  xhr.send(JSON.stringify(data));
}

export function merge (...args){
  return Object.assign({},...args)
}

export function getBaseInfo(){
  return {
    url:location.href,
    client: navigator.userAgent,
  }
}

export function getErrType(message=''){
  let type = errorType.find(item=>message.includes(item))
  return type
}