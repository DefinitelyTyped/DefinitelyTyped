rison.encode({hello: "world"});

rison.encode_object({hello: "1", world: 2});

rison.encode_array([1, 2, "test"]);

rison.encode_uri({hello: "world"});

rison.decode("{test:1}");

rison.decode_object<any>("test:1");

rison.decode_array<number>("1,2,1337");
