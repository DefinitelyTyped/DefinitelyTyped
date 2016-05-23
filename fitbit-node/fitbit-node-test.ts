/// <reference path="fitbit-node" />
/// <reference path="../node/node.d.ts"/>
import FitbitApiClient  = require('fitbit-node');

var consumerKey:string = process.env.CONSUMER_KEY;
var consumerSecret:string = process.env.CONSUMER_SECRET;

var client:FitbitApiClient = new FitbitApiClient(consumerKey, consumerSecret);

let authorizationUrl:string = client.getAuthorizeUrl('heartrate', 'YOUR_CALLBACK_URL');
