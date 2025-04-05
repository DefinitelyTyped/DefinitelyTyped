import through = require("through");

let i = 0;

let stream = through(
    function(this: through.ThroughStream) {
        this.queue((i++).toString());
    },
    function(this: through.ThroughStream) {
        this.queue(null);
    },
    { autoDestroy: true },
);

stream.pipe(process.stdout);

stream.pause();

// $ExpectType never
stream.isPaused;
// $ExpectType never
stream.read;
// $ExpectType never
stream.setEncoding;
// $ExpectType never
stream.unpipe;
// $ExpectType never
stream.unshift;
// $ExpectType never
stream.wrap;
// $ExpectType never
stream.compose;
// $ExpectType never
stream.iterator;
// $ExpectType never
stream.map;
// $ExpectType never
stream.filter;
// $ExpectType never
stream.forEach;
// $ExpectType never
stream.toArray;
// $ExpectType never
stream.some;
// $ExpectType never
stream.find;
// $ExpectType never
stream.every;
// $ExpectType never
stream.flatMap;
// $ExpectType never
stream.drop;
// $ExpectType never
stream.take;
// $ExpectType never
stream.asIndexedPairs;
// $ExpectType never
stream.reduce;
