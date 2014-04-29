declare module "oauth"
{
    export class OAuth
    {
        constructor(requestUrl, accessUrl, consumerKey, consumerSecret, version, authorize_callback, signatureMethod, nonceSize?, customHeaders?);
        get(url:string, accessToken:string, refreshToken:string, callback:Function);
    }
}