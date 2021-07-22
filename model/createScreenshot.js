const puppeteer = require('puppeteer');
const { 'iPhone 8 Plus': iphone8Model, 'iPhone X': iphoneXModel, 'iPhone 6': iphone6Model } = require('puppeteer/DeviceDescriptors');
const logger = require('../utils/logger');
const model = {
  'iPhone 8 Plus': iphone8Model,
  'iPhone 6': iphone6Model,
  'iPhone X': iphoneXModel
}

const app = async ({routerName, id, modelType, className}, callback) => {
  // no-sandbox禁用所有通进程类型的沙盒
  // disable-setuid-sandbox禁用setuid沙箱（仅Linux）
  const eleClassName = className || 'body'
  logger.info(`eleClassName: ${eleClassName}`)
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.emulate(model[modelType]);
  await page.goto(`http://127.0.0.1:${APP_PORT}/${routerName}?id=${id}`);
  const element = await page.$(eleClassName);
  const file = await element.screenshot({
      path: `./images/screenshot/${routerName}/${id}.png`
  });
  logger.info(`file: ok`)
  await browser.close();
  return callback && callback()
}

module.exports = app