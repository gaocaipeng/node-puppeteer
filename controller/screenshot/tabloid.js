const uploadScreenshot = require('./uploadScreenshot')
const app = (ctx, next) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 获取前端传的参数
      const data = ctx.request.body;
      const sId = data.picName || data.insTimerId
      // 调用chrome，生成截图
      uploadScreenshot({
        sId,
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
