/*
 * @Description: 循环创建文件夹
 * @param [FilePath] filePath
 * @Author: 高彩鹏
 * @Date: 2019-08-20 15:45:57
 * @LastEditors: 高彩鹏
 * @LastEditTime: 2020-08-26 11:00:56
 */
const fs = require('fs');
const app = (filePath) => {
  let arr = filePath.split('/')
  let path = ''
  for (let i = 0; i < arr.length - 1; i++) {
    path += arr[i] + '/'
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }
}

module.exports = app