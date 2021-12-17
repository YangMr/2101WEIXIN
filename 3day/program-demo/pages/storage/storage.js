// pages/storage/storage.js
Page({
  /**
   *
   * @param e
   */
  getInputValue(e){
    let arr = []
    if(!e.detail.value) return

    arr.push(e.detail.value)


    if(wx.getStorageSync("history")==""){
      wx.setStorageSync("history",arr)
    }else{
      let newArr = wx.getStorageSync("history")

      newArr.push(e.detail.value)

      wx.setStorageSync("history",newArr)
    }

  },

  /**
   * 页面的初始数据
   */
  data: {
    history : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getStorageSync("history")=="") return;
    let history = wx.getStorageSync("history")
    this.setData({history})
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