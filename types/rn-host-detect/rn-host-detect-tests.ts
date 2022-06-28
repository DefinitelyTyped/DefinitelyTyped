import getHostForRN = require('rn-host-detect');

// '10.0.2.2' or '10.0.3.2' on Android
getHostForRN('localhost');

// '192.168.1.111', only convert localhost (or 127.0.0.1) to host IP
getHostForRN('192.168.1.111');
