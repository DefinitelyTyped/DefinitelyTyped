/// <reference types="node"/>

import VNDB = require('vndb');

async function connect() {
    try {
        const vndb: VNDB.vndb = await VNDB.start();
        console.log('Connected !');
        vndb.write('ww');
        await vndb.end();
        console.log('Ended Connection !');
    } catch (e) {
        console.log('Error while connecting to the VNDB API');
    }
}

connect();
