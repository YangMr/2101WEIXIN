// pages/wxml/wxml.js
Page({
  //改变message
  changeMessage(){
    this.setData({
      message : "hello 积云"
    })
  },
  //改变宽度
  changeWidth(){
    this.setData({
      indexWidth : 300
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    message : "hello weixin",
    attr : "home",
    className : "active",
    bgPrimary : "bgPrimary",
    indexWidth : 200
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