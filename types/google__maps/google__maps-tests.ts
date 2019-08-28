import { createClient } from '@google/maps';

const client = createClient({
    key: 'my-google-maps-api-key',
    language: 'ja',
    // tslint:disable-next-line
    Promise: Promise,
});

client
    .geocode({ address: 'Leaning Tower of Pisa' })
    .asPromise()
    .then(response => {
        console.log(`Geocode Address Results: ${response.json.results.length} ${response.json.status}`);
        response.json.results.forEach(result => {
            console.log(result.geometry.location);
        });
    });

client
    .geocode({ components: { postal_code: '94043' } })
    .asPromise()
    .then(response => {
        console.log(`Geocode Component Results: ${response.json.results.length} ${response.json.status}`);
        response.json.results.forEach(result => {
            console.log(result.geometry.location);
        });
    });
