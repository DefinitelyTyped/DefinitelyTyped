import StackTrace = require('StackTrace');

function interestingFn() {
    return 'https://github.com/exceptionless/Exceptionless';
}

var callback = function(stackframes) {
    var stringifiedStack = stackframes.map(function(sf) {
        return sf.toString();
    }).join('\n');
    console.log(stringifiedStack);
};

var errback = function(err) { console.log(err.message); };


StackTrace.get();

// Somewhere else...
var error = new Error('BOOM!');
StackTrace.fromError(error);
StackTrace.generateArtificially();

StackTrace.instrument(interestingFn, callback, errback);
StackTrace.deinstrument(interestingFn);
