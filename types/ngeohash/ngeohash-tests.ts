import geohash = require('ngeohash');

console.log(geohash.encode(37.8324, 112.5584));
// prints ww8p1r4t8

var latlon = geohash.decode('ww8p1r4t8');
console.log(latlon.latitude);
console.log(latlon.longitude);
