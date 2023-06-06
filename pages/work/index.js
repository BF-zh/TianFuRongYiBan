// pages/work/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    keyword:"",
    tabs:{
      activeId:0,
      tab:[
        {title:"市级部门",id:0},
        {title:"区县部门",id:1}
      ]
    },
    list1:[
      "成都市民族宗教事务局",
      "成都市住房和城乡建设局",
      "成都市明证局",
      "成都市卫生健康委员会",
      "成都市科学技术局",
      "成都市城市管理委员会",
      "成都市水务局",
      "成都市经济和信息自化局",
      "成都市规划和自然资源局",
      "成都市人力资源和社会保障局",
      "成都市财政局",
      "成都市教育局",
      "成都市生态环境局",
      "成都市发展和改革委员会",
      "成都市公安局",
      "成都市气象局",
    ],
    list2:[
      "天府新区",
      "东部新区",
      "高新区",
      "锦江区",
      "青羊区",
      "武侯区",
      "成华区",
      "龙泉驿区",
      "青白江区",
      "新都区",
      "温江区",
      "双流区",
      "郫都区",
      "新津区",
      "简阳市",
    ]
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
  },
  onChange({detail}) {
    this.setData({active:detail.index})
  },
})