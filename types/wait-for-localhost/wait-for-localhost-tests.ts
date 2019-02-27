import waitForLocalhost = require('wait-for-localhost');

waitForLocalhost(); // $ExpectType Promise<void>
waitForLocalhost({ port: 8080 }); // $ExpectType Promise<void>
waitForLocalhost({ useGet: true }); // $ExpectType Promise<void>
