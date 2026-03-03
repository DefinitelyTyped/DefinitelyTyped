import {
    BuyListResponse,
    BuyProviderInfo,
    BuyTrade,
    ConfirmExchangeTradeRequest,
    CreateTradeSignatureRequestExchange,
    CreateTradeSignatureRequestSell,
    CryptoId,
    ExchangeProviderInfo,
    ExchangeTrade,
    ExchangeTradeQuoteRequest,
    ExchangeTradeSigned,
    InfoResponse,
    SellFiatTrade,
    SellFiatTradeSigned,
    SellListResponse,
    SellProviderInfo,
    WatchSellTradeResponse,
} from "invity-api";

const bt: BuyTrade = {
    paymentMethodName: "TestPay",
    tags: ["noExternalAddress"],
};

const et: ExchangeTrade = {
    send: "bitcoin" as CryptoId,
    receive: "ethereum" as CryptoId,
    refundAddress: "refundAddress",
    quoteId: "123",
    signData: {
        type: "eip712-typed-data",
        data: {},
    },
    status: "SIGN_DATA",
};

const ets: ExchangeTradeSigned = {
    ...et,
    tradeSignature: "signature",
};

const sft: SellFiatTrade = {
    paymentMethodName: "Test",
    destinationPaymentExtraIdDescription: {
        description: "",
        name: "",
        required: true,
        type: "number",
    },
};

const sfts: SellFiatTradeSigned = {
    ...sft,
    tradeSignature: "signature",
};

const wstr: WatchSellTradeResponse = {
    cryptoStringAmount: "",
};

const providerInfo: BuyProviderInfo = {
    companyName: "Invity",
    brandName: "UAB Invity Finance",
    isActive: true,
    logo: "logo.svg",
    name: "invity",
    tradedCoins: [],
    tradedFiatCurrencies: [],
    supportedCountries: [],
    supportedSubdivisions: {},
    disabledSubdivisions: {},
    paymentMethods: [],
    statusUrl: "https://test-finance.invity.io/#status/{{paymentId}}",
    supportUrl: "",
    termsUrl: "https://invity.io/terms-of-use-invity-finance",
};

const infoResponse: InfoResponse = {
    platforms: {
        ethereum: {
            id: "ethereum",
            name: "Ethereum",
            nativeCoinSymbol: "eth",
        },
    },
    coins: {
        bitcoin: {
            name: "",
            symbol: "",
            coingeckoId: "",
            services: {
                buy: true,
                sell: true,
                exchange: true,
            },
        },
    },
};

const exchangeProviderInfo: ExchangeProviderInfo = {
    name: "example",
    companyName: "Example",
    logo: "example-icon.jpg",
    isActive: true,
    isFixedRate: false,
    isDex: true,
    buyTickers: ["bitcoin", "ethereum"] as CryptoId[],
    sellTickers: ["bitcoin", "ethereum"] as CryptoId[],
    addressFormats: {
        format: "legacy",
    },
    statusUrl: "https://example.com/txs/{{orderId}}",
    kycUrl: "https://example.com/faq#kyc",
    supportUrl: "https://support.example.com",
    termsUrl: "https://example.com/legal/terms-of-use",
    kycPolicy: "KYC is required...",
    kycPolicyType: "KYC-norefund",
    isRefundRequired: false,
};

const sellProviderInfo: SellProviderInfo = {
    name: "example",
    companyName: "Example",
    logo: "example-icon.jpg",
    type: "Fiat",
    isActive: true,
    tradedCoins: ["bitcoin", "ethereum"] as CryptoId[],
    tradedFiatCurrencies: ["USD"],
    supportedCountries: ["US"],
    supportedSubdivisions: { "US": ["WA"] },
    disabledSubdivisions: {},
    statusUrl: "https://example.com/txs/{{orderId}}",
    supportUrl: " https://support.example.com",
    termsUrl: "https://example.com/legal/terms-of-use",
    flow: "PAYMENT_GATE",
    isRefundAddressRequired: false,
    lockSendAmount: false,
};

const sellSignatureRequest: CreateTradeSignatureRequestSell = {
    type: "sell",
    id: "123",
    nonce: "nonce",
    outputs: [
        {
            address: "address",
            amount: "1000",
        },
    ],
    memoText: "memo",
    sendSlip44: 0,
};

const exchangeSignatureRequest: CreateTradeSignatureRequestExchange = {
    type: "exchange",
    id: "123",
    nonce: "nonce",
    outputs: [
        {
            address: "address",
            amount: "1000",
        },
    ],
    sendSlip44: 0,
    receiveSlip44: 2,
};

const exchangeTradeRequest: ConfirmExchangeTradeRequest = {
    trade: et,
    receiveAddress: "receiveAddress",
    refundAddress: "refundAddress",
    approvalFlow: true,
};

const exchangeTradeQuoteRequest: ExchangeTradeQuoteRequest = {
    send: "bitcoin" as CryptoId,
    receive: "ethereum" as CryptoId,
    sendStringAmount: "0.1",
    fromAddress: "fromAddress",
    receiveAddress: "receiveAddress",
};

const buyListResponse: BuyListResponse = {
    country: "US",
    subdivision: "WA",
    suggestedFiatCurrency: "USD",
    providers: [providerInfo],
    defaultAmountsOfFiatCurrencies: {
        usd: 1,
        eur: 1,
        gbp: 1,
        aed: 1,
        ars: 1,
        aud: 1,
        bdt: 1,
        brl: 1,
        cad: 1,
        chf: 1,
        clp: 1,
        cny: 1,
        czk: 1,
        dkk: 1,
        hkd: 1,
        huf: 1,
        idr: 1,
        ils: 1,
        inr: 1,
        jpy: 1,
        krw: 1,
        kwd: 1,
        lkr: 1,
        mxn: 1,
        myr: 1,
        nok: 1,
        nzd: 1,
        php: 1,
        pln: 1,
        rub: 1,
        sar: 1,
        sek: 1,
        sgd: 1,
        thb: 1,
        try: 1,
        twd: 1,
        vnd: 1,
        zar: 1,
    },
};

const sellListResponse: SellListResponse = {
    country: "US",
    subdivision: "WA",
    providers: [sellProviderInfo],
};
