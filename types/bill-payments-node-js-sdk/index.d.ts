// Type definitions for @qiwi/bill-payments-node-js-sdk 3.2.1
// Project: https://github.com/QIWI-API/bill-payments-node-js-sdk
// Definitions by: ethernalsteve <https://github.com/ethernalsteve>
//                 maks12345 <https://github.com/TheMiksHacker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface createPaymentFormParams {
    billId: string | number;
    publicKey: string;
    amount: string | number;
    successUrl: string;
}

export interface createBillParams {
    amount: string | number;
    currency: string;
    comment?: string;
    expirationDateTime: string;
    customFields?: object;
    extra?: object;
    phone: string;
    email: string;
    account: string;
    successUrl: string;
}

export class QiwiBillPaymentsAPI {
    /**
     * Constructs the object.
     *
     * @param      {string}  key     The key
     */
    constructor(key: string);

    /**
     * Key setter
     *
     * @param      {string}  key     The key
     */
    set key(key: string);

    /**
    * Checks notification data signature
    *
    * @param       {string}    signature                  The signature
    * @param       {Object}    notificationBody           The notification body
    * @param       {string}    merchantSecret             The merchant key for validating signature
    * @return      {boolean}   Signature is valid or not
    */
    checkNotificationSignature(signature: string, notificationBody: object, merchantSecret: string): boolean;

    /**
     * Generate lifetime in format
     *
     * @param       {number}  days        Days of lifetime
     * @return      {string}  Lifetime in ISO
     */
    getLifetimeByDay(days: number): string;

    /**
    * Normalize date in api format
    * @param {Date} date - Date object
    * @returns {string} Date in api format
    */
    normalizeDate(date: Date): string;

    /**
     * Generate id
     *
     * @return     {string}  Return uuid v4
     */
    generateId(): string;

    /**
     * Creating checkout link
     *
     * @param      {Object}           params             The parameters
     * @param      {(string|number)}  params.billId     The bill identifier
     * @param      {string}           params.publicKey  The publicKey
     * @param      {(string|number)}  params.amount      The amount
     * @param      {string}           params.successUrl The success url
     * @return     {Promise<Object>|Error}  Return Promise with result
     */
    createPaymentForm(params: createPaymentFormParams): Promise<Object> | Error;

    /**
     * Creating bill
     *
     * @param      {(string|number)}  billId                            The bill identifier
     * @param      {Object}           params                            The parameters
     * @param      {(string|number)}  params.amount                     The amount
     * @param      {string}           params.currency                   The currency
     * @param      {string}           [params.comment]                  The bill comment
     * @param      {string}           params.expirationDateTime         The bill expiration datetime (ISOstring)
     * @param      {Object}           [params.customFields]             The bill custom fields
     * @param      {Object}           [params.extra]                    The bill custom fields (deprecated, will be removed soon)
     * @param      {string}           params.phone                      The phone
     * @param      {string}           params.email                      The email
     * @param      {string}           params.account                    The account
     * @param      {string}           params.successUrl                 The success url
     * @return     {Promise<Object>|Error}  Return Promise with result
     */
    createBill(billId: string | number, params: createBillParams): Promise<Object> | Error;

    /**
     * Getting bill info
     *
     * @param      {(string|number)}  billId  The bill identifier
     * @return     {Promise<Object>|Error}  Return Promise with result
     */
    getBillInfo(billId: string | number): Promise<Object> | Error;

    /**
     * Cancelling unpaid bill
     *
     * @param      {(string|number)}  billId  The bill identifier
     * @return     {Promise<Object>|Error}  Return Promise with result
     */
    cancelBill(billId: string | number): Promise<Object> | Error;

    /**
     * Getting refund info
     * Method is not available for individuals
     *
     * @param      {(string|number)}  billId  The bill identifier
     * @param      {(string|number)}  refundId  The refund identifier
     * @return     {Promise<Object>|Error}  Return Promise with result
     */
    getRefundInfo(billId: string | number, refundId: string | number): Promise<Object> | Error;

    /**
    * Refund paid bill
    * Method is not available for individuals
    *
    * @param      {(string|number)}  billId    The bill identifier
    * @param      {(string|number)}  refundId  The refund identifier
    * @param      {(string|number)}  amount     The amount
    * @param      {(string)}         currency   The currency
    * @return     {Promise<Object>|Error}  Return Promise with result
    */
    refund(billId: string | number, refundId: string | number, amount: string | number, currency: string): Promise<Object> | Error;
}