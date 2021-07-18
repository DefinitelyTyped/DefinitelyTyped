import * as x509js from 'x509.js';

x509js.parseKey('keyString');
x509js.info();
const result = x509js.parseCert('certSting');
result.subject.organizationalUnitName; // $ExpectType string
result.issuer.localityName; // $ExpectType string
result.issuer.countryName; // $ExpectType string
result.issuer.organizationalUnitName; // $ExpectType string
result.issuer.commonName; // $ExpectType string
result.issuer.serialNumber; // $ExpectType string
result.issuer.organizationName; // $ExpectType string
result.issuer.stateOrProvinceName; // $ExpectType string
