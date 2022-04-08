import { KeyInfoProvider, Saml11, Saml20, SamlAttributes, SamlOpts } from 'saml';

Saml11.create({
    cert: Buffer.from('certificate'),
    key: Buffer.from('key'),
});

Saml11.create(
    {
        cert: Buffer.from('certificate'),
        key: Buffer.from('key'),
        issuer: 'urn:issuer',
        lifetimeInSeconds: 600,
        audiences: 'urn:myapp',
        attributes: {
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': 'foo@bar.com',
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': 'Foo Bar',
        },
        nameIdentifier: 'foo',
        sessionIndex: '_faed468a-15a0-4668-aed6-3d9c478cc8fa',
    },
    () => {}
);

Saml20.create({
    cert: Buffer.from('certificate'),
    key: Buffer.from('key'),
});

Saml20.create(
    {
        cert: Buffer.from('certificate'),
        key: Buffer.from('key'),
        issuer: 'urn:issuer',
        lifetimeInSeconds: 600,
        audiences: 'urn:myapp',
        attributes: {
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': 'foo@bar.com',
            'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': 'Foo Bar',
        },
        nameIdentifier: 'foo',
        sessionIndex: '_faed468a-15a0-4668-aed6-3d9c478cc8fa',
    },
    () => {}
);
