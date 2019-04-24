// miniprogram/pages/registered/index.js
const db = wx.cloud.database()
const user = db.collection('user')
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
  onRegistered:function(e){
    var number,phone,code,psd,psd2
    number = e.detail.value.college
    phone = e.detail.value.phone
    code = e.detail.value.code
    psd = e.detail.value.psd
    psd2 = e.detail.value.psd2
  
    if (number.length == 0||psd.length==0) {
        wx.showModal({
          title: '提示',
          content: '以上内容不能为空',
        })
    }
    else{
      if (psd == psd2){
        user.where({
          id: number
        }).get({
          success(res) {
            if (res.data.length == 1) {
              wx.showModal({
                title: '提示',
                content: '用户名已被注册',
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  }
                }
              })
            }else{
              db.collection('user').add({
                data: {
                  password: psd,
                  id: number,
                  permissions:"0",
                  num:"null",
                  name:"null",
                  identity:"null",
                  phone:"null",
                  professional:"null"
                },
                success(res) {
                  wx.showModal({
                    title: '提示',
                    content: '注册成功',
                    success(res) {
                      if (res.confirm) {
                        wx.reLaunch({
                          url: '/pages/login/index',
                        })
                      } else if (res.cancel) {
                        wx.reLaunch({
                          url: '/pages/login/index',
                        })
                      }
                    }
                  })
                }
              })
            }
          }
        })
      }
      else{
        wx.showModal({
          title: '提示',
          content: '两次密码不同',
        })
      }
    }
  },
  onGetCode:function(){
    
  }

})