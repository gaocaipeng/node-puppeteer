const art = require('art-template');
const path = require('path');
const interceptName = require('../../utils/interceptRouterName')
const app = async (ctx, next) => {
  try {
    // 获取路由名字
    let routerName = await interceptName(ctx.path)
    // 获取缓存里的数据
    const data = global.objectData[routerName] || {}
    await next();
    let template = path.resolve(__dirname, './index.art');
    ctx.body = art(template, data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = app
