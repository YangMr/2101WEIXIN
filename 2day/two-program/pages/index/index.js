// pages/index/index.js
Page({

  selectTag(event){

    let i = event.currentTarget.dataset.i

    console.log(i)
    this.setData({
      activeIndex : i
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    msg : "hello world",
    array : [],
    articleList : [
      {
        id : 1,
        title : "习大大访问美国1",
        status : 0
      },
      {
        id : 2,
        title : "习大大访问美国2",
        status : 1
      },
      {
        id : 3,
        title : "习大大访问美国3",
        status : 2
      },
      {
        id : 4,
        title : "习大大访问美国4",
        status : 3
      },
      {
        id : 5,
        title : "习大大访问美国5",
        status : 2
      },
      {
        id : 1,
        title : "习大大访问美国1",
        status : 0
      },
      {
        id : 2,
        title : "习大大访问美国2",
        status : 1
      },
      {
        id : 3,
        title : "习大大访问美国3",
        status : 2
      },
      {
        id : 4,
        title : "习大大访问美国4",
        status : 3
      },
      {
        id : 5,
        title : "习大大访问美国5",
        status : 2
      }
    ],
    labelList : [],
    activeIndex : 0,
    status : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送完请求并且获取到数据了
    const res = [{id:1,name : "jack"},{id:2,name : "rose"}];
    this.setData({
      array : res
    })


    //当页面加载的时候请求数据   wx.request()
    wx.request({
      url : "http://m.mengxuegu.com/api/article/api/category/label/list",
      method : "GET",
      data : {},
      success :(response)=>{
        console.log(response.data.data)
        this.setData({
          labelList : response.data.data
        })
      },
      fail : function (err){
        console.log(err)
      },
      complete : function (){

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

  }
})