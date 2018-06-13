import * as pem_jwk from "pem-jwk";

pem_jwk.jwk2pem({kty: 'RSA', n: 'base64 modulus', e: 'base64 exponent'}); // $ExpectType string
pem_jwk.pem2jwk('PEM RSA String'); // $ExpectType pem_jwk.RSAJWK
