// miniprogram/pages/login/index.js
const db=wx.cloud.database()
const userText=db.collection('user')
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    userText.where({
      id:"123",
      password:"123"
    }).get({
      success(res) {
        console.log(res.data)
      }
    })
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

  onLogin:function(e){
    const that = this;
    let first, second;
    var username ,password;
    if (e.detail.value.username.length==0 || e.detail.value.psd.length==0) {
      wx.showModal({
        title: '提示',
        content: '账号和密码不能为空',
      
      })
    }else{
      username = e.detail.value.username
      password = e.detail.value.psd
      userText.where({
        id: username,
        password: password
      }).get({
        success(res) {
          if (res.data.length == 0) {
            wx.showModal({
              title: '提示',
              content: '账号或密码错误',
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
          else {
            app.load = username
            app.password = password
            wx.showToast({
              title: '登录成功!',
              icon: 'success',
              duration: 4000
            })
            wx.reLaunch({
              url: '/pages/user/index'
            })
          }
        }
      })
    }
  },
  addUser:function(e){
   wx.navigateTo({
     url: '/pages/registered/index',
   }) 
  },
  resetPass:function(){
    wx.showModal({
      title: '请联系管理员',
      content: '电话：123456789',
    })
  }

})