import {
    BuyTrade,
    ExchangeTrade,
    P2pQuote,
    P2pTradeRequest,
    SavingsTradeKYCStatusSuccessfulResponse,
    SellFiatTrade,
} from 'invity-api';

const bt: BuyTrade = {};

const et: ExchangeTrade = {};

const sft: SellFiatTrade = {};

const p2pQuote: P2pQuote = {
    provider: '',
    id: '',
    assetCode: '',
    title: '',
    currency: '',
    price: '',
    amountRange: { maximum: '0', minimum: '0' },
    paymentWindowMinutes: 0,
    paymentMethods: [],
    confirmations: 0,
    trader: { name: '', numberOfTrades: 0, onlineStatus: 'OFFLINE', rating: '' },
};
const p2pTrade: P2pTradeRequest = {
    quotesRequest: {
        amount: '',
        currency: '',
        assetCode: '',
    },
    selectedQuote: p2pQuote,
};

const stKYCInProgress: SavingsTradeKYCStatusSuccessfulResponse = { kycStatus: 'InProgress' };
