// Type definitions for chayns 0.14.0
// Project: https://gitlab.tobit.com/chayns-api/chayns-typings
// Definitions by: Henning Kuehl <https://github.com/HenningKuehl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Definition file for chayns v3.1
 */
declare module chayns {
    /**
     * Getting Started
     * chayns
     *
     */
    let ready: Promise<any>;

    function register(config: IRegisterConfig): void;

    /**
     * Basic Functions
     * chayns
     */
    function login(parameters?: string[]): Promise<any>;

    function getUser(config: IGetUserConfig): Promise<IUser>;

    function getUacGroups(siteId: number, updateCache?: boolean): Promise<IUacGroup[]>;

    function startInteractionIdentification(config: IInteractionIdentificationConfig): Promise<any>;

    function stopInteractionIdentification(): Promise<any>;

    function allowRefreshScroll(): Promise<any>;

    function disallowRefreshScroll(): Promise<any>;

    function showTitleImage(): Promise<any>;

    function hideTitleImage(): Promise<any>;

    function setOnActivateCallback(callback: (tappEvent: number) => any): Promise<any>;

    function setNetworkChangeCallback(callback: (result: INetworkChangeResult) => any, ongoing: boolean): Promise<any>;

    function setNfcCallback(callback: (rfid: string) => any): Promise<any>;

    function removeNfcCallback(): Promise<any>;

    function startNfcDetection(callback: (result: INfcDetectionResult) => any, interval: number, vibrate: boolean): Promise<any>;

    function stopNfcDetection(): Promise<any>;

    function scanQRCode(cameryType?: number, timeout?: number): Promise<any>; // TODO interface for promise result

    function createQRCode(text: string): Promise<string>;

    function showFinetradingQRCode(): Promise<any>;

    function selectTapp(tapp: ISelectTappConfig, parameter?: string[]): Promise<any>;

    function openUrl(config: IOpenUrlConfig): void;

    function closeUrl(): void;

    function openUrlInBrowser(url: string): void;

    function getGeoLocation(): Promise<IGeoLocationResult>;

    function getLocationBeacons(forceReload: boolean): Promise<ILocationBeacon[]>;

    function getBeaconHistory(subNumber?: number): Promise<IBeaconHistory[]>

    function getBaseColor(color?: string, colorMode?: number): string;

    function share(config: IShareConfig): Promise<any>;		// TODO interface for promise result

    function getAvailableSharingServices(): Promise<number[]>;

    function navigateBack(): Promise<any>;

    function updateNavigation(tappId?: number, config?: IUpdateNavigationConfig): Promise<any>;

    function enableDisplayTimeout(): Promise<any>;

    function disableDisplayTimeout(): Promise<any>;

    function setSpeechToText(callback: (result: ISpeechToTextResult) => any, title?: string): Promise<any>;

    function createTappShortcut(name: string, imageUrl: string): Promise<any>;

    function setSubTapp(config: ISubTappConfig): void;

    function removeSubTapp(config: IRemoveSubTappConfig): void;

    function vibrate(ms: number[]): Promise<any>;

    function setHeight(config: ISetHeightConfig): Promise<any>;

    function scrollToY(position: number): Promise<any>;

    function addToWallet(passbook: string): Promise<any>;		// TODO check passbock parameter

    function addScrollListener(callback: (data: any) => any, throttle?: number): Promise<any>;		// TODO interface for callback data

    function setScreenOrientation(orientation: number): Promise<any>;

    function findSite(name: string, skip?: number, take?: number): Promise<ISite[]>;

    /**
     * UI Functions
     * Waitcursor
     * chayns
     */
    function showWaitCursor(text?: string, timeout?: number): Promise<any>;

    function hideWaitCursor(): Promise<any>;

    /**
     * UI Functions
     * Floating Button
     * chayns
     */
    function showFloatingButton(config: IFloatingConfig, callback: () => any): void;

    function hideFloatingButton(): void;

    /**
     * Media Functions
     * Image
     * chayns
     */
    function openImage(urls: string[], start?: number): Promise<any>;

    function uploadImage(): Promise<string>;

    /**
     * Media Functions
     * Miscellaneous
     * chayns
     */
    function openVideo(url: string): Promise<any>;

    function saveAppointment(config: ISaveAppointmentConfig): Promise<any>;

    function playSound(url: string, playOnMute?: boolean): Promise<any>;


    function addErrorListener(logFn: (error: any) => Promise<{}>, appName: string): void;

    function getGlobalData(): IGlobalData;

    /**
     * chayns.smartShop
     */
    let smartShop: any;

    /**
     * Basic Functions
     * chayns.intercom
     */
    module intercom {
        function sendMessageToUser(userId: number, config: IIntercomConfig): Promise<any>;		//TODO set interface for promise result

        function sendMessageToGroup(groupId: number, config: IIntercomConfig): Promise<any>;	//TODO set interface for promise result

        function sendMessageToPage(config: IIntercomConfig): Promise<any>;						//TODO set interface for promise result
    }

    /**
     * Basic Functions
     * chayns.passKit
     */
    module passKit {
        function getInstalled(): Promise<any>;						// TODO interface for promise result

        function isInstalled(identifier: string): Promise<any>;		// TODO interface for promise result
    }

    /**
     * Environmental Variables
     * chayns.env
     */
    module env {
        let _parameters: any;

        let parameters: any;

        let isBrowser: boolean;

        let isChaynsWeb: boolean;

        let isChaynsWebDesktop: boolean;

        let isChaynsWebMobile: boolean;

        let isDesktop: boolean;

        let isMobile: boolean;

        let isApp: boolean;

        let isIOS: boolean;

        let isAndroid: boolean;

        let isTablet: boolean;

        let isWP: boolean;

        let appVersion: number;

        let os: string;


        let apiVersion: number;

        let debugMode: boolean;

        let isChaynsParent: boolean;

        let isChaynsWebLight: boolean;

        let isInFacebookFrame: boolean;

        let isInFrame: boolean;

        let isWidget: boolean;

        let language: string;

        /**
         * Environmental Variables
         * chayns.env.user
         */
        module user {
            let tobitAccessToken: string;

            let facebookAccessToken: string;

            let facebookId: string;

            let id: number;

            let name: string;

            let personId: string;

            let isAuthenticated: boolean;

            let language: string;

            let groups: IUserGroup[];
        }

        /**
         * Environmental Variables
         * chayns.env.site
         */
        module site {
            let color: string;

            let colorMode: number;

            let colorScheme: number;

            let domain: string;

            let facebookAppId: string;

            let facebookPageId: string;

            let id: string;

            let isAdEnabled: boolean;

            let isArEnabled: boolean;

            let language: string;

            let locationId: number;

            let locationPersonId: string;

            let tapps: ISiteTapp[];

            let title: string;

            let url: string;

            let version: string;

            /**
             * Environmental Variables
             * chayns.env.site.tapp
             */
            module tapp {
                let customUrl: string;

                let id: number;

                let internalName: string;

                let isExclusiveView: boolean;

                let isKioskMode: boolean;

                let isSubTapp: boolean;

                let showName: string;

                let sortId: number;

                let userGroupIds: number[];
            }
        }

        /**
         * Environmental Variables
         * chayns.env.app
         */
        module app {
            let flavor: string;

            let languageId: string;

            let model: string;

            let name: string;

            let uid: string;

            let version: string;
        }

        /**
         * Environmental Variables
         * chayns.env.device
         */
        module device {
            let fontScale: any;

            let imei: string;

            let languageId: string;

            let model: string;

            let systemName: string;

            let systemVersion: number;

            let uid: string;
        }

        /**
         * Environmental Variables
         * chayns.env.browser
         */
        module browser {
            let name: string;

            let version: string;
        }
    }

    /**
     * UI Functions
     * chayns.dialog
     */
    module dialog {
        enum buttonType {
            CANCEL = -1,
            NEGATIVE = 0,
            POSITIVE = 1
        }

        enum buttonText {
            CANCEL = 'Abbrechen',
            NO = 'Nein',
            OK = 'OK',
            YES = 'Ja'
        }

        enum dateType {
            DATE,
            TIME,
            DATE_TIME
        }

        enum inputType {
            DEFAULT = 0,
            PASSWORD = 1
        }

        function alert(title: string, message?: string): Promise<buttonType>;

        function confirm(title: string, message?: string, buttons?: IDialogButton[]): Promise<buttonType>;

        function date(config: IDialogDateConfig): Promise<IDialogDateResult>;

        function select(config: IDialogSelectConfig): Promise<IDialogSelectResult>;

        function input(config: IDialogInputConfig): Promise<IDialogInputResult>;

        function facebook(options: IDialogFacebookOptions): Promise<IDialogFacebookResult>;


    }

    /**
     * chayns.ui
     */
    module ui {
        /**
         * UI Functions
         * chayns.ui.modeSwitch
         */
        module modeSwitch {
            function init(config: IModeSwitchConfig): void;

            function addItem(item: IModeSwitchItem, index?: number): void;

            function changeMode(index: number): void;

            function changeMode(item: IModeSwitchItem): void;

            function remove(): void;

            function add(): void;
        }

        /**
         * Media Functions
         * chayns.ui.gallery
         */
        module gallery {
            function create(id: string, urls: string[]): void;

            function setUrls(id: string, urls: string[]): void;

            function getUrls(id: string): string[];

            function addUrl(id: string, url: string): void;

            function removeUrl(id: string, url: string): void;
        }

        /**
         * chayns.ui.tooltip
         */
        module tooltip {
            function init(config: IUiTooltipInitConfig, rootElement: Element): Promise<boolean>;
        }

        /**
         * chayns.ui.slider
         */
        module slider {
            function refreshTrack(): void;
        }
    }

    /**
     * Utility Functions
     * chayns.utils
     */
    module utils {
        /**
         * Utility Functions
         * Check Types
         * chayns.utils
         */
        function isHex(parameter: any, shorthand: boolean): boolean;

        function isArray(parameter: any): boolean;

        function isBLEAdress(parameter: any): boolean;

        function isBlank(parameter: any): boolean;

        function isDate(parameter: any): boolean;

        function isDefined(parameter: any): boolean;

        function isFormData(parameter: any): boolean;

        function isFunction(parameter: any): boolean;

        function isGUID(parameter: any): boolean;

        function isMacAdress(parameter: any): boolean;

        function isNumber(parameter: any): boolean;

        function isObject(parameter: any): boolean;

        function isPromise(parameter: any): boolean;

        function isString(parameter: any): boolean;

        function isUUID(parameter: any): boolean;

        function isUndefined(parameter: any): boolean;

        function isDeferred(parameter: any): boolean;

        function isJwt(parameter: any): boolean;

        function isUrl(parameter: any): boolean;

        /**
         * Utility Functions
         * Miscellaneous
         * chayns.utils
         */
        function getJwtPayload(token: string): IJwtPaylod;

        function mod(number: number, modulo: number): number;

        function trim(test: string): string;

        function replacePlaceholder(text: string, parameters: any[]): string; //TODO set interface for parameters

        function mixColor(color1: string, color2: string, saturation: number): string;


        function isPresent(parameter: any): boolean;

        function setLevel(level: number): void;

        /**
         * Utility Functions
         * Local Storage
         * chayns.utils.ls
         */
        module ls {
            function set(key: string, value: string): void;

            function get(key: string): string;

            function remove(key: string): void;

            function removeAll(): void;
        }

        module lang {
            function init(config: any): void;

            function renderTextStrings(): void;

            function get(textString: string): string;

            function translateDomStrings(): void;
        }
    }

    /**
     * chayns.storage
     */
    module storage {
        enum accessMode {
            PUBLIC,
            PROTECTED,
            PRIVATE
        }

        function set(key: string, value: any, accessMode?: accessMode, tappIds?: Array<number>): Promise<any>;

        function get(key: string, accessMode?: accessMode): any;

        function remove(key: string, accessMode?: accessMode): Promise<any>;
    }
}

/**
 * Getting Started
 * chayns
 * interfaces
 */
// chayns.register()
interface IRegisterConfig {
    strictMode?: boolean;
    appName?: string;
    cssPrefix?: string;
    callbackPrefix?: string;
    initialHeight?: number;
    autoResize?: boolean;
}

/**
 * Basic Functions
 * chayns
 * interfaces
 */
// chayns.getUser()
interface IGetUserConfig {
    accessToken?: string;
    userId?: number;
    fbId?: string;
    personId?: string;
}

interface IUser {
    FacebookID: string;
    FirstName: string;
    LastName: string;
    PersonID: string;
    UserFullName: string;
    UserID: number;
}

// chayns.getUacGroups()
interface IUacGroup {
    id: number;
    name: string;
    showName: string;
}

// chayns.startInteractionIdentification()
interface IInteractionIdentificationConfig {
    duration: number,
    delay?: number,
    callback: void;
    resetOnInteraction?: boolean;
    foregroundColor: string,
    backgroundColor?: string;
}

// chayns.setNetworkChangeCallback()
interface INetworkChangeResult {
    isConnected: boolean;
    type: number;
}

// chayns.startNfcDetection()
interface INfcDetectionResult {
    connected: boolean;
    rfid: string;
}

// chayns.selectTapp()
interface ISelectTappConfig {
    id?: number;
    internalName?: string;
    showName?: string;
    position?: number;
}

// chayns.openUrl()
interface IOpenUrlConfig {
    url: string;
    title?: string;
    exclusiveView?: boolean;
    darkenBackground?: boolean;
    fullSize?: boolean;
    width?: number;
}

// chayns.getGeoLocation()
interface IGeoLocationResult {
    longitude: number;
    latitude: number;
}

// chayns.getLocationBeacons()
interface ILocationBeacon {
    id: number;
    pushMessage: string;
    latitude: number;
    longitude: number;
}

// chayns.getBeaconHistory()
interface IBeaconHistory {
    id: number;
    timestamp: number;
}

// chayns.share()
interface IShareConfig {
    title?: string;
    text: string;
    imageUrl?: string;
    sharingApp: number;
    sharingAndroidApp?: string;
}

// chayns.updateNavigation()
interface IUpdateNavigationConfig {
    stateOnly?: boolean;
    updateTapp?: boolean;
}

// chayns.setSpeecToText()
interface ISpeechToTextResult {
    languageCode: string;
    text: string[];
}

// chayns.setSubTapp()
interface ISubTappConfig {
    tappID: number;
    name: string;
    color: string;
    colorText?: string;
    sortID: number;
    icon: string
    callbackURL?: (result: any) => any;
    url: string;
    buttonName: string;
    isExclusiveView?: boolean;
    replaceParent?: boolean;
    boldText?: boolean;
}

// chayns.removeSubTapp()
interface IRemoveSubTappConfig {
    tappID: number;
    close: boolean;
    remove: boolean;
}

// chayns.setHeight()
interface ISetHeightConfig {
    height: number;
    growOnly?: boolean;
    full?: boolean;
    fullViewport?: boolean;
}

// chayns.findSite()
interface ISite {
    appstoreName: string;
    facebookId: string;
    siteId: string;
    locationId: number;
}

/**
 * Basic Functions
 * chayns.intercom
 * interfaces
 */
interface IIntercomConfig {
    text: string;
}

/**
 * UI Functions
 * chayns.dialog
 * interfaces
 */
// chayns.dialog.confirm()
interface IDialogButton {
    text: string;
    buttonType: chayns.dialog.buttonType;
}

// chayns.dialog.date()
interface IDialogDateConfig {
    dateType: chayns.dialog.dateType;
    preSelect?: Date;
    minDate?: Date;
    maxDate?: Date;
}

interface IDialogDateResult {
    timestamp: number;
    buttonType: chayns.dialog.buttonType;
}

// chayns.dialog.select()
interface IDialogSelectConfig {
    title: string;
    message?: string;
    quickfind?: boolean;
    multiselect?: boolean;
    buttons?: any[];		// TODO interface for buttons
    list: IDialogSelectConfigItem[];
}

interface IDialogSelectConfigItem {
    name: string;
    value?: string;
    image?: string;
    isSelected?: boolean;
}

interface IDialogSelectResult {
    buttonType: chayns.dialog.buttonType;
    selection: IDialogSelectResultItem[];
}

interface IDialogSelectResultItem {
    name: string;
    value?: string;
}

// chayns.dialog.input()
interface IDialogInputConfig {
    title: string;
    message?: string;
    placeholderText?: string;
    text?: string;
    buttons?: IDialogButton[];
}

interface IDialogInputResult {
    buttonType: chayns.dialog.buttonType;
    text: string;
}

/**
 * UI Functions
 * chayns.ui.modeswitch
 * interfaces
 */
// chayns.ui.modeswitch.init()
interface IModeSwitchConfig {
    items: IModeSwitchItem[];
    callback: (result: IModeSwitchItem) => void;
    headline?: string;
    preventclose?: boolean;
}

interface IModeSwitchItem {
    name: string;
    value: number;
    default?: boolean;
}

/**
 * UI Functions
 * Floating Button
 * chayns
 * interfaces
 */
// chayns.showFloatingButton()
interface IFloatingConfig {
    text?: string;
    color?: string;
    colorText?: string;
    icon?: string;
}

/**
 * Media Functions
 * Miscellaneous
 * chayns
 * interfaces
 */
// chayns.saveAppointment()
interface ISaveAppointmentConfig {
    name: string;
    location: string;
    description: string;
    start: Date;
    end: Date;
}

/**
 * Utility Functions
 * Miscellaneous
 * chayns.utils
 * interfaces
 */
// chayns.utils.getJwtPayload()
interface IJwtPaylod {
    FacebookUserID: string;
    FirstName: string;
    LastName: string;
    PersonID: string;
    LocationID: number;
    TobitUserID: number;
    LoginType: number;
    isAdmin: boolean;
}

/**
 * Enviroment Variables
 * User
 * interfaces
 */
// chayns.env.user.groups
interface IUserGroup {
    id: number;
    isActive?: boolean;
    isSystemGroup?: boolean;
    name: string;
    showName?: string;
}

/**
 * Enviroment Variables
 * Site
 * interfaces
 */
interface ISiteTapp {
    customUrl: string;
    id: number;
    internalName: string;
    isExclusiveView: boolean;
    isKioskMode: boolean;
    isSubTapp: boolean;
    showName: string;
    sortId: number;
    userGroupIds: number[];
}



interface IGlobalData {
    _result: any;
}

interface IDialogFacebookOptions {
    title: string;
    message?: string;
    quickfind?: number;
    multiselect?: number;
    button?: IDialogFacebookButton[];
    preSelected: number[]; //TODO:  Verify type
}

interface IDialogFacebookButton {
    text: string;
    value: number; //TODO:  Verify type
}

interface IDialogFacebookResult {
    buttonType: number;
    selection: IDialogFacebookResultSelection[];
}

interface IDialogFacebookResultSelection {
    first_name: string;
    last_name: string;
    id: string;
    gender: string;
    name: string;
}

interface IUiTooltipInitConfig {
    tooltipClass:  string,
    preventAnimation: boolean;
}
