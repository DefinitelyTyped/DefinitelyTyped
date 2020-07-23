import { ErrorCallback } from './webapis';
/**
 * Specifies billing server types.
 * - `DEV` - Staging server
 * - `PRD` - Operating server
 */
export enum TVServerType {
    DEV = 'DEV',
    PRD = 'PRD',
}

/**
 * Defines the payment result and information.
 */
export type BillingBuyData = {
    /**
     * Payment result
     */
    payResult: string;
    /**
     * Payment information. It is same with paymentDetails param of buyItem.
     */
    payDetail: string;
};

/**
 * Defines a dictionary for product list data returned by the getProductsList API.
 * @param apiResult getProductsList API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in ProductsListAPIResult format at the below.
 */
export type ProductsListData = {
    apiResult: string;
};

/**
 * Defines a dictionary for data returned by the applyInvoice API.
 * @param apiResult applyInvoice API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in ApplyInvoiceAPIResult format at the below.
 */
export type ApplyInvoiceData = {
    apiResult: string;
};

/**
 * Defines a dictionary for data returned by the verifyInvoice API.
 * @param apiResult verifyInvoice API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in VerifyInvoiceAPIResult format at the below.
 */
export type VerifyInvoiceData = {
    apiResult: string;
};

/**
 * Defines a dictionary for data returned by the getServiceCountryAvailability API.
 * @param apiResult getServiceCountryAvailability API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in GetUserPurchaseListAPIResult format at the below.
 */
export type ServiceCountryAvailabilityData = {
    apiResult: string;
};

/**
 * Defines a dictionary for data returned by the getUserPurchaseList API.
 * @param apiResult getUserPurchaseList API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in GetUserPurchaseListAPIResult format at the below.
 */
export type UserPurchaseData = {
    apiResult: string;
};

/**
 * Defines a dictionary for subscription cancellation data returned by the cancelSubscription API.
 * @param apiResult cancelSubscription API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in CancelSubscriptionAPIResult format at the below.
 */
export type CancelSubscriptionData = {
    apiResult: string;
};

/**
 * Defines a dictionary for data returned by the IsServiceAvailable API.
 * @param apiResult IsServiceAvailable API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in ServiceAvailableAPIResult format at the below.
 * @note `deprecated` 5.5
 */
export type ServiceAvailableData = {
    apiResult: string;
};

/**
 * Callback method returning the payment status.
 * @param data Payment status
 */
export interface BillingBuyDataSuccessCallback {
    (data: BillingBuyData): void;
}

/**
 * Callback method returning the product list request status.
 * @param data It includes getProductList API result. but you can't use it as it is. you have to parse it as JSON format data.
 */
export interface BillingProductsListCallback {
    (data: ProductsListData): void;
}

/**
 * Callback method returning the apply invoice request status.
 * @param data It includes applyInvoice API result. but you can't use it as it is. you have to parse it as JSON format data.
 */
export interface BillingApplyInvoiceCallback {
    (data: ApplyInvoiceData): void;
}

/**
 * Callback method returning the payment verification request status.
 * @param data It includes verifyInvoice API result. but you can't use it as it is. you have to parse it as JSON format data.
 */
export interface BillingVerifyInvoiceCallback {
    (data: VerifyInvoiceData): void;
}

/**
 * Callback method returning availability of country list status.
 * @param data It includes getServiceCountryAvailability API result. but you can't use it as it is. you have to parse it as JSON format data.
 */
export interface BillingGetServiceCountryAvailabilityCallback {
    (data: ServiceCountryAvailabilityData): void;
}

/**
 * Callback method returning the purchase history request status.
 * @param data It includes getUserPurchaseList API result. but you can't use it as it is. you have to parse it as JSON format data.
 */
export interface BillingGetUserPurchaseListCallback {
    (data: UserPurchaseData): void;
}

/**
 * Callback method returning the subscription cancel request status.
 * @param data It includes cancelSubscription API result. but you can't use it as it is. you have to parse it as JSON format data.
 */
export interface BillingCancelSubscriptionCallback {
    (data: CancelSubscriptionData): void;
}

/**
 * Callback method returning the service availability check status.
 * @param data It includes isServiceAvailable API result. but you can't use it as it is. you have to parse it as JSON format data.
 * @note `deprecated` 5.5
 */
export interface BillingIsServiceAvailableCallback {
    (data: ServiceAvailableData): void;
}

/**
 * This module defines the Billing (Samsung Checkout) functionalities provided by the Tizen Samsung TV Product API.
 * @privilegeLevel Public
 * @privilegeName http://developer.samsung.com/privilege/billing
 * @since 2.4
 */
export interface BillingManager {
    /**
     * Retrieves the Billing API version.
     * @returns Billing API version
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException SecurityError, UnknownError
     * @since 4.0
     */
    getVersion: () => string;

    /**
     * Enables implementing the Samsung Checkout Client module within the application. After authenticating the purchase information through the application, the user can proceed to purchase payment.
     * @param appId Application ID
     * @param serverType Billing server type
     * @param paymentDetails Payment parameters
     * OrderItemID[MANDATORY]/OrderTitle[MANDATORY]/OrderTotal[MANDATORY]/OrderCurrencyID[MANDATORY]/OrderID[OPTIONAL]/OrderCustomID[MANDATORY]
     * @param onsuccess Returns "payResult" and "payDetail" if there is no internal error occurs until client to server data communication.
     * payResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * payDetail, can have additional data when it's returned, such as InvoiceID. Please refer to the development guide of "buyItem" for details
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method
     * UnknownError, if other error occur, such as internal error or "billing client already running" error
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 2.4
     */
    buyItem: (
        appId: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        paymentDetails: string,
        onsuccess: BillingBuyDataSuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the list of products registered on the Billing (DPI) server.
     * @param appId Application ID
     * @param countryCode TV country code
     * @param pageSize Number of products retrieved per page (maximum 100)
     * @param pageNumber Requested page number (1 ~ N)
     * @param checkValue Security check value. Required parameters = "AppID" + "CountryCode"
     * @param serverType Billing server type
     * @param onsuccess Returns the product list if there is no internal error occurs until client to server data communication
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 4.0
     */
    getProductsList: (
        appId: string,
        countryCode: string,
        pageSize: string,
        pageNumber: string,
        checkValue: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingProductsListCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Recodes the apply status of purchase item to DPI server.
     * @param appId Application ID
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     * @param invoiceId Invoice ID
     * @param countryCode TV country code
     * @param serverType Billing server type
     * @param onsuccess Returns purchase apply status if there is no internal error occurs until client to server data communication
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 4.0
     */
    applyInvoice: (
        appId: string,
        customId: string,
        invoiceId: string,
        countryCode: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingApplyInvoiceCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Checks whether a purchase, corresponding to a specific "InvoiceID", was successful.
     * @param appId Application ID
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     * @param invoiceId Invoice ID
     * @param countryCode TV country code
     * @param serverType Billing server type
     * @param onsuccess Returns the payment status if there is no internal error occurs until client to server data communication.
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 4.0
     */
    verifyInvoice: (
        appId: string,
        customId: string,
        invoiceId: string,
        countryCode: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingVerifyInvoiceCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Get Service Country availability for Samsung Checkout
     * @param appId Application ID
     * @param countryCodes to check. Multiple countrycodes available. (Add as array, only Uppercase allowed) ex) countrycodes=["DE","US","KR"]
     * @param checkValue Security check value. Required parameters = "AppID" + "CountryCodes"
     * @param serverType Billing server type
     * @param onsuccess Returns the service availability status of each country if there is no internal error occurs until client to server data communication.
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 5.5
     */
    getServiceCountryAvailability: (
        appId: string,
        countryCodes: string[],
        checkValue: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingGetServiceCountryAvailabilityCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the user's purchase list.
     * @param appId Application ID
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     * @param countryCode TV country code
     * @param pageNumber Requested page number (1 ~ N)
     * @param checkValue Security check value. Required parameters = "AppID" + "CountryCode"
     * @param serverType Billing server type
     * @param onsuccess Returns the purchase list if there is no internal error occurs until client to server data communication
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 4.0
     */
    getUserPurchaseList: (
        appId: string,
        customId: string,
        countryCode: string,
        pageNumber: string,
        checkValue: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingGetUserPurchaseListCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Cancels a subscription product.
     * @param appId Application ID
     * @param invoiceId Invoice ID
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     * @param countryCode TV country code
     * @param serverType Billing server type
     * @param onsuccess Returns the subscription cancellation status if there is no internal error occurs until client to server data communication.
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     * @param onerror Optional callback method to invoke if an error occurs before the client to server data communication.
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 4.0
     */
    cancelSubscription: (
        appId: string,
        invoiceId: string,
        customId: string,
        countryCode: string,
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingCancelSubscriptionCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * descEng Checks whether the Billing server is available. However, this api will be replaced by getServiceCountryAvailability after deprecation
     * @param serverType Billing server
     * @param onsuccess Returns the server availability
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/billing
     * @throw WebAPIException TypeMismatchError, InvalidValuesError
     * @since 4.0
     * @note `deprecated` 5.5
     */
    isServiceAvailable: (
        serverType: TVServerType | 'DEV' | 'PRD',
        onsuccess: BillingIsServiceAvailableCallback,
        onerror?: ErrorCallback,
    ) => void;
}
