import Parser = require('redis-parser');

// @ts-expect-error
new Parser(); // TypeError: Options are mandatory.
// @ts-expect-error
new Parser({}); // TypeError: The returnReply and returnError options have to be functions.

const parser = new Parser({
    returnReply(reply) {
        // $ExpectType any
        reply;
    },
    returnError(err) {
        // $ExpectType RedisError
        err;
    },
});

parser.setReturnBuffers(false);
parser.setStringNumbers(true);

parser.execute(Buffer.from([1, 2, 3]));

parser.reset();
