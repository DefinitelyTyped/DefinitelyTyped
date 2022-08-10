import SmartyStreetsSDK = require('smartystreets-javascript-sdk');

const API_KEY = 'test';
const credentials = new SmartyStreetsSDK.core.SharedCredentials(API_KEY);
const extract_text = 'Medica Behavioral Health(SM) handles mental health/substance abuse (MH/SA) ' +
                     'services for Medica members. Related claims should be sent to: Medica Behavioral ' +
                     'Health PO Box 30757 Salt Lake City, UT 84130-0757 and they will be reviewed promptly.';

let client;
let lookup;
let batch;

// usStreet
client = SmartyStreetsSDK.core.buildClient.usStreet(credentials);
lookup = new SmartyStreetsSDK.usStreet.Lookup();
lookup.street = '4646 Scott St';
lookup.city = 'Houston';
lookup.state = 'TX';
lookup.zipCode = '77004';
client
    .send(lookup)
    .then((
        resp, // $ExpectType Batch<Lookup>
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// usStreet - Batch
client = SmartyStreetsSDK.core.buildClient.usStreet(credentials);
batch = new SmartyStreetsSDK.core.Batch<SmartyStreetsSDK.usStreet.Lookup>();
lookup = new SmartyStreetsSDK.usStreet.Lookup();
lookup.street = '4646 Scott St';
lookup.city = 'Houston';
lookup.state = 'TX';
lookup.zipCode = '77004';
lookup.addressee = 'addressee';
batch.add(lookup);
client
    .send(batch)
    .then((
        resp, // $ExpectType Batch<Lookup>
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// usZipcode
client = SmartyStreetsSDK.core.buildClient.usZipcode(credentials);
lookup = new SmartyStreetsSDK.usZipcode.Lookup('');
lookup.city = 'Houston';
lookup.state = 'TX';
client.send(lookup)
    .then((
        resp, // $ExpectType Batch<Lookup>
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// usZipcode - Batch
client = SmartyStreetsSDK.core.buildClient.usZipcode(credentials);
batch = new SmartyStreetsSDK.core.Batch<SmartyStreetsSDK.usZipcode.Lookup>();
lookup = new SmartyStreetsSDK.usZipcode.Lookup();
lookup.city = 'Houston';
lookup.state = 'TX';
batch.add(lookup);
client
    .send(batch)
    .then((
        resp, // $ExpectType Batch<Lookup>
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// usExtract
client = SmartyStreetsSDK.core.buildClient.usExtract(credentials);
lookup = new SmartyStreetsSDK.usExtract.Lookup(extract_text);
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

// usAutocompletePro
client = SmartyStreetsSDK.core.buildClient.usAutocompletePro(credentials);
lookup = new SmartyStreetsSDK.usAutocompletePro.Lookup('4646 Scott St, Houston');
client.send(lookup)
    .then((
        resp, // $ExpectType Lookup
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// internationalStreet
client = SmartyStreetsSDK.core.buildClient.internationalStreet(credentials);
lookup = new SmartyStreetsSDK.internationalStreet.Lookup('Australia', '200 River Terrace');
client.send(lookup)
    .then((
        resp, // $ExpectType Lookup
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// usReverseGeo
client = SmartyStreetsSDK.core.buildClient.usReverseGeo(credentials);
lookup = new SmartyStreetsSDK.usReverseGeo.Lookup('29.751711638333997', '-95.35554678347353');
client.send(lookup)
    .then((
        resp, // $ExpectType Lookup
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));

// internationalAddressAutocomplete
client = SmartyStreetsSDK.core.buildClient.internationalAddressAutocomplete(credentials);
lookup = new SmartyStreetsSDK.internationalAddressAutocomplete.Lookup('avenue', 'CAN');
client.send(lookup)
    .then((
        resp, // $ExpectType Lookup
    ) => console.log(resp))
    .catch((
        err, // $ExpectType any
    ) => console.error(err));
