// http://127.0.0.1:3001/api/node/screenshot/share
let share = {
  "insOrderId": "Order21072113583597677511",
  "vehicleLicenceNo": "鲁V1Z002",
  "totalCost": 1663.61,
  "insCompanyName": "太平洋",
  "brandLogo": "https://youjia-image.oss-cn-qingdao.aliyuncs.com/carLogo/carLogo/61aa96e2b0a569f10a3cf21f2e09634c~tplv-resize_100_0.png",
  "trafficIns": {
    "id": 3688352,
    "type": 1,
    "name": "交强险",
    "buyerPartnerId": 91548073,
    "validBeginTime": "2021-07-23 00:00",
    "cost": 760,
    "discount": 0.8
  },
  "vehicleTax": {
    "id": 1827813,
    "buyerPartnerId": 91548073,
    "channel": 1,
    "taxAmount": 420
  },
  "businessIns": {
    "id": 3688353,
    "type": 1,
    "name": "商业险",
    "buyerPartnerId": 91548073,
    "validBeginTime": "2021-07-23 00:00",
    "cost": 483.61,
    "discount": 0.72
  },
  "tableData": [
    {
      "category": 2,
      "index": 6,
      "code": 12200,
      "exempt": false,
      "name": "三者险",
      "desc": "补偿因保险事故，导致第三方人身和财产损失",
      "isOn": "1",
      "extra": 1000000,
      "showExtra": "100万",
      "cost": 483.61,
      "price": 483.61,
      "srcPrice": 0
    }
  ],
  "nonVehiclePlanSnap": {
    "id": 50,
    "prodId": 47,
    "planName": "国家人员意外险计划A",
    "planSpec": "1",
    "planDesc": "意外伤害 10万元\n意外医疗 1万元\n意外伤害含救护车费用 100元\n乘坐非营运机动车 10万元\n乘坐客运机动车 10万元\n乘坐客运轨道交通车辆 20万元\n乘坐客运轮船 20万元\n乘坐客运民航班机 50万元\n意外住院津贴 50元/天\n",
    "brokerage": 2,
    "premiumRate": 0.01,
    "premiumAmount": 50
  }
}

// http://127.0.0.1:3001/api/node/screenshot/tabloid
let arr = {
  "cityName": "上海市",
  "picName": "1111",
  "qrCodeUrl": "https://img1.u-bx.com/qrcode/test/11/5/3e55916bb149443485279e77e2e0f0f46329689485358926204.jpg",
  "tabloid": [
      {
        "name": "新车",
        "compulsoryRate": "1.4",
        "compulsoryPromoteRate": "19",
        "commercialRate": "2.3",
        "commercialPromoteRate": "1",
        "title": "新车"
      },
      {
        "name": "新车",
        "compulsoryRate": "1.4",
        "compulsoryPromoteRate": "19",
        "commercialRate": "2.3",
        "commercialPromoteRate": "1",
        "title": "新车"
      },
      {
        "name": "二手车",
        "compulsoryRate": "3.1",
        "compulsoryPromoteRate": "2",
        "commercialRate": "32.1",
        "commercialPromoteRate": "3",
        "title": "二手车"
      }
  ],
  "time": "2020年05月12日",
  "deduction": "注：以上政策扣税，具体政策以核保为准",
  "user": {
      "headImgUrl": "http://pic4.zhimg.com/50/v2-fde5891065510ef51e4c8dc19f6f3aff_hd.jpg",
      "userName": "汽车保险你就是张三啊张三"
  }
}