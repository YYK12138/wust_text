// miniprogram/pages/overview/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name1:"测试中心1",
    name2: "测试中心2",
    name3: "测试中心3",
    open1:"已开放",
    open2: "已开放",
    open3: "已开放",
    num1:"40",
    num2: "30",
    num3: "50",
    margin1:"30",
    margin2: "12",
    margin3: "14",
   
    imgUrls:[
      'https://ps.ssl.qhmsg.com/sdr/400__/t01eaea410fd7b9a975.jpg',
      'http://file2.youboy.com/e/2015/2/5/69/280676.png',
      'http://img3.makepolo.net/img3/127/748/100017112748_14575983559811.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    test1: "",
    test2: "",
    test3: ""
     
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

  test1: function () {
    wx.navigateTo({
      url: ' ges/overview/test1',
    })
  },

  test2:function () {
      wx.navigateTo({
        url: '/pages/overview/test2',
      })
  },

  test3: function () {
        wx.navigateTo({
          url: '/pages/overview/test3',
        })
  }
})