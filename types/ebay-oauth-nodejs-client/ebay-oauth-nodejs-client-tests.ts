import EbayAuthToken = require('ebay-oauth-nodejs-client');

// These are examples from https://github.com/eBay/ebay-oauth-nodejs-client

new EbayAuthToken({
    clientId: '<some_client_id>',
    clientSecret: '<some_client_secret>',
    redirectUri: '<redirect uri>',
    env: 'SANDBOX',
});

new EbayAuthToken({
    filePath: '<path to file>',
});

const ebayAuthToken = new EbayAuthToken({
    clientId: '<some_client_id>',
    clientSecret: '<some_client_secret>',
    redirectUri: '<redirect uri>',
    baseUrl: 'https://api.sandbox.ebay.com',
    scope: ['https://api.ebay.com/oauth/api_scope', 'https://api.ebay.com/oauth/api_scope/sell.marketing.readonly'],
    env: 'PRODUCTION',
});

(async () => {
    const _: string = await ebayAuthToken.getApplicationToken('PRODUCTION');
})();

(() => {
    const _: string = ebayAuthToken.generateUserAuthorizationUrl('PRODUCTION', 'SomeScope');
})();

(() => {
    const _: string = ebayAuthToken.generateUserAuthorizationUrl('PRODUCTION', ['scope1', 'scope2'], {
        state: 'custom-state-value',
        prompt: 'login',
    });
})();

(async () => {
    const _: string = await ebayAuthToken.exchangeCodeForAccessToken('PRODUCTION', '<some_code>');
})();

(async () => {
    const _: string = await ebayAuthToken.getAccessToken('PRODUCTION', '<some_refresh_token>', 'SomeScope');
})();
