import * as maxmind from 'maxmind';

// Examples from https://github.com/runk/node-maxmind/blob/master/README.md

// Example 1
var cityLookup = maxmind.openSync('/path/to/GeoLite2-City.mmdb');
var city = cityLookup.get('66.6.44.4');

var orgLookup = maxmind.openSync('/path/to/GeoOrg.mmdb');
var organization = orgLookup.get('66.6.44.4');

// Example 2
var lookup = maxmind.openSync('/path/to/GeoLite2.mmdb');
var location = lookup.get('2001:4860:0:1001::3004:ef68');

// Example 3
var lookup = maxmind.openSync('/path/to/GeoLite2.mmdb', {
  cache: {
    max: 1000, // max items in cache
    maxAge: 1000 * 60 * 60 // life time in milliseconds
  }
})
lookup.get('1.1.1.1');

// Example 4
maxmind.validate('66.6.44.4'); // returns true
maxmind.validate('66.6.44.boom!'); // returns false

maxmind.validate('2001:4860:0:1001::3004:ef68'); // returns true
maxmind.validate('2001:4860:0:1001::3004:boom!'); // returns false
