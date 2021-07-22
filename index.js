const http = require('http');
const exec = require('child_process').exec;
const Koa = require('koa');
const app = new Koa();

// 处理文件设置
const koaBody = require('koa-body');
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 20*1024*1024	// 设置上传文件大小最大限制
  }
}));

// 全局注册logger
const logger = require('./utils/logger');
global.logger = logger;
global.shareData = {};

const {port} = require('./config');
const createFile = require('./utils/createFile');

// 全局注册端口
global.APP_PORT = port;
// 全局注册创建文件夹
createFile();

// 处理middleware
const header = require('./middleware/header');
const onerror = require('./middleware/onerror');
const routers = require('./router');
app.use(onerror);
app.use(header);
app.use(routers);

// 监听http和https
http.createServer(app.callback()).listen(APP_PORT);
// 修改日志到log目录
const { dateFormat } = require('./utils/date');
exec(`mv start.log ./logs/start.${dateFormat(Date.now(), 'yyMMddhhmm')}.log && touch start.log`, (err, stdout, stderr) => {
  if (err) logger.error(err)
  logger.info(`listen: ${APP_PORT}`)
})






