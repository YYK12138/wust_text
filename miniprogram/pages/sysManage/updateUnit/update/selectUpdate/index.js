// miniprogram/pages/sysManage/updateUnit/update/selectUpdate/index.js
const db = wx.cloud.database()
var _id1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TID:"0",
    text:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var text1=[]
    this.setData({
      TID:options.id
    })
    db.collection('testUnit').where({
      TID: this.data.TID
    })
    .get({
      success(res) {
        _id1 = res.data[0]._id
        text1.push(res.data[0].Tname)
        text1.push(res.data[0].Aname)
        text1.push(res.data[0].AID)
        text1.push(res.data[0].Aphone)
        text1.push(res.data[0].Position)
        that.setData({
          text:text1
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

  updateUnit:function(e){
    var tName1
    var tName=e.detail.value.tname
    var aNmae = e.detail.value.aname
    var aID = e.detail.value.aid
    var aPhone = e.detail.value.aphone
    var position = e.detail.value.position
    if (tName.length == 0 || aNmae.length == 0 || aID.length == 0 || aPhone.length == 0 || position.length == 0){
      wx.showToast({
        title: '以上内容不能为空',
      })
    } else {
      db.collection('testUnit').where({
        TID:this.data.TID
      })
        .get({
          success(res) {
          tName1=res.data[0].Tname
          var res1=res
           wx.showModal({
             title: '提示',
             content: '确认提交更改?',
             success(res){
               if (res.confirm) {
                 db.collection('testUnit').where({
                   Tname: tName
                 })
                  .get({
                   success(res) {
                    if(res.data.length==0||tName==tName1){
                      db.collection('testUnit').doc(res1.data[0]._id).update({
                        data: {
                          Tname: tName,
                          Aname: aNmae,
                          AID: aID,
                          Aphone: aPhone,
                          Position: position
                        },
                        success(res) {
                          wx.showToast({
                            title: '操作成功!',
                          })
                          wx.navigateBack({
                            delta: 1
                          })
                        }
                      })
                    }
                    else{
                      wx.showModal({
                        title: '提示',
                        content: '已存在相同名称的测试单位!',
                      })
                    }
                   }
                  })
                
               }
             }
           })
          }
        })
    }
  },

  deleteUnit:function(e){
    wx.showModal({
      title: '提示',
      content: '是否删除该测试单位？',
      success(res){
        if(res.confirm){
          db.collection('testUnit').doc(_id1).remove({
            success(res) {
              wx.showToast({
                title: '已成功删除该测试单位!',
                duration:2000
              })
              wx.navigateBack({
                url: '/pages/sysManage/updateUnit/index',
              })
            }
          })
        }
      }
    })
  }

})