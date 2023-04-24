async () => {
    // WebSocket
    ap.onSocketOpen();
    ap.onSocketError();
    ap.onSocketClose();
    ap.onSocketMessage();
    await ap.connectSocket({
        url: 'ws://127.0.0.1:8088',
        data: {
            b: '1234567890',
            c: 9999,
        },
        headers: {
            a: '0987654321',
        },
    });
    await ap.sendSocketMessage({
        data: 'web socket msg',
    });
    ap.offSocketOpen();
    ap.offSocketError();
    ap.offSocketClose();
    ap.offSocketMessage();
    ap.closeSocket();

    await ap.setSessionData({
        data: {
            pageId: '1',
        },
    });
    ap.getSessionData('pageId');

    ap.parseQueryString();

    const images = await ap.chooseImage({
        count: 2,
    });
    ap.previewImage({
        urls: images.apFilePaths,
    });

    ap.chooseVideo({
        maxDuration: 30,
        sourceType: ['camera'],
    });

    ap.onBackgroundAudioPlay();
    ap.onBackgroundAudioPause();
    ap.onBackgroundAudioStop();

    ap.playBackgroundAudio({
        url: 'https://os.alipayobjects.com/rmsportal/FOjtUAVjVsfldZgjBdxE.mp3',
        title: '舒缓轻音乐',
        cover: 'https://zos.alipayobjects.com/rmsportal/VRrMXbgUSdsibQjwZpyT.png',
    });

    ap.pauseBackgroundAudio();
    ap.seekBackgroundAudio(0);
    ap.getBackgroundAudioPlayerState();

    ap.stopBackgroundAudio();

    ap.offBackgroundAudioPlay();
    ap.offBackgroundAudioPause();
    ap.offBackgroundAudioStop();

    const location = await ap.getLocation();

    ap.openLocation(location);

    ap.getNetworkType();

    ap.onNetworkChange();
    ap.offNetworkChange();

    ap.scan();

    ap.watchShake();

    await ap.openBluetoothAdapter();

    ap.onBLECharacteristicValueChange();
    ap.onBluetoothAdapterStateChange();
    ap.onBLEConnectionStateChanged();

    await ap.onBluetoothDeviceFound();

    ap.getBluetoothAdapterState();

    ap.startBluetoothDevicesDiscovery({
        services: ['0000fdd7-0000-1011-8004-00987f9b34fb'],
    });
    ap.stopBluetoothDevicesDiscovery();
    const bltDevices = await ap.getBluetoothDevices();

    if (bltDevices.devices.length > 0) {
        const deviceId = bltDevices.devices[0].deviceId;
        await ap.connectBLEDevice({
            deviceId,
        });

        const { services } = await ap.getBLEDeviceServices({
            deviceId,
        });

        if (services.length) {
            const serviceId = services[0].serviceId;
            const bleDevices = await ap.getBLEDeviceCharacteristics({
                deviceId,
                serviceId,
            });

            if (bleDevices.characteristics.length) {
                const characteristicId = bleDevices.characteristics[0].characteristicId;

                ap.notifyBLECharacteristicValueChange({
                    // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                    deviceId,
                    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                    serviceId,
                    // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                    characteristicId,
                });

                await ap.writeBLECharacteristicValue({
                    // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                    deviceId,
                    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                    serviceId,
                    // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                    characteristicId,
                    // 这里的value是 16 进制字符串
                    value: 'value',
                });
                await ap.readBLECharacteristicValue({
                    // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
                    deviceId,
                    // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
                    serviceId,
                    // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
                    characteristicId,
                });
            }
        }

        ap.getConnectedBluetoothDevices();

        ap.disconnectBLEDevice({
            deviceId,
        });
    }

    ap.offBLECharacteristicValueChange();
    ap.offBluetoothDeviceFound();
    ap.offBLEConnectionStateChanged();
    ap.offBluetoothAdapterStateChange();

    ap.closeBluetoothAdapter();

    ap.onCompassChange();
    ap.offCompassChange();

    ap.onAccelerometerChange();
    ap.offAccelerometerChange();

    ap.pushWindow({
        url: 'https://google.com',
    });
    ap.popWindow();
    ap.popTo(-1);
    ap.redirectTo('https://github.com');

    ap.onResume();
    ap.onPause();
    ap.offPagePause();
    ap.offResume();
    ap.onPageResume();
    ap.offPageResume();
    ap.onPagePause();
    ap.offPagePause();

    ap.onAppPause();
    ap.offAppPause();
    ap.onAppResume();
    ap.offAppResume();

    ap.alert('Hello World');
    ap.confirm('Hello World');
    ap.showToast('Hello world');
    ap.hideToast();
    ap.showLoading('Loading...');
    ap.hideLoading();
    ap.showActionSheet({
        items: ['item1', 'item2', 'item3'],
    });

    ap.onTitleClick();
    ap.setNavigationBar({
        title: 'title',
    });

    ap.offTitleClick();
    ap.showNavigationBarLoading();
    ap.hideNavigationBarLoading();
    ap.setOptionButton({
        items: [
            {
                title: 'title',
            },
            {
                type: 'user',
            },
        ],
    });

    ap.showOptionButton();
    ap.hideOptionButton();
    ap.showPopMenu({
        items: [
            {
                title: 'title',
            },
            {
                icon: 'user',
            },
        ],
    });

    ap.allowPullDownRefresh(true);
    ap.onPullDownRefresh();
    ap.offPullDownRefresh();

    ap.choosePhoneContact();
    ap.chooseAlipayContact();

    ap.chooseCity();
    ap.datePicker();

    ap.tradePay('orderStr');

    ap.getServerTime();
};
