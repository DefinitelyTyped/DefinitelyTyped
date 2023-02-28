async () => {
    ZWJSBridge.onReady(() => {
        ZWJSBridge.setLocalStorage({
            key: 'key',
            value: 'test',
        });
        ZWJSBridge.getLocalStorage({
            key: 'key',
        });

        ZWJSBridge.removeLocalStorage({
            key: 'ket',
        });

        ZWJSBridge.setTitle({
            title: 'title',
        });

        ZWJSBridge.setMenu({
            items: [
                {
                    id: 'item1',
                    iconUrl: 'https://ssl.gstatic.com/translate/favicon.ico',
                    type: 1,
                },
            ],
        });

        ZWJSBridge.openLink({
            url: 'https://www.google.com',
        });

        ZWJSBridge.close();

        ZWJSBridge.getUserType();

        ZWJSBridge.zmAuthentication({
            certName: '章三',
            certNo: '330123199809182231',
        });

        ZWJSBridge.phoneCall({
            corpId: '18918018011',
        });

        ZWJSBridge.sms({
            phoneNumber: '18918918911',
            text: 'message conent',
        });

        ZWJSBridge.getLocation();

        ZWJSBridge.getUUID();

        ZWJSBridge.getNetworkType();

        ZWJSBridge.setClipboardData({
            text: 'text',
        });

        ZWJSBridge.monitorTrace({
            monitorType: 'success',
        });

        ZWJSBridge.getCurrentLocationCity();
        ZWJSBridge.chooseImage({
            upload: false,
        });

        ZWJSBridge.saveImage({
            url: 'https://ssl.gstatic.com/translate/favicon.ico',
        });

        ZWJSBridge.scan({
            type: 'qrCode',
        });

        ZWJSBridge.pay({
            platform: 1,
            credential: 'orderNo',
        });

        ZWJSBridge.confirm({
            title: 'title',
            message: 'message',
            buttonLabels: ['submit', 'cancel'],
        });

        ZWJSBridge.alert({
            title: 'title',
            message: 'message',
            buttonName: 'cancel',
        });

        ZWJSBridge.toast({
            type: 'success',
            message: 'Loading Success',
            duration: 1000,
        });

        ZWJSBridge.prompt({
            title: 'title',
            placeholder: 'Plase enter your name',
        });

        ZWJSBridge.actionSheet({
            title: 'Place Select Name',
            otherButtons: ['Jack', 'Lose', 'Jeven'],
            cancelButton: 'Cancel',
        });

        ZWJSBridge.showPreloader({
            text: 'Loading',
        });

        ZWJSBridge.hidePreloader();

        ZWJSBridge.selectCity();
        ZWJSBridge.share({
            url: 'https://google.com',
            title: 'Google',
        });

        ZWJSBridge.directShare({
            url: 'https://google.com',
            title: 'Google',
            channel: 'wechat',
        });

        ZWJSBridge.getUiStyle();

        ZWJSBridge.egop({
            appKey: 'appkey',
        });
    });
};
