import pReflect = require('p-reflect');

pReflect(Promise.resolve('foo')).then(result => {
    if (result.isFulfilled) {
        const fulfilled: true = result.isFulfilled;
        const rejected: false = result.isRejected;
        const str: string = result.value;
        result.reason; // $ExpectError
    } else {
        const fulfilled: false = result.isFulfilled;
        const rejected: true = result.isRejected;
        const err: any = result.reason;
        result.value; // $ExpectError
    }
});
