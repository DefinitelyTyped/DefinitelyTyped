/// <reference path="withings-lib.d.ts" />
import Withings  = require('withings-lib');

var options: any = {
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET
};

var client = new Withings(options);

client.getRequestToken(function(err, token, tokenSecret){
    if (err) {
        // Throw error
        return;
    }
});

