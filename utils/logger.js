/*
 * @Description: 注册日志
 * @param [String|Number] val
 * @Author: 高彩鹏
 * @Date: 2019-08-20 15:45:57
 * @LastEditors: 高彩鹏
 * @LastEditTime: 2021-01-26 19:19:57
 */
const fs = require('fs')
const logger = require('tracer').console({
  dateformat: 'yyyy-mm-dd HH:MM:ss.L',
  transport: function (data) {
    fs.appendFile('./start.log', data.rawoutput + '\n', (err) => {
      if (err) throw err;
    });
    // var stream = fs.appendFile("./start.log", {
    //   flags: "a",
    //   encoding: "utf8",
    //   mode: 0666
    // }).write(data.rawoutput + "\n");
  }
});

module.exports = logger;
