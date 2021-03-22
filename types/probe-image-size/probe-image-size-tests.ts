import probe = require('probe-image-size');
import fs = require('fs');

const input = fs.createReadStream('image.jpg');
const data = fs.readFileSync('image.jpg');
probe(''); // $ExpectType Promise<ProbeResult>
probe('', { retries: 3 }); // $ExpectType Promise<ProbeResult>
probe('http://example.com/image.jpg', { timeout: 5000 }).then(result => {
    result; // $ExpectType ProbeResult
});
probe('http://example.com/image.jpg', (err, result) => {
    if (err) {
        err; // $ExpectType ProbeError
    } else {
        result; // $ExpectType ProbeResult
    }
});
probe(input).then(result => {
    result; // $ExpectType ProbeResult
    input.destroy();
});
probe.sync(data); // $ExpectType ProbeResult | null
