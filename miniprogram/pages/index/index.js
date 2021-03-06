var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://2c.zol-img.com.cn/product/100/472/ceMlIL7Ki7utk.jpg',
      'http://2e.zol-img.com.cn/product/100_500x2000/916/cefFOl4t2vWDc.jpg',
      'https://www.jiqizhixin.com/wp-content/uploads/2015/10/100475_web.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    title:["实验室设备使用规范","实验室物品赔偿方案","实验室使用费用计算方法","实验室主要负责热联系方式","实验室预约系统小程序上线"],
    date: ["2019/3/31","2019/3/27","2019/3/14","2019/2/24","2019/2/1"],
    text:["使用规范","赔偿方案","计费方式","联系方式","小程序上线"],
    list:["0","1","2","3","4"]
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

  bindView1:function(){
    if(app.load=="登录/注册"){
      wx.showToast({
        title: '请先登录账户！',
        icon:'none'
      })
    }else{
      if (app.permissions=="1")
         wx.navigateTo({
          url: '/pages/sysManage/updateUnit/index',
       })
      if (app.permissions=="2"){
        wx.navigateTo({
          url: '/pages/unitManage/index',
        })
      }
      if (app.permissions=="3"){
        wx.navigateTo({
          url: '/pages/machineM/machineM',
        })  
      }
    } 
  },
  
  bindView2:function(){
    if (app.load == "登录/注册") {
      wx.showToast({
        title: '请先登录账户！',
        icon: 'none'
      })
    } else{
       wx.navigateTo({
        url: '/pages/reserveMgt/index',
      })
    }
  },

  bindView3:function(){
    if (app.load == "登录/注册") {
      wx.showToast({
        title: '请先登录账户！',
        icon: 'none'
      })
    } else{
      wx.navigateTo({
        url: '/pages/fiManage/RAForm/RAForm',
      })
    }
  },

  getText:function(e){

    wx.showModal({
      title: this.data.title[e.currentTarget.dataset.id],
      content: this.data.text[e.currentTarget.dataset.id],
    })
  }

})