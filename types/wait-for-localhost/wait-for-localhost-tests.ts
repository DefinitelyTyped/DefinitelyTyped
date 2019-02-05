import waitForLocalhost = require('wait-for-localhost');

// $ExpectType Promise<void>
waitForLocalhost();
waitForLocalhost(8080);
