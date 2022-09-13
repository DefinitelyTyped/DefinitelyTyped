// require geoip-country
import geoip = require('geoip-country');

// lookup an IP addres
const stringLookup = geoip.lookup('199.16.156.125');

const numberLookup = geoip.lookup(3339754621);

// convert the ip block range to string
if (stringLookup) {
    const rangeStart = geoip.pretty(stringLookup.range[0]);
    const rangeEnd = geoip.pretty(stringLookup.range[1]);
}

// start the data update watcher
geoip.startWatchingDataUpdate();

// stop the data update watcher
geoip.stopWatchingDataUpdate();

geoip.cmp(1, 2);
