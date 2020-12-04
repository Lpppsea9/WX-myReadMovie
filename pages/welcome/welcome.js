// pages/welcome/welcome.js
Page({
  onTap:function() {
    wx.redirectTo({
      url: '../posts/posts',
    })
  }
})