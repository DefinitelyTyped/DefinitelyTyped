declare var describe: (test: string, callback: () => void) => void;
declare var beforeAll: (callback: () => void) => void;
declare var afterAll: (callback: () => void) => void;
declare var test: (test: string, callback: () => void) => void;

describe('Test', () => {
    beforeAll(async () => {
        await device.reloadReactNative();
        await device.takeScreenshot('test screenshot');
    });

    afterAll(async () => {
        await element(by.id('element')).clearText();
    });

    test('Test', async () => {
        /**
         * Matchers
         */
        await element(by.id('element')).tap();
        await element(by.label('Welcome')).tap();
        await element(by.text('Tap Me')).tap();
        await element(by.type('RCTImageView')).tap();
        await element(by.traits(['button'])).tap();
        await expect(element(by.id('element').withAncestor(by.id('parent_element')))).toExist();
        await expect(element(by.id('element').withDescendant(by.id('child_element')))).toExist();
        await element(by.id('uniqueId').and(by.text('some text'))).tap();
        await element(by.text('Product')).atIndex(2).tap();

        /**
         * Actions
         */
        await element(by.id('element')).tap();
        await element(by.id('element')).tap({ x: 5, y: 10 });
        await element(by.id('element')).multiTap(3);
        await element(by.id('element')).longPress(1500);
        await element(by.id('element')).scroll(50, 'down');
        await element(by.id('element')).scroll(50, 'down', 0.5, 0.5);
        await element(by.id('scrollView')).scrollTo('bottom');
        await element(by.id('scrollView')).swipe('down', 'fast', 0.2, 0.5, 0.5);
        await element(by.id('element')).pinch(1.1, 'fast', 0.0);
        await element(by.id('textField')).replaceText('text');
        await element(by.id('textField')).tapReturnKey();
        await element(by.id('textField')).tapBackspaceKey();
        await element(by.type('UIPickerView')).setColumnToValue(1, '6');
        await element(by.id('datePicker')).setDatePickerDate('2019-02-06T05:10:00-08:00', 'ISO8601');
        await element(by.id('slider')).adjustSliderToPosition(0.75);
        await element(by.id('element')).getAttributes();
        await waitFor(element(by.id('element')))
            .toBeVisible()
            .withTimeout(2000);
        await device.pressBack();
        await waitFor(element(by.text('Text5')))
            .toBeVisible()
            .whileElement(by.id('ScrollView630'))
            .scroll(50, 'down');
        await detox.traceCall('Navigate to sanity', () => element(by.id('sanityButton')).tap());
        try {
            detox.trace.startSection('Turn off notifications', {
                foo: 'baz',
                bar: 1,
            });
            await element(by.id('gotoNotifications')).tap();
            await element(by.id('notificationsToggle')).tap();
            await device.pressBack();
        } finally {
            detox.trace.endSection('Turn off notifications');
        }

        /**
         * Expectations
         */
        await expect(element(by.id('element'))).toBeVisible();
        await expect(element(by.id('element'))).toExist();
        await expect(element(by.id('element'))).toHaveText('test');
        await expect(element(by.id('element'))).toHaveLabel('test');
        await expect(element(by.id('element'))).toHaveId('test');
        await expect(element(by.id('element'))).toHaveValue('0');
        await expect(element(by.id('element'))).toHaveSliderPosition(20);
        await expect(element(by.id('element'))).toHaveToggleValue(true);
        await waitFor(element(by.id('UniqueId204')))
            .toBeVisible()
            .withTimeout(2000);
        await expect(element(by.id('element'))).not.toBeVisible();
        await expect(element(by.id('element'))).not.toExist();
    });

    test('Device Test', async () => {
        device.id;
        device.name;
        await device.launchApp({
            newInstance: true,
            permissions: { calendar: 'YES' },
            url: 'scheme://some.url',
            userNotification: {
                trigger: {
                    type: 'test',
                },
            },
            userActivity: {
                activityType: 'test',
            },
            delete: false,
            launchArgs: {
                detoxEnableSynchronization: 0,
                detoxURLBlacklistRegex:
                    '\\("http://192.168.1.253:19001/onchange","https://e.crashlytics.com/spi/v2/events"\\)',
            },
            disableTouchIndicators: true,
            languageAndLocale: {
                language: 'es-MX',
                locale: 'es-MX',
            },
            sourceApp: 'com.apple.mobilesafari',
        });
        await device.terminateApp();
        await device.sendToHome();
        await device.reloadReactNative();
        await device.installApp();
        await device.uninstallApp();
        await device.openURL({
            url: 'scheme://some.url',
        });
        await device.sendUserNotification({
            trigger: {
                type: 'test',
            },
        });
        await device.sendUserActivity({
            activityType: 'test',
        });
        await device.setOrientation('landscape');
        await device.setLocation(32.0853, 34.7818);
        await device.setURLBlacklist(['.*127.0.0.1.*']);
        await device.enableSynchronization();
        await device.disableSynchronization();
        await device.resetContentAndSettings();
        device.getPlatform();
        await device.takeScreenshot('test screenshot');
        await device.shake();
        await device.setBiometricEnrollment(true);
        await device.matchFace();
        await device.unmatchFace();
        await device.matchFinger();
        await device.unmatchFinger();
        await device.clearKeychain();
        await device.setStatusBar({
            time: '12:14',
            dataNetwork: 'wifi',
            wifiMode: 'failed',
            wifiBars: 2,
            cellularMode: 'searching',
            cellularBars: 3,
            batteryState: 'charging',
            batteryLevel: 50,
        });
        await device.resetStatusBar();
        await device.reverseTcpPort();
        await device.unreverseTcpPort();
        await device.pressBack();
        await device.getUiDevice();
    });
});
