// Type definitions for mraid 1.0
// Project: https://github.com/sumn2u/mraid-type-definitions#readme
// Definitions by: Suman Kunwar <https://github.com/sumn2u>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface MRAID1 {
    getVersion(): MRAIDVersion;
    addEventListener(name: string, eventHandler: MRAIDEventHandlers): void;
    removeEventListener(name: string, eventHandler?: MRAIDEventHandlers): void;
    getState(): MRAIDState;
    // For full compatibility, open should be called from inside a DOM interaction event handler
    open(url: string): void;
    close(): void;
    // For full compatibility, expand should call from inside a touch/mouse/click event handler
    // url deprecated in MRAID 3.0, should still be honoured by SDKS for backwards compatibility
    expand(url?: string): void;
    getExpandProperties(): MRAIDExpandProperties;
    // For full compatibility with all SDKs, clients should shallow copy getExpandProperties result into an empty object, apply changes and then pass into setExpandProperties
    setExpandProperties(newValues: Partial<MRAIDExpandProperties>): void;
    getPlacementType(): MRAIDPlacementType;
    playVideo(url: string): void;
    // Deprecated in MRAID 3.0; should still be provided by SDKs for backwards compatibility, but will not be honoured
    useCustomClose(newValue: boolean): void;
    // Deprecated in MRAID 3.0; should still be provided by SDKs for backwards compatibility
    isViewable(): boolean;
}
export interface MRAID2 extends MRAID1 {
    supports(feature: MRAIDFeature): boolean;
    resize(): void;
    storePicture(url: string): void;
    createCalendarEvent(parameters: MRAIDCalendarEvent): void;
    getOrientationProperties(): MRAIDOrientationProperties;
    // For full compatibility with all SDKs, clients should shallow copy getOrientationProperties result into an empty object, apply changes and then pass into setOrientationProperties
    setOrientationProperties(newValues: Partial<MRAIDOrientationProperties>): void;
    getCurrentPosition(): MRAIDRect;
    getDefaultPosition(): MRAIDRect;
    getMaxSize(): MRAIDSize;
    getScreenSize(): MRAIDSize;
    getResizeProperties(): MRAIDExpandProperties;
    // For full compatibility with all SDKs, clients should shallow copy getResizeProperties result into an empty object, apply changes and then pass into setResizeProperties
    setResizeProperties(newValues: Partial<MRAIDExpandProperties>): void;
}
export interface MRAID2VideoAddendum extends MRAID2 {
    initVpaid(vpaidObject: MRAIDVPAIDObject): void;
}
export interface MRAID3 extends MRAID2 {
    unload(): void;
    getCurrentAppOrientation(): MRAIDAppOrientationState;
    getLocation(): MRAIDLocationState | undefined;
}
type MRAID = MRAID1 | MRAID2 | MRAID2VideoAddendum | MRAID3;
type MRAIDVersion = "1.0" | "2.0" | "3.0";
export type MRAIDENVDeclaration = Readonly<{
    version: MRAIDVersion;
    sdk?: string;
    sdkVersion?: string;
    appId?: string;
    ifa?: string;
    limitAdTracking?: boolean;
    coppa?: boolean;
}>;
export interface MRAIDEventHandlers {
    // MRAID 1.0
    error: (message: string, action: keyof MRAID) => void;
    ready: () => void;
    stateChange: (state: MRAIDState) => void;
    // MRAID 2.0
    sizeChange: (width: number, height: number) => void;
    // Deprecated in MRAID 3.0; may no longer be dispatched by 3.0 SDKs when exposure changes
    viewableChange: (isViewable: boolean) => void;
    // MRAID 3.0
    exposureChange: (exposedPercentage: number, visibleRectangle: MRAIDRect, occlusionRectangles: MRAIDRect[] | null) => void;
    audioVolumeChange: (newPercentage: number) => void;
    adAction: (action: keyof MRAID) => void;
}
type MRAIDFeature = "sms" | "tel" | "calendar" | "storePicture" | "inlineVideo" | "vpaid" | "location"; // Does not include supports features from MRAID 1.0 "Candidates for Future Versions" Addendum
type MRAIDPlacementType = "inline" | "interstitial";
type MRAIDState = "loading" | "default" | "expanded" | "resized" | "hidden";
type MRAIDOrientation = "portrait" | "landscape";
export interface MRAIDOrientationProperties {
    allowOrientationChange: boolean;
    forceOrientation: MRAIDOrientation | "none";
}
export interface MRAIDAppOrientationState {
    orientation: MRAIDOrientation;
    locked: boolean;
}
export interface MRAIDPosition {
    x: number;
    y: number;
}
export interface MRAIDSize {
    width: number;
    height: number;
}
type MRAIDRect = MRAIDPosition & MRAIDSize;
type MRAIDExpandProperties = MRAIDSize & {
    // Deprecated in MRAID 3.0; should still be provided by SDKs for backwards compatibility, but may not be honoured
    useCustomClose: boolean;
    readonly isModal: boolean;
};
type MRAIDResizeProperties = MRAIDSize & {
    width: number;
    height: number;
    allowOffscreen: boolean;
    // Deprecated in MRAID 3.0; should still be provided by SDKs for backwards compatibility, but may not be honoured
    customClosePosition?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
};
declare enum MRAIDLocationType {
    LocationServices = 1,
    IPGeoLocation = 2,
    UserProvided = 3
}
export interface MRAIDLocationState {
    lat: number;
    lon: number;
    type: MRAIDLocationType;
    accuracy: number | undefined;
    lastfix: number;
    ipservice: string | undefined;
}
export interface MRAIDCalendarEvent {
    id?: string;
    description: string;
    location?: string;
    summary?: string;
    start: string;
    end?: string;
    status?: string;
    transparency?: string;
    recurrence?: any;
    reminder?: string;
}
// See VPAID 2.0 spec for further method definitions, but only the declared methods are required by MRAID Video Addendum
type MRAIDVPAIDObject = {
    [key: string]: any;
} & {
    subscribe(fn: MRAIDVPAIDEventHandlers, event: string, listenerScope?: any): void;
    unsubscribe(fn: MRAIDVPAIDEventHandlers, event: string): void;
    startAd(): void;
    getAdDuration(): number;
    getAdRemainingTime(): number;
};
export interface MRAIDVPAIDEventHandlers {
    AdClickThru: (url: string, id: string, playerHandles: boolean) => void;
    AdError: (message: string) => void;
    AdImpression: () => void;
    AdPaused: () => void;
    AdPlaying: () => void;
    AdVideoStart: () => void;
    AdVideoFirstQuartile: () => void;
    AdVideoMidpoint: () => void;
    AdVideoThirdQuartile: () => void;
    AdVideoComplete: () => void;
}

export {};
