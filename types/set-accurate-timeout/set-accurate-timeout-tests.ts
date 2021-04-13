import setAccurateTimeout = require('set-accurate-timeout');

setAccurateTimeout(() => {}, 3000);

setAccurateTimeout((arg) => {}, 3000);
