// miniprogram/pages/unitManage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equip: ["管理员1", "管理员2", "管理员3", "管理员4", "管理员5", "管理员6", "管理员7", "管理员8", "管理员9", "管理员10"],
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var i
    var list1 = []
    for (i = 0; i < 8; i++) {
      list1.push(i)
    }
    this.setData({
      list: list1
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
  bindView1: function (e) {
    wx.navigateTo({
      url: '/pages/unitManage/addManager/index',
    })
  },

  bindView2: function (e) {
    var that = this
    var list1=this.data.list
    var equip1=this.data.equip
    console.log(e.currentTarget.dataset.id)
    wx.showModal({
      title: '提示',
      content: '确认删除管理员？',
      success(res) {
        if (res.confirm) {
          list1.pop()//删除list1尾部元素
          equip1.splice(e.currentTarget.dataset.id, 1)//删除从id起的1个元素
          that.setData({
            list: list1,
            equip:equip1
          })
        }
      }
    })
  }
})