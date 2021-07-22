const uploadScreenshot = require('./uploadScreenshot')
const app = (ctx, next) => {
  return new Promise(async (resolve, reject) => {
    try {uploadScreenshot.js
      // 获取前端传的参数
      const data = ctx.request.body;
      // 调用chrome，生成截图
      uploadScreenshot({
        data,
        router: ctx.path,
        modelType: 'iPhone 8 Plus',
        resolve
      })
    } catch (err) {
      logger.info(err)
      reject({ code: 1, msg: err && err.response ? err.response.text : err, status: err.status || undefined })
    }
  })
}

module.exports = app