// miniprogram/pages/unitManage/addManager/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["0", "1", "2", "3", "4", "5"],
    name: ["姓名", "学院", "手机", "邮箱", "管理设备数", "办公地"]
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
  bindView1: function () {
    wx.showModal({
      title: '提示',
      content: '请联系系统管理员（TEL:123456789）确定操作!',
    })
  },
  bindView2: function () {
    wx.showModal({
      title: '提示',
      content: '确认提交',
      success(res) {
        if (res.confirm) {
          wx.redirectTo({
            udelta: 1
          })
        }
      }
    })
  }
})