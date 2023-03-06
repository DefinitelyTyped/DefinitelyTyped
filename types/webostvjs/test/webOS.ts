function test_deviceInfo() {
    // $ExpectType void
    window.webOS.deviceInfo(deviceInfo => {
        deviceInfo; // $ExpectType DeviceInfo
        deviceInfo.modelName; // $ExpectType string
        deviceInfo.modelNameAscii; // $ExpectType string
        deviceInfo.screenHeight; // $ExpectType number
        deviceInfo.screenWidth; // $ExpectType number
        deviceInfo.sdkVersion; // $ExpectType string
        deviceInfo.uhd; // $ExpectType boolean | undefined
        deviceInfo.version; // $ExpectType string
        deviceInfo.versionDot; // $ExpectType number
        deviceInfo.versionMajor; // $ExpectType number
        deviceInfo.versionMinor; // $ExpectType number
        deviceInfo.uhd8K; // $ExpectType boolean | undefined
        deviceInfo.oled; // $ExpectType boolean | undefined
        deviceInfo.hdr10; // $ExpectType boolean | undefined
        deviceInfo.dolbyVision; // $ExpectType boolean | undefined
        deviceInfo.dolbyAtmos; // $ExpectType boolean | undefined
    });
}

function test_fetchAppId() {
    window.webOS.fetchAppId(); // $ExpectType string
}

function test_fetchAppInfo() {
    // $ExpectType void
    window.webOS.fetchAppInfo(appInfo => {
        appInfo; // $ExpectType AppInfo | undefined

        if (appInfo) {
            appInfo.appDescription; // $ExpectType string | undefined
            appInfo.bgColor; // $ExpectType string | undefined
            appInfo.bgImage; // $ExpectType string | undefined
            appInfo.disableBackHistoryAPI; // $ExpectType boolean | undefined
            appInfo.handlesRelaunch; // $ExpectType boolean | undefined
            appInfo.icon; // $ExpectType string
            appInfo.iconColor; // $ExpectType string | undefined
            appInfo.id; // $ExpectType string
            appInfo.largeIcon; // $ExpectType string
            appInfo.main; // $ExpectType string
            appInfo.requiredMemory; // $ExpectType number | undefined
            appInfo.resolution; // $ExpectType string | undefined
            appInfo.splashBackground; // $ExpectType string
            appInfo.title; // $ExpectType string
            appInfo.transparent; // $ExpectType string | undefined
            appInfo.type; // $ExpectType "web"
            appInfo.vendor; // $ExpectType string
            appInfo.version; // $ExpectType string
        }
    });
}

function test_fetchAppRootPath() {
    // $ExpectType string
    window.webOS.fetchAppRootPath();
}

function test_keyboard_isShowing() {
    // $ExpectType boolean
    window.webOS.keyboard.isShowing();
}

function test_libVersion() {
    // $ExpectType string
    window.webOS.libVersion;
}

function test_platform_tv() {
    // $ExpectType true | undefined
    window.webOS.platform.tv;
}

function test_platformBack() {
    // $ExpectType void
    window.webOS.platformBack();
}

function test_systemInfo() {
    // $ExpectType SystemInfo
    const systemInfo = window.webOS.systemInfo();
    // $ExpectType string | undefined
    systemInfo.country;
    // $ExpectType string | undefined
    systemInfo.smartServiceCountry;
    // $ExpectType string | undefined
    systemInfo.timezone;
}

function test_service_request() {
    const returnedValue = window.webOS.service.request('luna://com.palm.systemservice', {
        method: 'time/getSystemTime',
        parameters: { subscribe: true },
        onSuccess({ returnValue }) {
            returnValue; // $ExpectType true
        },
        onFailure({ returnValue, errorCode, errorText }) {
            returnValue; // $ExpectType false
            errorCode; // $ExpectType string
            errorText; // $ExpectType string
        }
    });

    window.webOS.service.request('luna://com.palm.systemservice', {
        method: 'time/getSystemTime',
        parameters: { subscribe: true },
        onSuccess({ returnValue }) {}
    });

    window.webOS.service.request('luna://com.palm.systemservice', {
        method: 'time/getSystemTime',
        parameters: { subscribe: true },
        onComplete(res) {
            res.returnValue; // $ExpectType boolean
            if (res.returnValue) {
                res; // $ExpectType OnCompleteSuccessResponse
            } else {
                res; // $ExpectType OnCompleteFailureResponse
            }
        }
    });

    window.webOS.service.request('luna://com.palm.systemservice', {
        method: 'time/getSystemTime',
        parameters: { subscribe: true }
    });

    window.webOS.service.request('luna://com.palm.systemservice', {
        method: 'time/getSystemTime',
        parameters: { subscribe: true },
        onSuccess({ returnValue, foo }: { returnValue: true, foo: string }) {}
    });

    window.webOS.service.request('luna://com.palm.systemservice');

    returnedValue.cancel(); // $ExpectType void
    returnedValue.onComplete; // $ExpectType ((response: OnCompleteSuccessResponse | OnCompleteFailureResponse) => void) | undefined
    returnedValue.onFailure; // $ExpectType ((error: OnCompleteFailureResponse) => void) | undefined
    returnedValue.onSuccess; // $ExpectType ((response: OnCompleteSuccessResponse) => void) | undefined
    returnedValue.params; // $ExpectType { subscribe: boolean; }
    returnedValue.resubscribe; // $ExpectType boolean
    returnedValue.send; // $ExpectType () => void
    returnedValue.subscribe; // $ExpectType boolean
    returnedValue.uri; // $ExpectType string
}
