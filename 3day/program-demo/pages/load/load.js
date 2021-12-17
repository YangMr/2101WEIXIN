// pages/load/load.js
Page({

  playMusic(){
    this.audio.play()
  },

  goForm(){
    wx.navigateTo({
      url : "/pages/form/form"
    })
  },

  pauseMusic(){
    this.audio.pause()
  },

  /**
   * 页面的初始数据
   */
  data: {
    audio : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audio = wx.createInnerAudioContext({useWebAudioImplement : true})
    // this.audio.autoplay = true
    this.audio.src = 'http://music.163.com/song/media/outer/url?id=31877549.mp3'
    this.audio.onPlay(() => {
      console.log('开始播放')
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
    console.log("页面显示")
    this.audio.play()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.audio.pause()
    console.log("页面隐藏")
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