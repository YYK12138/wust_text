// miniprogram/pages/sysManage/updateUnit/update/selectUpdate/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TID:"0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      TID:options.id
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

  updateUnit:function(e){
t

  },

  updateUnit:function(e){
    var tName=e.detail.value.tname
    var aNmae = e.detail.value.aname
    var aID = e.detail.value.aid
    var aPhone = e.detail.value.aphone
    var position = e.detail.value.position
    if (tName.length == 0 || aNmae.length == 0 || aID.length == 0 || aPhone.length == 0 || position.length == 0){
      wx.showToast({
        title: '以上内容不能为空',
      })
    }else{
      db.collection('testUnit').where({
        TID:this.data.TID
      })
        .get({
          success(res) {
            db.collection('testUnit').doc(res.data[0]._id).update({
              data: {
                Tname:tName,
                Aname:aName,
                AID:aID,
                Aphone:aPhone,
                Position:position
              },
              success(res) {
                console.log(res.data)
              }
            })
          }
        })
    }

  }
})