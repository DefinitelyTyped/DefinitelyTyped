import https = require('https');
import isProgressive = require('is-progressive');

isProgressive.file('baseline.jpg'); // $ExpectType Promise<boolean>

isProgressive.fileSync('progressive.jpg'); // $ExpectType boolean

https.get('/', res => {
    isProgressive.stream(res); // $ExpectType Promise<boolean>
});

isProgressive.buffer(new Buffer(1)); // $ExpectType boolean
