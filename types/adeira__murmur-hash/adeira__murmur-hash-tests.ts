import murmurHash from '@adeira/murmur-hash';

murmurHash(
    JSON.stringify({
        arg: { count: 20, start: 0, end: 5 },
    }),
);

murmurHash(1); // $ExpectError
murmurHash(new Date()); // $ExpectError
murmurHash(false); // $ExpectError
