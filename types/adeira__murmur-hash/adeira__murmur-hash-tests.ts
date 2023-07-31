import murmurHash from '@adeira/murmur-hash';

murmurHash(
    JSON.stringify({
        arg: { count: 20, start: 0, end: 5 },
    }),
);

// @ts-expect-error
murmurHash(1);
// @ts-expect-error
murmurHash(new Date());
// @ts-expect-error
murmurHash(false);
