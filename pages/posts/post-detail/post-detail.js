// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.postId)
  },

})