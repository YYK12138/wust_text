const db = wx.cloud.database({});
const recont = db.collection('reservation');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    name:["张三实验1", "张三实验2", "张三实验3", "张三实验4", "张三实验5"],
    user: ["张三1", "张三2", "张三3", "张三4", "张三5"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var i 
    var list1=[]

    //创建一个变量来保存页面page示例中的this，方便后续使用
    var _this=this
    //生成动态数组
    for (i = 0; i < 5; i++) {
      list1.push(i)
    }
    this.setData({
      list:list1
    })
    //删除数组指定元素
    //console.log(list1)
    //list1.splice(1,1)
   // console.log(list1)

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

  bindView2: function (e) {
    var that =this
    var list1=this.data.list
    var name1=this.data.name
    var user1=this.data.user
    wx.showModal({
      title: '预约申请',
      content: '是否批准?',
       success(res) {
        if (res.confirm) {
          list1.pop()//删除list1尾部元素
          name1.splice(e.currentTarget.dataset.id, 1)//删除从id起的1个元素
          user1.splice(e.currentTarget.dataset.id, 1)
          that.setData({
            list:list1,
            name: name1,
            user: user1
          })
        }
      }
    })
  },
  bindView3: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/reserveMgt/refuse/index',
    })
  }
})