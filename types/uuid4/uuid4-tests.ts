import uuid4, { valid } from "uuid4";

// $ExpectType boolean
valid("18c2f1b5-855c-4745-b074-cd9ed6d1ae86");

// $ExpectType string
uuid4();

// $ExpectError
valid(10);
