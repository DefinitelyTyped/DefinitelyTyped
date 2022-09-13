import { error } from 'server/router';
import appleReceiptVerify = require('node-apple-receipt-verify');

appleReceiptVerify.config({
    secret: 'test-secret',
});

appleReceiptVerify.validate({ receipt: 'test-reciept' }, (err, products) => {
    if (err) {
        console.error(err.appleStatus);
        console.error(err.isRetryable);
        return;
    }
    console.log(products.map((p: appleReceiptVerify.PurchasedProducts) => p.bundleId));
});

appleReceiptVerify
    .validate({ receipt: 'test-reciept' })
    .then(products => {
        console.log(products.map((p: appleReceiptVerify.PurchasedProducts) => p.productId));
    })
    .catch(err => {
        console.error(err);
    });
