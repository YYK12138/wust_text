Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["0", "1", "2", "3", "4"],
    name: ["设备名称", "负责人姓名", "负责人手机", "设备信息", "可完成实验数"],
    text:["设备1","YK123","123456789","xx牌xx型号","5"]
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
    wx.navigateTo({
      url: '/pages/machineM/updatemachine/askList/index?num='+this.data.list[4],
    })
  },
  bindView2:function(){
    wx.showModal({
      title: '提示',
      content: '设置开放时间',
      success(res) {
        if (res.confirm) {
          wx.navigateBack({
            url: '/pages/machineM/machineM'
          })
        }
      }
    })  
  }


})