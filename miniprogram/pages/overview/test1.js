// miniprogram/pages/overview/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     id:"",
    title: ["本实验中心是1号实验中心", "本实验中心是2号实验中心", "本实验中心是3号实验中心"],
    text: ["本实验中心可以完成多数物理化学实验，拥有世界最先进的实验设备，实验室全天开放，可随时预约", "本实验中心可以完成多数物理化学实验，拥有世界最先进的实验设备，实验室全天开放，可随时预约", "本实验中心可以完成多数物理化学实验，拥有世界最先进的实验设备，实验室全天开放，可随时预约"],
    state: ["40","30","50"],
    state2:["30","12","14"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
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

  }
})