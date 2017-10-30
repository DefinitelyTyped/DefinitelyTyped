import from = require('from2');

function fromString(str: string) {
    return from((size, next) => {
        if (str.length <= 0) {
            next(null, null);
            return;
        }

        const chunk = str.slice(0, size);
        str = str.slice(size);

        next(null, chunk);
    });
}

fromString('hello world').pipe(process.stdout);

let stream: NodeJS.ReadableStream;
stream = from((size, next) => next(null, 'foo'));
stream = from((size, next) => next(null, new Buffer(1)));
stream = from((size, next) => next(null, new Uint8Array(1)));
stream = from((size, next) => next(null, null));
stream = from(['foo', new Buffer(1), new Uint8Array(1), null]);
// following should fail:
// stream = from((size, next) => next(null, {}));

stream = from({objectMode: false}, (size, next) => next(null, 'foo'));
stream = from({objectMode: false}, (size, next) => next(null, new Buffer(1)));
stream = from({objectMode: false}, (size, next) => next(null, new Uint8Array(1)));
stream = from({objectMode: false}, (size, next) => next(null, null));
stream = from({objectMode: false}, ['foo', new Buffer(1), new Uint8Array(1), null]);
// following should fail:
// stream = from({objectMode: false}, (size, next) => next(null, {}));

stream = from({highWaterMark: 1}, (size, next) => next(null, 'foo'));
stream = from({highWaterMark: 1}, (size, next) => next(null, new Buffer(1)));
stream = from({highWaterMark: 1}, (size, next) => next(null, new Uint8Array(1)));
stream = from({highWaterMark: 1}, (size, next) => next(null, null));
stream = from({highWaterMark: 1}, ['foo', new Buffer(1), new Uint8Array(1), null]);
// following should fail:
// stream = from({highWaterMark: 1}, (size, next) => next(null, {}));

stream = from({objectMode: true}, (size, next) => next(null, {}));
stream = from({objectMode: true}, (size, next) => next(null, null));
stream = from({objectMode: true}, [1, 'foo', {}, null]);

stream = from.obj((size, next) => next(null, {}));
stream = from.obj((size, next) => next(null, null));
stream = from.obj([1, 'foo', {}, null]);

stream = from.obj({objectMode: true}, (size, next) => next(null, {}));
stream = from.obj({objectMode: true}, (size, next) => next(null, null));
stream = from.obj({objectMode: true}, [1, 'foo', {}, null]);
// following should fail:
// stream = from.obj({objectMode: false}, [1, 'foo', {}, null]);
stream = from.obj({highWaterMark: 1}, (size, next) => next(null, {}));
stream = from.obj({highWaterMark: 1}, (size, next) => next(null, null));
stream = from.obj({highWaterMark: 1}, [1, 'foo', {}, null]);

let Ctor: from.From2Ctor<from.ReadInput>;
Ctor = from.ctor({objectMode: false});
Ctor = from.ctor();
stream = new Ctor((size, next) => next(null, 'foo'));
stream = new Ctor((size, next) => next(null, new Buffer(1)));
stream = new Ctor((size, next) => next(null, new Uint8Array(1)));
stream = new Ctor((size, next) => next(null, null));
stream = new Ctor(['foo', new Buffer(1), new Uint8Array(1), null]);
// following should fail:
// stream = new Ctor((size, next) => next(null, {}));

let Ctor2: from.From2Ctor<from.ReadObjectInput>;
Ctor2 = from.ctor({objectMode: true});
stream = new Ctor2((size, next) => next(null, {}));
stream = new Ctor2((size, next) => next(null, null));
stream = new Ctor2([1, 'foo', {}, null]);
