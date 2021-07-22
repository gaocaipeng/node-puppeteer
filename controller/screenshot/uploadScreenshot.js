const path = require('path');
const uploadFile = require('../../model/uploadOss')
const createScreenshot = require('../../model/createScreenshot')
const interceptName = require('../../utils/interceptRouterName');
const logger = require('../../utils/logger');
const app = async ({resolve, modelType, router, data, sId, className, isQualityConversion, callback}) => {
  const id = sId || data.insOrderId
  // 记录开始时间
  const startTime = Date.now()
  // 获取路由名字和url
  const routerName = await interceptName(router)
  const imageUrl = `images/screenshot/${routerName}/${id}.png`
  // 缓存当前订单的数据
  global.objectData[routerName] = data
  // 调用chrome，生成截图
  createScreenshot({routerName, id, modelType, className}, async (res) => {
    // 记录生成花费时间
    logger.info(id + '[time]:', Date.now() - startTime);
    // 文件路径
    let pathUrl = path.resolve(__dirname, '../../' + imageUrl)
    // 文件名
    let pathName = '/' + imageUrl
    // 如果路径正确，上传到OSS
    if (pathUrl && resolve) {
      let ossFile = await uploadFile(pathName, pathUrl)
      logger.info('-> 上传完毕...\n', ossFile.name)
      // 请空缓存上线记得打开，便于调试先隐藏
      global.objectData[routerName] = ''
      let url = '//oss-img.gaocaipeng.com' + ossFile.name
      if (isQualityConversion) {
        url = url + '?x-oss-process=image/interlace,1/format,jpg'
      }
      resolve({code: 0, data:{imgUrl: url}})
    }
    // 如果路径正确，返回callback
    if (pathUrl && callback) callback(pathUrl)
  })
}

module.exports = app