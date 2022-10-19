// Type definitions for non-npm package invity-api 1.0
// Project: https://github.com/satoshilabs/invity-api (not public repo)
// Definitions by: Martin Boehm <https://github.com/martinboehm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// common types
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
              formMethod: 'GET' | 'POST' | 'IFRAME';
              formAction: string;
              formTarget?: '_blank' | '_self' | undefined;
              fields: StringMap;
          }
        | undefined;
    error?: string | undefined;
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
    | 'applePay'
    | 'paynow'
    | 'fps'
    | 'promptpay'
    | 'instapay'
    | 'upi'
    | 'gojekid'
    | 'viettelpay'
    | 'duitnow'
    | 'payid'
    | 'toss';

export type BuyTradeTag = 'renewed' | 'alternativeCurrency' | 'bestRate' | 'favorite' | 'wantCrypto' | 'widget';

export interface BuyProviderInfo {
    name: string; // simplex
    companyName: string; // Simplex
    logo: string; // simplex-icon.jpg
    isActive: boolean;
    isDisabled?: boolean;
    tradedCoins: string[]; // ['BTC', 'BCH', 'LTC', 'XRP', 'ETH']
    tradedFiatCurrencies: string[]; // ['EUR', 'USD']
    disabledCurrencies?: string[];
    supportedCountries: string[]; // ['BTC', 'USD']
    disabledCountries?: string[];
    paymentMethods: BuyCryptoPaymentMethod[];
    statusUrl: string; // https://payment-status.simplex.com/api/v1/user/payments?uuid={{paymentId}}
    supportUrl: string; // https://www.simplex.com/support/
    pendingTimeoutSeconds?: number; // Time until a SUBMITTED transaction automatically changes to APPROVAL_PENDING. Null means it does not change.
}

export interface BuyListResponse {
    country: string;
    suggestedFiatCurrency?: string | undefined; // optional field, fiat currency based on user's IP
    providers: BuyProviderInfo[];
}

export interface BuyTradeQuoteRequest {
    wantCrypto: boolean; // true for cryptoAmount, false for fiatAmount
    fiatAmount?: number | undefined; // 1000 - will pay fiat amount - DEPRECATED, used only for TREZOR
    fiatStringAmount?: string | undefined; // 1000 - will pay fiat amount
    cryptoAmount?: number | undefined; // 0.3 - requested amount in crypto currency - DEPRECATED, used only for TREZOR
    cryptoStringAmount?: string | undefined; // 0.3 - requested amount in crypto currency
    fiatCurrency: string; // USD
    receiveCurrency: string; // BTC
    country?: string | undefined;
    paymentMethod?: BuyCryptoPaymentMethod | undefined;
}

export type BuyTradeQuoteResponse = BuyTrade[];

export interface BuyTrade {
    fiatAmount?: number | undefined; // 1000 - DEPRECATED, used only for TREZOR
    fiatStringAmount?: string | undefined; // 1000 - will pay fiat amount
    fiatCurrency?: string | undefined; // EUR
    receiveCurrency?: string | undefined; // BTC
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
    requestTradeErrorType?: 'QUOTE_TIMEOUT' | 'UNKNOWN' | undefined;
    newQuote?: BuyTrade | undefined;
}

export type BuyTradeFormResponse = FormResponse;

export interface WatchBuyTradeResponse {
    status?: BuyTradeStatus | undefined; // state of trade after confirmTrade
    error?: string | undefined; // something went wrong after confirmTrade
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
    | 'APPROVAL_REQ' // it is necessary to perform APPROVAL transaction for DEX
    | 'APPROVAL_PENDING' // waiting for DEX approval tx to be confirmed
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
    isDex: boolean;
    buyTickers: string[];
    sellTickers: string[];
    addressFormats: StringMap; // specification of formats required by selected exchange
    statusUrl: string; // https://changenow.io/exchange/txs/{{orderId}}
    kycUrl: string; // https://changenow.io/faq#kyc
    supportUrl: string; // https://support.changenow.io
    // TODO region of operation
    kycPolicy?: string | undefined;
    isRefundRequired?: boolean | undefined;
}

export type ExchangeListResponse = ExchangeProviderInfo[];

export interface ExchangeCoinInfo {
    ticker: string; // BTC
    name: string; // Bitcoin
    category: string; // popular
    token?: string | undefined; // platform of the token, e.g. ETH
}

export type ExchangeCoinListResponse = ExchangeCoinInfo[];

export type DexApprovalType =
    | 'MINIMAL' // MINIMAL (default) is the lowest necessary to swap sendStringAmount
    | 'INFINITE' // approves infinite amount
    | 'ZERO' // resets approval
    | 'PRESET'; // PRESET takes value from approvalStringAmount

export interface ExchangeTrade {
    send?: string | undefined; // BTC

    sendStringAmount?: string | undefined; // "0.01"
    sendAddress?: string | undefined; // exchange address for send tx
    receive?: string | undefined; // LTC

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
    offerType?: 'bestRate' | 'favorite' | undefined;
}

export interface ExtendedExchangeTrade extends ExchangeTrade {
    requestTradeErrorType?: 'QUOTE_TIMEOUT' | 'UNKNOWN' | undefined;
    newQuote?: ExchangeTrade | undefined; // A renewed quote, in case of a timeout
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
    sendStringAmount?: string | undefined; // "0.01"
    dex?: 'enable' | 'exclusively' | undefined; // 'enable' means add dex offers, 'exclusively' means only dex offers
}

export type ExchangeTradeQuoteResponse = ExchangeTrade[];

export interface ConfirmExchangeTradeRequest {
    trade: ExtendedExchangeTrade;
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

export type TicketTopic = 'Invity.io' | 'Buy crypto' | 'Exchange crypto' | 'Invest in crypto';

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

export type SellFiatFlowType = 'BANK_ACCOUNT' | 'PAYMENT_GATE' | 'N/A';

export interface SellProviderInfo {
    name: string; // simplex
    companyName: string; // Simplex
    logo: string; // simplex-icon.jpg
    type: SellProviderType;
    isActive: boolean;
    tradedCoins: string[]; // ['BTC', 'BCH', 'LTC', 'XRP', 'ETH']
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

export type SellCryptoPaymentMethod = 'bankTransfer' | 'creditCard';

export type SellTradeTag = 'renewed' | 'alternativeCurrency' | 'bestRate' | 'favorite' | 'wantFiat' | 'widget';

export interface SellFiatTradeQuoteRequest {
    amountInCrypto: boolean; // true for cryptoAmount, false for fiatAmount
    fiatStringAmount?: string | undefined; // 1000 - will pay fiat amount
    fiatCurrency: string; // USD
    cryptoStringAmount?: string | undefined; // 0.3 - requested amount in crypto currency
    cryptoCurrency: string; // BTC
    country?: string | undefined;
    paymentMethod?: SellCryptoPaymentMethod | undefined;
    flows?: SellFiatFlowType[] | undefined;
}

export type SellFiatTradeQuoteResponse = SellFiatTrade[];

export interface SellFiatTrade {
    amountInCrypto?: boolean | undefined; // true for cryptoAmount, false for fiatAmount
    fiatStringAmount?: string | undefined; // 1000
    fiatCurrency?: string | undefined; // EUR
    cryptoCurrency?: string | undefined; // BTC
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
    infoNote?: string | undefined;
    country?: string | undefined; // CZ
    bankAccount?: BankAccount | undefined; // selected bank account
    bankAccounts?: BankAccount[] | undefined; // list of available bank accounts
    id?: string | undefined; // internal DB id
    partnerData?: string | undefined; // arbitrary data specific for the partner
    partnerData2?: string | undefined; // arbitrary data specific for the partner
}

export interface SellVoucherTradeQuoteRequest {
    cryptoCurrency?: string | undefined; // BTC
    language?: string | undefined; // en
    country?: string | undefined; // cz
    refundAddress?: string | undefined; // crypto address to which sent crypto currency to sell
}

export interface SellVoucherTrade {
    siteUrl?: string | undefined;
    error?: string | undefined; // something went wrong
    exchange?: string | undefined; // which exchange this trade belongs to, used for discrimination in ExchangeService
    status?: SellTradeStatus | undefined; // state of trade after request trade
    cryptoCurrency?: string | undefined; // BTC
    cryptoAmount?: number | undefined; // 0.12345
    destinationAddress?: string | undefined; // crypto address to which sent crypto currency to sell
    paymentId?: string | undefined; // ID of the order assigned by us
}

export interface SellVoucherTradeRequest {
    exchange: string; // which exchange this trade belongs to, used for discrimination in ExchangeService
    cryptoCurrency: string;
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
    requestTradeErrorType?: 'QUOTE_TIMEOUT' | 'UNKNOWN' | undefined;
    newQuote?: SellFiatTrade | undefined;
}

export interface WatchSellTradeResponse {
    status?: SellTradeStatus | undefined; // new state of trade
    error?: string | undefined; // something went wrong
    destinationAddress?: string | undefined; // crypto address to which sent crypto currency to sell
    destinationPaymentExtraId?: string | undefined; // Extra ID for payments to exchange for networks that require it (destinationTag)
}

export type SpendTrade = SellVoucherTrade;

// savings types

export type SavingsPaymentMethod = 'bankTransfer';

export interface InitSavingsTradeRequest {
    returnUrl: string;
    paymentFrequency: PaymentFrequency;
    amount: string;
    fiatCurrency: string;
    cryptoCurrency: string;
    exchange: string;
    country: string;
}

export interface SavingsTradeInitParameters {
    savingsTradeId: string;
    appType: string;
    returnUrl: string;
    paymentFrequency: PaymentFrequency;
    amount: string;
    fiatCurrency: string;
    cryptoCurrency: string;
    exchange: string;
    country: string;
    clientAppId: string;
}

export interface SavingsErrorResponse {
    code?: string | undefined;
    error?: string | undefined;
}

// starts after login to invity account
// 0 - external site
//      BTCD: nothing
//      Swan: redirect to OIDC
// 1 - your credentials
//      BTCD: personal info (name+surname+phone+DOB?)
//      Swan: personal info (phone)
// 2 - your phone number
//      BTCD: sms verification
//      Swan: nothing
// 3 - KYC verification
//      BTCD: internal KYC, document type, KYC upload (we can move forward)
//      Swan: KYC status page (is it blocking until done?)
// 4 - AML
//      BTCD: AML
//      Swan: nothing
// 5 - Bank account
//      BTCD: nothing
//      Swan: enter bank account + server side validation on change
// 6 - Upload wallet screenshot for non-Trezor ClientApp?
//      BTCD: upload wallet screenshot only for non-Trezor ClientApp
//      Swan: ???
// 7 - DCA setup
//      BTCD: savings parameters, choose crypto address
//      Swan: savings parameters, choose crypto address(es)
// 8 - DCA setup
//      BTCD: confirmation
//      Swan: confirmation

export interface SavingsStepEnabled {
    /** Indicates whether the step is enabled (meaning the flow process has to go through this step) or this step will be skipped. */
    isEnabled: boolean;
}

export type SavingsStepAfterLogin = SavingsStepEnabled;

export type SavingsStepCredentials = SavingsStepEnabled & {
    isFamilyNameEnabled: boolean;
    isGivenNameEnabled: boolean;
    isPhoneEnabled: boolean;
};

export type SavingsStepPhoneVerification = SavingsStepEnabled & {
    /**
     * Determines way of phone number verification.
     * - ClientApp - we are verify the user's phone number
     * - External - we provide the phone number to partner to be verified by the partner or externally
     */
    phoneVerificationType: 'ClientApp' | 'External';
};

export type SavingsStepAfterSuccessfulPhoneVerification = SavingsStepEnabled;

export type SavingsStepKYC = SavingsStepEnabled & {
    /**
     * Determines way KYC document upload.
     * - ClientApp - we are handover the KYC documents to partner right from the user
     * - External - upload is managed fully by our partner
     */
    documentUploadType: 'ClientApp' | 'External';
    isWaitingForKYCResult: boolean;
};

export type SavingsStepAML = SavingsStepEnabled;

export type SavingsStepBankAccount = SavingsStepEnabled;
export type SavingsStepCryptoWalletVerification = SavingsStepEnabled;

export type SavingsStepParameters = SavingsStepEnabled & {
    receivingAddressCount: number;
};

export type SavingsStepPaymentInfo = SavingsStepEnabled & {
    isAutomaticPaymentPlanningEnabled: boolean;
};

export interface SavingsProviderFlow {
    /** Defines what should happen after login. */
    afterLogin: SavingsStepAfterLogin;
    credentials: SavingsStepCredentials;
    phoneVerification: SavingsStepPhoneVerification;
    afterSuccessfulPhoneVerification: SavingsStepAfterSuccessfulPhoneVerification;
    kyc: SavingsStepKYC;
    aml: SavingsStepAML;
    bankAccount: SavingsStepBankAccount;
    cryptoWalletVerification: SavingsStepCryptoWalletVerification;
    parameters: SavingsStepParameters;
    paymentInfo: SavingsStepPaymentInfo;
}

export interface SavingsProviderInfo {
    /** Name of provider as our identifier e.g.: btcdirect. */
    name: string;

    /** Official name of provider e.g.: BTC Direct. */
    companyName: string;

    /** Name of logo file. */
    logo: string;

    /** Indicates whether the provider is marked as active or not. The setting comes from configuration. */
    isActive: boolean;

    /** Coins which user can save into. */
    tradedCoins: string[];

    /** Fiat currencies (3-letter ISO codes) with which can the savings be set up. */
    tradedFiatCurrencies: string[];

    /** Supported countries (2-letter ISO codes) of where provider offers the savings. */
    supportedCountries: string[];

    /** Provider's support URL. */
    supportUrl?: string | undefined;

    /** Defines methods of how a user can pay to save crypto. */
    paymentMethods?: SavingsPaymentMethod[] | undefined;

    /** List of document types required by provider's KYC process. User has to choose one. */
    identityDocuments: SavingsProviderInfoIdentityDocument[];

    /** URL where a privacy policy of the provider is located. */
    privacyPolicyUrl: string;

    /** Defines a savings flow. Different providers might have different steps in the savings flow. */
    flow: SavingsProviderFlow;

    /** List of payment frequencies selectable by user during savings setup. */
    setupPaymentFrequencies: PaymentFrequency[];

    /** List of payment amounts selectable by user during savings setup. */
    setupPaymentAmounts: string[];

    minimumPaymentAmountLimit: number;

    maximumPaymentAmountLimit: number;

    defaultPaymentFrequency: PaymentFrequency;

    defaultPaymentAmount: number;
}

export interface SavingsProviderInfoIdentityDocument {
    documentType: SavingsTradeUserKYCStartDocumentType;
    documentImageSides: SavingsTradeUserKYCStartDocumentImageSide[];
    isRequired?: boolean | undefined;
}

export interface SavingsListResponse {
    country: string;
    providers: SavingsProviderInfo[];
}

export type SavingsSetupStatus =
    /** Show select options what kind of documents the will be KYC'ed. */
    | 'KYC'
    /** More like questionnaire - can't fail. */
    | 'AML'
    /** User needs to verify crypto wallet. */
    | 'WalletVerification'
    /** User needs to submit bank account. */
    | 'SubmitBankAccount'
    /** User setups savings plan parameters (frequency, amount, etc.). */
    | 'SetSavingsParameters'
    /** Partner has generated payment info parameters. */
    | 'ConfirmPaymentInfo';

export type SavingsStatus = SavingsSetupStatus | 'Cancelled' | 'Active';
export type SavingsKYCStatus =
    /** KYC process didn't start yet. */
    | 'Open'
    /** KYC process is in progress. Might take some time to resolve. */
    | 'InProgress'
    /** KYC process passed successfully. */
    | 'Verified'
    /** KYC docs are invalid or anything could be wrong. Expecting reason from our partner to handover to the user. */
    | 'Failed'
    /** KYC status check ended up in error state. */
    | 'Error';

export type SavingsAMLStatus =
    /** AML process didn't start yet. */
    | 'Open'
    /** AML process passed successfully. */
    | 'Verified';

export type PaymentFrequency = 'Daily' | 'Weekly' | 'Biweekly' | 'Monthly' | 'Quarterly';

export interface SavingsTradePlannedPayment {
    /** Our id. */
    paymentId: string;

    /** Partner's id. */
    partnerPaymentId?: string | undefined;

    fiatAmount?: string | undefined;
    cryptoAmount?: string | undefined;
    plannedPaymentAt: string;
    paymentInfo: SavingsPaymentInfo;
}

export interface SavingsTradeUserRegistration {
    /** Or first name as we are used to in most of the European countries. */
    givenName: string;

    /** Or last name as we are used to in most of the European countries. */
    familyName: string;

    /** Birth day in ISO format. For example: 2021-07-14T14:00:00.000Z - using date.toISOString() on client. */
    dateOfBirth: string;

    phoneNumber: string;
}

export type SavingsTradeUserKYCStartDocumentType =
    | 'Passport'
    | 'IdentityCard'
    | 'DrivingLicence'
    | 'Selfie'
    | 'WalletVerification';

export type SavingsTradeUserKYCStartDocumentImageSide =
    | 'Front'
    | 'Back'
    | 'Selfie'
    | 'SecondSelfie'
    | 'ProofOfResidency'
    | 'WalletVerification';

export interface SavingsTradeUserKYCStartDocumentImage {
    documentSide: SavingsTradeUserKYCStartDocumentImageSide;
    data: string;
}

export interface SavingsTradeUserKYCStart {
    documentType: SavingsTradeUserKYCStartDocumentType;
    documentImages: SavingsTradeUserKYCStartDocumentImage[];
}

export interface SavingsTradeAMLQuestion {
    key: string;
    label: string;
    answerOptions: string[];
}

export interface SavingsTrade {
    id?: string | undefined;
    externalId?: string | undefined;
    externals?: Record<string, string> | undefined;
    country?: string | undefined;
    status?: SavingsStatus | undefined;
    kycStatus?: SavingsKYCStatus | undefined;
    amlStatus?: SavingsAMLStatus | undefined;

    /** Customer's bank account from which payments should be paid to receive crypto. */
    bankAccount?: BankAccount | undefined;

    /** Amount of money to be paid recurrently. */
    fiatStringAmount?: string | undefined;

    /** Fiat currency of recurrent payment. */
    fiatCurrency?: string | undefined;

    /** Crypto currency of recurrent payment. */
    cryptoCurrency?: string | undefined;

    /** How often payment should be paid by customer. */
    paymentFrequency?: PaymentFrequency | undefined;

    paymentMethod?: SavingsPaymentMethod | undefined;

    /** Name of savings provider. */
    exchange: string;

    /** Crypto address where provider sends crypto. */
    receivingCryptoAddresses?: string[] | undefined;

    /** Indicates whether the user is registered in partner's system. */
    isUserRegisteredInPartnerSystem?: boolean | undefined;

    userRegistration?: SavingsTradeUserRegistration | undefined;

    userKYCStart?: SavingsTradeUserKYCStart[] | undefined;

    amlQuestions?: SavingsTradeAMLQuestion[] | undefined;

    amlAnswers?: SavingsTradeAMLAnswer[] | undefined;

    paymentInfo?: SavingsPaymentInfo | undefined;

    tradeItems?: SavingsTradeItem[] | undefined;
}

export interface SavingsPaymentInfo {
    name?: string | undefined;
    iban?: string | undefined;
    description?: string | undefined;
    bic?: string | undefined;
}

export interface SavingsTradeRequest {
    trade: SavingsTrade;
}

export interface SavingsTradeErrorResponse extends SavingsErrorResponse {
    code?:
        | 'AppIDRequired'
        | 'ExchangeNotFound'
        | 'SavingsTradeCountryRequired'
        | 'SavingsTransactionNotFound'
        | 'SavingsTransactionExists'
        | 'GetUserInfoFailed'
        | 'FlowStepDisabled'
        | 'UnknownStatus';
}

export interface SavingsTradeResponse extends SavingsTradeErrorResponse {
    trade?: SavingsTrade | undefined;

    /** Payments in savings plan. */
    payments?: SavingsTradePlannedPayment[] | undefined;
}

export interface SavingsTradesResponse extends SavingsTradeErrorResponse {
    trades: SavingsTrade[];
}

export interface SavingsKYCInfoSuccessResponse {
    status: 'Success';
    documentTypes: SavingsTradeUserKYCStartDocumentType[];
}

export type SavingsKYCInfoResponse = SavingsKYCInfoSuccessResponse | SavingsErrorResponse;

export interface SavingsTradeAMLAnswer {
    key: string;
    answer: string;
}
export interface SavingsTradeAMLAnswersRequest {
    answers: SavingsTradeAMLAnswer[];
}

export interface SavingsAMLAnswersSuccessResponse {
    status: 'Success';
}

export type SavingsAMLAnswersResponse = SavingsAMLAnswersSuccessResponse | SavingsErrorResponse;

export interface SavingsTradeKYCStatusSuccessfulResponse {
    kycStatus?: SavingsKYCStatus | undefined;
}

export interface SavingsTradeKYCStatusErrorResponse extends SavingsErrorResponse {
    code?:
        | 'GetIdentityInfoFailed'
        | 'SavingsTransactionNotFound'
        | 'ExchangeNotFound'
        | 'GetUserInfoFailed'
        | 'UserNotFoundInPartnerSystem';
}

export type SavingsTradeKYCStatusResponse = SavingsTradeKYCStatusSuccessfulResponse &
    SavingsTradeKYCStatusErrorResponse;

export type SavingsTradeItemStatus =
    | 'Cancelled'
    | 'Pending'
    | 'InProgress'
    | 'Blocked'
    | 'Completed'
    | 'Refunded'
    | 'Error';

export interface SavingsTradeItem {
    id: string;
    savingsTradeId: string;
    exchange: string;
    status: SavingsTradeItemStatus;
    receiveAddress: string;
    fiatStringAmount: string;
    fiatCurrency: string;
    receiveStringAmount: string;
    receiveCurrency: string;
    paymentMethod: SavingsPaymentMethod;
    created: string;
}

export interface WatchSavingTradeItemErrorResponse extends SavingsErrorResponse {
    code?:
        | 'SavingsTradeIdRequired'
        | 'SavingsTradeItemIdRequired'
        | 'SavingsTradeItemNotFound'
        | 'SavingsTransactionNotFound';
}

export interface WatchSavingTradeItemResponse extends WatchSavingTradeItemErrorResponse {
    savingsTradeItem?: SavingsTradeItem | undefined;
}

export interface PartnerInitErrorResponse extends SavingsErrorResponse {
    code?: 'ReturnUrlRequired' | 'ExchangeNotFound' | 'PartnerInitFailed' | 'MissingRequestBody' | undefined;
}
export interface PartnerInitSuccessResponse {
    form?: {
        formMethod: 'GET';
        formAction: string;
        fields: Record<string, string>;
    };
    savingsTrade?: SavingsTrade | undefined;
}

export type PartnerInitResponse = PartnerInitSuccessResponse & PartnerInitErrorResponse;

export interface SubmitPhoneNumberResponse extends SavingsErrorResponse {
    code?: 'ExchangeNotFound' | 'InternalError' | 'SavingsTransactionNotFound' | undefined;
    form?: {
        formMethod: 'GET';
        formAction: string;
        fields: Record<string, string>;
    };
}

// p2p types

export type Id = string; // L3kP36m33Ep9Xq4L or 3513
export type Coin = string; // BTC
export type Currency = string; // CZK, USD, etc.
export type CountryCode = string; // CZ, US, etc.
export type OnlineStatus = 'ONLINE' | 'RECENTLY_ONLINE' | 'OFFLINE';

export interface P2pListResponse {
    country: string;
    suggestedFiatCurrency?: string | undefined; // optional field, fiat currency based on user's IP
    providers: P2pProviderInfo[];
}

export interface P2pProviderInfo {
    name: string; // hodlhodl
    companyName: string; // HodlHodl
    logo: string; // hodlhodl-icon.svg
    isActive: boolean;
    tradedCoins: Coin[]; // ['BTC', 'BCH', 'LTC', 'XRP', 'ETH']
    tradedCurrencies: Currency[]; // ['EUR', 'USD']
    supportedCountries: CountryCode[]; // ['CZ', 'SK']
}

export interface P2pQuotesRequest {
    assetCode: Coin;
    amount: string;
    currency: Currency;
    country?: CountryCode | undefined;
}

export interface P2pQuote {
    provider: string;
    id: Id;
    assetCode: Coin;
    countryCode?: CountryCode | undefined;
    title: string;
    currency: Currency;
    price: string;
    amountRange: P2pAmountRange;
    paymentWindowMinutes: number;
    paymentMethods: P2pPaymentMethod[];
    confirmations: number;
    trader: P2pTrader;
}

export interface P2pQuotesResponse {
    quotes: P2pQuote[];
}

export interface P2pAmountRange {
    minimum: string;
    maximum: string;
}

export interface P2pPaymentMethod {
    id: Id;
    description: string; // In person
}

export interface P2pTrader {
    name: string;
    onlineStatus: OnlineStatus;
    rating: string;
    numberOfTrades: number;
}

export interface P2pTradeRequest {
    quotesRequest: P2pQuotesRequest;
    selectedQuote: P2pQuote;
}

export interface P2pTradeResponse {
    tradeForm: FormResponse;
}
