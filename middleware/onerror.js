
module.exports = async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.body = { code: 0, status: 404, msg: '未找到接口，请检查请求地址是否正确' };
    }
    if (ctx.status === 403) {
      ctx.body = { code: 0, status: 403, msg: '您没有权限访问该接口' };
    }
    if (ctx.status === 401) {
      ctx.body = { code: 0, status: 401, msg: 'token失效了' };
    }
  } catch (err) {
    const errData = err instanceof Error ? err.stack : err
    logger.error('Catch Error: ' + errData);
    ctx.body = { code: 0, status: 500, msg: errData};
  }
};
