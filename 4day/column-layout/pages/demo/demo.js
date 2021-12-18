// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mediaArray : [
      {
        id : 1,
        title : "《如果娱乐圈倒退二十年》1",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 2,
        title : "《如果娱乐圈倒退二十年》2",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 3,
        title : "《如果娱乐圈倒退二十年》3",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 4,
        title : "《如果娱乐圈倒退二十年》4",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      }
      ,{
        id : 5,
        title : "《如果娱乐圈倒退二十年》5",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 6,
        title : "《如果娱乐圈倒退二十年》6",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 7,
        title : "《如果娱乐圈倒退二十年》7",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 8,
        title : "《如果娱乐圈倒退二十年》8",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      },
      {
        id : 9,
        title : "《如果娱乐圈倒退二十年》9",
        imgUrl : "//i0.hdslb.com/bfs/archive/dedd128743192e0aeafd2a111d539ce22761a275.jpg@480w_270h_1c.webp"
      }
    ],
    array : []
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let result = []
    let obj = {left : [],right : []} 
    this.data.mediaArray.map((item,index)=>{
      if(index % 2 !== 1){
        obj.left.push(item)
      }else{
        obj.right.push(item)
      }
    })
    result.push(obj)
    this.setData({
      array : result
    })
    console.log(this.data.array)
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