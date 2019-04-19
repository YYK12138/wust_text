// miniprogram/pages/overview/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:["0","1","2"],
    name: ["测试中心1", "测试中心2", "测试中心3"],
    open: ["已开放", "已开放", "已开放"],
    num:["40","30","50"],
    margin:["30","12","14"],
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

  test1: function (e) {
    wx.navigateTo({
      url: '/pages/overview/test1?id='+ e.currentTarget.dataset.id,
    })
  },

})