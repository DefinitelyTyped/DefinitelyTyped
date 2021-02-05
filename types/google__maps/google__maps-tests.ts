import { createClient } from '@google/maps';

// Client without Promise support; the asPromise function is not available on requests
const client = createClient({
    key: 'my-google-maps-api-key',
    language: 'ja',
});

// $ExpectError
client.geocode({ address: 'Leaning Tower of Pisa' }).asPromise();
client
    .geocode({ address: 'Leaning Tower of Pisa' }, (response) => {
        if (response === "timeout") {
            return;
        }
        console.log(`Geocode Address Results: ${response.json.results.length} ${response.json.status}`);
        response.json.results.forEach(result => {
            // $ExpectType GeocodingResult
            result;
        });
    });
client
    .geocode({ components: { postal_code: '94043' } }, (response) => {
        if (response === 'timeout') {
            return;
        }
        console.log(`Geocode Component Results: ${response.json.results.length} ${response.json.status}`);
        response.json.results.forEach(result => {
            // $ExpectType GeocodingResult
            result;
        });
    });

// Client with promise support will have access to the asPromise method
const promisableClient = createClient({
    key: 'my-google-maps-api-key',
    language: 'ja',
    // tslint:disable-next-line:object-literal-shorthand
    Promise: Promise,
});

promisableClient
    .geocode({ address: 'Leaning Tower of Pisa' })
    .asPromise()
    .then(response => {
        console.log(`Geocode Address Results: ${response.json.results.length} ${response.json.status}`);
        response.json.results.forEach(result => {
            // $ExpectType GeocodingResult
            result;
        });
    });

promisableClient
    .geocode({ components: { postal_code: '94043' } })
    .asPromise()
    .then(response => {
        console.log(`Geocode Component Results: ${response.json.results.length} ${response.json.status}`);
        response.json.results.forEach(result => {
            // $ExpectType GeocodingResult
            result;
        });
    });
