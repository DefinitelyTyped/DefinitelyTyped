import Message = require('amp-message');

// $ExpectType Message
new Message(new Buffer('aaa'));

// $ExpectType Message
new Message([new Buffer('aaa'), new Buffer('bbb')]);

const message = new Message([new Buffer('aaa'), new Buffer('bbb')]);

// $ExpectType string
message.inspect();

// $ExpectType Buffer
message.toBuffer();

// $ExpectType number
message.push(new Buffer('ccc'));

// $ExpectType Buffer | undefined
message.pop();

// $ExpectType Buffer | undefined
message.shift();

// $ExpectType number
message.unshift(new Buffer('ddd'));

// $ExpectError
new Message();

// $ExpectError
new Message(1);

// $ExpectError
new Message({});

// $ExpectError
new Message('aaa');

// $ExpectError
message.push(1);

// $ExpectError
message.push({});

// $ExpectError
message.push('aaa');

// $ExpectError
message.unshift(1);

// $ExpectError
message.unshift({});

// $ExpectError
message.unshift('aaa');
