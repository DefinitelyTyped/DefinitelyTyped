// call with callback
wx.chooseImage({
  success(res) {
    // $ExpectType ChooseImageSuccessCallbackResult
    res
  },
})
wx.canvasToTempFilePath({
  canvasId: '',
  success(res) {
    // $ExpectType CanvasToTempFilePathSuccessCallbackResult
    res
  },
})
wx.stopAccelerometer({
  fail(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})
wx.getClipboardData({
  success(res) {
    // $ExpectType GetClipboardDataSuccessCallbackOption
    res
  },
})
wx.stopCompass({
  complete(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})
wx.addPhoneContact({
  firstName: '',
  complete(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})
wx.startLocalServiceDiscovery({
  serviceType: '',
  success(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})
wx.getSystemInfo({
  success(res) {
    // $ExpectType SystemInfo
    res
  },
})
wx.chooseLocation({
  success(res) {
    // $ExpectType ChooseLocationSuccessCallbackResult
    res
  },
})
wx.previewImage({
  urls: [],
  success(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})
wx.saveVideoToPhotosAlbum({
  filePath: '',
  success(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})
wx.removeSavedFile({
  filePath: '',
  success(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})

wx.createBLEConnection({
  deviceId: '',
  success(res) {
    // $ExpectType BluetoothError
    res
  },
})

wx.startBluetoothDevicesDiscovery({
  success(res) {
    // $ExpectType BluetoothError
    res
  },
})
wx.hideShareMenu({
  success(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})

wx.checkIsSupportSoterAuthentication({
  success(res) {
    // $ExpectType CheckIsSupportSoterAuthenticationSuccessCallbackResult
    res
  },
})
wx.navigateBack({
  success(res) {
    // $ExpectType GeneralCallbackResult
    res
  },
})

// call with Promise.prototype.then
wx.chooseImage({}).then(res => {
  // $ExpectType ChooseImageSuccessCallbackResult
  res
})
wx.canvasToTempFilePath({
  canvasId: '',
}).then(res => {
  // $ExpectType CanvasToTempFilePathSuccessCallbackResult
  res
})
wx.stopAccelerometer().then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.getClipboardData().then(res => {
  // $ExpectType GetClipboardDataSuccessCallbackOption
  res
})
wx.stopCompass().then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.addPhoneContact({
  firstName: '',
}).then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.startLocalServiceDiscovery({ serviceType: '' }).then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.getSystemInfo().then(res => {
  // $ExpectType SystemInfo
  res
})
wx.chooseLocation({}).then(res => {
  // $ExpectType ChooseLocationSuccessCallbackResult
  res
})
wx.previewImage({ urls: [] }).then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.saveVideoToPhotosAlbum({ filePath: '' }).then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.removeSavedFile({ filePath: '' }).then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.createBLEConnection({ deviceId: '' }).then(res => {
  // $ExpectType BluetoothError
  res
})
wx.startBluetoothDevicesDiscovery({}).then(res => {
  // $ExpectType BluetoothError
  res
})
wx.hideShareMenu().then(res => {
  // $ExpectType GeneralCallbackResult
  res
})
wx.checkIsSupportSoterAuthentication().then(res => {
  // $ExpectType CheckIsSupportSoterAuthenticationSuccessCallbackResult
  res
})
wx.navigateBack().then(res => {
  // $ExpectType GeneralCallbackResult
  res
});

// call with await
async () => {
  // $ExpectType ChooseImageSuccessCallbackResult
  await wx.chooseImage({})
  // $ExpectType CanvasToTempFilePathSuccessCallbackResult
  await wx.canvasToTempFilePath({ canvasId: '' })
  // $ExpectType GeneralCallbackResult
  await wx.stopAccelerometer()
  // $ExpectType GetClipboardDataSuccessCallbackOption
  await wx.getClipboardData()
  // $ExpectType GeneralCallbackResult
  await wx.stopCompass()
  // $ExpectType GeneralCallbackResult
  await wx.addPhoneContact({ firstName: '' })
  // $ExpectType GeneralCallbackResult
  await wx.startLocalServiceDiscovery({ serviceType: '' })
  // $ExpectType SystemInfo
  await wx.getSystemInfo()
  // $ExpectType ChooseLocationSuccessCallbackResult
  await wx.chooseLocation({})
  // $ExpectType GeneralCallbackResult
  await wx.previewImage({ urls: [] })
  // $ExpectType GeneralCallbackResult
  await wx.saveVideoToPhotosAlbum({ filePath: '' })
  // $ExpectType GeneralCallbackResult
  await wx.removeSavedFile({ filePath: '' })
  // $ExpectType BluetoothError
  await wx.createBLEConnection({ deviceId: '' })
  // $ExpectType BluetoothError
  await wx.startBluetoothDevicesDiscovery({})
  // $ExpectType GeneralCallbackResult
  await wx.hideShareMenu()
  // $ExpectType CheckIsSupportSoterAuthenticationSuccessCallbackResult
  await wx.checkIsSupportSoterAuthentication()
  // $ExpectType GeneralCallbackResult
  await wx.navigateBack()
}
