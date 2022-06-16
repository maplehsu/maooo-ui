const replace = require('gulp-replace')
const gulp = require('gulp')

const updateTailwind = async () => {
  /* 找到微信小程序构建后的文件 */
  await gulp.src('./dist/dev/mp-weixin/**/**/*.wxml')
    /* 在文本中找到class拿出来做修改 */
    .pipe(replace(/class="((\w+([-]*)|([/]?)\w)|(\w+[-]['[']\w+])?(\[\/w\]\\)?\s?)+"/ig, (match) => {
      let useMatch = match
      /* 找到/替换为- */
      if (useMatch.includes('/'))
        useMatch = useMatch.replace('/', '-')

      /* 找到[x]替换为 -x- */
      if (useMatch.includes('['))
        useMatch = (useMatch.replace(/\[/g, '-')).replace(/\]/g, '-')

      /* 返回回去 */
      return useMatch
    }))
    /* 修改后的保存地方 */
    .pipe(gulp.dest('./dist/dev/mp-weixin/'))
}

/* 默认任务 */
gulp.task('default', () => {
  return updateTailwind()
})

/* 监听src下面的文件做了修改 */
gulp.watch('src/**/**').on('change', (event) => {
  console.log(`${event}文件发生了改变~`)
  setTimeout(updateTailwind, 1000)
})
