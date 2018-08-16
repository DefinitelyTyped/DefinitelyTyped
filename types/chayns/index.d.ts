// Type definitions for chayns 3.1
// Project: https://github.com/TobitSoftware/chayns-js
// Definitions by: Henning Kuehl <https://github.com/HenningKuehl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * Definition file for chayns v3.1
 */
declare namespace chayns {
    /**
     * Getting Started
     * chayns
     *
     */
    let ready: Promise<any>;

    function register(config: RegisterConfig): void;

    /**
     * Basic Functions
     * chayns
     */
    function login(parameters?: string[]): Promise<any>;

    function getUser(config: GetUserConfig): Promise<User>;

    function getUacGroups(siteId: number, updateCache?: boolean): Promise<UacGroup[]>;

    function startInteractionIdentification(config: InteractionIdentificationConfig): Promise<any>;

    function stopInteractionIdentification(): Promise<any>;

    function allowRefreshScroll(): Promise<any>;

    function disallowRefreshScroll(): Promise<any>;

    function showTitleImage(): Promise<any>;

    function hideTitleImage(): Promise<any>;

    function setOnActivateCallback(callback: (tappEvent: number) => any): Promise<any>;

    function setNetworkChangeCallback(callback: (result: NetworkChangeResult) => any, ongoing: boolean): Promise<any>;

    function setNfcCallback(callback: (rfid: string) => any): Promise<any>;

    function removeNfcCallback(): Promise<any>;

    function startNfcDetection(callback: (result: NfcDetectionResult) => any, interval: number, vibrate: boolean): Promise<any>;

    function stopNfcDetection(): Promise<any>;

    function scanQRCode(cameryType?: number, timeout?: number): Promise<any>; // TODO interface for promise result

    function createQRCode(text: string): Promise<string>;

    function showFinetradingQRCode(): Promise<any>;

    function selectTapp(tapp: SelectTappConfig, parameter?: string[]): Promise<any>;

    function openUrl(config: OpenUrlConfig): void;

    function closeUrl(): void;

    function openUrlInBrowser(url: string): void;

    function getGeoLocation(): Promise<GeoLocationResult>;

    function getLocationBeacons(forceReload: boolean): Promise<LocationBeacon[]>;

    function getBeaconHistory(subNumber?: number): Promise<BeaconHistory[]>;

    function getBaseColor(color?: string, colorMode?: number): string;

    function share(config: ShareConfig): Promise<any>;		// TODO interface for promise result

    function getAvailableSharingServices(): Promise<number[]>;

    function navigateBack(): Promise<any>;

    function updateNavigation(tappId?: number, config?: UpdateNavigationConfig): Promise<any>;

    function enableDisplayTimeout(): Promise<any>;

    function disableDisplayTimeout(): Promise<any>;

    function setSpeechToText(callback: (result: SpeechToTextResult) => any, title?: string): Promise<any>;

    function createTappShortcut(name: string, imageUrl: string): Promise<any>;

    function setSubTapp(config: SubTappConfig): void;

    function removeSubTapp(config: RemoveSubTappConfig): void;

    function vibrate(ms: number[]): Promise<any>;

    function setHeight(config: SetHeightConfig): Promise<any>;

    function scrollToY(position: number): Promise<any>;

    function addToWallet(passbook: string): Promise<any>;		// TODO check passbock parameter

    function addScrollListener(callback: (data: any) => any, throttle?: number): Promise<any>;		// TODO interface for callback data

    function setScreenOrientation(orientation: number): Promise<any>;

    function findSite(name: string, skip?: number, take?: number): Promise<Site[]>;

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
    function showFloatingButton(config: FloatingConfig, callback: () => any): void;

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

    function saveAppointment(config: SaveAppointmentConfig): Promise<any>;

    function playSound(url: string, playOnMute?: boolean): Promise<any>;

    function addErrorListener(logFn: (error: any) => Promise<{}>, appName: string): void;

    function getGlobalData(): GlobalData;

    /**
     * chayns.smartShop
     */
    let smartShop: any;

    /**
     * Basic Functions
     * chayns.intercom
     */
    namespace intercom {
        function sendMessageToUser(userId: number, config: IntercomConfig): Promise<any>;		// TODO set interface for promise result

        function sendMessageToGroup(groupId: number, config: IntercomConfig): Promise<any>;	// TODO set interface for promise result

        function sendMessageToPage(config: IntercomConfig): Promise<any>;						// TODO set interface for promise result
    }

    /**
     * Basic Functions
     * chayns.passKit
     */
    namespace passKit {
        function getInstalled(): Promise<any>;						// TODO interface for promise result

        function isInstalled(identifier: string): Promise<any>;		// TODO interface for promise result
    }

    /**
     * Environmental Variables
     * chayns.env
     */
    namespace env {
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
        namespace user {
            let tobitAccessToken: string;

            let facebookAccessToken: string;

            let facebookId: string;

            let id: number;

            let name: string;

            let personId: string;

            let isAuthenticated: boolean;

            let language: string;

            let groups: UserGroup[];
        }

        /**
         * Environmental Variables
         * chayns.env.site
         */
        namespace site {
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

            let tapps: SiteTapp[];

            let title: string;

            let url: string;

            let version: string;

            /**
             * Environmental Variables
             * chayns.env.site.tapp
             */
            namespace tapp {
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
        namespace app {
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
        namespace device {
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
        namespace browser {
            let name: string;

            let version: string;
        }
    }

    /**
     * UI Functions
     * chayns.dialog
     */
    namespace dialog {
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

        function confirm(title: string, message?: string, buttons?: DialogButton[]): Promise<buttonType>;

        function date(config: DialogDateConfig): Promise<DialogDateResult>;

        function select(config: DialogSelectConfig): Promise<DialogSelectResult>;

        function input(config: DialogInputConfig): Promise<DialogInputResult>;

        function facebook(options: DialogFacebookOptions): Promise<DialogFacebookResult>;
    }

    /**
     * chayns.ui
     */
    namespace ui {
        /**
         * UI Functions
         * chayns.ui.modeSwitch
         */
        namespace modeSwitch {
            function init(config: ModeSwitchConfig): void;

            function addItem(item: ModeSwitchItem, index?: number): void;

            function changeMode(item: number | ModeSwitchItem): void;

            function remove(): void;

            function add(): void;
        }

        /**
         * Media Functions
         * chayns.ui.gallery
         */
        namespace gallery {
            function create(id: string, urls: string[]): void;

            function setUrls(id: string, urls: string[]): void;

            function getUrls(id: string): string[];

            function addUrl(id: string, url: string): void;

            function removeUrl(id: string, url: string): void;
        }

        /**
         * chayns.ui.tooltip
         */
        namespace tooltip {
            function init(config: UiTooltipInitConfig, rootElement: any): Promise<boolean>;
        }

        /**
         * chayns.ui.slider
         */
        namespace slider {
            function refreshTrack(): void;
        }
    }

    /**
     * Utility Functions
     * chayns.utils
     */
    namespace utils {
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
        function getJwtPayload(token: string): JwtPaylod;

        function mod(number: number, modulo: number): number;

        function trim(test: string): string;

        function replacePlaceholder(text: string, parameters: any[]): string; // TODO set interface for parameters

        function mixColor(color1: string, color2: string, saturation: number): string;

        function isPresent(parameter: any): boolean;

        function setLevel(level: number): void;

        /**
         * Utility Functions
         * Local Storage
         * chayns.utils.ls
         */
        namespace ls {
            function set(key: string, value: string): void;

            function get(key: string): string;

            function remove(key: string): void;

            function removeAll(): void;
        }

        namespace lang {
            function init(config: any): void;

            function renderTextStrings(): void;

            function get(textString: string): string;

            function translateDomStrings(): void;
        }
    }

    /**
     * chayns.storage
     */
    namespace storage {
        enum accessMode {
            PUBLIC,
            PROTECTED,
            PRIVATE
        }

        function set(key: string, value: any, accessMode?: accessMode, tappIds?: number[]): Promise<any>;

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
interface RegisterConfig {
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
interface GetUserConfig {
    accessToken?: string;
    userId?: number;
    fbId?: string;
    personId?: string;
}

interface User {
    FacebookID: string;
    FirstName: string;
    LastName: string;
    PersonID: string;
    UserFullName: string;
    UserID: number;
}

// chayns.getUacGroups()
interface UacGroup {
    id: number;
    name: string;
    showName: string;
}

// chayns.startInteractionIdentification()
interface InteractionIdentificationConfig {
    duration: number;
    delay?: number;
    callback: any;
    resetOnInteraction?: boolean;
    foregroundColor: string;
    backgroundColor?: string;
}

// chayns.setNetworkChangeCallback()
interface NetworkChangeResult {
    isConnected: boolean;
    type: number;
}

// chayns.startNfcDetection()
interface NfcDetectionResult {
    connected: boolean;
    rfid: string;
}

// chayns.selectTapp()
interface SelectTappConfig {
    id?: number;
    internalName?: string;
    showName?: string;
    position?: number;
}

// chayns.openUrl()
interface OpenUrlConfig {
    url: string;
    title?: string;
    exclusiveView?: boolean;
    darkenBackground?: boolean;
    fullSize?: boolean;
    width?: number;
}

// chayns.getGeoLocation()
interface GeoLocationResult {
    longitude: number;
    latitude: number;
}

// chayns.getLocationBeacons()
interface LocationBeacon {
    id: number;
    pushMessage: string;
    latitude: number;
    longitude: number;
}

// chayns.getBeaconHistory()
interface BeaconHistory {
    id: number;
    timestamp: number;
}

// chayns.share()
interface ShareConfig {
    title?: string;
    text: string;
    imageUrl?: string;
    sharingApp: number;
    sharingAndroidApp?: string;
}

// chayns.updateNavigation()
interface UpdateNavigationConfig {
    stateOnly?: boolean;
    updateTapp?: boolean;
}

// chayns.setSpeecToText()
interface SpeechToTextResult {
    languageCode: string;
    text: string[];
}

// chayns.setSubTapp()
interface SubTappConfig {
    tappID: number;
    name: string;
    color: string;
    colorText?: string;
    sortID: number;
    icon: string;
    callbackURL?(result: any): any;
    url: string;
    buttonName: string;
    isExclusiveView?: boolean;
    replaceParent?: boolean;
    boldText?: boolean;
}

// chayns.removeSubTapp()
interface RemoveSubTappConfig {
    tappID: number;
    close: boolean;
    remove: boolean;
}

// chayns.setHeight()
interface SetHeightConfig {
    height: number;
    growOnly?: boolean;
    full?: boolean;
    fullViewport?: boolean;
}

// chayns.findSite()
interface Site {
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
interface IntercomConfig {
    text: string;
}

/**
 * UI Functions
 * chayns.dialog
 * interfaces
 */
// chayns.dialog.confirm()
interface DialogButton {
    text: string;
    buttonType: chayns.dialog.buttonType;
}

// chayns.dialog.date()
interface DialogDateConfig {
    dateType: chayns.dialog.dateType;
    preSelect?: Date;
    minDate?: Date;
    maxDate?: Date;
}

interface DialogDateResult {
    timestamp: number;
    buttonType: chayns.dialog.buttonType;
}

// chayns.dialog.select()
interface DialogSelectConfig {
    title: string;
    message?: string;
    quickfind?: boolean;
    multiselect?: boolean;
    buttons?: any[];		// TODO interface for buttons
    list: DialogSelectConfigItem[];
}

interface DialogSelectConfigItem {
    name: string;
    value?: string;
    image?: string;
    isSelected?: boolean;
}

interface DialogSelectResult {
    buttonType: chayns.dialog.buttonType;
    selection: DialogSelectResultItem[];
}

interface DialogSelectResultItem {
    name: string;
    value?: string;
}

// chayns.dialog.input()
interface DialogInputConfig {
    title: string;
    message?: string;
    placeholderText?: string;
    text?: string;
    buttons?: DialogButton[];
}

interface DialogInputResult {
    buttonType: chayns.dialog.buttonType;
    text: string;
}

/**
 * UI Functions
 * chayns.ui.modeswitch
 * interfaces
 */
// chayns.ui.modeswitch.init()
interface ModeSwitchConfig {
    items: ModeSwitchItem[];
    callback(result: ModeSwitchItem): void;
    headline?: string;
    preventclose?: boolean;
}

interface ModeSwitchItem {
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
interface FloatingConfig {
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
interface SaveAppointmentConfig {
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
interface JwtPaylod {
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
interface UserGroup {
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
interface SiteTapp {
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

interface GlobalData {
    _result: any;
}

interface DialogFacebookOptions {
    title: string;
    message?: string;
    quickfind?: number;
    multiselect?: number;
    button?: DialogFacebookButton[];
    preSelected: number[]; // TODO:  Verify type
}

interface DialogFacebookButton {
    text: string;
    value: number; // TODO:  Verify type
}

interface DialogFacebookResult {
    buttonType: number;
    selection: DialogFacebookResultSelection[];
}

interface DialogFacebookResultSelection {
    first_name: string;
    last_name: string;
    id: string;
    gender: string;
    name: string;
}

interface UiTooltipInitConfig {
    tooltipClass: string;
    preventAnimation: boolean;
}
