// pages/posts/posts.js
var postData = require('../../data/posts-data')
Page({
  onLoad: function (options) {
    this.setData({
      post_key: postData.postList
    })
  },

  onpostTap:function(event) {
    let postId = event.currentTarget.dataset.postid;
    // console.log(event.currentTarget.dataset.postid)
    wx.navigateTo({
      url: '../posts/post-detail/post-detail?id=' + postId,
      
    })
  }
})