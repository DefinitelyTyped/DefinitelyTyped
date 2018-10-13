import NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
    provider: 'google',
    httpAdapter: 'https',
});

let results: NodeGeocoder.Entry[] | undefined;

geocoder.geocode('Poland').then((entries) => {
    results = entries;
}).then(() => {
    if (results) {
        console.log(JSON.stringify(results, null, 2));
    }
});

geocoder.geocode('Poland', (err: any, entries: NodeGeocoder.Entry[]) => {
    console.log(JSON.stringify(entries, null, 2));
});

const query: NodeGeocoder.Query = { address: 'Poland' };

geocoder.geocode(query).then((entries) => {
    console.log(JSON.stringify(entries, null, 2));
});

geocoder.geocode(query, (err: any, entries: NodeGeocoder.Entry[]) => {
    console.log(JSON.stringify(entries, null, 2));
});

geocoder.batchGeocode([ 'Kraków', 'Warszawa' ]).then((entries) => {
    if (entries.length !== 2) {
        return;
    }

    const k = entries[0];
    if (!k.error) {
        console.log(JSON.stringify(k.value, null, 2));
    }

    const w = entries[1];
    if (!w.error) {
        console.log(JSON.stringify(w.value, null, 2));
    }
});

geocoder.reverse({ lat: 50.06465, lon: 19.9449799 }).then((entries) => {
    console.log(JSON.stringify(entries, null, 2));
});

geocoder.reverse({ lat: 50.06465, lon: 19.9449799 }).then((entries) => {
    console.log(JSON.stringify(entries, null, 2));
});
