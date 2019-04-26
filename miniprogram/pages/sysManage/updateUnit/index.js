// miniprogram/pages/sysManage/updateUnit/index.js
const db = wx.cloud.database()
var items1 = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    unit:[],
    items:[]
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
    var that = this
    var i
    var list1 = []
    var unit1 = []
    items1=[]
    db.collection('testUnit').where({
      _openid: 'o-euW5HJd4-TLZhvWktMfy0NTf34',
    })
      .get({
        success(res) {
          for (i = 0; i < res.data.length; i++) {
            list1.push(i)
          }
          for (i = 0; i < res.data.length; i++) {
            unit1.push(res.data[i].Tname)
          }
          that.setData({
            list: list1,
            unit: unit1
          })
        }
      })
    db.collection('testUnit').get({
      success(res) {
        for (i = 0; i < res.data.length; i++) {
          items1.push(res.data[i].TID)
        }
        that.setData({
          items:items1
        })
      }
    })
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
  },

  bindView3: function (e) {
    var i = parseInt(e.target.dataset.id )
    wx.navigateTo({
      url: '/pages/sysManage/updateUnit/update/selectUpdate/index?id=' + i,
    })
  },
})