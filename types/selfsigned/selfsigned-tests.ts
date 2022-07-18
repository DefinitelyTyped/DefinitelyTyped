import * as selfsigned from "selfsigned";

// Generate Certificates
// $ExpectType PEMS
const pems = selfsigned.generate(
    [
        { name: 'commonName', value: 'contoso.com' },
        { shortName: 'OU', value: 'Test' }
    ],
    {
        days: 365,
        algorithm: "sha256"
    }
);

// Callback
// $ExpectType void
selfsigned.generate([{ name: 'commonName', value: 'contoso.com' }], { days: 365 }, (err, pems) => {});

// Callback
// $ExpectType void
selfsigned.generate([{ name: 'commonName', value: 'contoso.com' }], (err, pems) => {});

// Callback only
// $ExpectType void
selfsigned.generate((err, pems) => {});

// Generate Client Certificates
// $ExpectType PEMS
selfsigned.generate(null, { clientCertificate: true });

// Generate Client Certificates
// $ExpectType PEMS
selfsigned.generate();
