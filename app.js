// app.js
const {
  getSystemInfo
} = require("./utils/index")
App({
  onLaunch() {
    this.globalData.navigation = getSystemInfo()
  },
  globalData: {
    navigation: null
  }
})