import sslCertificate = require("get-ssl-certificate");

sslCertificate.get("nodejs.org").then(certificate => {
    certificate; // $ExpectType PeerCertificate & { pemEncoded: string; }
    certificate.issuer; // $ExpectType Certificate
    certificate.pemEncoded; // $ExpectType string
});

sslCertificate.get("nodejs.org", 250, 443, "https:", true).then(certificate => {
    certificate;
    certificate.issuer;
    certificate.valid_from;
    certificate.valid_to;
    certificate.pemEncoded;
});

(async () => {
    const cert = sslCertificate.get("nodejs.org", 250, 443, "https:");
});
