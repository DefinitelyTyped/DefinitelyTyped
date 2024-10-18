import * as x509js from "x509.js";

x509js.parseKey("keyString");
x509js.info();
const result = x509js.parseCert("certSting");
result.subject.organizationalUnitName; // $ExpectType string | undefined
result.issuer.localityName; // $ExpectType string | undefined
result.issuer.countryName; // $ExpectType string | undefined
result.issuer.organizationalUnitName; // $ExpectType string | undefined
result.issuer.commonName; // $ExpectType string
result.issuer.serialNumber; // $ExpectType string | undefined
result.issuer.organizationName; // $ExpectType string | undefined
result.issuer.stateOrProvinceName; // $ExpectType string | undefined
