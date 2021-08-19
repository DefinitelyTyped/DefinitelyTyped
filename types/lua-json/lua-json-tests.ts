interface Example {
    a: number;
    b: number;
};
luajson.format({ a: 1, b: 2 }); // $ExpectType string
luajson.parse('return { a = 1, b = 2 }'); // $ExpectType object
luajson.parse<Example>('return { a = 1, b = 2 }'); // $ExpectType Example
luajson.parse<number>('return { a = 1, b = 2 }'); // $ExpectError
