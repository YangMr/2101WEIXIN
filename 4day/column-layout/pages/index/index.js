// pages/index/index.js
Page({

  toPath(event){
    console.log(event)
    let path = event.currentTarget.dataset.path
    if(path){
      wx.navigateTo({
        url: path,
      })
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    buttonArray : [
      {
        name : "columns",
        path : "/pages/columns/columns"
      },
      {
        name : "float",
        path : "/pages/float/float"
      },
      {
        name : "position",
        path : "/pages/position/position"
      },
      {
        name : "flex",
        path : "/pages/flex/flex"
      },
      {
        name : "grid",
        path : "/pages/grid/grid"
      },
      {
        name : "demo",
        path : "/pages/demo/demo"
      }
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

  }
})