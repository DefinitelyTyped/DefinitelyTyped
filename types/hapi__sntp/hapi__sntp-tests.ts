import Sntp = require('@hapi/sntp');

const options = {
    host: 'abc',
    port: 123,
};

Sntp.now();

Sntp.start(options);
Sntp.start();

Sntp.stop();

Sntp.time(options);
Sntp.time();

Sntp.offset();
