// common types
export const __brand: unique symbol;
export type Brand<T, B> = T & { [__brand]: B };

export interface StringMap {
    [key: string]: string;
}

export interface BankAccount {
    bankAccount: string;
    bic?: string | undefined;
    holder: string;
    verified: boolean;
}

export interface FormResponse {
    form?:
        | {
            formMethod: "GET" | "POST" | "IFRAME";
            formAction: string;
            formTarget?: "_blank" | "_self" | undefined;
            fields: StringMap;
        }
        | undefined;
    error?: string | undefined;
}

export type CryptoId = Brand<string, "CryptoId">;

export type FiatCurrencyCode =
    | "usd"
    | "eur"
    | "gbp"
    | "aed"
    | "ars"
    | "aud"
    | "bdt"
    | "brl"
    | "cad"
    | "chf"
    | "clp"
    | "cny"
    | "czk"
    | "dkk"
    | "hkd"
    | "huf"
    | "idr"
    | "ils"
    | "inr"
    | "jpy"
    | "krw"
    | "kwd"
    | "lkr"
    | "mxn"
    | "myr"
    | "nok"
    | "nzd"
    | "php"
    | "pln"
    | "rub"
    | "sar"
    | "sek"
    | "sgd"
    | "thb"
    | "try"
    | "twd"
    | "vnd"
    | "zar";

export type FiatCurrenciesProps = Record<FiatCurrencyCode, number>;

// buy types

export type BuyTradeFinalStatus =
    | "SUCCESS" // receive tx was created, waiting for receive tx to be mined
    | "ERROR" // the transaction was blocked, the customer will be contacted by email
    | "BLOCKED"; // something went wrong during or after confirmTrade

export type BuyTradeStatus =
    | "LOGIN_REQUEST" // request to login to the partner's site
    | "REQUESTING" // sending request to the partner
    | "SUBMITTED" // request was submitted to the partner
    | "APPROVAL_PENDING" // pending approval
    | "WAITING_FOR_USER" // requiring user's action
    | BuyTradeFinalStatus;

export type BuyCryptoPaymentMethod =
    | "bancontact"
    | "eps"
    | "bankTransfer"
    | "creditCard"
    | "debitCard"
    | "giropay"
    | "iDeal"
    | "sofort"
    | "bpay"
    | "auspost"
    | "poli"
    | "dcinterac"
    | "applePay"
    | "googlePay"
    | "paynow"
    | "fps"
    | "promptpay"
    | "instapay"
    | "upi"
    | "gojekid"
    | "viettelpay"
    | "duitnow"
    | "payid"
    | "toss";

export type BuyTradeTag = "renewed" | "alternativeCurrency" | "bestRate" | "favorite" | "wantCrypto" | "widget";

export interface BuyProviderInfo {
    name: string; // simplex
    companyName: string; // UAB Invity Finance
    brandName?: string; // Invity
    logo: string; // simplex-icon.jpg
    isActive: boolean;
    isDisabled?: boolean;
    tradedCoins: CryptoId[]; // ['bitcoin', 'ethereum', 'litecoin', 'ethereum--0xdac17f958d2ee523a2206206994597c13d831ec7']
    tradedFiatCurrencies: string[]; // ['EUR', 'USD']
    disabledCurrencies?: string[];
    supportedCountries: string[]; // ['CZ', 'NL']
    disabledCountries?: string[];
    paymentMethods: BuyCryptoPaymentMethod[];
    statusUrl?: string; // https://payment-status.simplex.com/api/v1/user/payments?uuid={{paymentId}}
    supportUrl?: string; // https://www.simplex.com/support/
    pendingTimeoutSeconds?: number; // Time until a SUBMITTED transaction automatically changes to APPROVAL_PENDING. Null means it does not change.
}

export interface BuyListResponse {
    country: string;
    suggestedFiatCurrency?: string | undefined; // optional field, fiat currency based on user's IP
    providers: BuyProviderInfo[];
    defaultAmountsOfFiatCurrencies: FiatCurrenciesProps;
}

export interface BuyTradeQuoteRequest {
    wantCrypto: boolean; // true for cryptoAmount, false for fiatAmount
    fiatAmount?: number | undefined; // 1000 - will pay fiat amount - DEPRECATED, used only for TREZOR
    fiatStringAmount?: string | undefined; // 1000 - will pay fiat amount
    cryptoAmount?: number | undefined; // 0.3 - requested amount in crypto currency - DEPRECATED, used only for TREZOR
    cryptoStringAmount?: string | undefined; // 0.3 - requested amount in crypto currency
    fiatCurrency: string; // USD
    receiveCurrency: CryptoId; // bitcoin
    country?: string | undefined;
    paymentMethod?: BuyCryptoPaymentMethod | undefined;
}

export type BuyTradeQuoteResponse = BuyTrade[];

export interface BuyTrade {
    fiatAmount?: number | undefined; // 1000 - DEPRECATED, used only for TREZOR
    fiatStringAmount?: string | undefined; // 1000 - will pay fiat amount
    fiatCurrency?: string | undefined; // EUR
    receiveCurrency?: CryptoId | undefined; // bitcoin
    receiveAmount?: number | undefined; // 0.12345 - DEPRECATED, used only for TREZOR
    receiveStringAmount?: string | undefined; // 0.12345
    receiveAddress?: string | undefined; // users address for receive tx
    receiveAddressExtraId?: string | undefined; // Extra ID for receive tx to exchange for networks that require it (destinationTag)
    rate?: number | undefined; // 100
    quoteId?: string | undefined; // ID of the quote assigned by exchange
    orderId?: string | undefined; // ID of the order assigned by us
    paymentId?: string | undefined; // ID of the payment assigned by us or by partner
    originalPaymentId?: string | undefined; // ID of the payment assigned by us and later changed by the partner
    status?: BuyTradeStatus | undefined; // state of trade after confirmTrade
    error?: string | undefined; // something went wrong after confirmTrade
    receiveTxHash?: string | undefined; // hash of tx from exchange to user
    exchange?: string | undefined; // which exchange this trade belongs to, used for discrimination in ExchangeService
    validUntil?: string | undefined; // timestamp in ISO format of offer validity
    cid?: string | undefined; // google clientID
    minFiat?: number | undefined;
    maxFiat?: number | undefined;
    minCrypto?: number | undefined;
    maxCrypto?: number | undefined;
    paymentMethod?: BuyCryptoPaymentMethod | undefined;
    paymentMethodName?: string | undefined;
    infoNote?: string | undefined;
    country?: string | undefined; // CZ
    wantCrypto?: boolean | undefined;
    tags?: BuyTradeTag[] | undefined;
    partnerData?: string | undefined; // arbitrary data specific for the partner
    partnerData2?: string | undefined; // arbitrary data specific for the partner
    id?: string | undefined; // internal DB id
    // locally used data types
    tradeForm?: BuyTradeFormResponse | undefined;
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
    tradeForm?: BuyTradeFormResponse | undefined;
    requestTradeErrorType?: "QUOTE_TIMEOUT" | "UNKNOWN" | undefined;
    newQuote?: BuyTrade | undefined;
}

export type BuyTradeFormResponse = FormResponse;

export interface WatchBuyTradeResponse {
    status?: BuyTradeStatus | undefined; // state of trade after confirmTrade
    error?: string | undefined; // something went wrong after confirmTrade
}

// exchange types

export type ExchangeTradeFinalStatus =
    | "SUCCESS" // receive tx was created, waiting for receive tx to be mined
    | "ERROR" // something went wrong during or after confirmTrade
    | "KYC"; // Trade is subject to KYC/AML

export type ExchangeTradeStatus =
    | "LOADING" // fetching address from exchange
    | "CONFIRM" // waiting for user confirmation on TREZOR
    | "SENDING" // send tx was created, waiting for send tx to be sent
    | "CONFIRMING" // send tx was sent, waiting for tx to be mined (not used for Trezor Wallet)
    | "CONVERTING" // send tx was mined, money is on exchange, receive tx not yet created
    | "APPROVAL_REQ" // it is necessary to perform APPROVAL transaction for DEX
    | "APPROVAL_PENDING" // waiting for DEX approval tx to be confirmed
    | ExchangeTradeFinalStatus;

export type ExchangeFee =
    | number // actual fee amount in 'receive' currency
    | "INCLUDED" // exchange won't tell, but receiveAmount and rate already include it
    | "UNKNOWN"; // exchange won't tell, receiveAmount and rate don't include it

export type ExchangeMaximum =
    | number // actual maximum amount in 'send' currency
    | "NONE"; // exchange does not have a maximum trade size

export type ExchangeTradeTag = "renewed" | "bestRate" | "favorite" | "kyc" | "widget";
export type ExchangeKYCType = "KYC-norefund" | "KYC-yesrefund" | "noKYC" | "DEX";

export interface ExchangeProviderInfo {
    name: string; // changenow
    companyName: string; // ChangeNow
    logo: string; // changenow-icon.jpg
    isActive: boolean;
    isFixedRate: boolean;
    isDex: boolean;
    buyTickers: CryptoId[];
    sellTickers: CryptoId[];
    addressFormats: StringMap; // specification of formats required by selected exchange
    statusUrl: string; // https://changenow.io/exchange/txs/{{orderId}}
    kycUrl?: string; // https://changenow.io/faq#kyc
    supportUrl: string; // https://support.changenow.io
    // TODO region of operation
    kycPolicy?: string | undefined;
    kycPolicyType: ExchangeKYCType;
    isRefundRequired?: boolean | undefined;
}

export type ExchangeListResponse = ExchangeProviderInfo[];

export type DexApprovalType =
    | "MINIMAL" // MINIMAL (default) is the lowest necessary to swap sendStringAmount
    | "INFINITE" // approves infinite amount
    | "ZERO" // resets approval
    | "PRESET"; // PRESET takes value from approvalStringAmount

export interface ExchangeTrade {
    send?: CryptoId | undefined; // bitcoin

    sendStringAmount?: string | undefined; // "0.01"
    sendAddress?: string | undefined; // exchange address for send tx
    receive?: CryptoId | undefined; // litecoin

    receiveStringAmount?: string | undefined; // "0.01"
    fromAddress?: string | undefined; // user's address from which the tx is sent - used in DEX
    receiveAddress?: string | undefined; // user's address for receive tx
    rate?: number | undefined; // 100
    min?: number | undefined; // 0.001
    max?: ExchangeMaximum | undefined;
    fee?: ExchangeFee | undefined;
    partnerPaymentExtraId?: string | undefined; // Extra ID for payments to exchange for networks that require it (destinationTag)
    signature?: string | undefined; // Evercoin only, passed from createTrade response to confirmTrade request
    orderId?: string | undefined; // internal ID assigned to the trade by the exchange
    statusUrl?: string | undefined; // internal URL + ID assigned to the trade by the exchange to check status
    status?: ExchangeTradeStatus | undefined; // state of trade after confirmTrade
    error?: string | undefined; // something went wrong after confirmTrade
    receiveTxHash?: string | undefined; // hash of tx from exchange to user or DEX swap
    cid?: string | undefined; // google clientID
    offerReferenceId?: string | undefined; // coinswitch only
    rateIdentificator?: string | undefined; // rate identificator for fixed rate exchanges
    exchange?: string | undefined; // which exchange this trade belongs to, used for discrimination in ExchangeService
    quoteToken?: string | undefined; // fox.exchange only
    extraField?: string | undefined; // payments to user wallet extra field (payout)
    extraFieldDescription?: CoinExtraField | undefined;
    tags?: ExchangeTradeTag[] | undefined;
    id?: string | undefined; // internal DB id
    infoNote?: string | undefined;

    // DEX extra fields
    isDex?: boolean | undefined;
    approvalGasEstimate?: number | undefined; // gas estimate of the approval transaction
    approvalType?: DexApprovalType | undefined;
    preapprovedStringAmount?: string | undefined; //  amount that was already approved
    approvalStringAmount?: string | undefined; //  amount to approve
    approvalSendTxHash?: string | undefined; // txid of approval transaction
    swapGasEstimate?: number | undefined; // gas estimate of the swap transaction
    swapSlippage?: string | undefined; // swap slippage in percent, for example "1.5"
    dexTx?:
        | {
            // tx data for approval or swap transaction
            from: string;
            to: string;
            data: string;
            value: string;
        }
        | undefined;
    // locally used fields
    offerType?: "bestRate" | "favorite" | undefined;
}

export interface ExtendedExchangeTrade extends ExchangeTrade {
    requestTradeErrorType?: "QUOTE_TIMEOUT" | "UNKNOWN" | undefined;
    newQuote?: ExchangeTrade | undefined; // A renewed quote, in case of a timeout
}

export interface CoinExtraField {
    name: string;
    description: string;
    required: boolean;
    type: "number" | "text" | "hex";
}

export interface ExchangeTradeQuoteRequest {
    send: CryptoId; // bitcoin
    receive: CryptoId; // litecoin
    sendStringAmount?: string | undefined; // "0.01"
    dex?: "enable" | "exclusively" | undefined; // 'enable' means add dex offers, 'exclusively' means only dex offers
}

export type ExchangeTradeQuoteResponse = ExchangeTrade[];

export interface ConfirmExchangeTradeRequest {
    trade: ExchangeTrade;
    receiveAddress: string; // address hash
    refundAddress: string; // address hash (optional because Changelly doesn't support it)
    extraField?: string | undefined; // XRP destination tag, XMR label id, ...
}

export interface WatchExchangeTradeResponse {
    status?: ExchangeTradeStatus | undefined; // state of trade after confirmTrade
    receiveTxHash?: string | undefined;
    rate?: number | undefined;
    receiveStringAmount?: string | undefined; // "0.01"
    error?: string | undefined; // something went wrong after confirmTrade
}

// utilityTypes

export interface CountryInfo {
    country: string;
    fiatCurrency?: string | undefined; // optional field, fiat currency based on country
}

export type TicketTopic = "Invity.io" | "Buy crypto" | "Exchange crypto" | "Invest in crypto";

export interface SupportTicket {
    name: string;
    email: string;
    description: string;
    topic: TicketTopic;
    reCaptchaV2Token?: string | undefined;
    reCaptchaV3Token?: string | undefined;
}

export interface SupportTicketResponse {
    error?: string | undefined;
    statusCode: number;
}

export interface CoinInfoServices {
    buy: boolean;
    sell: boolean;
    exchange: boolean;
}

export interface CoinInfo {
    symbol: string;
    name: string;
    coingeckoId: string;
    services: CoinInfoServices;
}

export interface Coins {
    [key: string]: CoinInfo;
}

export interface PlatformsInfo {
    id: string;
    name: string;
    nativeCoinSymbol: string;
}

export interface Platforms {
    [key: string]: PlatformsInfo;
}

export interface InfoResponse {
    platforms: Platforms;
    coins: Coins;
}

// sell/voucher types

export type SellTradeFinalStatus =
    | "SUCCESS" // receive tx was created, waiting for receive tx to be mined
    | "ERROR" // the transaction was blocked, the customer will be contacted by email
    | "BLOCKED" // something went wrong during or after confirmTrade
    | "CANCELLED" // user cancelled the transaction
    | "REFUNDED"; // transaction has been refunded

export type SellTradeStatus =
    | "REQUESTING" // sending request to the partner
    | "LOGIN_REQUEST" // request to login to the partner's site
    | "SITE_ACTION_REQUEST" // request to transfer to the partner's site
    | "SUBMITTED" // request was submitted to the partner
    | "SEND_CRYPTO" // request to send crypto
    | "PENDING" // pending exchange to fiat
    | SellTradeFinalStatus;

export type SellProviderType = "Fiat" | "Voucher";

export type SellFiatFlowType = "BANK_ACCOUNT" | "PAYMENT_GATE" | "N/A";

export interface SellProviderInfo {
    name: string; // simplex
    companyName: string; // Simplex
    logo: string; // simplex-icon.jpg
    type: SellProviderType;
    isActive: boolean;
    tradedCoins: CryptoId[]; // ['bitcoin', 'bitcoin-cash', 'litecoin']
    tradedFiatCurrencies?: string[] | undefined; // ['EUR', 'USD']
    supportedCountries: string[]; // ['AT', 'BE']
    statusUrl?: string | undefined; // https://payment-status.simplex.com/api/v1/user/payments?uuid={{paymentId}}
    supportUrl?: string | undefined; // https://www.simplex.com/support/
    quoteInfo?: string | undefined; // some info text shown on quote
    voucherSiteOrigin?: string | undefined;
    paymentMethods?: SellCryptoPaymentMethod[] | undefined;
    flow?: SellFiatFlowType | undefined;
    isRefundAddressRequired?: boolean | undefined;
    pendingTimeout?: number | undefined; // Time until a SUBMITTED transaction automatically changes to PENDING. Null means it does not change.
}

export interface SellListResponse {
    country: string;
    providers: SellProviderInfo[];
}

export type SellCryptoPaymentMethod = "bankTransfer" | "creditCard";

export type SellTradeTag = "renewed" | "alternativeCurrency" | "bestRate" | "favorite" | "wantFiat" | "widget";

export interface SellFiatTradeQuoteRequest {
    amountInCrypto: boolean; // true for cryptoAmount, false for fiatAmount
    fiatStringAmount?: string | undefined; // 1000 - will pay fiat amount
    fiatCurrency: string; // USD
    cryptoStringAmount?: string | undefined; // 0.3 - requested amount in crypto currency
    cryptoCurrency: CryptoId; // bitcoin
    country?: string | undefined;
    paymentMethod?: SellCryptoPaymentMethod | undefined;
    flows?: SellFiatFlowType[] | undefined;
}

export type SellFiatTradeQuoteResponse = SellFiatTrade[];

export interface SellFiatTrade {
    amountInCrypto?: boolean | undefined; // true for cryptoAmount, false for fiatAmount
    fiatStringAmount?: string | undefined; // 1000
    fiatCurrency?: string | undefined; // EUR
    cryptoCurrency?: CryptoId | undefined; // bitcoin
    cryptoStringAmount?: string | undefined; // 0.12345
    rate?: number | undefined; // 100
    quoteId?: string | undefined; // ID of the quote assigned by exchange
    orderId?: string | undefined; // ID of the order assigned by us
    paymentId?: string | undefined; // ID of the payment assigned by the partner
    originalPaymentId?: string | undefined; // ID of the payment assigned by us and later changed by the partner
    eventId?: string | undefined; // ID of the last event which modified the trade
    siteUrl?: string | undefined; // sell site url
    status?: SellTradeStatus | undefined; // state of trade after confirmTrade
    refundAddress?: string | undefined; // crypto address to which sent crypto currency will be returned in case of a refund
    refundAddressExtraId?: string | undefined; // Extra ID for returns to exchange for networks that require it (destinationTag)
    destinationAddress?: string | undefined; // crypto address to which sent crypto currency to sell
    destinationPaymentExtraId?: string | undefined; // Extra ID for payments to exchange for networks that require it (destinationTag)
    destinationPaymentExtraIdDescription?: CoinExtraField;
    error?: string | undefined; // something went wrong
    exchange?: string | undefined; // which exchange this trade belongs to, used for discrimination in ExchangeService
    validUntil?: string | undefined; // timestamp in ISO format of offer validity
    txid?: string | undefined; // txid of crypto transaction
    tags?: SellTradeTag[] | undefined;
    cid?: string | undefined; // google clientID
    minFiat?: number | undefined;
    maxFiat?: number | undefined;
    minCrypto?: number | undefined;
    maxCrypto?: number | undefined;
    paymentMethod?: SellCryptoPaymentMethod | undefined;
    paymentMethodName?: string | undefined;
    infoNote?: string | undefined;
    country?: string | undefined; // CZ
    bankAccount?: BankAccount | undefined; // selected bank account
    bankAccounts?: BankAccount[] | undefined; // list of available bank accounts
    id?: string | undefined; // internal DB id
    partnerData?: string | undefined; // arbitrary data specific for the partner
    partnerData2?: string | undefined; // arbitrary data specific for the partner
}

export interface SellVoucherTradeQuoteRequest {
    cryptoCurrency?: CryptoId | undefined; // bitcoin
    language?: string | undefined; // en
    country?: string | undefined; // cz
    refundAddress?: string | undefined; // crypto address to which sent crypto currency to sell
}

export interface SellVoucherTrade {
    siteUrl?: string | undefined;
    error?: string | undefined; // something went wrong
    exchange?: string | undefined; // which exchange this trade belongs to, used for discrimination in ExchangeService
    status?: SellTradeStatus | undefined; // state of trade after request trade
    cryptoCurrency?: CryptoId | undefined; // bitcoin
    cryptoAmount?: number | undefined; // 0.12345
    destinationAddress?: string | undefined; // crypto address to which sent crypto currency to sell
    paymentId?: string | undefined; // ID of the order assigned by us
}

export interface SellVoucherTradeRequest {
    exchange: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    cryptoCurrency: CryptoId;
    data: any; // data returned by post message
}

export type SellVoucherTradeQuoteResponse = SellVoucherTrade[];

export type SellFiatTradeFormResponse = FormResponse;

export interface SellFiatTradeRequest {
    /**
     * The trade object
     */
    trade: SellFiatTrade;
    /**
     * URL where to return after the trade is done
     */
    returnUrl?: string | undefined;
}

export interface SellFiatTradeResponse {
    trade: SellFiatTrade;
    tradeForm?: SellFiatTradeFormResponse | undefined;
    requestTradeErrorType?: "QUOTE_TIMEOUT" | "UNKNOWN" | undefined;
    newQuote?: SellFiatTrade | undefined;
}

export interface WatchSellTradeResponse {
    status?: SellTradeStatus | undefined; // new state of trade
    error?: string | undefined; // something went wrong
    destinationAddress?: string | undefined; // crypto address to which sent crypto currency to sell
    destinationPaymentExtraId?: string | undefined; // Extra ID for payments to exchange for networks that require it (destinationTag)
    cryptoStringAmount?: string; // Crypto amount to send in case of change on provider's side (Banxa)
}
