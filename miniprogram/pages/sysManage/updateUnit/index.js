// miniprogram/pages/sysManage/updateUnit/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unit1:"测试单位1",
    unit2: "测试单位2",
    unit3: "测试单位3",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    db.collection('testUnit').where({
      _openid: 'o-euW5HJd4-TLZhvWktMfy0NTf34',
    })
      .get({
        success(res) {
          console.log(res.data)
          that.setData({
            unit1: res.data[0].Tname,
            unit2: res.data[1].Tname,
            unit3: res.data[2].Tname
          })
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

  bindView1:function(){
    wx.navigateTo({
      url: '/pages/sysManage/updateUnit/add/index',
    })
  },

  bindView2:function(){
    wx.navigateTo({
      url: '/pages/sysManage/updateUnit/update/index',
    })
  }
})