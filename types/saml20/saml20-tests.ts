import * as saml from "saml20";

saml.validate('', { publicKey: '', audience: '', bypassExpiration: false }, (err: Error, profile: saml.Profile) => { });  // $ExpectType void
saml.parse('', (err: Error, profile: saml.Profile) => { }); // $ExpectType void
