const logger = require("../utils/logger");

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
};
module.exports = async (ctx, next) => {
  // 健康检查
  if (ctx.path === '/api/node/heart') {
    ctx.body = 'ok'
    return
  }
  let {ip, ips, body} = ctx.request
  logger.info(`${ctx.url}:${ctx.method === 'POST' ? JSON.stringify(body) : ''}, user IP: ${ip}, ${JSON.stringify(ips)}, ${ctx.headers['x-forwarded-for']}`);
  ctx.set(headers);
  // ctx.user = await parseToken(ctx)
  // logger.info('token解析到的用户信息: ' + JSON.stringify(ctx.user))
  await next();
};
