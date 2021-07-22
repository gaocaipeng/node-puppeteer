// 分享页面
const screenshotShareIndex = require('../view/share/index.js');
const screenshotShare = require('../controller/screenshot/share');
// 每日小报
const screenshotTabloidIndex = require('../view/tabloid/index.js');
const screenshotTabloid = require('../controller/screenshot/tabloid');

const logger = require('../utils/logger.js');

module.exports = async (ctx, next) => {
  try {
    const uri = ctx.path
    const method = ctx.method
    // 页面路由
    if (method === 'GET') {
      // 生成分享页面
      if (uri === '/share' || uri === '/test/share') {
        screenshotShareIndex(ctx, next)
      }
      // 生成每日小报
      if (uri === '/tabloid' || uri === '/test/tabloid') {
        screenshotTabloidIndex(ctx, next)
      }
    }
    if (method === 'POST') {
      // 生成订单分享图片兼容
      if (uri === '/api/node/screenshot/share') {
        ctx.body = await screenshotShare(ctx, next)
      }
      // 生成每日小报
      if (uri === '/api/node/screenshot/tabloid') {
        ctx.body = await screenshotTabloid(ctx, next)
      }
    }
  } catch (err) {
    const errData = err instanceof Error ? err.stack : err
    logger.error('Router Error: ' + JSON.stringify(errData));
    ctx.body = errData;
  }
};