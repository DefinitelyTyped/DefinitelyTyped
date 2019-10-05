// Type definitions for appboy-web-sdk 2.4
// Project: https://github.com/Appboy/appboy-web-sdk#readme
// Definitions by: Jared Rolt <https://github.com/jaredrolt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface DeviceProperties {
    readonly BROWSER: string;
    readonly BROWSER_VERSION: string;
    readonly OS: string;
    readonly RESOLUTION: string;
    readonly LANGUAGE: string;
    readonly TIME_ZONE: string;
    readonly USER_AGENT: string;
}

export interface Card {
    dismissCard(): void;
    removeAllSubscriptions(): void;
    removeSubscription(subscriptionGuid: string): void;
    subscribeToClickedEvent(subscriber: () => void): string;
    subscribeToDismissedEvent(subscriber: () => void): string;
}

export interface ClassicCard<Extras = {}> extends Card {
    id: string;
    viewed: boolean;
    title: string;
    imageUrl: string;
    description: string;
    created: Date;
    updated: Date;
    categories: string[];
    expiresAt: Date;
    url: string;
    linkText: string;
    aspectRatio: string;
    extras: Extras;
    pinned: boolean;
    dismissible: boolean;
    clicked: boolean;
}

export interface CaptionedImage<Extras = {}> extends Card {
    id: string;
    viewed: boolean;
    title: string;
    imageUrl: string;
    description: string;
    created: Date;
    updated: Date;
    categories: string[];
    expiresAt: Date;
    url: string;
    linkText: string;
    aspectRatio: string;
    extras: Extras;
    pinned: boolean;
    dismissible: boolean;
    clicked: boolean;
}

export interface Banner<Extras = {}> extends Card {
    id: string;
    viewed: boolean;
    imageUrl: string;
    created: Date;
    updated: Date;
    categories: string[];
    expiresAt: Date;
    url: string;
    linkText: string;
    aspectRatio: string;
    extras: Extras;
    pinned: boolean;
    dismissible: boolean;
    clicked: boolean;
}

export interface ContentCards<T = ClassicCard|CaptionedImage|Banner> {
    cards: T[];
    lastUpdated: Date|null;
    getUnviewedCardCount(): number;
}

export interface Feed<T = ClassicCard|CaptionedImage|Banner> {
    cards: T[];
    lastUpdated: Date|null;
    getUnreadCardCount(): number;
}

export interface ControlCard<Extras = {}> extends Card {
    id: string;
    viewed: boolean;
    updated: Date;
    expiresAt: Date;
    extras: Extras;
    pinned: boolean;
}

export enum ClickAction {
    NEWS_FEED = 'NEWS_FEED',
    URI = 'URI',
    NONE = 'NONE'
}

export enum CropType {
    CENTER_CROP = 'CENTER_CROP',
    FIT_CENTER = 'FIT_CENTER'
}

export enum DismissType {
    AUTO_DISMISS = 'AUTO_DISMISS',
    MANUAL = 'MANUAL'
}

export enum ImageStyle {
    TOP = 'TOP',
    GRAPHIC = 'GRAPHIC'
}

export enum OpenTarget {
    NONE = 'NONE',
    BLANK = 'BLANK'
}

export enum Orientation {
    PORTRAIT = 'PORTRAIT',
    LANDSCAPE = 'LANDSCAPE'
}

export enum SlideFrom {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
}

export enum TextAlignment {
    START = 'START',
    CENTER = 'CENTER',
    END = 'END'
}

export class Button {
    constructor(
      text: string,
      backgroundColor?: number,
      textColor?: number,
      borderColor?: number,
      clickAction?: ClickAction,
      uri?: string,
      id?: number
    );
    removeAllSubscriptions(): void;
    removeSubscription(subscriptionGuid: string): void;
    subscribeToClickedEvent(subscriber: () => void): string;
    subscribeToDismissedEvent(subscriber: () => void): string;
}

export class InAppMessage {
    readonly ClickAction: ClickAction;
    readonly CropType: CropType;
    readonly DismissType: DismissType;
    readonly ImageStyle: ImageStyle;
    readonly OpenTarget: OpenTarget;
    readonly Orientation: Orientation;
    readonly SlideFrom: SlideFrom;
    readonly TextAlignment: TextAlignment;
    closeMessage(): void;
    removeAllSubscriptions(): void;
    removeSubscription(subscriptionGuid: string): void;
    subscribeToClickedEvent(subscriber: () => void): string;
    subscribeToDismissedEvent(subscriber: () => void): string;
}

export class FullScreenMessage extends InAppMessage {
    constructor(
      message: string,
      messageAlignment?: TextAlignment,
      extras?: string[],
      campaignId?: string,
      cardId?: string,
      triggerId?: string,
      clickAction?: ClickAction,
      uri?: string,
      openTarget?: OpenTarget,
      dismissType?: DismissType,
      duration?: number,
      icon?: string,
      imageUrl?: string,
      imageStyle?: ImageStyle,
      iconColor?: number,
      iconBackgroundColor?: number,
      backgroundColor?: number,
      textColor?: number,
      closeButtonColor?: number,
      animateIn?: boolean,
      animateOut?: boolean,
      header?: string,
      headerAlignment?: TextAlignment,
      headerTextColor?: number,
      frameColor?: number,
      buttons?: Button[],
      cropType?: CropType,
      orientation?: Orientation,
      htmlId?: string,
      css?: string
    );
}

export class ModalMessage extends InAppMessage {
    constructor(
      message: string,
      messageAlignment?: TextAlignment,
      extras?: string[],
      campaignId?: string,
      cardId?: string,
      triggerId?: string,
      clickAction?: ClickAction,
      uri?: string,
      openTarget?: OpenTarget,
      dismissType?: DismissType,
      duration?: number,
      icon?: string,
      imageUrl?: string,
      imageStyle?: ImageStyle,
      iconColor?: number,
      iconBackgroundColor?: number,
      backgroundColor?: number,
      textColor?: number,
      closeButtonColor?: number,
      animateIn?: boolean,
      animateOut?: boolean,
      header?: string,
      headerAlignment?: TextAlignment,
      headerTextColor?: number,
      frameColor?: number,
      buttons?: Button[],
      cropType?: CropType,
      htmlId?: string,
      css?: string
    );
}

export class HtmlMessage extends InAppMessage {
    constructor(
      message: string,
      extras?: string[],
      campaignId?: string,
      cardId?: string,
      triggerId?: string,
      dismissType?: DismissType,
      duration?: number,
      animateIn?: boolean,
      animateOut?: boolean,
      frameColor?: number,
      htmlId?: string,
      css?: string
    );
}

export class ControlMessage {
    constructor(triggerId?: string);
    triggerId?: string;
}

export enum Genders {
    MALE = 'm',
    FEMALE = 'f',
    OTHER = 'o',
    UNKNOWN = 'u',
    NOT_APPLICAPLE = 'n',
    PREFER_NOT_TO_SAY = 'p'
}

export enum NotificationSubscriptionTypes {
    OPTED_IN = 'opted_id',
    SUBSCRIBED = 'subscribed',
    UNSUBSCRIBED = 'unsubscribed',
}

export interface User {
    addAlias(alias: string, label: string): boolean;
    addToCustomAttributeArray(key: string, value: string): boolean;
    getUserId(callback: (userId: string) => void): void;
    incrementCustomUserAttribute(key: string, incrementValue?: number): boolean;
    removeFromCustomAttributeArray(key: string, value: string): boolean;
    setAvatarImageUrl(avatarImageUrl: string): boolean;
    setCountry(country: string|null): boolean;
    setCustomLocationAttribute(key: string, latitude: number, longitude: number): boolean;
    setCustomUserAttribute(key: string, value: string|boolean|Date|string[]|null): boolean;
    setDateOfBirth(year: number|null, month: number|null, day: number|null): boolean;
    setEmail(email: string|null): boolean;
    setEmailNotificationSubscriptionType(notificationSubscriptionType: NotificationSubscriptionTypes): boolean;
    setFirstName(firstName: string|null): boolean;
    setGender(gender: Genders|null): boolean;
    setHomeCity(homeCity: string|null): boolean;
    setLanguage(language: string|null): boolean;
    setLastKnownLocation(latitude: number, longitude: number, accuracy?: number, altitude?: number, altitudeAccuracy?: number): boolean;
    setLastName(lastName: string|null): boolean;
    setPhoneNumber(phoneNumber: string|null): boolean;
    setPushNotificationSubscriptionType(notificationSubscriptionType: NotificationSubscriptionTypes): boolean;
}

export interface Options {
    allowCrawlerActivity: boolean;
    allowUserSuppliedJavascript: boolean;
    appVersion: string;
    baseUrl: string;
    contentSecurityNonce: string;
    devicePropertyWhitelist: Partial<DeviceProperties>;
    disablePushTokenMaintenance: boolean;
    doNotLoadFontAwesome: boolean;
    enableHtmlInAppMessages: boolean;
    enableLogging: boolean;
    localization: string;
    manageServiceWorkerExternally: boolean;
    minimumIntervalBetweenTriggerActionsInSeconds: number;
    noCookies: boolean;
    openInAppMessagesInNewTab: boolean;
    openCardsInNewTab: boolean;
    requireExplicitInAppMessageDismissal: boolean;
    safariWebsitePushId: string;
    serviceWorkerLocation: string;
    sessionTimeoutInSeconds: number;
}

export interface AppBoy {
    DeviceProperties: DeviceProperties;
    changeUser(userId: string): void;
    destroy(): void;
    getCachedContentCards(): ContentCards;
    getCachedFeed(): Feed;
    getDeviceId(callback: (deviceId: string) => void): void;
    getUser(): User;
    initialize(apiKey: string, options?: Partial<Options>): boolean;
    isPushBlocked(): boolean;
    isPushGranted(yesCallback: () => void, noCallback: () => void): void; // DEPRECATED; use isPushPermissionGranted instead.
    isPushPermissionGranted(): boolean;
    isPushSupported(): boolean;
    logCardClick(card: Card, forContentCards?: boolean): boolean;
    logCardDismissal(card: Card): boolean;
    logCardImpressions(contentCards: Card[], forContentCards?: boolean): boolean;
    logContentCardsDisplayed(): void;
    logCustomEvent(eventName: string, eventProperties?: object): boolean;
    logFeedDisplayed(): void;
    logInAppMessageButtonClick(button: Button, inAppMessage: InAppMessage): boolean;
    logInAppMessageClick(inAppMessage: InAppMessage): boolean;
    logInAppMessageHtmlClick(inAppMessage: HtmlMessage, buttonId?: string, url?: string): boolean;
    logInAppMessageImpression(inAppMessage: InAppMessage|ControlMessage): boolean;
    logPurchase(productId: string, price: number, currencyCode?: string, quantity?: number, purchaseProperties?: object): boolean;
    openSession(): void;
    registerAppboyPushMessages(successCallback?: (endpoint: string, publicKey: string, userAuth: string) => void, deniedCallback?: (isTemporary: boolean) => void): void;
    removeAllSubscriptions(): void;
    removeSubscription(subscriptionGuid: string): void;
    requestContentCardsRefresh(): void;
    requestFeedRefresh(): void;
    requestImmediateDataFlush(): void;
    resumeWebTracking(): void;
    setLogger(loggerFunction: (message?: string) => void): void;
    stopWebTracking(): void;
    subscribeToContentCardsUpdates(subscriber: (contentCards: ContentCards) => void): string;
    subscribeToFeedUpdates(subscriber: (feed: Feed) => void): string;
    subscribeToInAppMessage(callback: (inAppMesssage: InAppMessage|ControlMessage) => void): string;
    subscribeToNewInAppMessages(subscriber: (inAppMessages: Array<InAppMessage|ControlMessage>) => Array<InAppMessage|ControlMessage>): string; // DEPRECATED; use subscribeToInAppMessage instead.
    toggleAppboyLogging(): void;
    trackLocation(): void;
    unregisterAppboyPushMessages(successCallback?: () => void, errorCallback?: () => void): void;
    wipeData(): void;
}

export default AppBoy;
