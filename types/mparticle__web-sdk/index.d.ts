// Type definitions for mParticle/web-sdk SDK 2.11
// Project: https://github.com/mParticle/mparticle-web-sdk
// Definitions by: Alex Sapountzis <https://github.com/asap>
//                 Robert Ing <https://github.com/rmi22186>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace mParticle;

export const CommerceEventType: {
    ProductAddToCart: number;
    ProductAddToWishlist: number;
    ProductCheckout: number;
    ProductCheckoutOption: number;
    ProductClick: number;
    ProductImpression: number;
    ProductPurchase: number;
    ProductRefund: number;
    ProductRemoveFromCart: number;
    ProductRemoveFromWishlist: number;
    ProductViewDetail: number;
    PromotionClick: number;
    PromotionView: number;
};

export interface config {
    isDevelopmentMode?: boolean;
    identifyRequest?: IdentifyRequest;
    identityCallback?: IdentityCallback;
    dataPlan?: dataPlan;
    appVersion?: string;
    appName?: string;
    logLevel?: 'verbose' | 'warning' | 'none';
    sessionTimeout?: number;
    useCookieStorage?: boolean;
    maxCookieSize?: number;
    cookieDomain?: string;
    customFlags?: object;
    /**
     * @warning only change workspaceToken if you are absolutely sure you know what you are doing
     */
    workspaceToken?: string;
    /**
     * @warning only change requiredWebviewBridgeName if you are absolutely sure you know what you are doing
     */
    requiredWebviewBridgeName?: string;
    /**
     * @warning only change minWebviewBridgeVersion if you are absolutely sure you know what you are doing
     */
    minWebviewBridgeVersion?: 1 | 2;
}

export interface dataPlan {
    planId: string;
    planVersion?: number;
}

export function endSession(): void;
export function getAppName(): string;
export function getAppVersion(): string;
export function getDeviceId(): string;
export function getVersion(): string;

/**
 * @warning You should only use mParticle.init if you are in a self-hosted environment.
 */
export function init(apiKey: string, config?: config, instanceName?: string): void;
export function logError(error: string | errorObject, attrs?: sdkEventAttrs): void;
export function logEvent(eventName: string, eventType?: number, eventInfo?: sdkEventAttrs, customFlags?: sdkEventCustomFlags): void;
export function logForm(selector: string | HTMLElement, eventName: string, eventType: number, eventInfo?: sdkEventAttrs): void;
export function logLink(selector: string | HTMLElement, eventName: string, eventType: number, eventInfo?: sdkEventAttrs): void;
export function logPageView(eventName: string, attrs?: sdkEventAttrs, customFlags?: sdkEventCustomFlags): void;
export function ready(func: () => any): void;
export function setAppName(name: string): void;
export function setAppVersion(version: string): void;
export function setLogLevel(newLogLevel: 'verbose' | 'warning' | 'none'): void;
export function setOptOut(isOptingOut: boolean): void;
export function setPosition(lat: number, lng: number): void;
export function setSessionAttribute(key: string, value: string | number | boolean | null): void;
export function startNewSession(): void;
export function startTrackingLocation(callback?: TrackLocationCallback): void;
export function stopTrackingLocation(): void;
export function logBaseEvent(event: BaseEvent): void;
export function upload(): void;

// Future optional changes once we migrate all core SDK files to TS
// export function addForwarder
// export function configurePixel

export namespace Consent {
    function createConsentState(): ConsentState;
    function createGDPRConsent(
        consented: boolean,
        timestamp: number,
        consentDocument: string,
        location: string,
        hardwareId: string,
    ): PrivacyConsentState;
    function createCCPAConsent(
        consented: boolean,
        timestamp: number,
        consentDocument: string,
        location: string,
        hardwareId: string,
    ): PrivacyConsentState;
}

export interface ConsentState {
    setGDPRConsentState: (gdprConsentState: GDPRConsentState) => ConsentState;
    setCCPAConsentState: (ccpaConsentState: PrivacyConsentState) => ConsentState;
    addGDPRConsentState: (purpose: string, gdprConsent: PrivacyConsentState) => ConsentState;
    getGDPRConsentState: () => GDPRConsentState;
    getCCPAConsentState: () => PrivacyConsentState;
    removeGDPRConsentState: (purpose: string) => ConsentState;
    removeCCPAConsentState: () => ConsentState;
}

export interface GDPRConsentState {
    [key: string]: PrivacyConsentState;
}
export interface PrivacyConsentState {
    Consented: boolean;
    Timestamp: number;
    ConsentDocument: string;
    Location: string;
    HardwareId: string;
}

export namespace EventType {
    const Location: number;
    const Navigation: number;
    const Other: number;
    const Search: number;
    const Social: number;
    const Transaction: number;
    const Unknown: number;
    const UserContent: number;
    const UserPreference: number;
}

export namespace Identity {
    // FIX ALIAS USER CALLBACK
    function aliasUsers(aliasRequest: UserAliasObject, callback?: AliasUsersCallback): void;
    function createAliasRequest(sourceUser: User, destinationUser: User): any;
    //
    function getCurrentUser(): User;
    function getUser(mpid: string): User;
    function getUsers(): User[];
    function identify(identityApiData: IdentityApiData, callback?: IdentityCallback): void;
    function login(identityApiData: IdentityApiData, callback?: IdentityCallback): void;
    function logout(identityApiData: IdentityApiData, callback?: IdentityCallback): void;
    function modify(identityApiData: IdentityApiData, callback?: IdentityCallback): void;
    const HTTPCODES: HTTPCodes;
}

export interface HTTPCodes {
    noHttpCoverage: -1;
    activeIdentityRequest: -2;
    activeSession: -3;
    validationIssue: -4;
    nativeIdentityRequest: -5;
}

export namespace IdentityType {
    const CustomerId: number;
    const Email: number;
    const Facebook: number;
    const FacebookCustomAudienceId: number;
    const Google: number;
    const Microsoft: number;
    const Other: number;
    const Other2: number;
    const Other3: number;
    const Other4: number;
    const Twitter: number;
    const Yahoo: number;
}

export namespace ProductActionType {
    const AddToCart: number;
    const AddToWishlist: number;
    const Checkout: number;
    const CheckoutOption: number;
    const Click: number;
    const Purchase: number;
    const Refund: number;
    const RemoveFromCart: number;
    const RemoveFromWishlist: number;
    const Unknown: number;
    const ViewDetail: number;
}

export enum ProductActionTypeEnums {
    Unknown = 0,
    AddToCart = 1,
    RemoveFromCart = 2,
    Checkout = 3,
    CheckoutOption = 4,
    Click = 5,
    ViewDetail = 6,
    Purchase = 7,
    Refund = 8,
    AddToWishlist = 9,
    RemoveFromWishlist = 10,
}

export namespace PromotionType {
    const PromotionClick: number;
    const PromotionView: number;
    const Unknown: number;
}

export namespace eCommerce {
    function createImpression(name: string, product: Product | Product[]): Impression;
    function createProduct(
        name: string,
        sku: string,
        price: number,
        quantity?: number,
        variant?: string,
        category?: string,
        brand?: string,
        position?: number,
        coupon?: string,
        attributes?: sdkEventAttrs,
    ): Product;
    function createPromotion(id: string, creative?: string, name?: string, position?: number): Promotion;
    function createTransactionAttributes(
        id: string | number,
        affiliation: string,
        couponCode: string,
        revenue: number,
        shipping: number,
        tax: number,
    ): TransactionAttributes;
    function logCheckout(
        step: number,
        options?: string,
        attrs?: sdkEventAttrs,
        customFlags?: sdkEventCustomFlags,
    ): void;
    function logImpression(impression: Impression[] | Impression, attrs?: object, customFlags?: object): void;
    function logProductAction(
        productActionType: ProductActionTypeEnums,
        product: Product[] | Product,
        attrs?: sdkEventAttrs,
        customFlags?: sdkEventCustomFlags,
    ): void;
    function logPromotion(type: number, promotion: Promotion, attrs?: sdkEventAttrs, customFlags?: sdkEventCustomFlags): void;
    function logPurchase(
        transactionAttributes: object,
        product: Product[] | Product,
        clearCart: boolean,
        attrs: object,
        customFlags: object,
    ): void;
    function logRefund(
        transactionAttributes: TransactionAttributes,
        product: Product[] | Product,
        clearCart: boolean,
        attrs: object,
        customFlags: object,
    ): void;
    function setCurrencyCode(code: string): void;

    namespace Cart {
        /**
         * @deprecated Cart persistence in mParticle has been deprecated. Please use mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToCart, [products])
         */
        function add(product: object, logEventBoolean: boolean): void;
        /**
         * @deprecated Cart persistence in mParticle has been deprecated.
         */
        function clear(): void;
        /**
         * @deprecated Cart persistence in mParticle has been deprecated. Please use mParticle.eCommerce.logProductAction(mParticle.ProductActionType.RemoveFromCart, [products])
         */
        function remove(product: object, logEventBoolean: boolean): void;
    }
}

export interface IdentifyRequest {
    userIdentities: UserIdentities;
}

export interface User {
    getUserIdentities: () => UserIdentities;
    getMPID: () => string;
    setUserTag: (tag: string) => void;
    removeUserTag: (tag: string) => void;
    setUserAttribute: (key: string, value: string) => void;
    setUserAttributes: (attributeObject: object) => void;
    removeUserAttribute: (key: string) => void;
    setUserAttributeList: (key: string, value: any[]) => void;
    removeAllUserAttributes: () => void;
    getUserAttributesLists: () => object;
    getAllUserAttributes: () => object;
    /**
     * @deprecated Cart persistence in mParticle has been deprecated
     */
    getCart: () => Cart;
    getConsentState: () => ConsentState;
    setConsentState: (ConsentState: ConsentState) => void;
    isLoggedIn: () => boolean;
    getLastSeenTime: () => number;
    getFirstSeenTime: () => number;
}

export interface UserIdentities {
    customerid?: string;
    email?: string;
    other?: string;
    other2?: string;
    other3?: string;
    other4?: string;
    other5?: string;
    other6?: string;
    other7?: string;
    other8?: string;
    other9?: string;
    other10?: string;
    mobile_number?: string;
    phone_number_2?: string;
    phone_number_3?: string;
    facebook?: string;
    facebookcustomaudienceid?: string;
    google?: string;
    twitter?: string;
    microsoft?: string;
    yahoo?: string;
}

export interface Cart {
    /**
     * @deprecated Cart persistence in mParticle has been deprecated. Please use mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToCart, [products])
     */
    add: (product: Product, logEventBoolean?: boolean) => void;
    /**
     * @deprecated Cart persistence in mParticle has been deprecated. Please use mParticle.eCommerce.logProductAction(mParticle.ProductActionType.RemoveFromCart, [products])
     */
    remove: (product: Product, logEventBoolean?: boolean) => void;
    /**
     * @deprecated Cart persistence in mParticle has been deprecated.
     */
    clear: () => void;
    /**
     * @deprecated Cart persistence in mParticle has been deprecated.
     */
    getCartProducts: () => Product[];
}

export interface Product {
    name: string;
    sku: string;
    price: number;
    quantity?: number;
    variant?: string;
    category?: string;
    brand?: string;
    position?: number;
    coupon?: string;
    attributes?: object;
}

export interface TransactionAttributes {
    Id: string | number;
    Affiliation?: string;
    CouponCode?: string;
    Revenue?: number;
    Shipping?: string;
    Tax?: number;
}

export interface Impression {
    name: string;
    product: Product;
}

export interface Promotion {
    id: string;
    creative?: string;
    name?: string;
    position?: number;
}

export interface IdentityApiData {
    userIdentities: UserIdentities;
}

export interface Callback {
    (): void;
}

export interface Location {
    coords: {
        latitude: number;
        longitude: number;
    };
    timestamp: number;
}

export interface TrackLocationCallback {
    (location: Location): void;
}

export interface BaseEvent {
    data: object;
    name: string;
    eventType: number;
    messageType: number;
    toEventAPIObject?: () => object;
}
export interface sdkEventAttrs {
    [key: string]: number | string | boolean | null | undefined;
}

export interface sdkEventCustomFlags {
    [key: string]: number | string | boolean | any[] | object;
}

export interface integrationAttributeAttrs {
    [key: string]: string;
}

export interface errorObject {
    name: string;
    message: string;
    stack: string;
}

export interface IdentityCallback {
    (result: IdentityResult): void;
}

export interface IdentityResult {
    httpCode: HTTPCodes;
    getPreviousUser(): User;
    getUser(): User;
    body: IdentityResultBody;
}

export interface IdentityResultBody {
    context: string | null;
    is_ephemeral: boolean;
    is_logged_in: boolean;
    // matched_identities should be UserIdentities + mpid, for not keep as object
    matched_identities: object;
}

export interface UserAliasObject {
    destinationMpid: string;
    sourceMpid: string;
    startTime: number;
    endTime: number;
}

export interface AliasUsersCallback {
    (result: {
        httpCode: number,
        message: string
    }): void;
}
