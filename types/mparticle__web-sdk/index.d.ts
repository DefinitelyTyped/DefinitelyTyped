import { Batch } from "@mparticle/event-models";

// Placeholder for Dictionary-like Types
export type Dictionary<V = any> = Record<string, V>;

export as namespace mParticle;
export {};
export interface MPConfiguration {
    isDevelopmentMode?: boolean | undefined;
    identifyRequest?: IdentifyRequest | undefined;
    identityCallback?: IdentityCallback | undefined;
    dataPlan?: DataPlanConfig | undefined;
    appVersion?: string | undefined;
    appName?: string | undefined;
    package?: string | undefined;
    logLevel?: "verbose" | "warning" | "none" | undefined;
    logger?: Logger | undefined;
    sessionTimeout?: number | undefined;
    deviceId?: string | undefined;
    onCreateBatch?: onCreateBatch | undefined;
    useCookieStorage?: boolean | undefined;
    maxCookieSize?: number | undefined;
    cookieDomain?: string | undefined;
    customFlags?: SDKEventCustomFlags | undefined;
    sideloadedKits?: MPForwarder[];
    /**
     * @warning only change workspaceToken if you are absolutely sure you know what you are doing
     */
    workspaceToken?: string | undefined;
    /**
     * @warning only change requiredWebviewBridgeName if you are absolutely sure you know what you are doing
     */
    requiredWebviewBridgeName?: string | undefined;
    /**
     * @warning only change minWebviewBridgeVersion if you are absolutely sure you know what you are doing
     */
    minWebviewBridgeVersion?: 1 | 2 | undefined;
}

export type MPForwarder = Dictionary;

export interface Logger {
    error?: ((error: string) => void) | undefined;
    warning?: ((error: string) => void) | undefined;
    verbose?: ((error: string) => void) | undefined;
}
export interface SDKEventCustomFlags {
    [key: string]: number | string | boolean | unknown[] | Record<string, unknown>;
}

export interface SDKEventOptions {
    shouldUploadEvent: boolean;
}

export interface DataPlanConfig {
    planId: string;
    planVersion?: number | undefined;
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

interface GetEnvironment {
    (): string;
}
interface GetVersion {
    (): string;
}

interface Init {
    (apiKey: string, config: MPConfiguration, instanceName?: string): void;
}

interface IsInitialized {
    (): boolean;
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
        eventOptions?: SDKEventOptions,
    ): void;
}

interface LogForm {
    (selector: string | HTMLElement, eventName: string, eventType?: EventType, eventInfo?: SDKEventAttrs): void;
}

interface LogLink {
    (selector: string | HTMLElement, eventName: string, eventType?: EventType, eventInfo?: SDKEventAttrs): void;
}

interface LogPageView {
    (
        eventName?: string,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
        eventOptions?: SDKEventOptions,
    ): void;
}

interface Ready {
    (callback: () => void): void;
}
interface Reset {
    (): void;
}
interface SetDeviceId {
    (uuid: string): void;
}
interface SetAppName {
    (name: string): void;
}
interface SetAppVersion {
    (version: string): void;
}
interface SetLogLevel {
    (newLogLevel: "verbose" | "warning" | "none"): void;
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
    (event: BaseEvent, eventOptions?: SDKEventOptions): void;
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
    (identityApiData?: IdentityApiData | {} | null, callback?: IdentityCallback): void;
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
    (id: string, creative?: string, name?: string, position?: number): Promotion;
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
    (step: number, options?: string, attrs?: SDKEventAttrs, customFlags?: SDKEventCustomFlags): void;
}
interface LogImpression {
    (
        impression: Impression[] | Impression,
        attrs?: Record<string, unknown>,
        customFlags?: Record<string, unknown>,
        eventOptions?: SDKEventOptions,
    ): void;
}
interface LogProductAction {
    (
        productActionType: ProductActionType,
        product: Product[] | Product,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
        transactionAttributes?: TransactionAttributes,
        eventOptions?: SDKEventOptions,
    ): void;
}
interface LogPromotion {
    (
        type: number,
        promotion: Promotion[] | Promotion,
        attrs?: SDKEventAttrs,
        customFlags?: SDKEventCustomFlags,
        eventOptions?: SDKEventOptions,
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
export const setDeviceId: SetDeviceId;
export const getEnvironment: GetEnvironment;
export function getInstance(instanceName?: string): mParticleInstance;
export const getVersion: GetVersion;
/**
 * @warning You should only use mParticle.init if you are in a self-hosted environment. https://docs.mparticle.com/developers/sdk/web/self-hosting/
 */
export const init: Init;
export const isInitialized: IsInitialized;
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
    addGDPRConsentState: (purpose: string, gdprConsent: PrivacyConsentState) => ConsentState;
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
    getUserIdentities: () => IdentityApiData;
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
export type AllUserAttributes = Record<string, UserAttributesValue | UserAttributesValue[]>;
export interface UserIdentities {
    customerid?: string | undefined;
    email?: string | undefined;
    other?: string | undefined;
    other2?: string | undefined;
    other3?: string | undefined;
    other4?: string | undefined;
    other5?: string | undefined;
    other6?: string | undefined;
    other7?: string | undefined;
    other8?: string | undefined;
    other9?: string | undefined;
    other10?: string | undefined;
    mobile_number?: string | undefined;
    phone_number_2?: string | undefined;
    phone_number_3?: string | undefined;
    facebook?: string | undefined;
    facebookcustomaudienceid?: string | undefined;
    google?: string | undefined;
    twitter?: string | undefined;
    microsoft?: string | undefined;
    yahoo?: string | undefined;
}

interface Cart {
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
}

export interface Product {
    Name: string;
    Sku: string;
    Price: number;
    Quantity?: number | undefined;
    Variant?: string | undefined;
    Category?: string | undefined;
    Brand?: string | undefined;
    Position?: number | undefined;
    Coupon?: string | undefined;
    Attributes?: Record<string, unknown> | undefined;
}

export interface TransactionAttributes {
    Id: string | number;
    Affiliation?: string | undefined;
    CouponCode?: string | undefined;
    Revenue?: number | undefined;
    Shipping?: string | undefined;
    Tax?: number | undefined;
}

export interface Impression {
    Name: string;
    Product: Product;
}

export interface Promotion {
    Id: string;
    Creative?: string | undefined;
    Name?: string | undefined;
    Position?: number | undefined;
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
    toEventAPIObject?: (() => unknown) | undefined;
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

export interface onCreateBatch {
    (batch: Batch): Batch;
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
    scope?: string;
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
    setDeviceId: SetDeviceId;
    getEnvironment: GetEnvironment;
    getVersion: GetVersion;
    init: Init;
    isInitialized: IsInitialized;
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
