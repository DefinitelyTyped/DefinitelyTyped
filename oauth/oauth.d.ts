///<reference path='./oauth.d.ts'/>

declare module "oauth"
{
    import oauth                                      = require('oauth');

    export class OAuth
    {
        constructor(requestUrl, accessUrl, consumerKey, consumerSecret, version, authorize_callback, signatureMethod, nonceSize, customHeaders);
    }
}