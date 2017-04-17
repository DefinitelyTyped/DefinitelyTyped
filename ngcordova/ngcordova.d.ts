/// <reference path="../angularjs/angular.d.ts" />

declare module ngcordova {

    //// Action Sheet - $cordovaActionSheet
    export interface IActionSheetOptions {
        title?: string;
        buttonLabels: Array<string>;
        addCancelButtonWithLabel?: string;
        androidEnableCancelButton?: boolean;
        winphoneEnableCancelButton?: boolean;
        addDestructiveButtonWithLabel?: string;
    }

    export interface IActionSheet {
        show(options: IActionSheetOptions): ng.IPromise<number>;
        hide(): void;
    }


    //// AdMob - $cordovaAdMob
    export interface IAdMobOptions {
        OPT_PUBLISHER_ID?: string;
        OPT_INTERSTITIAL_AD_ID?: string;
        OPT_AD_SIZE?: string;
        OPT_BANNER_AT_TOP?: string;
        OPT_OVERLAP?: string;
        OPT_OFFSET_TOPBAR?: string;
        OPT_IS_TESTING?: string;
        OPT_AD_EXTRAS?: string;
        OPT_AUTO_SHOW?: string;
    }

    export interface IAdMob {
        createBannerView(options?: any): ng.IPromise<void>;
        createInterstitialView(options?: any): ng.IPromise<void>;
        requestAd(options?: any): ng.IPromise<void>;
        showAd(options?: any): ng.IPromise<void>;
        requestInterstitialAd(options?: any): ng.IPromise<void>;
    }


    //// App Availability - $cordovaAppAvailability
    export interface IAppAvailability {
        check(method: string): ng.IPromise<any>;
    }


    //// App Preferences - $cordovaPreferences
    export interface IAppPreferences {
        set(key: string, value: string): ng.IPromise<string>;
        get(key: string): ng.IPromise<string>;
    }

    //// App Rate - $cordovaAppRate
    export interface IAppRatePreferences {
        language?: string;
        appName?: string;
        openStoreInApp?: boolean;
        usesUntilPrompt?: number;
        promptForNewVersion?: boolean;
        useCustomRateDialog?: string;
        iosURL?: string;
        androidURL?: string;
        windowsURL?: string;
    }

    export interface IAppRate {
        setPreferences(preferences: IAppRatePreferences): void;
        setCustomLocale(customObj: {[key: string]: string}): void;
        promptForRating(immediate: boolean): ng.IPromise<any>;
        onButtonClicked(callback): void;
        onRateDialogShow(callback): void;
    }


    //// App Version - $cordovaAppVersion
    export interface IAppVersion {
        getAppVersion(): ng.IPromise<string>;
    }


    //// Background Geolocation - $cordovaBackgroundGeolocation
    export interface IBackgroundGeolocationOptions {
        url?: string;
        params?: {[key: string]: string};
        headers?: {[key: string]: string};
        desiredAccuracy?: number;
        stationaryRadius?: number;
        distanceFilter?: number;
        notificationTitle?: string;
        notificationText?: string;
        activityType?: string;
        debug?: boolean;
        stopOnTerminate?: boolean;
    }

    export interface IBackgroundGeolocation {
        configure(options: IBackgroundGeolocationOptions): any;
        start(): void;
        stop(): void;
    }


    //// Badge - $cordovaBadge
    export interface IConfigureConfig {
        autoClear: boolean;
    }

    export interface IBadge {
        hasPermission(): ng.IPromise<boolean>;
        promptForPermission(): any;
        set(num: number): void;
        get(): number;
        clear(): ng.IPromise<any>;
        configure(config: IConfigureConfig): void;
    }


    //// Barcode Scanner - $cordovaBarcodeScanner
    export interface IBarcodeScanner {
        scan(): ng.IPromise<any>;
        encode(type: string, text: string): any;
    }


    //// Bluetooth Low Energy  - $cordovaBLE
    export interface IBLE {
        scan(services: any, seconds: number): ng.IPromise<any>;
        connect(deviceId: string): ng.IPromise<any>;
        disconnect(deviceId: string): ng.IPromise<any>;
        read(deviceID: string, serviceUUID: string, characteristicUUID: string): ng.IPromise<any>;
        write(deviceID: string, serviceUUID: string, characteristicUUID: string, data: any): ng.IPromise<any>;
        writeCommand(deviceID: string, serviceUUID: string, characteristicUUID: string, data: any): ng.IPromise<any>;
        notify(deviceID: string, serviceUUID: string, characteristicUUID: string): ng.IPromise<any>;
        indicate(deviceID: string, serviceUUID: string, characteristicUUID: string): ng.IPromise<any>;
        isConnected(): ng.IPromise<void>;
        isEnabled(): ng.IPromise<void>;
    }


    //// Bluetooth Serial  - $cordovaBluetoothSerial
    export interface IBluetoothSerial {
        connect(address: string): ng.IPromise<void>;
        connectInsecure(address: string): ng.IPromise<void>;
        disconnect(): ng.IPromise<void>;
        list(): ng.IPromise<{[key: string]: string}>;
        isEnabled(): ng.IPromise<void>;
        isConnected(): ng.IPromise<void>;
        available(): ng.IPromise<number>;
        read(): ng.IPromise<any>;
        readUntil(delimiter: string): ng.IPromise<any>;
        write(data: any): ng.IPromise<void>;
        subscribe(delimiter: string): ng.IPromise<any>;
        subscribeRawData(): ng.IPromise<any>;
        unsubscribe(): ng.IPromise<void>;
        unsubscribeRawData(): ng.IPromise<void>;
        clear(): ng.IPromise<void>;
        readRSSI(): ng.IPromise<any>;
    }


    //// Calendar  - $cordovaCalendar
    export interface ICalendarOptions {
        startDate: Date;
        endDate?: Date;
        title: string;
        location?: string;
        notes?: string;
        calendarName?: string;
    }

    export interface ICalendarOptionsModify {
        startDate: Date;
        endDate?: Date;
        title: string;
        location?: string;
        notes?: string;
        newTitle: string;
        newLocation: string;
        newNotes: string;
        newStartDate: Date;
        newEndDate: Date;
    }

    export interface ICalendar {
        createCalendar(options: ICalendarOptions): ng.IPromise<string>;
        deleteCalendar(calendarName: string): ng.IPromise<string>;
        createEvent(options?: ICalendarOptions): ng.IPromise<string>;
        createEventWithOptions(options?: ICalendarOptions): ng.IPromise<string>;
        createEventInteractively(options?: ICalendarOptions): ng.IPromise<string>;
        createEventInNamedCalendar(options?: ICalendarOptions): ng.IPromise<string>;
        findEvent(options?: ICalendarOptions): ng.IPromise<any>;
        listEventsInRange(startDate: Date, endDate: Date): ng.IPromise<any>;
        listCalendars(): ng.IPromise<Array<{[key: string]: string}>>;
        findAllEventsInNamedCalendar(calendarName: string): ng.IPromise<any>;
        modifyEvent(options: ICalendarOptionsModify): ng.IPromise<string>;
        deleteEvent(options: ICalendarOptions): ng.IPromise<string>;
    }


    //// Camera  - $cordovaCamera
    export interface ICameraOptions {
        quality?: number;
        destinationType?: number;
        sourceType?: number;
        allowEdit?: boolean;
        encodingType?: number;
        targetWidth?: number;
        targetHeight?: number;
        mediaType?: string;
        cameraDirection?: number;
        popoverOptions?: string;
        saveToPhotoAlbum?: boolean;
    }

    export interface ICamera {
        getPicture(options: ICameraOptions): ng.IPromise<any>;
        cleanup(): ng.IPromise<void>;
    }


    //// Capture  - $cordovaCapture
    export interface ICaptureAudioOptions {
        limit?: number;
        duration?: number;
    }

    export interface ICaptureImageOptions {
        limit?: number;
    }

    export interface ICaptureVideoOptions {
        limit?: number;
        duration?: number;
    }

    export interface ICapture {
        captureAudio(options: ICaptureAudioOptions): ng.IPromise<any>;
        captureImage(options: ICaptureImageOptions): ng.IPromise<any>;
        captureImage(options: ICaptureVideoOptions): ng.IPromise<any>;
    }


    //// Clipboard  - $cordovaClipboard
    export interface IClipboard {
        copy(text: string): ng.IPromise<any>;
        paste(): ng.IPromise<string>;
    }


    //// Contacts  - $cordovaContacts
    export interface IContactName {
        formatted?: string;
        familyName?: string;
        givenName?: string;
        middleName?: string;
        honorificPrefix?: string;
        honorificSuffix?: string;
    }

    export interface IContactField {
        type: string;
        value: string;
        pref: boolean;
    }

    export interface IContactAddress {
        pref: boolean;
        type: string;
        formatted: string;
        streetAddress?: string;
        locality?: string;
        region?: string;
        postalCode?: string;
        country?: string;
    }

    export interface IContactOrganization {
        pref: boolean;
        type: string;
        name: string;
        department?: string;
        title?: string;
    }

    export interface IContact {
        id: string;
        displayName?: IContactName;
        name?: string;
        nickname?: string;
        phoneNumbers?: Array<IContactField>;
        emails?: Array<IContactField>;
        addresses?: Array<IContactAddress>;
        ims?: Array<IContactField>;
        organizations?: Array<IContactOrganization>;
        birthday?: Date;
        note?: string;
        photos?: Array<IContactField>;
        categories?: Array<IContactField>;
        urls?: Array<IContactField>;
    }

    export interface IContactFindOptions {
        fields?: Array<string>;
    }

    export interface IContacts {
        save(contact: IContact): ng.IPromise<any>;
        remove(contact: IContact): ng.IPromise<any>;
        clone(contact: IContact): ng.IPromise<any>;
        find(options: IContactFindOptions): ng.IPromise<Array<IContact>>;
        pickContact(): ng.IPromise<IContact>;
    }


    //// Date Picker  - $cordovaDatePicker
    export interface IDatePickerOptions {
        mode?: string;
        date?: any;
        minDate?: any;
        maxDate?: any;
        allowOldDates?: boolean;
        allowFutureDates?: boolean;
        doneButtonLabel?: string;
        doneButtonColor?: string;
        cancelButtonLabel?: string;
        cancelButtonColor?: string;
        minuteInterval?: number;
    }

    export interface IDatePicker {
        show(options: IDatePickerOptions): ng.IPromise<Date>;
    }


    //// Device - $cordovaDevice
    export interface IDeviceDevice {
        cordova: string;
        model: string;
        platform: string;
        uuid: string;
        version: string;
        name: string;
    }

    export interface IDevice {
        getDevice(): IDeviceDevice;
        getCordova(): string;
        getModel(): string;
        getName(): string;
        getPlatform(): string;
        getUUID(): string;
        getVersion(): string;
    }


    //// Device Motion - $cordovaDeviceMotion
    export interface IDeviceMotionAcceleration {
        x: number;
        y: number;
        z: number;
        timestamp: number;
    }

    export interface IDeviceMotionAccelerometerOptions {
        period: number;
    }

    export interface IDeviceMotionWatchPromise extends ng.IPromise<IDeviceMotionAcceleration> {
        watchID: number;
        cancel: () => void;
        clearWatch: (watchId?: number) => void;
    }

    export interface IDeviceMotion {
        getCurrentAcceleration(): ng.IPromise<IDeviceMotionAcceleration>;
        watchAcceleration(options: IDeviceMotionAccelerometerOptions): IDeviceMotionWatchPromise;
        clearWatch(watchID: number): void;
    }


    //// Device Orientation - $cordovaDeviceOrientation
    export interface IDeviceOrientationHeading {
        magneticHeading: number;
        trueHeading?: number;
        headingAccuracy?: number;
        timestamp?: number;
    }

    export interface IDeviceOrientationWatchOptions {
        frequency?: number;
        filter?: number;
    }

    export interface IDeviceOrientationWatchPromise extends ng.IPromise<IDeviceOrientationHeading> {
        watchID: number;
        cancel: () => void;
        clearWatch: (watchId?: number) => void;
    }

    export interface IDeviceOrientation {
        getCurrentHeading(): ng.IPromise<IDeviceOrientationHeading>;
        watchHeading(options: IDeviceOrientationWatchOptions): IDeviceOrientationWatchPromise;
        clearWatch(watchID: number): void;
    }


    //// Dialogs - $cordovaDialogs
    export interface IDialogsPromptResult {
        input1: string;
        buttonIndex: number;
    }

    export interface IDialogs {
        alert(message: string, title?: string, buttonName?: string): ng.IPromise<void>;
        confirm(message: string, title?: string, buttonArray?: Array<string>): ng.IPromise<number>;
        prompt(message: string, title?: string, buttonArray?: Array<string>, defaultText?: string): ng.IPromise<IDialogsPromptResult>;
        beep(repetitions: number): void;
    }


    //// EmailComposer - $cordovaEmailComposer
    export interface IEmailComposerProperties {
        to: Array<string>;
        cc?: Array<string>;
        bcc?: Array<string>;
        attachments?: Array<any>;
        subject?: string;
        body?: string;
        isHtml?: boolean;
    }

    export interface IEmailComposer {
        isAvailable(): ng.IPromise<void>;
        open(properties: IEmailComposerProperties);
        addAlias(app: string, schema: string);
    }


    //// Facebook - $cordovaFacebook
    export interface IFacebookDialogOptions {
        method: string;
        link: string;
        caption?: string;
    }

    export interface IFacebookLoginStatus {
        status: string;
        authResponse: {
            session_key: boolean;
            accessToken: string;
            expiresIn: number;
            sig: string;
            secret: string;
            userId: string;
        }
    }

    export interface IFacebook {
        browserInit(id: string, version?: string): void;
        login(permissions: Array<string>): ng.IPromise<IFacebookLoginStatus>;
        showDialog(options: ngcordova.IFacebookDialogOptions): ng.IPromise<any>;
        api(path: string, permissions: Array<String>): ng.IPromise<any>;
        getLoginStatus(): ng.IPromise<IFacebookLoginStatus>;
        getAccessToken(): ng.IPromise<string>;
        logout(): ng.IPromise<any>;
    }


    //// Facebook Ads - $cordovaFacebookAds
    export interface IFacebookAdsOptions {
        adSize?: string;
        width?: number;
        height?: number;
        position?: number;
        x?: number;
        y?: number;
        istesting?: boolean;
        deviceHash?: string;
        autoShow?: boolean;
    }

    export interface IFacebookAds {
        setOptions(options: any): ng.IPromise<void>;
        createBanner(options: any): ng.IPromise<void>;
        removeBanner(): ng.IPromise<void>;
        showBanner(position: number): ng.IPromise<void>;
        showBannerAtXY(x: number, y: number): ng.IPromise<void>;
        hideBanner(): ng.IPromise<void>;
        prepareInterstitial(options: any): ng.IPromise<void>;
        showInterstitial(): ng.IPromise<void>;
    }


    //// File - $cordovaFile
    export interface IFile {
        getFreeDiskSpace(): string;
        checkDir(dirPath: string);
        checkFile(filePath: string);
        createDir(dirPath: string, replaceBOOL: boolean);
        createFile(dirPath: string, replaceBOOL: boolean);
        listDir(filePath: string);
        //TODO: finish
    }


    export interface IInAppBrowserDetails {
        code?: string;
        file?: string;
    }

    export interface IInAppBrowser {
        init(config: string): ng.IScope;
        init(config: {[key: string]: any}): ng.IScope;

        open(url: string, target: string, options?: {[key: string]: any}): ng.IPromise<any>;
        close(): void;
        show(): void;
        executeScript(details: ngcordova.IInAppBrowserDetails): ng.IPromise<any>;
        insertCSS(details: ngcordova.IInAppBrowserDetails): ng.IPromise<any>;
    }

    export interface IToast {
        show(message: string, duration: string, position: string): ng.IPromise<any>;
        showLongBottom(message: string): ng.IPromise<any>;
    }

    export interface ISocialSharing {
        share(message: string, subject: string, file: string, link: string): ng.IPromise<any>;
        shareViaTwitter(message: string, image: string, link: string): ng.IPromise<any>;
        shareViaWhatsApp(message: string, image: string, link: string): ng.IPromise<any>;
        shareViaFacebook(message: string, image: string, link: string): ng.IPromise<any>;
        shareViaSMS(message: string, number: number): ng.IPromise<any>;
        shareViaEmail(message: string, subject: string, toArr: Array<string>, bccArr: Array<string>, file: string): ng.IPromise<any>;
        canShareVia(socialType: string, message: string, image: string, link: string): ng.IPromise<any>;
    }

    export interface IOauth {
        dropbox(appKey: string) : ng.IPromise<any>;
        digitalOcean(clientId: string, clientSecret: string): ng.IPromise<any>;
        github(clientId: string, clientSecret: string, appScope: Array<string>): ng.IPromise<any>;
        facebook(clientId: string, appScope: Array<string>) : ng.IPromise<any>;
        linkedin(clientId: string, clientSecret: string, appScope: Array<string>, state: string): ng.IPromise<any>;
        instagram(clientId: string, appScope: Array<string>): ng.IPromise<any>;
        box(clientId: string, clientSecret: string, appState: string): ng.IPromise<any>;
        reddit(clientId: string, clientSecret: string, appScope: Array<string>): ng.IPromise<any>;
        twitter(clientId: string, clientSecret: string): ng.IPromise<any>;
        meetup(clientId: string): ng.IPromise<any>;
        foursquare(clientId: string): ng.IPromise<any>;
    }

    export interface IGeolocationOptions {
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
    }

    export interface IGeolocation {
        getCurrentPosition(options?: IGeolocationOptions) : ng.IPromise<any>;
        watchPosition(options?: IGeolocationOptions)  : ng.IPromise<any>;
        clearWatch(watchID: {[key: string]: any}) : void;
    }

    export interface INetwork {
        getNetwork(): number;
        isOnline(): boolean;
        isOffline(): boolean;
        clearOfflineWatch(): void;
        clearOnlineWatch(): void;
    }

    export interface IKeyboard {
        hideAccessoryBar(bool: boolean): void;
        close(): void;
        disableScroll(): void;
        isVisible(): void;
    }

    export interface ISplashscreen {
        show(): void;
    }
}
