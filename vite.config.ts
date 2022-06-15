/*
 * @Author: liushuai
 * @Description: 
 * @Date: 2022-06-14 14:20:58
 * @LastEditors: liushuai
 */
import { defineConfig } from "vite";
import WindiCSS from 'vite-plugin-windicss'
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS({
    scan: {
      dirs: ['.'], // 当前目录下所有文件
      fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts
    },
  }), uni()],
});
