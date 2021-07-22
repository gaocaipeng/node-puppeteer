const OSS = require('ali-oss')
const path = require('path')

var client = new OSS.Wrapper({
  region: '',
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: '',
  accessKeySecret: '',
  bucket: 'gaocaipeng'
})

const uploadFile = (fileName, filePath) => {
  return new Promise((resolve, reject) => {
    client.put(fileName, filePath).then(function (rt) {
      logger.info('put success: %j', rt);
      resolve(rt)
    }).catch(function (err) {
      logger.error('error: %j', err);
      reject(err)
    })
  })
}

module.exports = uploadFile