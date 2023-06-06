// pages/Convenience/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:"",
    tabs:{
      activeId:0,
      tab:[
        {title:"社会保障",id:0},
        {title:"房管服务",id:1},
        {title:"不动产等级",id:3},
        {title:"公积金",id:4},
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleChange({currentTarget}){
    const {item} = currentTarget.dataset
    this.setData({"tabs.activeId":item.id})
    console.log(item);
  }
})