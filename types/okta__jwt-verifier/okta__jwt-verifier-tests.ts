import OktaJwtVerifier = require('@okta/jwt-verifier');

// All required props
const verifier = new OktaJwtVerifier({ issuer: 'https://foo' });

// With assertClaims
new OktaJwtVerifier({
    issuer: 'https://foo',
    assertClaims: { cid: '{clientId}' },
});

// @ts-expect-error Missing required props
new OktaJwtVerifier({ clientId: '1234' });

// @ts-expect-error Missing expectedAudience
verifier.verifyAccessToken('accessTokenString');
verifier.verifyAccessToken('accessTokenString', 'expectedAudience'); // $ExpectType Promise<Jwt>
verifier.verifyAccessToken('accessTokenString', ['expectedAudience', 'expectedAudience2']); // $ExpectType Promise<Jwt>

// @ts-expect-error Missing expectedNonce
verifier.verifyIdToken('idTokenString', 'expectedClientId');
// @ts-expect-error Invalid type for expectedClientId
verifier.verifyIdToken('idTokenString', ['expectedClientId'], 'expectedNonce');
verifier.verifyIdToken('idTokenString', 'expectedClientId', 'expectedNonce'); // $ExpectType Promise<Jwt>
