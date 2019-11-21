import { decode, encode, Stream } from 'amp';

// $ExpectType Buffer[]
decode(new Buffer('something'));

// $ExpectType Buffer
encode([new Buffer('something'), new Buffer('something')]);

// $ExpectError
decode('');

// $ExpectError
decode(1);

// $ExpectError
decode();

// $ExpectError
encode('');

// $ExpectError
encode(1);

// $ExpectError
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

// $ExpectError
new Stream({somethingNoneExisting: true});
