import uuid4 = require("uuid4");

// $ExpectType boolean
uuid4.valid("18c2f1b5-855c-4745-b074-cd9ed6d1ae86");

// $ExpectType string
uuid4();

// @ts-expect-error
uuid4.valid(10);
