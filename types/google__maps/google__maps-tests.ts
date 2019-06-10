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
        response.json.results.forEach(result => {
            console.log(
                result.geometry.location
            );
        });
    });
