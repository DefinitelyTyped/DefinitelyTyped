export interface WechatProfileDetails {
    photoFilePath?: string | undefined;
    nickName?: string | undefined;
    lastName?: string | undefined;
    middleName?: string | undefined;
    firstName?: string | undefined;
    remark?: string | undefined;
    mobilePhoneNumber?: string | undefined;
    email?: string | undefined;
    url?: string | undefined;
    workAddressCountry?: string | undefined;
    workAddressState?: string | undefined;
    workAddressCity?: string | undefined;
    workAddressStreet?: string | undefined;
    workAddressPostalCode?: string | undefined;
    homeFaxNumber?: string | undefined;
    homePhoneNumber?: string | undefined;
    homeAddressCountry?: string | undefined;
    homeAddressState?: string | undefined;
    homeAddressCity?: string | undefined;
    homeAddressStreet?: string | undefined;
    homeAddressPostalCode?: string | undefined;
}

export interface RotateAnimation {
    rotate(deg: number): Animation;
    rotateX(deg: number): Animation;
    rotateY(deg: number): Animation;
    rotateZ(deg: number): Animation;
    rotate3d(): Animation;
}

export interface ScaleAnimation {
    scale(sx: number): Animation;
    scaleX(sx: number): Animation;
    scaleY(sy: number): Animation;
    scaleZ(sz: number): Animation;
    scale3d(): Animation;
}

export interface TranslateAnimation {
    translate(tx: number): Animation;
    translateX(tx: number): Animation;
    translateY(ty: number): Animation;
    translateZ(tz: number): Animation;
    translate3d(): Animation;
}

export interface SkewAnimation {
    skew(ax: number): Animation;
    skewX(ax: number): Animation;
    skewY(ay: number): Animation;
}

export interface Animation extends RotateAnimation, ScaleAnimation, SkewAnimation, TranslateAnimation {
    opacity(x: number): Animation;
    backgroundColor(x: string): Animation;
    width(x: number): Animation;
    height(x: number): Animation;
    top(x: number): Animation;
    left(x: number): Animation;
    bottom(x: number): Animation;
    right(x: number): Animation;
}

export interface LagLng {
    latitude: number;
    longitude: number;
}

export type CallbackFunction<T> = (
    callbacks: {
        success: (res: T) => void;
        fail: () => void;
        complete: () => void;
    },
) => void;

export interface MapContext {
    getCenterLocation: CallbackFunction<LagLng>;

    moveToLocation(): void;

    translateMarker(params: {
        markerId: number;
        autoRotate: boolean;
        duration: number;
        destination: LagLng;
        animationEnd: () => void;
    }): void;

    includePoints(params: { padding: number[]; points: LagLng[] }): void;

    getRegion: CallbackFunction<{ southwest: LagLng; northeast: LagLng }>;

    getScale: CallbackFunction<{ scale: number }>;
}

export interface UserInfo {
    nickName: string;
    avatarUrl: string;
    gender: string;
    city: string;
    province: string;
    country: string;
    language: string;
}

export interface UrlParam {
    url: string;
}

export interface RequestParam extends UrlParam {
    data?: object | string | ArrayBuffer | undefined;
    header?: object | undefined;
    method?:
        | "GET"
        | "OPTIONS"
        | "HEAD"
        | "POST"
        | "PUT"
        | "DELETE"
        | "TRACE"
        | "CONNECT"
        | undefined;
    dataType?: "json" | "text" | undefined;
    responseType?: "text" | "arraybuffer" | undefined;
}

export interface FilePathParam {
    filePath: string;
}

// WePY enhanced Wx interfaces and methods below are all accessible
export interface WxEnhances {
    addPhoneContact(param: WechatProfileDetails): Promise<void>;

    authorize(param: { scope: string }): Promise<any>;

    canIUse(name: string): Promise<boolean>;

    canvasGetImageData(
        params: {
            canvasId: string;
            x: number;
            y: number;
            width: number;
            height: number;
        },
        context: any,
    ): Promise<{
        width: number;
        height: number;
        data: Uint8ClampedArray;
    }>;

    canvasPutImageData(
        params: {
            canvasId: string;
            data: Uint8ClampedArray;
            x: number;
            y: number;
            height?: number | undefined;
            wdith: number;
        },
        context: any,
    ): Promise<void>;

    canvasToTempFilePath(
        params: {
            x: number;
            y: number;
            width: number;
            height: number;
            destWidth: number;
            destHeight: number;
            canvasId: string;
        },
        context: any,
    ): Promise<{ tempFilePath: string }>;

    checkIsSoterEnrolledInDevice(params: {
        checkAuthMode: "fingerPrint" | "facial" | "speech";
    }): Promise<{
        isEnrolled: boolean;
        errMsg: string;
    }>;

    checkIsSupportSoterAuthentication(): Promise<{
        supportMode: string[];
    }>;

    checkSession(): Promise<void>;

    chooseInvoiceTitle(): Promise<{
        type: "0" | "1";
        title: string;
        taxNumber: string;
        companyAddress: string;
        telephone: string;
        bankName: string;
        bankAccount: string;
        errMsg: string;
    }>;

    chooseLocation(): Promise<{
        name: string;
        address: string;
        latitude: number;
        longitude: number;
    }>;

    chooseVideo(params: {
        sourceType: string[];
        compressed: boolean;
        maxDuration: number;
    }): Promise<{
        tempFilePath: string;
        duration: number;
        size: number;
        height: number;
        width: number;
    }>;

    clearStorage(): Promise<void>;

    createAnimation(params: {
        duration: number;
        timingFunction: string;
        delay: number;
        transformOrigin: string;
    }): Promise<Animation>;

    createCanvasContext(canvasId: string, context: any): Promise<void>;

    createMapContext(mapId: string, context: any): MapContext;

    createSelectorQuery(): Promise<{}>;

    getLocation(params: {
        type: string;
        altitude: boolean;
    }): Promise<{
        latitude: number;
        longitude: number;
        speed: number;
        accuracy: number;
        altitude: number;
        verticalAccuracy: number;
        horizontalAccuracy: number;
    }>;

    getNetworkType(): Promise<{ networkType: string }>;

    getSavedFileInfo(
        params: FilePathParam,
    ): Promise<{
        errMsg: string;
        size: number;
        createTime: number;
    }>;

    getSavedFileList(): Promise<{
        errMsg: string;
        fileList: object[];
    }>;

    getSetting(): Promise<{
        authSetting: {
            "scope.userInfo": boolean;
            "scope.userLocation": boolean;
            "scope.address": boolean;
            "scope.invoiceTitle": boolean;
            "scope.werun": boolean;
            "scope.record": boolean;
            "scope.writePhotosAlbum": boolean;
            "scope.camera": boolean;
        };
    }>;

    getShareInfo(params: {
        shareTicket: string;
        timeout: number;
    }): Promise<{
        errMsg: string;
        encryptedData: string;
        iv: string;
    }>;

    getSystemInfo(): Promise<{
        brand: string;
        model: string;
        pixelRatio: number;
        screenWidth: number;
        screenHeight: number;
        windowWidth: number;
        windowHeight: number;
        statusBarHeight: number;
        language: string;
        version: string;
        system: string;
        platform: string;
        fontSizeSetting: string;
        SDKVersion: string;
    }>;

    getUserInfo(params: {
        withCredentials: boolean;
        lang: string;
        timeout: number;
    }): Promise<{
        userInfo: object;
        rawData: string;
        signature: string;
        encryptedData: string;
        iv: string;
    }>;

    hideLoading(): Promise<void>;

    hideNavigationBarLoading(): Promise<void>;

    makePhoneCall(params: { phoneNumber: string }): Promise<void>;

    navigateTo(params: UrlParam): Promise<void>;

    onUserCaptureScreen(): Promise<void>;

    openLocation(params: {
        latitude: number;
        longitude: number;
        scale?: number | undefined;
        name?: string | undefined;
        address?: string | undefined;
    }): Promise<void>;

    pageScrollTo(params: {
        scrollTop: number;
        duration: number;
    }): Promise<void>;

    redirectTo(params: UrlParam): Promise<void>;

    removeSavedFile(params: FilePathParam): Promise<void>;

    removeStorage(params: { key: string }): Promise<void>;

    request(params: RequestParam | string): Promise<any>;

    requestPayment(params: {
        timeStamp: string;
        nonceStr: string;
        package: string;
        signType: string;
        paySign: string;
    }): Promise<void>;

    scanCode(params: {
        onlyFromCamera?: boolean | undefined;
        scanType?: string[] | undefined;
    }): Promise<{
        result: string;
        scanType: string;
        charSet: string;
        path: string;
    }>;

    setNavigationBarAlpha(params: { alpha: number }): Promise<void>;

    setNavigationBarColor(params: { color: number }): Promise<void>;

    setNavigationBarTitle(params: { title: string }): Promise<void>;

    setStorage(params: { key: string; data: string | object }): Promise<void>;

    showActionSheet(params: {
        itemList: string[];
        itemColor: string;
    }): Promise<void>;

    showLoading(params: { title: string }): Promise<void>;

    showModal(params: {
        title: string;
        content: string;
        showCancel?: boolean | undefined;
        cancelText?: string | undefined;
        cancelColor?: string | undefined;
        confirmText?: string | undefined;
        confirmColor?: string | undefined;
    }): Promise<{ confirm: boolean; cancel: boolean }>;

    showNavigationBarLoading(): Promise<void>;

    showToast(params: {
        title: string;
        icon?: "success" | "loading" | "none" | undefined;
        image?: string | undefined;
        duration?: number | undefined;
        mask?: boolean | undefined;
    }): Promise<void>;

    switchTab(params: UrlParam): Promise<void>;
}
