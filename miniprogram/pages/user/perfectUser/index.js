// miniprogram/pages/user/perfectUser/index.js
const db = wx.cloud.database()
var app = getApp()
var value=0
var column=0
var identy="学生"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [['管理学院', '材冶学院','计算机学院','医学院','信息学院'], ['信息管理与信息系统', '电子商务管理', '工程管理', '工商管理', '营销管理']],
    multiIndex: [0, 0],
    items: [
      { name: 'teacher', value: '老师'},
      { name: 'student', value: '学生', checked: 'true' },
    ],
    num:"",
    name:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    db.collection('user').where({
      id: app.load
    })
      .get({
        success(res) {
          console.log(res.data[0].column)
          if (res.data[0].num!="null")
          that.setData({
            num: res.data[0].num,
            name: res.data[0].name,
            phone: res.data[0].phone,
            multiIndex: [res.data[0].column, res.data[0].value]
          })
          if (res.data[0].identity=="teacher"){
            that.setData({
              items: [
                { name: 'teacher', value: '老师', checked: 'true' },
                { name: 'student', value: '学生' },
              ]
            })
          }
          if (res.data[0].column == "1") {
            that.setData({
              multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['材料工程', '化学工程', '工业冶金']]
            })
          } 
          if (res.data[0].column=="2"){
            that.setData({
              multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['计算机科学与技术', '软件工程', '信息安全']]
            })
          }
          if (res.data[0].column == "3") {
            that.setData({
              multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['护理学', '临床医学', '中医学']]
            })
          } 
          if (res.data[0].column == "4") {
            that.setData({
              multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['信息工程', '电子信息', '网络信息技术']]
            })
          }  
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
  bindMultiPickerChange:function(e){
    this.setData({
      multiIndex: [e.detail.value[0], e.detail.value[1]]
    })
  },
  bindMultiPickerColumnChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail)
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
          multiArray: [['管理学院', '材冶学院', '计算机学院', '医学院', '信息学院'], ['信息工程', '电子信息', '网络信息技术']],
          multiIndex: [4, 0]
        })
          break
      }
    }
  },
  radioChange:function(e){
    identy=e.detail.value
  },
  authentication:function(e){
    var that=this
    column = [this.data.multiIndex[0]]
    value = [this.data.multiIndex[1]]
    var profession = this.data.multiArray[0][column] + "-" + this.data.multiArray[1][value]
    if (e.detail.value.num.length == 0 || e.detail.value.name.length == 0 || e.detail.value.phone.length == 0){
      wx.showModal({
        title: '提示',
        content: '以上内容不能为空！',
      })
    }else{
      db.collection('user').where({
        id:app.load
      })
        .get({
          success(res) {
            db.collection('user').doc(res.data[0]._id).update({
              data: {
                num: e.detail.value.num,
                name: e.detail.value.name,
                identity:identy,
                phone: e.detail.value.phone,
                professional:profession,
                column:column,
                value:value
              },
              success(res) {
                console.log("成功")
              }
            })
          }
        })
      wx.showToast({
        title: '成功绑定!',
        duration: 2000
      })
      wx.reLaunch({
        url: '/pages/user/index',
      })
    }
    
  }

})