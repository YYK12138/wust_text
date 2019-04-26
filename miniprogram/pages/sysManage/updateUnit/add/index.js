// miniprogram/pages/sysManage/updateUnit/add/index.js
const db = wx.cloud.database()
var number1
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('testUnit').where({
      //_openid: 'o-euW5HJd4-TLZhvWktMfy0NTf34',
    })
      .get({
        success(res) {
          number1 = parseInt(res.data[res.data.length - 1].TID)+1
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
  sunmit:function(e){
    var tname1=e.detail.value.tname
    var aname1 = e.detail.value.aname
    var aid1 = e.detail.value.aid
    var aphone1 = e.detail.value.aphone
    var position1 = e.detail.value.position
    if(tname1.length==0||aname1.length==0||aid1.length==0||aphone1.length==0||position1.length==0){
      wx.showModal({
        title: '提示',
        content: '以上内容不能为空!',
      })
    }else{
      db.collection('testUnit').where({
        Tname: tname1
      })
        .get({
          success(res) {
            if (res.data.length == 0) {
              db.collection('testUnit').add({
                data: {
                  TID:number1+"",
                  AID:aid1,
                  Aname:aname1,
                  Aphone:aphone1,
                  Position:position1,
                  Tname:tname1,
                  Tstate:'true',
                },
                success(res) {
                  wx.showModal({
                    title: '提示',
                    content: '添加成功!',
                    success(res){
                      if(res.confirm)
                        wx.navigateBack({
                          delta: 1
                        })
                      else
                        wx.navigateBack({
                          delta: 1
                        })
                    }
                  })
                }
              })
            } else {
              wx.showModal({
                title: '提示',
                content: '已存在相同名称的测试单位!',
              })
            }
          }
        })
    }
  },
  returnPage:function(e){
    wx.navigateBack({
      delta: 1
    })
  }
})