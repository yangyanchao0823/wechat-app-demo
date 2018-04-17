var app = getApp()
Page({
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [{
      url:'../jilu/jilu',
      icon: '../../imgs/iconfont-dingdan.png',
      text: '我的交易',
      isunread: false,
      unreadNum: 2
    }, {
      url: '',
      bindtap:'calling',
      icon: '../../imgs/iconfont-help.png',
      text: '联系客服：(9:00-18:00)'
    }]
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '10086',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})