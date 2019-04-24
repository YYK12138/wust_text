// miniprogram/pages/machineM/updatemachine/lookAsk/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:["实验一"],
    text:["实验一条件有真空环境，温度>600度，需要用无氧水"],
    value:["300"]
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

  bind1:function(e){
    wx.showModal({
      title: '提示',
      content: '确认删除该实验？',
      success(res) {
        if (res.confirm) {
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  },

  bind2:function(e){
    wx.showModal({
      title: '提示',
      content: '确认提交？',
      success(res){
        if(res.confirm){
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  }

})