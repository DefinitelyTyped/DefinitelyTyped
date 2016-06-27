

var throttledFn = angular.throttle(function (someArg:any) {
    return someArg;
}, 100);

var result = throttledFn(10);
