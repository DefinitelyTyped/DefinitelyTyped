// require geoip-lite
import geoip = require('geoip-lite');

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

geoip.clear();

geoip.reloadDataSync();

// Should work without callback
geoip.reloadData();

// Should work with empty callback
geoip.reloadData(() => {});

// Should work with err in callback
geoip.reloadData(err => {});

geoip.cmp(1, 2);
