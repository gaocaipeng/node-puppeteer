# html变成图片

> 通过传数据通过template模板生成图片截图返回

## 编译

``` bash
# 安装依赖
npm install

# 启动端口在index.js(入口文件)的可以配置, 并后台运行
npm start

# 停止服务
npm stop

# 重新启动服务
npm restart

```

## 对外暴露接口

#### 生成分享页面 [api/node/share](http://127.0.0.1:3000/api/node/share)

#### 生成每日小报 [api/node/tabloid](http://127.0.0.1:3000/api/node/tabloid)


## Project Structure
```bash
.
├── config                         # 配置文件
│   ├── db.js
│   └── index.js
├── controller                     # controller 方法
│   ├── uploadScreenshot.js        # 图片生成上传公共方法
│   ├── share.js                   # 生成分享页面
│   └── tabloid.js                 # 生成每日小报
├── middleware                     # 公共请求部分
│   ├── header.js                  # 请求头配置
│   └── onerror.js                 # 错误捕获
├── model                          # 请求数据的文件目录
│   ├── parseToken.js              # 解析token（暂时没用到，已经注释）
│   ├── uploadOss.js               # upload上传图片到阿里云oss
│   └── createScreenshot           # 无痕浏览器配置
├── router                         # 路由目录
│   └── index.js                   # 路由配置
├── utils/                         # 常用的工具方法
├── view
│   ├── share                      # 生成分享页面template模板
│   └── tabloid                    #  生成每日小报template模板
├── package.json                   # package，npm配置
├── start.log                      # 执行日志
├── exclude.list                   # 上传github过滤文件
├── index.js                       # 入口文件
├── .gitignore                     # git排除目录规则
├── .editorconfig                  # 编辑器统一配置：缩进，空格/制表符
├── README.md                      # 说明文档
└── package-lock.json              # npm模块锁
```
