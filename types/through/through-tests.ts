import through = require('through');

var i = 0;
through(
    function(this: through.ThroughStream) {
        this.queue((i++).toString());
    },
    function(this: through.ThroughStream) {
        this.queue(null);
    },
    { autoDestroy: true },
).pipe(process.stdout);
