/* More Details: https://developer.paytm.com/docs/checksum/#node */
const PaytmChecksum = require("paytmchecksum");

PaytmChecksum.encrypt("this fn is usually not used", "YOUR_MERCHANT_KEY");
PaytmChecksum.decrypt("this fn is usually not used", "YOUR_MERCHANT_KEY");
PaytmChecksum.generateSignature(
    JSON.stringify({
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    }),
    "YOUR_MERCHANT_KEY",
);
PaytmChecksum.generateSignature({
    mid: "YOUR_MID_HERE",
    orderId: "YOUR_ORDER_ID_HERE",
}, "YOUR_MERCHANT_KEY");
PaytmChecksum.verifySignature(
    JSON.stringify({
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    }),
    "YOUR_MERCHANT_KEY",
    "checksum from generateSignature",
);
PaytmChecksum.verifySignature(
    {
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    },
    "YOUR_MERCHANT_KEY",
    "checksum from generateSignature",
);
PaytmChecksum.generateSignatureByString(
    JSON.stringify({
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    }),
    "YOUR_MERCHANT_KEY",
);
PaytmChecksum.verifySignatureByString(
    JSON.stringify({
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    }),
    "YOUR_MERCHANT_KEY",
    "checksum from generateSignature",
);
PaytmChecksum.generateRandomString(10);
PaytmChecksum.getStringByParams({
    mid: "YOUR_MID_HERE",
    orderId: "YOUR_ORDER_ID_HERE",
});
PaytmChecksum.calculateHash(
    JSON.stringify({
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    }),
    "RANDOM STRING AS SALT",
);
PaytmChecksum.calculateChecksum(
    JSON.stringify({
        mid: "YOUR_MID_HERE",
        orderId: "YOUR_ORDER_ID_HERE",
    }),
    "YOUR_MERCHANT_KEY",
    "RANDOM STRING AS SALT",
);
