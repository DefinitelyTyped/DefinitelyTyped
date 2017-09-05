// require geoip-lite
import geoip = require('geoip-lite');

// lookup an IP addres
var geo = geoip.lookup('199.16.156.125');

// convert the ip block range to string
if (geo) {
	let rangeStart = geoip.pretty(geo.range[0]);
	let rangeEnd = geoip.pretty(geo.range[1]);
}

// start the data update watcher
geoip.startWatchingDataUpdate();

// stop the data update watcher
geoip.stopWatchingDataUpdate();
