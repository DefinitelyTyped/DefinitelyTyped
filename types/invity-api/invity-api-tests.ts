import {
    BuyProviderInfo,
    BuyTrade,
    ExchangeProviderInfo,
    ExchangeTrade,
    SellFiatTrade,
    WatchSellTradeResponse,
} from "invity-api";

const bt: BuyTrade = {
    paymentMethodName: "TestPay",
};

const et: ExchangeTrade = {
    send: "BTC",
    receive: "USDT@ETH",
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
    paymentMethods: [],
};

const exchangeProviderInfo: ExchangeProviderInfo = {
    name: "example",
    companyName: "Example",
    logo: "example-icon.jpg",
    isActive: true,
    isFixedRate: false,
    isDex: true,
    buyTickers: ["BTC", "ETH"],
    sellTickers: ["BTC", "ETH"],
    addressFormats: {
        format: "legacy",
    },
    statusUrl: "https://example.com/txs/{{orderId}}",
    kycUrl: "https://example.com/faq#kyc",
    supportUrl: " https://support.example.com",
    kycPolicy: "KYC is required...",
    kycPolicyType: "KYC-norefund",
    isRefundRequired: false,
};
