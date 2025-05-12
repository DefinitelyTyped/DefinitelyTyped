import appleReceiptVerify = require("node-apple-receipt-verify");

appleReceiptVerify.config({
    secret: "test-secret",
});

appleReceiptVerify.validate(
    { receipt: "test-receipt" },
    (err: appleReceiptVerify.ValidationError, products: appleReceiptVerify.PurchasedProducts[]) => {
        if (err) {
            console.error(err.appleStatus);
            console.error(err.isRetryable);
            return;
        }
        console.log(products.map((p) => p.bundleId));
    },
);

appleReceiptVerify
    .validate({ receipt: "test-receipt" })
    .then((products: appleReceiptVerify.PurchasedProducts[]) => {
        products.forEach((p) => {
            const {
                bundleId,
                transactionId,
                productId,
                purchaseDate,
                quantity,
                expirationDate,
                isTrialPeriod,
                isInIntroOfferPeriod,
                environment,
                originalPurchaseDate,
                applicationVersion,
                originalApplicationVersion,
                originalTransactionId,
            } = p;

            console.log({
                bundleId,
                transactionId,
                productId,
                purchaseDate,
                quantity,
                expirationDate,
                isTrialPeriod,
                isInIntroOfferPeriod,
                environment,
                originalPurchaseDate,
                applicationVersion,
                originalApplicationVersion,
                originalTransactionId,
            });
        });
    })
    .catch((err: appleReceiptVerify.ValidationError) => {
        console.error(err);
    });
