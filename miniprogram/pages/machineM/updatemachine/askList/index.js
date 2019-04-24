// miniprogram/pages/machineM/updatemachine/askList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    name: ["实验一", "实验二", "实验三", "实验四", "实验五"],
    text: ["实验一是氧化实验", "实验二是氧化实验", "实验三是氧化实验", "实验四是氧化实验", "实验五是氧化实验"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.num)
    var list1=[]
    var name1=[]
    var text1=[]
    var i
    for(i=0;i<=options.num;i++){
      list1.push(i)
    }
    this.setData({
      list:list1
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

  bind1:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/machineM/updatemachine/lookAsk/index?id='+e.currentTarget.dataset.id,
    })
  },

  bind2: function (e) {
    wx.navigateTo({
      url: '/pages/machineM/updatemachine/addAsk/index'
    })
  }

})