import * as selfsigned from "selfsigned";

// Generate Certificates
// $ExpectType PEMS
const pems = selfsigned.generate([{ name: 'commonName', value: 'contoso.com' }], { days: 365 });

// Callback
// $ExpectType PEMS
selfsigned.generate([{ name: 'commonName', value: 'contoso.com' }], { days: 365 }, (err, pems) => {
});

// Generate Client Certificates
// $ExpectType PEMS
selfsigned.generate(null, { clientCertificate: true });
