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

// @ts-expect-error
new Message();

// @ts-expect-error
new Message(1);

// @ts-expect-error
new Message({});

// @ts-expect-error
new Message('aaa');

// @ts-expect-error
message.push(1);

// @ts-expect-error
message.push({});

// @ts-expect-error
message.push('aaa');

// @ts-expect-error
message.unshift(1);

// @ts-expect-error
message.unshift({});

// @ts-expect-error
message.unshift('aaa');
