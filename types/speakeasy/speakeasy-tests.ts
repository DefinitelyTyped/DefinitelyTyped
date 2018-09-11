import * as speakeasy from 'speakeasy';

speakeasy.generate_key({length: 20, google_auth_qr: true});

// normal use.
speakeasy.hotp({key: 'secret', counter: 582});

// use a custom length.
speakeasy.hotp({key: 'secret', counter: 582, length: 8});

// use a custom encoding.
speakeasy.hotp({key: 'AJFIEJGEHIFIU7148SF', counter: 147, encoding: 'base32'});

// normal use.
speakeasy.totp({key: 'secret'});

// use a custom time step.
speakeasy.totp({key: 'secret', step: 60});

// use a custom time.
speakeasy.totp({key: 'secret', time: 159183717});

// use a initial time.
speakeasy.totp({key: 'secret', initial_time: 4182881485});

speakeasy.generateSecret({
    length: 3,
    name: 'testName',
    qr_codes: true,
    google_auth_qr: true,
    otpauth_url: true,
    symbols: true
});

speakeasy.generateSecretASCII(5, true);

speakeasy.otpauthURL({
    secret: 'otpauthURLSecret',
    label: 'otpauthURLLength'
});

speakeasy.totp.verify({secret: "secret", token: "123456"})

speakeasy.totp.verifyDelta({secret: "secret", token: "123456"})

speakeasy.hotp.verify({secret: "secret", token: "123456", counter: 123})

speakeasy.hotp.verifyDelta({secret: "secret", token: "123456", counter: 123})
