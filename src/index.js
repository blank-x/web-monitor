// import ErrorBoundary from './ErrorBoundary/index';
import register from './register.js';
import defaultConfig from './config'
import {merge} from './utils'
export const start = (config = {})=>{
  let mergedCfg = merge(defaultConfig,config)
  window.ZS_M_CONFIG = mergedCfg
  register()
}

const Version = '0.0.1'
export default Version