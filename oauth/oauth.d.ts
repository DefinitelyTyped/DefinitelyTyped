declare module "oauth"
{
    export class OAuth
    {
        constructor(requestUrl, accessUrl, consumerKey, consumerSecret, version, authorize_callback, signatureMethod, nonceSize?, customHeaders?);
        get(url:string, accessToken:string, refreshToken:string, callback:Function);
        post(url:string, oauth_token:string, oauth_token_secret:string, post_body:Object, post_content_type:string, callback):Function;
    }
}