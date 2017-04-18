// Type definitions for withings-lib
// Project: https://www.npmjs.com/package/withings-lib
// Definitions by: mpicciolli <https://github.com/mpicciolli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var WithingsClient:WithingsClient;

declare module 'withings-lib' {
    export = WithingsClient;
}

interface WithingsClient {
    /**
     * Creates a new WithingsClient given the provided configuration
     */
    new(options:{
        consumerKey:string;
        consumerSecret:string;
        callbackUrl?:string;
        accessToken?:string;
        accessTokenSecret?:string;
        userID?:string;
    }):WithingsClient;

    //OAuth
    getRequestToken(cb:WithingsClientCallback):void;
    authorizeUrl(token:string, tokenSecret:string):any;
    getAccessToken(cb:WithingsClientCallback):void;


    //API Base Methods
    apiCall(url:string, method:string, cb:WithingsApiCallback):void
    get(service:string, action:string, params:any, cb:WithingsApiCallback):void
    post(service:string, action:string, params:any, cb:WithingsApiCallback):void

    //Measures
    getDailySteps(date:string|Date, cb:WithingsApiCallback):void;
    getDailyCalories(date:string|Date, cb:WithingsApiCallback):void;
    getMeasures(measType:string, startDate:string|Date, endDate:string|Date, cb:WithingsApiCallback):void
    getWeightMeasures(startDate:string|Date, endDate:string|Date, cb:WithingsApiCallback):void;
    getPulseMeasures(startDate:string|Date, endDate:string|Date, cb:WithingsApiCallback):void;
    getSleepSummary(startDate:string|Date, endDate:string|Date, cb:WithingsApiCallback):void;

    //Notifications
    createNotification(callbackUrl:string, comment:string, appli:number, cb:WithingsApiCallback):void;
    getNotification(callbackUrl:string, appli:number, cb:WithingsApiCallback):void;
    listNotifications(appli:number, cb:WithingsApiCallback):void;
    revokeNotification(callbackUrl:string, appli:number, cb:WithingsApiCallback):void;
}

interface WithingsClientCallback {
    (error:string, token:string, tokenSecret:string):void;
}

interface WithingsApiCallback {
    (error:string, data:any):void;
}
