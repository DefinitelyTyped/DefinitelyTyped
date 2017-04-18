/// <reference path="withings-lib.d.ts" />
/// <reference path="../node/node.d.ts"/>
import Withings  = require('withings-lib');

var client:Withings = new Withings({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET
});

client.getRequestToken((err:string, token:string, tokenSecret:string) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(token, tokenSecret);
});
