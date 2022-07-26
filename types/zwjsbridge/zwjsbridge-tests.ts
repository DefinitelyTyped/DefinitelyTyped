async () => {
    ZWJSBridge.onReady(() => {
        ZWJSBridge.setLocalStorage({
            key: 'key',
            value: 'test'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getLocalStorage({
            key: 'key'
        })
        .then(console.log)
        .catch(console.log)


        ZWJSBridge.removeLocalStorage({
            key: 'ket'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.setTitle({
            title: 'title'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.setMenu({
            items: [{
                id: 'item1',
                iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
                type: 1
            }]
        })
        .then(console.log)
        .catch(console.log)


        ZWJSBridge.openLink({
            url: 'https://www.google.com'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.close()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getUserType()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.zmAuthentication({
            certName: '章三',
            certNo: '330123199809182231'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.phoneCall({
            corpId: "18918018011"
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.sms({
            phoneNumber: '18918918911',
            text: 'message conent'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getLocation()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getUUID()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getNetworkType()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.setClipboardData({
            text: 'text'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.monitorTrace({
            monitorType: 'success'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getCurrentLocationCity()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.chooseImage({
            upload: false
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.saveImage({
            url: 'https://ssl.gstatic.com/translate/favicon.ico'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.scan({
            type: 'qrCode'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.pay({
            platform: 1,
            credential: 'orderNo'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.confirm({
            title: 'title',
            message: 'message',
            buttonLabels: ['submit', 'cancel']
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.alert({
            title: 'title',
            message: 'message',
            buttonName: 'cancel'
        })
        .then(console.log)
        .catch(console.log)


        ZWJSBridge.toast({
            type: 'success',
            message: 'Loading Success',
            duration: 1000
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.prompt({
            title: 'title',
            placeholder: 'Plase enter your name'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.actionSheet({
            title: 'Place Select Name',
            otherButtons: ['Jack', 'Lose', "Jeven"],
            cancelButton: 'Cancel'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.showPreloader({
            text: 'Loading'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.hidePreloader()
        .then(console.log)
        .catch(console.log)


        ZWJSBridge.selectCity()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.share({
            url: 'https://google.com',
            title: 'Google'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.directShare({
            url: 'https://google.com',
            title: 'Google',
            channel: 'wechat'
        })
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.getUiStyle()
        .then(console.log)
        .catch(console.log)

        ZWJSBridge.egop({
            appKey: 'appkey'
        })
        .then(console.log)
        .catch(console.log)
    })
}
