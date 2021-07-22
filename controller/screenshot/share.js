const uploadScreenshot = require('./uploadScreenshot')
const app = (ctx, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 获取post传递的参数
      const data = ctx.request.body;
      // 调用chrome，生成截图
      uploadScreenshot({
        data,
        router: ctx.path,
        modelType: 'iPhone 6',
        resolve
      })
    } catch (err) {
      logger.info(err)
      reject({ code: 1, msg: err && err.response ? err.response.text : err, status: err.status || undefined })
    }
  })
}

module.exports = app