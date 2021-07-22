/*
 * @Description: 获取最后一个路由名
 * @param [FilePath] path
 * @Author: 高彩鹏
 * @Date: 2019-08-20 15:45:57
 * @LastEditors: 高彩鹏
 * @LastEditTime: 2020-08-26 10:59:47
 */

const interceptRouterName = async (path) => {
  const index = path.lastIndexOf('/');
  // 取最后一个路由
  const name = path.substring(index + 1, path.length);
  const routerName = name
  return routerName
}
module.exports = interceptRouterName