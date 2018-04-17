var app = getApp()
Page({
  data: {
    phone: '',
    password: '',
    userInfo: {}
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
  // 获取输入账号  
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录  
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else if (this.data.phone == "admin" && this.data.password == "admin") {
      // 这里修改成跳转的页面  
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000,
        success: function () {
           wx.switchTab({
            url: '../index/index'})
        }
      })
    } else {
      wx.showToast({
        title: '登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  }
}) 