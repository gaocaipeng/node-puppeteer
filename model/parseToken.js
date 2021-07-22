const request = require('../utils/request');

/**
 * 调用接口，解析token
 * @param {*} ctx
 * @param {*} next
 * @returns
 */
const app = (ctx, next) => {
  return new Promise((resolve, reject) => {
    if (ctx.method === 'OPTIONS') {
      reject('过滤option请求')
      return
    }
    if (['/', '/share', '/favicon.ico', '/api/node/share', '/api/node/tabloid', '/tabloid'].indexOf(ctx.path) > -1) {
      resolve('跳过验证')
      return
    }
    request.post({
      url: 'ucenter/user/parseToken',
      header: {'Authorization': ctx.header.authorization},
      done: (res, data) => {
        let user = data.data
        let userId = Number(ctx.query.userId || ctx.request.body.userId)
        if (data.resultCode === 1 && (userId === user.userId || userId === user.subUserId)) {
          user.queryUserId = userId
          resolve(user)
        } else {
          ctx.status = 401
          reject('token失效')
        }
      }
    })
  })
}

module.exports = app
