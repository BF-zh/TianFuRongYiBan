// app.js
const {
  getSystemInfo,
  getProvince
} = require("./utils/index")
App({
  onLaunch() {
    this.globalData.navigation = getSystemInfo()
    this.globalData.province = getProvince()
  },
  globalData: {
    navigation: null,
    province:null
  }
})