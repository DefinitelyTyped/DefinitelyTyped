/// <reference path="stacktrace-js.d.ts" />

function interestingFn() {
    return 'https://github.com/exceptionless/Exceptionless';
}

var callback = function(stackframes:StackTrace.StackFrame[]) {
    var stringifiedStack = stackframes.map(function(sf:StackTrace.StackFrame) {
        return sf.toString();
    }).join('\n');
    console.log(stringifiedStack);
};

var errorCallback = function(err:Error) { console.log(err.message); };

StackTrace.get();

// Somewhere else...
var error = new Error('BOOM!');
StackTrace.fromError(error);
StackTrace.generateArtificially();

StackTrace.instrument(interestingFn, callback, errorCallback);
StackTrace.deinstrument(interestingFn);
