luajson.format({ a: 1, b: 2 }); // $ExpectType string
luajson.parse('return { a = 1, b = 2 }'); // $ExpectType Record<string | number, unknown>
