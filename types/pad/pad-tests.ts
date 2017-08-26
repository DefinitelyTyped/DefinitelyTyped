import pad = require('pad');

pad('pad', 5);      // "pad  "
pad(5, 'pad');      // "  pad"
pad('pad', 5, '+'); // "pad++"
pad(5, 'pad', '+'); // "++pad"
