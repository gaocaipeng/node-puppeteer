const art = require('art-template');
const path = require('path');
const interceptName = require('../../utils/interceptRouterName')
const app = async (ctx, next) => {
  try {
    // 获取路由名字
    let routerName = await interceptName(ctx.path)
    // 获取缓存里的数据
    const data = global.objectData[routerName] || {}
    data.tableData.forEach(item => {
      if (item.name === "玻璃险") {
        item.extra = item.extra === 1 ? '国产' : item.extra === 1 ? '进口' : ''
      }
      if (item.name === "涉水险") {
        item.extra = ''
      }
      if (item.name === "指定专修险") {
        item.extra = ''
      }
    })
    if (/\./.test(data.trafficIns.cost)) {
      let cost = String(data.trafficIns.cost)
      data.trafficIns.costLeft = cost.split('.')[0]
      data.trafficIns.costRight = cost.split('.')[1]
    }
    if (/\./.test(data.businessIns.cost)) {
      let cost = String(data.businessIns.cost)
      data.businessIns.costLeft = cost.split('.')[0]
      data.businessIns.costRight = cost.split('.')[1]
    }
    data.nonVehiclePlanSnap.validBeginTime = data.businessIns.validBeginTime || data.trafficIns.validBeginTime
    if (data.nonVehiclePlanSnap) {
      data.nonVehiclePlanSnap.planDesc = data.nonVehiclePlanSnap.planDesc.replace(/\n/g, '<br/>')
    }
    await next();
    let template = path.resolve(__dirname, './index.art');
    ctx.body = art(template, data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = app
