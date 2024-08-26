import { BakongKHQR, IndividualInfo, khqrData, MerchantInfo, SourceInfo } from "bakong-khqr";

const qrData: khqrData = {
    currency: {
        usd: 840,
        khr: 116,
    },
};

const merchantInfo: MerchantInfo = {
    merchantID: "123456",
    bakongAccountID: "devbkhppxxx@devb",
    merchantName: "Jonh Smith",
    acquiringBank: "Jonh Smith",
    merchantCity: "Phnom Penh",
    currency: qrData.currency.khr,
    amount: 10000,
    billNumber: "#0001",
    mobileNumber: "85587878787",
    storeLabel: "Devit Huotkeo",
    terminalLabel: "Devit I",
};

const individualInfo: IndividualInfo = {
    bakongAccountID: "devit@abaa",
    merchantName: "devit",
    acquiringBank: "devit@abaa",
    currency: qrData.currency.usd,
    merchantCity: "BTB",
};

const khqr = new BakongKHQR();
const res = khqr.generateMerchant(merchantInfo);

const resIndividual = khqr.generateIndividual(individualInfo);
