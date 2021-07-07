// Type definitions for mParticle/web-sdk SDK 2.12
// Project: https://github.com/mParticle/mparticle-web-sdk
// Definitions by: Alex Sapountzis <https://github.com/asap>
//                 Robert Ing <https://github.com/rmi22186>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

export as namespace mParticle;
export {};
export interface MPConfiguration {
    isDevelopmentMode?: boolean;
    identifyRequest?: IdentifyRequest;
    identityCallback?: IdentityCallback;
    dataPlan?: DataPlanConfig;
    appVersion?: string;
    appName?: string;
    logLevel?: 'verbose' | 'warning' | 'none';
    logger?: Logger;
    sessionTimeout?: number;
    useCookieStorage?: boolean;
    maxCookieSize?: number;
    cookieDomain?: string;
    customFlags?: SDKEventCustomFlags;
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

export interface Logger {
    error?: (error: string) => void;
    warning?: (error: string) => void;
    verbose?: (error: string) => void;
}
export interface SDKEventCustomFlags {
    [key: string]:
        | number
        | string
        | boolean
        | unknown[]
        | Record<string, unknown>;
}
export interface DataPlanConfig {
    planId: string;
    planVersion?: number;
}

interface EndSession {
    (): void;
}
interface GetAppName {
    (): string;
}
interface GetAppVersion {
    (): string;
}
interface GetDeviceId {
    (): string;
}
interface GetVersion {
    (): string;
}

interface Init {
    (apiKey: string, config: MPConfiguration, instanceName?: string): void;
}

interface LogError {
    (error: string | errorObject, attrs?: SDKEventAttrs): void;
}

interface LogEvent {
    (
        eventName: string,
        eventType?: EventType,
        eventInfo?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
    ): void;
}

interface LogForm {
    (
        selector: string | HTMLElement,
        eventName: string,
        eventType?: EventType,
        eventInfo?: SDKEventAttrs,
    ): void;
}

interface LogLink {
    (
        selector: string | HTMLElement,
        eventName: string,
        eventType?: EventType,
        eventInfo?: SDKEventAttrs,
    ): void;
}

interface LogPageView {
    (
        eventName?: string,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
    ): void;
}
interface Ready {
    (callback: () => void): void;
}
interface Reset {
    (): void;
}
interface SetAppName {
    (name: string): void;
}
interface SetAppVersion {
    (version: string): void;
}
interface SetLogLevel {
    (newLogLevel: 'verbose' | 'warning' | 'none'): void;
}
interface SetOptOut {
    (isOptingOut: boolean): void;
}
interface SetPosition {
    (lat: number, lng: number): void;
}
interface SetSessionAttribute {
    (key: string, value: string | number | boolean | null): void;
}
interface StartNewSession {
    (): void;
}
interface StartTrackingLocation {
    (callback?: TrackLocationCallback): void;
}

interface StopTrackingLocation {
    (): void;
}

interface LogBaseEvent {
    (event: BaseEvent): void;
}
interface Upload {
    (): void;
}

interface CreateConsentState {
    (): ConsentState;
}
interface CreateGDPRConsent {
    (
        consented: boolean,
        timestamp: number,
        consentDocument: string,
        location: string,
        hardwareId: string,
    ): PrivacyConsentState;
}
interface CreateCCPAConsent {
    (
        consented: boolean,
        timestamp: number,
        consentDocument: string,
        location: string,
        hardwareId: string,
    ): PrivacyConsentState;
}
interface AliasUsers {
    (aliasRequest: UserAliasRequest, callback?: AliasUsersCallback): void;
}
interface CreateAliasRequest {
    (sourceUser: User, destinationUser: User): UserAliasRequest;
}

interface GetCurrentUser {
    (): User;
}
interface GetUser {
    (mpid: MPID): User;
}
interface GetUsers {
    (): User[];
}
interface Identify {
    (identityApiData: IdentityApiData, callback?: IdentityCallback): void;
}
interface Login {
    (identityApiData: IdentityApiData, callback?: IdentityCallback): void;
}
interface Logout {
    (identityApiData: IdentityApiData, callback?: IdentityCallback): void;
}
interface Modify {
    (identityApiData: IdentityApiData, callback?: IdentityCallback): void;
}
interface CreateImpression {
    (name: string, product: Product | Product[]): Impression;
}
interface CreateProduct {
    (
        name: string,
        sku: string,
        price: number,
        quantity?: number,
        variant?: string,
        category?: string,
        brand?: string,
        position?: number,
        coupon?: string,
        attributes?: SDKEventAttrs,
    ): Product;
}
interface CreatePromotion {
    (
        id: string,
        creative?: string,
        name?: string,
        position?: number,
    ): Promotion;
}
interface CreateTransactionAttributes {
    (
        id: string | number,
        affiliation?: string,
        couponCode?: string,
        revenue?: number,
        shipping?: number,
        tax?: number,
    ): TransactionAttributes;
}
interface LogCheckout {
    (
        step: number,
        options?: string,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
    ): void;
}
interface LogImpression {
    (
        impression: Impression[] | Impression,
        attrs?: Record<string, unknown>,
        customFlags?: Record<string, unknown>,
    ): void;
}
interface LogProductAction {
    (
        productActionType: ProductActionType,
        product: Product[] | Product,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
        transactionAttributes?: TransactionAttributes,
    ): void;
}
interface LogPromotion {
    (
        type: number,
        promotion: Promotion,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
    ): void;
}
interface LogPurchase {
    (
        transactionAttributes: TransactionAttributes,
        product: Product[] | Product,
        clearCart: boolean,
        attrs: Record<string, unknown>,
        customFlags: Record<string, unknown>,
    ): void;
}
interface LogRefund {
    (
        transactionAttributes: TransactionAttributes,
        product: Product[] | Product,
        clearCart: boolean,
        attrs: Record<string, unknown>,
        customFlags: Record<string, unknown>,
    ): void;
}
interface SetCurrencyCode {
    (code: string): void;
}

interface SetIntegrationAttribute {
    (integrationId: number, attrs: Record<string, unknown>): void;
}

interface GetIntegrationAttributes {
    (integrationId: number): Record<string, unknown>;
}
interface GetSession {
    (): string;
}

export const endSession: EndSession;
export const getAppName: GetAppName;
export const getAppVersion: GetAppVersion;
export const getDeviceId: GetDeviceId;
export function getInstance(instanceName?: string): mParticleInstance;
export const getVersion: GetVersion;
/**
 * @warning You should only use mParticle.init if you are in a self-hosted environment. https://docs.mparticle.com/developers/sdk/web/self-hosting/
 */
export const init: Init;
export const logBaseEvent: LogBaseEvent;
export const logError: LogError;
export const logEvent: LogEvent;
export const logForm: LogForm;
export const logLink: LogLink;
export const logPageView: LogPageView;
export const ready: Ready;
/**
 * @warning You should only use mParticle.reset if you absolutely know what you are doing.
 */
export const reset: Reset;
export const setAppName: SetAppName;
export const setAppVersion: SetAppVersion;
export const setIntegrationAttribute: SetIntegrationAttribute;
export const getIntegrationAttributes: GetIntegrationAttributes;
export const setLogLevel: SetLogLevel;
export const setOptOut: SetOptOut;
export const setPosition: SetPosition;
export const setSessionAttribute: SetSessionAttribute;
export const startNewSession: StartNewSession;
export const startTrackingLocation: StartTrackingLocation;
export const stopTrackingLocation: StopTrackingLocation;
export const upload: Upload;

// Future optional changes once we migrate all core SDK files to TS. These are used internally only and should not be used by consumers of mParticle
// export function addForwarder
// export function configurePixel
// export function generateHash
// export function _setIntegrationDelay
// export function _getIntegrationDelay

export namespace sessionManager {
    const getSession: GetSession;
}

export namespace Consent {
    const createConsentState: CreateConsentState;
    const createGDPRConsent: CreateGDPRConsent;
    const createCCPAConsent: CreateCCPAConsent;
}

export interface ConsentState {
    setGDPRConsentState: (gdprConsentState: GDPRConsentState) => ConsentState;
    setCCPAConsentState: (ccpaConsentState: CCPAConsentState) => ConsentState;
    addGDPRConsentState: (
        purpose: string,
        gdprConsent: PrivacyConsentState,
    ) => ConsentState;
    getGDPRConsentState: () => GDPRConsentState;
    getCCPAConsentState: () => CCPAConsentState;
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
export type CCPAConsentState = PrivacyConsentState;

export enum EventType {
    Unknown = 0,
    Navigation = 1,
    Location = 2,
    Search = 3,
    Transaction = 4,
    UserContent = 5,
    UserPreference = 6,
    Social = 7,
    Other = 8,
    Media = 9,
}

export enum IdentityType {
    Other = 0,
    CustomerId = 1,
    Facebook = 2,
    Twitter = 3,
    Google = 4,
    Microsoft = 5,
    Yahoo = 6,
    Email = 7,
    FacebookCustomAudienceId = 9,
    Other2 = 10,
    Other3 = 11,
    Other4 = 12,
    Other5 = 13,
    Other6 = 14,
    Other7 = 15,
    Other8 = 16,
    Other9 = 17,
    Other10 = 18,
    MobileNumber = 19,
    PhoneNumber2 = 20,
    PhoneNumber3 = 21,
}

export enum CommerceEventType {
    ProductAddToCart = 10,
    ProductRemoveFromCart = 11,
    ProductCheckout = 12,
    ProductCheckoutOption = 13,
    ProductClick = 14,
    ProductViewDetail = 15,
    ProductPurchase = 16,
    ProductRefund = 17,
    PromotionView = 18,
    PromotionClick = 19,
    ProductAddToWishlist = 20,
    ProductRemoveFromWishlist = 21,
    ProductImpression = 22,
}

export namespace Identity {
    const aliasUsers: AliasUsers;
    const createAliasRequest: CreateAliasRequest;
    const getCurrentUser: GetCurrentUser;
    const getUser: GetUser;
    const getUsers: GetUsers;
    const identify: Identify;
    const login: Login;
    const logout: Logout;
    const modify: Modify;
    const HTTPCodes: any;
}

export enum ProductActionType {
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

export enum PromotionType {
    Unknown = 0,
    PromotionClick = 1,
    PromotionView = 2,
}

export namespace eCommerce {
    const createImpression: CreateImpression;
    const createProduct: CreateProduct;
    const createPromotion: CreatePromotion;
    const createTransactionAttributes: CreateTransactionAttributes;
    const logCheckout: LogCheckout;
    const logImpression: LogImpression;
    const logProductAction: LogProductAction;
    const logPromotion: LogPromotion;
    const logPurchase: LogPurchase;
    /**
     *
     * @deprecated logRefund has been deprecated
     */
    const logRefund: LogRefund;
    const setCurrencyCode: SetCurrencyCode;
    // expandCommerceEvent function for internal use

    const Cart: Cart;
}

export interface IdentifyRequest {
    userIdentities: UserIdentities;
}

export type MPID = string;
export interface User {
    getUserIdentities: () => UserIdentities;
    getMPID: () => MPID;
    setUserTag: (tag: string) => void;
    removeUserTag: (tag: string) => void;
    setUserAttribute: (key: string, value: string) => void;
    setUserAttributes: (attributeObject: Record<string, unknown>) => void;
    removeUserAttribute: (key: string) => void;
    setUserAttributeList: (key: string, value: UserAttributesValue[]) => void;
    removeAllUserAttributes: () => void;
    getUserAttributesLists: () => Record<string, UserAttributesValue[]>;
    getAllUserAttributes: () => AllUserAttributes;
    /**
     *
     * @deprecated Cart persistence in mParticle has been deprecated
     */
    getCart: () => Cart;
    getConsentState: () => ConsentState;
    setConsentState: (ConsentState: ConsentState) => void;
    isLoggedIn: () => boolean;
    getLastSeenTime: () => number;
    getFirstSeenTime: () => number;
}
export type UserAttributesValue = string | number | boolean | null;
export type AllUserAttributes = Record<
    string,
    UserAttributesValue | UserAttributesValue[]
>;
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

interface Cart {
    /**
     *
     * @deprecated Cart persistence in mParticle has been deprecated. Please use mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToCart, [products])
     */
    add: (product: Product, logEventBoolean?: boolean) => void;
    /**
     *
     * @deprecated Cart persistence in mParticle has been deprecated. Please use mParticle.eCommerce.logProductAction(mParticle.ProductActionType.RemoveFromCart, [products])
     */
    remove: (product: Product, logEventBoolean?: boolean) => void;
    /**
     *
     * @deprecated Cart persistence in mParticle has been deprecated.
     */
    clear: () => void;
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
    attributes?: Record<string, unknown>;
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
    data: Record<string, unknown>;
    name: string;
    eventType: number;
    messageType: number;
    toEventAPIObject?: () => unknown;
}
export interface SDKEventAttrs {
    [key: string]: SDKEventAttrTypes;
}

type SDKEventAttrTypes = number | string | boolean | null | undefined;

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
    httpCode: any;
    getPreviousUser(): User;
    getUser(): User;
    body: IdentityResultBody;
}

export interface IdentityResultBody {
    context: string | null;
    is_ephemeral: boolean;
    is_logged_in: boolean;
    // matched_identities should be UserIdentities + mpid, for not keep as object
    matched_identities: Record<string, unknown>;
}

export interface UserAliasRequest {
    destinationMpid: string;
    sourceMpid: string;
    startTime: number;
    endTime: number;
}

export interface AliasUsersCallback {
    (result: { httpCode: number; message: string }): void;
}

declare class mParticleInstance {
    constructor(instanceName?: string);

    endSession: EndSession;
    getAppName: GetAppName;
    getAppVersion: GetAppVersion;
    getDeviceId: GetDeviceId;
    getVersion: GetVersion;
    init: Init;
    logBaseEvent: LogBaseEvent;
    logError: LogError;
    logEvent: LogEvent;
    logForm: LogForm;
    logLink: LogLink;
    logPageView: LogPageView;
    ready: Ready;
    /**
     * @warning Calling mParticle.reset may have unintended consequences. This function is primarily used for tests. You should only use mParticle.reset if you absolutely know what you are doing.
     */
    reset: Reset;
    setAppName: SetAppName;
    setAppVersion: SetAppVersion;
    setIntegrationAttribute: SetIntegrationAttribute;
    getIntegrationAttributes: GetIntegrationAttributes;
    setLogLevel: SetLogLevel;
    setOptOut: SetOptOut;
    setPosition: SetPosition;
    setSessionAttribute: SetSessionAttribute;
    startNewSession: StartNewSession;
    startTrackingLocation: StartTrackingLocation;
    stopTrackingLocation: StopTrackingLocation;
    upload: Upload;
    // Future optional changes once we migrate all core SDK files to TS. These are used internally only and should not be used by consumers of mParticle
    // export function addForwarder
    // export function configurePixel
    // export function generateHash
    // export function _setIntegrationDelay
    // export function _getIntegrationDelay

    Consent: {
        createConsentState: CreateConsentState;
        createGDPRConsent: CreateGDPRConsent;
        createCCPAConsent: CreateCCPAConsent;
    };
    Identity: {
        aliasUsers: AliasUsers;
        createAliasRequest: CreateAliasRequest;
        getCurrentUser: GetCurrentUser;
        getUser: GetUser;
        getUsers: GetUsers;
        identify: Identify;
        login: Login;
        logout: Logout;
        modify: Modify;
        HTTPCodes: any;
    };
    eCommerce: {
        createImpression: CreateImpression;
        createProduct: CreateProduct;
        createPromotion: CreatePromotion;
        createTransactionAttributes: CreateTransactionAttributes;
        logCheckout: LogCheckout;
        logImpression: LogImpression;
        logProductAction: LogProductAction;
        logPromotion: LogPromotion;
        logPurchase: LogPurchase;
        logRefund: LogRefund;
        setCurrencyCode: SetCurrencyCode;
        Cart: Cart;
    };
    PromotionType: {
        Unknown: PromotionType.Unknown;
        PromotionClick: PromotionType.PromotionClick;
        PromotionView: PromotionType.PromotionView;
    };
    ProductActionType: {
        Unknown: ProductActionType.Unknown;
        AddToCart: ProductActionType.AddToCart;
        RemoveFromCart: ProductActionType.RemoveFromCart;
        Checkout: ProductActionType.Checkout;
        CheckoutOption: ProductActionType.CheckoutOption;
        Click: ProductActionType.Click;
        ViewDetail: ProductActionType.ViewDetail;
        Purchase: ProductActionType.Purchase;
        Refund: ProductActionType.Refund;
        AddToWishlist: ProductActionType.AddToWishlist;
        RemoveFromWishlist: ProductActionType.RemoveFromWishlist;
    };
    CommerceEventType: {
        ProductAddToCart: CommerceEventType.ProductAddToCart;
        ProductRemoveFromCart: CommerceEventType.ProductRemoveFromCart;
        ProductCheckout: CommerceEventType.ProductCheckout;
        ProductCheckoutOption: CommerceEventType.ProductCheckoutOption;
        ProductClick: CommerceEventType.ProductClick;
        ProductViewDetail: CommerceEventType.ProductViewDetail;
        ProductPurchase: CommerceEventType.ProductPurchase;
        ProductRefund: CommerceEventType.ProductRefund;
        PromotionView: CommerceEventType.PromotionView;
        PromotionClick: CommerceEventType.PromotionClick;
        ProductAddToWishlist: CommerceEventType.ProductAddToWishlist;
        ProductRemoveFromWishlist: CommerceEventType.ProductRemoveFromWishlist;
        ProductImpression: CommerceEventType.ProductImpression;
    };
    IdentityType: {
        Other: IdentityType.Other;
        CustomerId: IdentityType.CustomerId;
        Facebook: IdentityType.Facebook;
        Twitter: IdentityType.Twitter;
        Google: IdentityType.Google;
        Microsoft: IdentityType.Microsoft;
        Yahoo: IdentityType.Yahoo;
        Email: IdentityType.Email;
        FacebookCustomAudienceId: IdentityType.FacebookCustomAudienceId;
        Other2: IdentityType.Other2;
        Other3: IdentityType.Other3;
        Other4: IdentityType.Other4;
        Other5: IdentityType.Other5;
        Other6: IdentityType.Other6;
        Other7: IdentityType.Other7;
        Other8: IdentityType.Other8;
        Other9: IdentityType.Other9;
        Other10: IdentityType.Other10;
        MobileNumber: IdentityType.MobileNumber;
        PhoneNumber2: IdentityType.PhoneNumber2;
        PhoneNumber3: IdentityType.PhoneNumber3;
    };
    EventType: {
        Unknown: EventType.Unknown;
        Navigation: EventType.Navigation;
        Location: EventType.Location;
        Search: EventType.Search;
        Transaction: EventType.Transaction;
        UserContent: EventType.UserContent;
        UserPreference: EventType.UserPreference;
        Social: EventType.Social;
        Other: EventType.Other;
        Media: EventType.Media;
    };
    sessionManager: {
        getSession: GetSession;
    };
}
