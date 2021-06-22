import jwkToPem = require('jwk-to-pem');

const jwk: jwkToPem.JWK = { kty: 'EC', crv: 'P-256', x: '...', y: '...' };
jwkToPem(jwk); // $ExpectType string

jwkToPem('hi'); // $ExpectError
jwkToPem(null); // $ExpectError
jwkToPem({ kty: {} }); // $ExpectError
jwkToPem({ kty: 'foozleberries' }); // $ExpectError

const ec1: jwkToPem.JWK = {
    crv: 'P-256',
    kty: 'EC',
    x: 'gh9MmXjtmcHFesofqWZ6iuxSdAYgoPVvfJqpv1818lo',
    y: '3BDZHsNvKUb5VbyGPqcAFf4FGuPhJ2Xy215oWDw_1jc',
};
jwkToPem(ec1); // $ExpectType string

const ec2: jwkToPem.JWK = {
    kty: 'EC',
    crv: 'P-256',
    d: '870MB6gfuTJ4HtUnUvYMyJpr5eUZNP4Bk43bVdj3eAE',
};
jwkToPem(ec2); // $ExpectType string
jwkToPem(ec2, { private: true }); // $ExpectType string
jwkToPem(ec2, {}); // $ExpectError
jwkToPem(ec2, { foo: 'bar' }); // $ExpectError
jwkToPem(ec2, 'foo'); // $ExpectError

const ec5: jwkToPem.JWK = {
    crv: 'P-384',
    kty: 'EC',
    x: 'QIRvRhN2MpnTQ4teO4Y_RYFaK2Qlvc2lbhC0vALwrFOy33kUihkNUvHiTaUsp2W3',
    y: 'vSA1sCKKzT4UOavStUL2WpwcCflEyDshzy3dc1IZtACUngU2xMDDMsi0gDL9jLiU',
};
jwkToPem(ec5); // $ExpectType string

jwkToPem({ kty: 'EC', x: 'foo', y: 'bar' }); // $ExpectError
jwkToPem({ kty: 'EC', crv: {}, x: 'foo', y: 'bar' }); // $ExpectError
jwkToPem({ kty: 'EC', crv: 'P-256', y: 'bar' }); // $ExpectError
jwkToPem({ kty: 'EC', crv: 'P-256', x: {}, y: 'bar' }); // $ExpectError
jwkToPem({ kty: 'EC', crv: 'P-256', x: 'foo' }); // $ExpectError
jwkToPem({ kty: 'EC', crv: 'P-256', x: 'foo', y: {} }); // $ExpectError

const rsa1: jwkToPem.JWK = {
    kty: 'RSA',
    n: '...',
    e: 'AQAB',
};
jwkToPem(rsa1); // $ExpectType string

const rsa2: jwkToPem.JWK = {
    kty: 'RSA',
    n: '...',
    e: 'AQAB',
    d: '...',
    p: '...',
    q: '...',
    dp: '...',
    dq: '...',
    qi: '...',
};
jwkToPem(rsa2); // $ExpectType string

jwkToPem({ kty: 'RSA', e: 'AQAB' }); // $ExpectError
jwkToPem({ kty: 'RSA', n: {}, e: 'AQAB' }); // $ExpectError
jwkToPem({ kty: 'RSA', n: 'foo' }); // $ExpectError
jwkToPem({ kty: 'RSA', n: 'foo', e: {} }); // $ExpectError
