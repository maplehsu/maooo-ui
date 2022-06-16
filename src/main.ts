/*
 * @Author: liushuai
 * @Description:
 * @Date: 2022-06-14 14:20:58
 * @LastEditors: liushuai
 */
import { createSSRApp } from 'vue'
// 引入组件和工具类
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
