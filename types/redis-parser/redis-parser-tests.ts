import Parser = require('redis-parser');

// $ExpectError
new Parser(); // TypeError: Options are mandatory.
// $ExpectError
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
