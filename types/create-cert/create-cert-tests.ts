import createCert = require("create-cert");

createCert("commonName").then((keys) => {
    // $ExpectType string
    const key = keys.key;
    // $ExpectType string
    const cert = keys.cert;
    // $ExpectType string
    const caCert = keys.caCert;
});

createCert();

createCert({});

createCert({ days: 128, commonName: "hello", emailAddress: "me@example.com" });
