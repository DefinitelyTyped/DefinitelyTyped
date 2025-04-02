import appleReceiptVerify = require("node-apple-receipt-verify");

appleReceiptVerify.config({
    secret: "test-secret",
});

appleReceiptVerify.validate({ receipt: "test-receipt" }, (err: appleReceiptVerify.ValidationError, products: appleReceiptVerify.PurchasedProducts[]) => {
    if (err) {
        console.error(err.appleStatus);
        console.error(err.isRetryable);
        return;
    }
    console.log(products.map((p) => p.bundleId));
});

appleReceiptVerify
    .validate({ receipt: "test-receipt" })
    .then((products: appleReceiptVerify.PurchasedProducts[]) => {
        console.log(products.map((p) => p.productId));
    })
    .catch((err: appleReceiptVerify.ValidationError) => {
        console.error(err);
    });
