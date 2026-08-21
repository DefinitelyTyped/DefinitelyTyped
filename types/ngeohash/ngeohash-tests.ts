import geohash = require("ngeohash");

console.log(geohash.encode(37.8324, 112.5584));
console.log(geohash.encode("37.8324", "112.5584"));
// prints ww8p1r4t8

var latlon = geohash.decode("ww8p1r4t8");
console.log(latlon.latitude);
console.log(latlon.longitude);
console.log(latlon.error.latitude);
console.log(latlon.error.longitude);

console.log(geohash.encode_int(37.8324, 112.5584));
console.log(geohash.neighbors_int(4064984913515641));
