import * as rison from "rison";

// $ExpectType string
rison.encode({ hello: "world" });

// $ExpectType string
rison.encode_object({ hello: "1", world: 2 });

// $ExpectType string
rison.encode_array([1, 2, "test"]);

// $ExpectType string
rison.encode_uri({ hello: "world" });

// $ExpectType { test: number }
rison.decode<{ test: number }>("{test:1}");

// $ExpectType { test: number }
rison.decode_object<{ test: number }>("test:1");

// $ExpectType number[]
rison.decode_array<number>("1,2,1337");
