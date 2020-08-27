import probe = require('probe-image-size');

probe(''); // $ExpectType Promise<ProbeResult>
probe('', { retries: 3 }); // $ExpectType Promise<ProbeResult>
