// Type definitions for non-npm package invity-api 1.0
// Project: https://github.com/satoshilabs/invity-api (not public repo)
// Definitions by: Martin Boehm <https://github.com/martinboehm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// general
export interface StringMap {
    [key: string]: string;
}

// buy types

export type BuyTradeFinalStatus =
    | 'SUCCESS' // receive tx was created, waiting for receive tx to be mined
    | 'ERROR' // the transaction was blocked, the customer will be contacted by email
    | 'BLOCKED'; // something went wrong during or after confirmTrade

export type BuyTradeStatus =
    | 'LOGIN_REQUEST' // request to login to the partner's site
    | 'REQUESTING' // sending request to the partner
    | 'SUBMITTED' // request was submitted to the partner
    | 'APPROVAL_PENDING' // pending approval
    | 'WAITING_FOR_USER' // requiring user's action
    | BuyTradeFinalStatus;

export type BuyCryptoPaymentMethod =
    | 'bancontact'
    | 'eps'
    | 'bankTransfer'
    | 'creditCard'
    | 'giropay'
    | 'iDeal'
    | 'sofort'
    | 'bpay'
    | 'auspost'
    | 'poli'
    | 'dcinterac'
    | 'applePay';

export type BuyTradeTag =
    | 'renewed'
    | 'alternativeCurrency'
    | 'bestRate'
    | 'favorite'
    | 'wantCrypto'
    | 'widget';

export interface BuyProviderInfo {
    name: string; // simplex
    companyName: string; // Simplex
    logo: string; // simplex-icon.jpg
    isActive: boolean;
    tradedCoins: string[]; // ['BTC', 'BCH', 'LTC', 'XRP', 'ETH']
    tradedFiatCurrencies: string[]; // ['EUR', 'USD']
    supportedCountries: string[]; // ['AT', 'BE']
    paymentMethods: BuyCryptoPaymentMethod[];
    statusUrl: string; // https://payment-status.simplex.com/api/v1/user/payments?uuid={{paymentId}}
    supportUrl: string; // https://www.simplex.com/support/
}

export interface BuyListResponse {
    country: string;
    suggestedFiatCurrency?: string; // optional field, fiat currency based on user's IP
    providers: BuyProviderInfo[];
}

export interface BuyTradeQuoteRequest {
    wantCrypto: boolean; // true for cryptoAmount, false for fiatAmount
    fiatAmount?: number; // 1000 - will pay fiat amount - DEPRECATED, used only for TREZOR
    fiatStringAmount?: string; // 1000 - will pay fiat amount
    cryptoAmount?: number; // 0.3 - requested amount in crypto currency - DEPRECATED, used only for TREZOR
    cryptoStringAmount?: string; // 0.3 - requested amount in crypto currency
    fiatCurrency: string; // USD
    receiveCurrency: string; // BTC
    country?: string;
    paymentMethod?: BuyCryptoPaymentMethod;
}

export type BuyTradeQuoteResponse = BuyTrade[];

export interface BuyTrade {
    fiatAmount?: number; // 1000 - DEPRECATED, used only for TREZOR
    fiatStringAmount?: string; // 1000 - will pay fiat amount
    fiatCurrency?: string; // EUR
    receiveCurrency?: string; // BTC
    receiveAmount?: number; // 0.12345 - DEPRECATED, used only for TREZOR
    receiveStringAmount?: string; // 0.12345
    receiveAddress?: string; // users address for receive tx
    rate?: number; // 100
    quoteId?: string; // ID of the quote assigned by exchange
    orderId?: string; // ID of the order assigned by us
    paymentId?: string; // ID of the payment assigned by us or by partner
    originalPaymentId?: string; // ID of the payment assigned by us and later changed by the partner
    status?: BuyTradeStatus; // state of trade after confirmTrade
    error?: string; // something went wrong after confirmTrade
    receiveTxHash?: string; // hash of tx from exchange to user
    exchange?: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    validUntil?: string; // timestamp in ISO format of offer validity
    cid?: string; // google clientID
    minFiat?: number;
    maxFiat?: number;
    minCrypto?: number;
    maxCrypto?: number;
    paymentMethod?: BuyCryptoPaymentMethod;
    infoNote?: string;
    country?: string; // CZ
    wantCrypto?: boolean;
    tags?: BuyTradeTag[];
    partnerData?: string; // arbitrary data specific for the partner
    id?: string; // internal DB id
    // locally used data types
    tradeForm?: BuyTradeFormResponse;
}

export interface BuyTradeRequest {
    /**
     * The trade object
     */
    trade: BuyTrade;
    /**
     * URL where to return after the trade is done
     */
    returnUrl: string;
}

export interface BuyTradeResponse {
    trade: BuyTrade;
    tradeForm?: BuyTradeFormResponse;
    requestTradeErrorType?: 'QUOTE_TIMEOUT' | 'UNKNOWN';
    newQuote?: BuyTrade;
}

export interface BuyTradeFormResponse {
    form?: {
        formMethod: 'GET' | 'POST' | 'IFRAME';
        formAction: string;
        fields: StringMap;
    };
    error?: string;
}

export interface WatchBuyTradeResponse {
    status?: BuyTradeStatus; // state of trade after confirmTrade
    error?: string; // something went wrong after confirmTrade
}

// exchange types

export type ExchangeTradeFinalStatus =
    | 'SUCCESS' // receive tx was created, waiting for receive tx to be mined
    | 'ERROR' // something went wrong during or after confirmTrade
    | 'KYC'; // Trade is subject to KYC/AML

export type ExchangeTradeStatus =
    | 'LOADING' // fetching address from exchange
    | 'CONFIRM' // waiting for user confirmation on TREZOR
    | 'SENDING' // send tx was created, waiting for send tx to be sent
    | 'CONFIRMING' // send tx was sent, waiting for tx to be mined (not used for Trezor Wallet)
    | 'CONVERTING' // send tx was mined, money is on exchange, receive tx not yet created
    | ExchangeTradeFinalStatus;

export type ExchangeFee =
    | number // actual fee amount in 'receive' currency
    | 'INCLUDED' // exchange won't tell, but receiveAmount and rate already include it
    | 'UNKNOWN'; // exchange won't tell, receiveAmount and rate don't include it

export type ExchangeMaximum =
    | number // actual maximum amount in 'send' currency
    | 'NONE'; // exchange does not have a maximum trade size

export type ExchangeTradeTag = 'renewed' | 'bestRate' | 'favorite' | 'kyc' | 'widget';

export interface ExchangeProviderInfo {
    name: string; // changenow
    companyName: string; // ChangeNow
    logo: string; // changenow-icon.jpg
    isActive: boolean;
    isFixedRate: boolean;
    buyTickers: string[];
    sellTickers: string[];
    addressFormats: StringMap; // specification of formats required by selected exchange
    statusUrl: string; // https://changenow.io/exchange/txs/{{orderId}}
    kycUrl: string; // https://changenow.io/faq#kyc
    supportUrl: string; // https://support.changenow.io
    // TODO region of operation
    kycPolicy?: string;
    isRefundRequired?: boolean;
}

export type ExchangeListResponse = ExchangeProviderInfo[];

export interface ExchangeCoinInfo {
    ticker: string; // BTC
    name: string; // Bitcoin
    category: string; // popular
    token?: string; // platform of the token, e.g. ETH
}

export type ExchangeCoinListResponse = ExchangeCoinInfo[];

export interface ExchangeTrade {
    send?: string; // BTC
    sendStringAmount?: string; // "0.01"
    sendAddress?: string; // exchange address for send tx
    receive?: string; // LTC
    receiveStringAmount?: string; // "0.01"
    receiveAddress?: string; // users address for receive tx
    rate?: number; // 100
    min?: number; // 0.001
    max?: ExchangeMaximum;
    fee?: ExchangeFee;
    partnerPaymentExtraId?: string; // Extra ID for payments to exchange for networks that require it (destinationTag)
    signature?: string; // Evercoin only, passed from createTrade response to confirmTrade request
    orderId?: string; // internal ID assigned to the trade by the exchange
    statusUrl?: string; // internal URL + ID assigned to the trade by the exchange to check status
    status?: ExchangeTradeStatus; // state of trade after confirmTrade
    error?: string; // something went wrong after confirmTrade
    receiveTxHash?: string; // hash of tx from exchange to user
    cid?: string; // google clientID
    offerReferenceId?: string; // coinswitch only
    rateIdentificator?: string; // rate identificator for fixed rate exchanges
    exchange?: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    quoteToken?: string; // fox.exchange only
    extraField?: string; // payments to user wallet extra field (payout)
    extraFieldDescription?: CoinExtraField;
    tags?: ExchangeTradeTag[];
    id?: string; // internal DB id
    // locally used fields
    offerType?: 'bestRate' | 'favorite';
}

export interface ExtendedExchangeTrade extends ExchangeTrade {
    requestTradeErrorType?: 'QUOTE_TIMEOUT' | 'UNKNOWN';
    newQuote?: ExchangeTrade; // A renewed quote, in case of a timeout
}

export interface CoinExtraField {
    name: string;
    description: string;
    required: boolean;
    type: 'number' | 'text' | 'hex';
}

export interface ExchangeTradeQuoteRequest {
    send: string; // BTC
    receive: string; // LTC
    sendStringAmount?: string; // "0.01"
}

export type ExchangeTradeQuoteResponse = ExchangeTrade[];

export interface ConfirmExchangeTradeRequest {
    trade: ExtendedExchangeTrade;
    receiveAddress: string; // address hash
    refundAddress: string; // address hash (optional because Changelly doesn't support it)
    extraField?: string; // XRP destination tag, XMR label id, ...
}

export interface WatchExchangeTradeResponse {
    status?: ExchangeTradeStatus; // state of trade after confirmTrade
    receiveTxHash?: string;
    rate?: number;
    receiveStringAmount?: string; // "0.01"
    error?: string; // something went wrong after confirmTrade
}

// utilityTypes

export interface CountryInfo {
    country: string;
    fiatCurrency?: string; // optional field, fiat currency based on country
}

export type TicketTopic = 'Invity.io' | 'Buy crypto' | 'Exchange crypto' | 'Invest in crypto';

export interface SupportTicket {
    name: string;
    email: string;
    description: string;
    topic: TicketTopic;
    reCaptchaV2Token?: string;
    reCaptchaV3Token?: string;
}

export interface SupportTicketResponse {
    error?: string;
    statusCode: number;
}

// sell/voucher types

export type SellTradeFinalStatus =
    | 'SUCCESS' // receive tx was created, waiting for receive tx to be mined
    | 'ERROR' // the transaction was blocked, the customer will be contacted by email
    | 'BLOCKED' // something went wrong during or after confirmTrade
    | 'CANCELLED' // user cancelled the transaction
    | 'REFUNDED'; // transaction has been refunded

export type SellTradeStatus =
    | 'REQUESTING' // sending request to the partner
    | 'LOGIN_REQUEST' // request to login to the partner's site
    | 'SITE_ACTION_REQUEST' // request to transfer to the partner's site
    | 'SUBMITTED' // request was submitted to the partner
    | 'SEND_CRYPTO' // request to send crypto
    | 'PENDING' // pending exchange to fiat
    | SellTradeFinalStatus;

export type SellProviderType = 'Fiat' | 'Voucher';

export interface SellProviderInfo {
    name: string; // simplex
    companyName: string; // Simplex
    logo: string; // simplex-icon.jpg
    type: SellProviderType;
    isActive: boolean;
    tradedCoins: string[]; // ['BTC', 'BCH', 'LTC', 'XRP', 'ETH']
    tradedFiatCurrencies?: string[]; // ['EUR', 'USD']
    supportedCountries: string[]; // ['AT', 'BE']
    statusUrl?: string; // https://payment-status.simplex.com/api/v1/user/payments?uuid={{paymentId}}
    supportUrl?: string; // https://www.simplex.com/support/
    quoteInfo?: string; // some info text shown on quote
    voucherSiteOrigin?: string;
    paymentMethods?: SellCryptoPaymentMethod[];
}

export interface SellListResponse {
    country: string;
    providers: SellProviderInfo[];
}

export type SellCryptoPaymentMethod = 'bankTransfer' | 'creditCard';

export type SellTradeTag =
    | 'renewed'
    | 'alternativeCurrency'
    | 'bestRate'
    | 'favorite'
    | 'wantFiat'
    | 'widget';

export interface BankAccount {
    bankAccount: string;
    holder: string;
    verified: boolean;
}

export interface SellFiatTradeQuoteRequest {
    amountInCrypto: boolean; // true for cryptoAmount, false for fiatAmount
    fiatStringAmount?: string; // 1000 - will pay fiat amount
    fiatCurrency: string; // USD
    cryptoStringAmount?: string; // 0.3 - requested amount in crypto currency
    cryptoCurrency: string; // BTC
    country?: string;
    paymentMethod?: SellCryptoPaymentMethod;
}

export type SellFiatTradeQuoteResponse = SellFiatTrade[];

export interface SellFiatTrade {
    amountInCrypto?: boolean; // true for cryptoAmount, false for fiatAmount
    fiatStringAmount?: string; // 1000
    fiatCurrency?: string; // EUR
    cryptoCurrency?: string; // BTC
    cryptoStringAmount?: string; // 0.12345
    rate?: number; // 100
    quoteId?: string; // ID of the quote assigned by exchange
    orderId?: string; // ID of the order assigned by us
    paymentId?: string; // ID of the payment assigned by the partner
    originalPaymentId?: string; // ID of the payment assigned by us and later changed by the partner
    eventId?: string; // ID of the last event which modified the trade
    siteUrl?: string; // sell site url
    status?: SellTradeStatus; // state of trade after confirmTrade
    refundAddress?: string; // crypto address to which sent crypto currency will be returned in case of a refund
    destinationAddress?: string; // crypto address to which sent crypto currency to sell
    destinationPaymentExtraId?: string; // Extra ID for payments to exchange for networks that require it (destinationTag)
    error?: string; // something went wrong
    exchange?: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    validUntil?: string; // timestamp in ISO format of offer validity
    txid?: string; // txid of crypto transaction
    tags?: SellTradeTag[];
    cid?: string; // google clientID
    minFiat?: number;
    maxFiat?: number;
    minCrypto?: number;
    maxCrypto?: number;
    paymentMethod?: SellCryptoPaymentMethod;
    infoNote?: string;
    country?: string; // CZ
    bankAccount?: BankAccount; // selected bank account
    bankAccounts?: BankAccount[]; // list of available bank accounts
}

export interface SellVoucherTradeQuoteRequest {
    cryptoCurrency?: string; // BTC
    language?: string; // en
    country?: string; // cz
    refundAddress?: string; // crypto address to which sent crypto currency to sell
}

export interface SellVoucherTrade {
    siteUrl?: string;
    error?: string; // something went wrong
    exchange?: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    status?: SellTradeStatus; // state of trade after request trade
    cryptoCurrency?: string; // BTC
    cryptoAmount?: number; // 0.12345
    destinationAddress?: string; // crypto address to which sent crypto currency to sell
    paymentId?: string; // ID of the order assigned by us
}

export interface SellVoucherTradeRequest {
    exchange: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    cryptoCurrency: string;
    data: any; // data returned by post message
}

export type SellVoucherTradeQuoteResponse = SellVoucherTrade[];

export interface SellFiatTradeFormResponse {
    form?: {
        formMethod: 'GET' | 'POST' | 'IFRAME';
        formAction: string;
        fields: StringMap;
    };
    error?: string;
}

export interface SellFiatTradeRequest {
    /**
     * The trade object
     */
    trade: SellFiatTrade;
    /**
     * URL where to return after the trade is done
     */
    returnUrl?: string;
}

export interface SellFiatTradeResponse {
    trade: SellFiatTrade;
    tradeForm?: SellFiatTradeFormResponse;
    requestTradeErrorType?: 'QUOTE_TIMEOUT' | 'UNKNOWN';
    newQuote?: SellFiatTrade;
}

export interface WatchSellTradeResponse {
    status?: SellTradeStatus; // new state of trade
    error?: string; // something went wrong
}

export type SpendTrade = SellVoucherTrade;
