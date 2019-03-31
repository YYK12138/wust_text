// miniprogram/pages/user/perfectUser/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['管理学院', '材冶学院','计算机学院','医学院','信息学院'], ['信息管理与信息系统', '电子商务管理', '工程管理', '工商管理', '营销管理']],
    multiIndex: [0, 0],
    items: [
      { name: 'USA', value: '老师' },
      { name: 'CHN', value: '学生', checked: 'true' },
    ]
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
  bindMultiPickerChange:function(e){
    this.setData({
      multiIndex: [e.detail.value[0], e.detail.value[1]]
    })
  },
  bindMultiPickerColumnChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail)
    console.log('picker发送选择改变，携带值为', e.detail.column)
    if(e.detail.column==0){
      switch(e.detail.value){
        case 0: this.setData({
          multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['信息管理与信息系统', '电子商务管理', '工程管理', '工商管理', '营销管理']],
          multiIndex: [0, 0]
        })
          break
        case 1: this.setData({
          multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['材料工程', '化学工程', '工业冶金']],
          multiIndex: [1, 0]
        })
         break
        case 2: this.setData({
          multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['计算机科学与技术', '软件工程', '信息安全']],
          multiIndex: [2, 0]
        })
          break
        case 3: this.setData({
          multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['护理学', '临床医学', '中医学']],
          multiIndex: [3, 0]
        })
          break
        case 4: this.setData({
          multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['信息工程', '电子信息', '网路信息技术']],
          multiIndex: [4, 0]
        })
          break
      }
    }
  },
  radioChange:function(e){

  },
  authentication:function(e){
    wx.showToast({
      title: '您的申请已提交管理员审核！',
      duration:2000
    })
    wx.reLaunch({
      url: '/pages/user/index',
    })
  }

})