import { jwkToBuffer, JWK, JWKOptions } from 'jwk-to-pem';

const jwk: JWK = {
    kty: 'RSA',
    n: 'oPuGyYsl8LAAgWJo_3yUkWRxsWlwn1IPlAgUlWzZUfwaqh-XxU8b9G8JKowz7ogeUo_',
    e: 'AQAB',
};

const options: JWKOptions = { private: false };

jwkToBuffer(jwk); // $ExpectType string
jwkToBuffer(jwk, options); // $ExpectType string
