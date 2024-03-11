import {
    BuyProviderInfo,
    BuyTrade,
    ExchangeTrade,
    P2pQuote,
    P2pTradeRequest,
    SavingsTrade,
    SavingsTradeItem,
    SavingsTradeKYCStatusSuccessfulResponse,
    SellFiatTrade,
} from "invity-api";

const bt: BuyTrade = {
    paymentMethodName: "Test",
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

const svt: SavingsTrade = { exchange: "", reauthorizationUrl: "" };

const savingsTradeItem: SavingsTradeItem = {
    paymentMethodName: "Bank transfer",
    id: "",
    savingsTradeId: "",
    exchange: "",
    status: "InProgress",
    receiveAddress: "",
    fiatStringAmount: "",
    fiatCurrency: "",
    receiveStringAmount: "",
    receiveCurrency: "",
    paymentMethod: "bankTransfer",
    created: "",
};

const p2pQuote: P2pQuote = {
    provider: "",
    id: "",
    assetCode: "",
    title: "",
    currency: "",
    price: "",
    amountRange: { maximum: "0", minimum: "0" },
    paymentWindowMinutes: 0,
    paymentMethods: [],
    confirmations: 0,
    trader: { name: "", numberOfTrades: 0, onlineStatus: "OFFLINE", rating: "" },
};
const p2pTrade: P2pTradeRequest = {
    quotesRequest: {
        amount: "",
        currency: "",
        assetCode: "",
    },
    selectedQuote: p2pQuote,
};

const stKYCInProgress: SavingsTradeKYCStatusSuccessfulResponse = { kycStatus: "InProgress" };

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
