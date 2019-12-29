import * as speakeasy from 'speakeasy';

speakeasy.generate_key({length: 20, google_auth_qr: true});

// normal use.
speakeasy.hotp({secret: 'secret', counter: 582});

// use a custom length.
speakeasy.hotp({secret: 'secret', counter: 582, length: 8});

// use a custom encoding.
speakeasy.hotp({secret: 'AJFIEJGEHIFIU7148SF', counter: 147, encoding: 'base32'});

// normal use.
speakeasy.totp({secret: 'secret'});

// use a custom time step.
speakeasy.totp({secret: 'secret', step: 60});

// use a custom time.
speakeasy.totp({secret: 'secret', time: 159183717});

// use a initial time.
speakeasy.totp({secret: 'secret', initial_time: 4182881485});

const otpauth_url: string = speakeasy.generateSecret({
    length: 3,
    name: 'testName',
    qr_codes: true,
    google_auth_qr: true,
    otpauth_url: true,
    symbols: true
}).otpauth_url;

const otpauth_url2: string | undefined = speakeasy.generateSecret({
    length: 3,
    name: 'testName',
}).otpauth_url;

speakeasy.generateSecretASCII(5, true);

speakeasy.otpauthURL({
    secret: 'otpauthURLSecret',
    label: 'otpauthURLLength'
});

speakeasy.totp.verify({secret: "secret", token: "123456"});

speakeasy.totp.verifyDelta({secret: "secret", token: "123456"});

speakeasy.hotp.verify({secret: "secret", token: "123456", counter: 123});

speakeasy.hotp.verifyDelta({secret: "secret", token: "123456", counter: 123});
