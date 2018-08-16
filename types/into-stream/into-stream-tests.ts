import intoStream = require('into-stream');

function iterableFrom(arr: any[]) {
    return {
        *[Symbol.iterator]() {
            let i = 0;
            while (i < arr.length) {
                yield arr[i++];
            }
        }
    };
}

intoStream('unicorn').pipe(process.stdout);
intoStream('unicorn'.split('')).pipe(process.stdout);
intoStream(iterableFrom('unicorn'.split(''))).pipe(process.stdout);
intoStream(new Buffer('unicorn')).pipe(process.stdout);
intoStream(Promise.resolve('unicorn')).pipe(process.stdout);

const f = {foo: true};
const f2 = [{foo: true}, {bar: true}];
intoStream.obj(f).pipe(process.stdout);
intoStream.obj(f2).pipe(process.stdout);
intoStream.obj(iterableFrom(f2)).pipe(process.stdout);
intoStream.obj(Promise.resolve(f)).pipe(process.stdout);
intoStream.obj(Promise.resolve(f2)).pipe(process.stdout);
intoStream.obj(Promise.resolve(iterableFrom(f2))).pipe(process.stdout);
