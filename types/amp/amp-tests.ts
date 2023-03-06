import { decode, encode, Stream } from 'amp';

// $ExpectType Buffer[]
decode(new Buffer('something'));

// $ExpectType Buffer
encode([new Buffer('something'), new Buffer('something')]);

// @ts-expect-error
decode('');

// @ts-expect-error
decode(1);

// @ts-expect-error
decode();

// @ts-expect-error
encode('');

// @ts-expect-error
encode(1);

// @ts-expect-error
encode();

// $ExpectType Stream
new Stream({});

// $ExpectType Stream
new Stream({
    highWaterMark: 1,
    decodeStrings: true,
    objectMode: true,
    destroy: (error: Error | null) => {
        return 'handle error';
    },
    final: (callback: (error?: Error) => void) => {
        // do nothing
    }
});

// @ts-expect-error
new Stream({somethingNoneExisting: true});
