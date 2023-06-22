import jwkToPem = require('jwk-to-pem');

const jwk: jwkToPem.JWK = { kty: 'EC', crv: 'P-256', x: '...', y: '...' };
jwkToPem(jwk); // $ExpectType string

// @ts-expect-error
jwkToPem('hi');
// @ts-expect-error
jwkToPem(null);
// @ts-expect-error
jwkToPem({ kty: {} });
// @ts-expect-error
jwkToPem({ kty: 'foozleberries' });

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
// @ts-expect-error
jwkToPem(ec2, {});
// @ts-expect-error
jwkToPem(ec2, { foo: 'bar' });
// @ts-expect-error
jwkToPem(ec2, 'foo');

const ec5: jwkToPem.JWK = {
    crv: 'P-384',
    kty: 'EC',
    x: 'QIRvRhN2MpnTQ4teO4Y_RYFaK2Qlvc2lbhC0vALwrFOy33kUihkNUvHiTaUsp2W3',
    y: 'vSA1sCKKzT4UOavStUL2WpwcCflEyDshzy3dc1IZtACUngU2xMDDMsi0gDL9jLiU',
};
jwkToPem(ec5); // $ExpectType string

// @ts-expect-error
jwkToPem({ kty: 'EC', x: 'foo', y: 'bar' });
// @ts-expect-error
jwkToPem({ kty: 'EC', crv: {}, x: 'foo', y: 'bar' });
// @ts-expect-error
jwkToPem({ kty: 'EC', crv: 'P-256', y: 'bar' });
// @ts-expect-error
jwkToPem({ kty: 'EC', crv: 'P-256', x: {}, y: 'bar' });
// @ts-expect-error
jwkToPem({ kty: 'EC', crv: 'P-256', x: 'foo' });
// @ts-expect-error
jwkToPem({ kty: 'EC', crv: 'P-256', x: 'foo', y: {} });

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

// @ts-expect-error
jwkToPem({ kty: 'RSA', e: 'AQAB' });
// @ts-expect-error
jwkToPem({ kty: 'RSA', n: {}, e: 'AQAB' });
// @ts-expect-error
jwkToPem({ kty: 'RSA', n: 'foo' });
// @ts-expect-error
jwkToPem({ kty: 'RSA', n: 'foo', e: {} });
