import SmartyStreetsSDK = require('smartystreets-javascript-sdk');

const API_KEY = 'testing';
const credentials = new SmartyStreetsSDK.core.SharedCredentials(API_KEY);

let client;
let lookup;

// usStreet
client = SmartyStreetsSDK.core.buildClient.usStreet(credentials);
lookup = new SmartyStreetsSDK.usStreet.Lookup();
lookup.street = '4646 Scott St';
lookup.city = 'Houston';
lookup.state = 'TX';
lookup.zipCode = '77004';
client
    .send(lookup)
    .then(resp => console.log(resp))
    .catch(err => console.error(err));

// usAutocomplete
client = SmartyStreetsSDK.core.buildClient.usAutocomplete(credentials);
lookup = new SmartyStreetsSDK.usAutocomplete.Lookup('');
lookup.prefix = '4646';
lookup.maxSuggestions = 5;
client
    .send(lookup)
    .then((
        resp, // $ExpectType Lookup
    ) => {
        console.log(resp);
    })
    .catch((
        err, // $ExpectType any
    ) => console.error(err));
