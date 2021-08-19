interface Example {
    a: number;
    b: number;
}
luajson.format({ a: 1, b: 2 }); // $ExpectType string
luajson.parse('return { a = 1, b = 2 }'); // $ExpectType object
luajson.parse('return { a = 1, b = 2 }') as Example; // $ExpectType Example
luajson.parse('return { a = 1, b = 2 }') as number; // $ExpectError
