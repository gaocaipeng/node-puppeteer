/*
 * @Description: 公共http请求封装
 * @Author: 高彩鹏
 * @Date: 2019-08-26 11:40:49
 * @LastEditors: 高彩鹏
 * @LastEditTime: 2020-09-10 16:01:41
 */
const axios = require('axios');

// 请求接口的链接
const baseDomin = (app) => {
  let wechatUrl = {
    wechat: 'https://api.weixin.qq.com/',
    wechatWork: 'https://qyapi.weixin.qq.com/cgi-bin/'
  }
  return wechatUrl[app]
}
module.exports = {
  _getHeaders (head) {
    const header = Object.assign({
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN'
    }, head)
    return header
  },
  _checkParams (params) {
    if (!params || !params.url) {
      throw new Error('request\'url is missed!')
    }
    return this
  },
  _defaultParamsCallback (response, params) {
    response.then(function (res) {
      params.done && params.done(res.data)
    }).catch(function (err) {
      if (!err) {
        params.fail && params.fail('can not catch error!')
      } else {
        if (err.response) {
          if (err.response.status === 401) {
            params.fail && params.fail(err)
            return response
          }
          params.fail && params.fail(err)
        } else if (err.message) {
          params.fail && params.fail(err)
        }
      }
    })
    return response
  },
  _request ({ url, method, params = {}, data = {}, baseURL, header }) {
    const headers = this._getHeaders(header)
    return axios.request({
      method,
      baseURL,
      url,
      params,
      data,
      headers,
      validateStatus: (status) => {
        return status >= 200 && status <= 500 && status !== 404 && status !== 401
      }
    })
  },
  get (params) {
    const res = this._checkParams(params)._request({
      method: 'get',
      url: params.url,
      params: params.data,
      header: params.header,
      baseURL: baseDomin(params.app)
    })
    return this._defaultParamsCallback(res, params)
  },
  post (params) {
    const res = this._checkParams(params)._request({
      method: 'post',
      url: params.url,
      data: params.data,
      header: params.header,
      baseURL: baseDomin(params.app)
    })
    return this._defaultParamsCallback(res, params)
  }
}

