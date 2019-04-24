// miniprogram/pages/user/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    load1:"",
    bind1:"",
    password:"",
    bind2:"bindView2"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
       load1:app.load,
       password:app.password
    })
    if(app.load=="登录/注册"){
        this.setData({
         bind1:"bindView1"
        })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindView1: function () {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  bindView2:function(){
    if(app.load=="登录/注册"){
      wx.showToast({
        title: '请先登录账号!',
        icon: 'none',
        duration: 2000
      })
    } else{   
        wx.showModal({
          title: '提示',
          content: '确定退出登录?',
          success(res){
            if(res.confirm){
              app.load = "登录/注册"
              app.password = ""
              app.permissions="0"
              wx.reLaunch({
                url: '/pages/user/index'
              })
            }
          }
        })
    }
  },
  perfectUser:function(){
    if (app.load == "登录/注册") {
      wx.showModal({
        title: '提示',
        content: '请先登录账户！',
      })
    }else{
      wx.navigateTo({
        url: '/pages/user/perfectUser/index',
      })
    }
  },
  feedBack:function(){
    if (app.load == "登录/注册") {
      wx.showModal({
        title: '提示',
        content: '请先登录账户！',
      })
    }else{
      wx.navigateTo({
        url: '/pages/user/feedBack/index',
      })
    }
  }
})