import {
    BuyProviderInfo,
    BuyTrade,
    ExchangeTrade,
    SellFiatTrade,
    WatchSellTradeResponse,
    InfoResponse,
    CryptoId,
} from "invity-api";

const bt: BuyTrade = {
    paymentMethodName: "TestPay",
};

const et: ExchangeTrade = {
    send: "bitcoin" as CryptoId,
    receive: "ethereum" as CryptoId,
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

const infoResponse: InfoResponse = {
    platforms: {
        ethereum: {
            name: "Ethereum",
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
