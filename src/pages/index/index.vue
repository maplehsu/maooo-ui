<!--
 * @Author: liushuai
 * @Description: 
 * @Date: 2022-06-14 14:20:58
 * @LastEditors: liushuai
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area text-gray-400 bg-black">
      <text class="title text-red-200">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("maooo-uni-ui hello ");
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
