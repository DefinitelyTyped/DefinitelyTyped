import openid = require('openid');

const relyingParty = new openid.RelyingParty(
  'http://example.com/verify',
  null,
  false,
  false,
  []);

relyingParty.authenticate('...', false, (err, authUrl) => {});

relyingParty.verifyAssertion('...', (err, result) => {});
