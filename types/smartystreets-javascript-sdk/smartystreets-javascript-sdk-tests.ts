import SmartyStreetsSDK = require('smartystreets-javascript-sdk');

const API_KEY = 'testing';
const credentials = new SmartyStreetsSDK.core.SharedCredentials(API_KEY);
const client = SmartyStreetsSDK.core.buildClient.usStreet(credentials);
const lookup = new SmartyStreetsSDK.usStreet.Lookup();
lookup.street = '4646 Scott St';
lookup.city = 'Houston';
lookup.state = 'TX';
lookup.zipCode = '77004';
client.send(lookup).then(resp => console.log(resp)).catch(err => console.error(err));
