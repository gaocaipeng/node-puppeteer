/*
 * @Description: 默认创建文件夹
 * @Author: 高彩鹏
 * @Date: 2019-08-20 15:45:57
 * @,@LastEditors: ,: Please set LastEditors
 * @,@LastEditTime: ,: 2021-02-23 20:21:41
 */
const mkdirSync = require('../utils/mkdir');
global.objectData = {}

const create = async () => {
  mkdirSync('./logs/')
  let arr = ['share', 'tabloid']
  arr.forEach((item) => {
    let filePath = './images/screenshot/' + item + '/'
    mkdirSync(filePath)
    global.objectData[item] = {}
  })
}

module.exports = create