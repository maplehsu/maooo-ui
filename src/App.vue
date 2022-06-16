<!--
 * @Author: liushuai
 * @Description:
 * @Date: 2022-06-14 14:20:58
 * @LastEditors: liushuai
-->
<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style></style>
