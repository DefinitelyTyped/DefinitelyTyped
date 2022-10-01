import { BuyTrade, ExchangeTrade, P2pQuote, SavingsTradeKYCStatusSuccessfulResponse, SellFiatTrade } from 'invity-api';

const bt: BuyTrade = {};
const et: ExchangeTrade = {};
const sft: SellFiatTrade = {};
const p2p: P2pQuote = {
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
const stKYCInProgress: SavingsTradeKYCStatusSuccessfulResponse = { kycStatus: 'InProgress' };
