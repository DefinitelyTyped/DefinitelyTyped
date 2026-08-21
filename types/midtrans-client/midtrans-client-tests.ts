import * as midtransClient from "midtrans-client";

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "YOUR_SERVER_KEY",
    clientKey: "YOUR_CLIENT_KEY",
});

const parameters: midtransClient.SnapTransactionParameters = {
    transaction_details: {
        order_id: "ORDER-ID-" + new Date().getTime(),
        gross_amount: 200000,
    },
};

snap.createTransaction(parameters).then((transaction: midtransClient.SnapTransactionResponse) => {
    const token: string = transaction.token;
    const redirectUrl: string = transaction.redirect_url;
});

const core = new midtransClient.CoreApi({
    isProduction: false,
    serverKey: "YOUR_SERVER_KEY",
    clientKey: "YOUR_CLIENT_KEY",
});

core.charge({}).then((chargeResponse: any) => {
    const response = chargeResponse;
});
