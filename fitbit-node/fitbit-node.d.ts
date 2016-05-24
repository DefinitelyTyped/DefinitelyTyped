// Type definitions for fitbit-node
// Project: https://www.npmjs.com/package/fitbit-node
// Definitions by: mpicciolli <https://github.com/mpicciolli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var FitbitApiClient:FitbitApiClient;

declare module 'fitbit-node' {
    export = FitbitApiClient;
}

interface FitbitApiClient {
    /**
     * Creates a new FitbitApiClient given the provided configuration
     */
    new(clientID:string, clientSecret:string):FitbitApiClient;

    //OAuth
    getAuthorizeUrl(scope:string, redirectUrl):string
    getAccessToken(code:string, redirectUrl:string):Promise;
    refreshAccesstoken(refreshToken:string):Promise;

    //Measures
    get(path:string, accessToken:string, userId:string):Promise;
    post(path:string, accessToken:string, data:any, userId:string):Promise;
    put(path:string, accessToken:string, data:any, userId:string):Promise;
    delete(path:string, accessToken:string, userId:string):Promise;
}
