// pages/index/index.js
Page({

  click(event){
    console.log(event.detail.id)
    console.log("123")
  },

  handleChild(){
    let child = this.selectComponent("#button")
    console.log(child)
    child.open()
  },

  /**
   * 页面的初始数据
   */
  data: {
    tabData : [
      { 
        id : 1,
        title : "讲师介绍"
      },
      {
        id : 2,
        title : "主讲课程"
      },
      {
        id : 3,
        title : "学员评价"
      }
    ],
    activeIndex : 0
  },

  success(event){
    console.log(event.detail.index)
    let index = event.detail.index
    this.setData({
      activeIndex : index
    })

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

  }
})