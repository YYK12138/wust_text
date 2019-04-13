const db = wx.cloud.database({});
const recont = db.collection('reservation');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //re_list:[]
    name1: "张三实验1",//应该是从数据库调出名字，测试未成功！
    name2: "张三实验2",
    name3: "张三实验3",
    name4: "张三实验1",
    name5: "张三实验2",
    name6: "张三实验3",
    user1: "张三1",
    user2: "张三2",
    user3: "张三3",
    user4: "张三4",
    user5: "张三5",
    user6: "张三6",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建一个变量来保存页面page示例中的this，方便后续使用
    var _this=this;
    
    //添加数据
    /*recont.add({
      data:{
        RID:"1019",
        GID:"1212",
        UID:"1212",
        EID:"101088",
        RTTime:"20190909",
        Amount:"202"
      },
      success:function(res){
        console.log(res._id)
      }
    })*/
    db.collection('reservation').get({
      success:res=>{
        this.setData({
          ne:res.data
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
  bindView1: function () {
    
    wx.navigateTo({
      url: '/pages/reserveMgt/index',
    })
  },

  bindView2: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  bindView3: function () {
    wx.navigateTo({
      url: '/pages/reserveMgt/refuse/index',
    })
  }
})