/// <reference types="node" />
/// <reference lib="dom" />
import * as chillout from 'chillout';

// test type exports
type DefaultCallbackReturn = chillout.DefaultCallbackReturn;
type ForEachArgs<TObject extends ArrayLike<unknown> | object, TContext> = chillout.ForEachArgs<TObject, TContext>;
type RepeatArgs<TContext> = chillout.RepeatArgs<TContext>;
type UntilArgs<TContext> = chillout.UntilArgs<TContext>;
type ForOfArgs<TValue, TContext> = chillout.ForOfArgs<TValue, TContext>;
type RepeatDescriptor = chillout.RepeatDescriptor;
type ChilloutIterator<TValue> = chillout.ChilloutIterator<TValue>;

// $ExpectType Promise<null | undefined>
chillout.forEach([1, 'foo'], (value, key, arr) => {
    value; // $ExpectType string | number
    key; // $ExpectType number
    arr; // $ExpectType (string | number)[]
});
// $ExpectType Promise<null | undefined>
chillout.forEach([1, 'foo'], (value, key, arr) => {
    value; // $ExpectType string | number
    key; // $ExpectType number
    arr; // $ExpectType (string | number)[]
    return chillout.StopIteration;
});
// $ExpectType Promise<null | undefined>
chillout.forEach(
    [1, 'foo'],
    function(value, key, arr) {
        this; // $ExpectType { foo: string; }
        value; // $ExpectType string | number
        key; // $ExpectType number
        arr; // $ExpectType (string | number)[]
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType ChilloutIterator<void, null>
chillout.iterator.forEach([1, 'foo'], (value, key, arr) => {
    value; // $ExpectType string | number
    key; // $ExpectType number
    arr; // $ExpectType (string | number)[]
});
// $ExpectType ChilloutIterator<typeof StopIteration, null>
chillout.iterator.forEach([1, 'foo'], (value, key, arr) => {
    value; // $ExpectType string | number
    key; // $ExpectType number
    arr; // $ExpectType (string | number)[]
    return chillout.StopIteration;
});
// $ExpectType ChilloutIterator<Promise<void>, null>
chillout.iterator.forEach(
    [1, 'foo'],
    function(value, key, arr) {
        this; // $ExpectType { foo: string; }
        value; // $ExpectType string | number
        key; // $ExpectType number
        arr; // $ExpectType (string | number)[]
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType Promise<null | undefined>
chillout.forEach({ bar: 'baz', quux: true }, (value, key, arr) => {
    value; // $ExpectType string | boolean
    key; // $ExpectType "bar" | "quux"
    arr; // $ExpectType { bar: string; quux: boolean; }
});
// $ExpectType Promise<null | undefined>
chillout.forEach({ bar: 'baz', quux: true }, (value, key, arr) => {
    value; // $ExpectType string | boolean
    key; // $ExpectType "bar" | "quux"
    arr; // $ExpectType { bar: string; quux: boolean; }
    return chillout.StopIteration;
});
// $ExpectType Promise<null | undefined>
chillout.forEach(
    { bar: 'baz', quux: true },
    function(value, key, arr) {
        this; // $ExpectType { foo: string; }
        value; // $ExpectType string | boolean
        key; // $ExpectType "bar" | "quux"
        arr; // $ExpectType { bar: string; quux: boolean; }
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType ChilloutIterator<void, null>
chillout.iterator.forEach({ bar: 'baz', quux: true }, (value, key, arr) => {
    value; // $ExpectType string | boolean
    key; // $ExpectType "bar" | "quux"
    arr; // $ExpectType { bar: string; quux: boolean; }
});
// $ExpectType ChilloutIterator<typeof StopIteration, null>
chillout.iterator.forEach({ bar: 'baz', quux: true }, (value, key, arr) => {
    value; // $ExpectType string | boolean
    key; // $ExpectType "bar" | "quux"
    arr; // $ExpectType { bar: string; quux: boolean; }
    return chillout.StopIteration;
});
// $ExpectType ChilloutIterator<Promise<void>, null>
chillout.iterator.forEach(
    { bar: 'baz', quux: true },
    function(value, key, arr) {
        this; // $ExpectType { foo: string; }
        value; // $ExpectType string | boolean
        key; // $ExpectType "bar" | "quux"
        arr; // $ExpectType { bar: string; quux: boolean; }
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType Promise<null | undefined>
chillout.repeat(1, i => {
    i; // $ExpectType number
});
// $ExpectType Promise<null | undefined>
chillout.repeat({ done: 1 }, i => {
    i; // $ExpectType number
});
// $ExpectType Promise<null | undefined>
chillout.repeat({ start: 0, done: 1 }, i => {
    i; // $ExpectType number
});
// $ExpectType Promise<null | undefined>
chillout.repeat({ step: 1, done: 1 }, i => {
    i; // $ExpectType number
});
// $ExpectType Promise<null | undefined>
chillout.repeat(1, i => {
    i; // $ExpectType number
    return chillout.StopIteration;
});
// $ExpectType Promise<null | undefined>
chillout.repeat(
    1,
    function(i) {
        this; // $ExpectType { foo: string; }
        i; // $ExpectType number
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType ChilloutIterator<void, null>
chillout.iterator.repeat(1, i => {
    i; // $ExpectType number
});
// $ExpectType ChilloutIterator<void, null>
chillout.iterator.repeat({ start: 0, done: 1 }, i => {
    i; // $ExpectType number
});
// $ExpectType ChilloutIterator<void, null>
chillout.iterator.repeat({ step: 1, done: 1 }, i => {
    i; // $ExpectType number
});
// $ExpectType ChilloutIterator<typeof StopIteration, null>
chillout.iterator.repeat(1, i => {
    i; // $ExpectType number
    return chillout.StopIteration;
});
// $ExpectType ChilloutIterator<Promise<void>, null>
chillout.iterator.repeat(
    1,
    function(i) {
        this; // $ExpectType { foo: string; }
        i; // $ExpectType number
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType Promise<null | undefined>
chillout.until(() => {});
// $ExpectType Promise<null | undefined>
chillout.until(() => {
    return chillout.StopIteration;
});
// $ExpectType Promise<null | undefined>
chillout.until(
    function() {
        this; // $ExpectType { foo: string; }
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType ChilloutIterator<void, null>
chillout.iterator.until(() => {});
// $ExpectType ChilloutIterator<typeof StopIteration, null>
chillout.iterator.until(() => {
    return chillout.StopIteration;
});
// $ExpectType ChilloutIterator<Promise<void>, null>
chillout.iterator.until(
    function() {
        this; // $ExpectType { foo: string; }
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType Promise<null | undefined>
chillout.waitUntil(() => {});
// $ExpectType Promise<null | undefined>
chillout.waitUntil(() => {
    return chillout.StopIteration;
});
// $ExpectType Promise<null | undefined>
chillout.waitUntil(
    function() {
        this; // $ExpectType { foo: string; }
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType Promise<null | undefined>
chillout.forOf([1, 'foo'][Symbol.iterator](), value => {
    value; // $ExpectType string | number
});
// $ExpectType Promise<null | undefined>
chillout.forOf([1, 'foo'][Symbol.iterator](), value => {
    value; // $ExpectType string | number
    return chillout.StopIteration;
});
// $ExpectType Promise<null | undefined>
chillout.forOf(
    [1, 'foo'][Symbol.iterator](),
    function(value) {
        this; // $ExpectType { foo: string; }
        value; // $ExpectType string | number
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType ChilloutIterator<void, null>
chillout.iterator.forOf([1, 'foo'][Symbol.iterator](), value => {
    value; // $ExpectType string | number
});
// $ExpectType ChilloutIterator<typeof StopIteration, null>
chillout.iterator.forOf([1, 'foo'][Symbol.iterator](), value => {
    value; // $ExpectType string | number
    return chillout.StopIteration;
});
// $ExpectType ChilloutIterator<Promise<void>, null>
chillout.iterator.forOf(
    [1, 'foo'][Symbol.iterator](),
    function(value) {
        this; // $ExpectType { foo: string; }
        value; // $ExpectType string | number
        return Promise.resolve();
    },
    { foo: 'bar' },
);

// $ExpectType Promise<null | undefined>
chillout.iterate(chillout.iterator.repeat(1, () => {}));
const myIterator = {
    count: 0,
    next(): [boolean, number] {
        this.count++;
        if (this.count > 5) {
            return [true, this.count];
        } else {
            return [false, this.count];
        }
    },
};
// $ExpectType Promise<number | undefined>
chillout.iterate(myIterator as chillout.ChilloutIterator<number, number>);

// $ExpectType string
chillout.version;

const foo: any = null;
if (chillout.isThenable(foo)) {
    // $ExpectType PromiseLike<unknown>
    foo;
}
if (chillout.isArrayLike(foo)) {
    // $ExpectType ArrayLike<unknown>
    foo;
}

// $ExpectType void
chillout.nextTick(() => 1);
// $ExpectType void
chillout.nextTick(() => {});

// ===== Example tests =====
chillout
    .forEach([1, 2, 3], value => {
        console.log(value);
    })
    .then(() => {
        console.log('done');
    });

const time = Date.now();
chillout
    .repeat(1000, i => {})
    .then(() => {
        const processingTime = Date.now() - time;
        console.log(processingTime);
    });

const values = ['a', 'b', 'c'];
chillout
    .forEach(values, (value, key, obj) => {
        console.log(value);
    })
    .then(() => {
        console.log('done');
    });

const values2 = {
    a: 1,
    b: 2,
    c: 3,
};
chillout
    .forEach(values2, (value, key, obj) => {
        console.log(`${key}:${value}`);
    })
    .then(() => {
        console.log('done');
    });

async function getFileContents(url: string) {
    const response = await fetch(url);
    return response.text();
}
async function logFiles() {
    const files = ['/file1.txt', '/file2.txt', '/file3.txt'];
    await chillout.forEach(files, async url => {
        const contents = await getFileContents(url);
        console.log(contents);
    });
    console.log('done');
}
logFiles();

chillout
    .repeat(5, i => {
        console.log(i);
    })
    .then(() => {
        console.log('done');
    });
chillout
    .repeat({ start: 10, step: 2, done: 20 }, i => {
        console.log(i);
    })
    .then(() => {
        console.log('done');
    });
let i = 0;
chillout
    .until(() => {
        console.log(i);
        i++;
        if (i === 5) {
            return chillout.StopIteration; // break loop
        }
    })
    .then(() => {
        console.log('done');
    });

// Sleep until msec
function sleep(msec: number) {
    return new Promise(resolve => setTimeout(resolve, msec));
}
// Passing an async function as a callback in chillout.until
async function logNewFileContents() {
    let previous: string | null = null;
    let contents: string | null = null;
    await chillout.until(async () => {
        contents = await getFileContents('./file1.txt');
        if (previous === null) {
            previous = contents;
        }
        if (contents !== previous) {
            console.log('file changed!');
            return chillout.StopIteration; // break loop
        }
        await sleep(1000);
    });
    console.log(contents);
    previous = contents;
}
logNewFileContents();

chillout
    .waitUntil(() => {
        // Wait until the DOM body element is loaded
        if (document.body) {
            return chillout.StopIteration; // break loop
        }
    })
    .then(() => {
        document.body.innerHTML += 'body loaded';
    });
chillout
    .waitUntil(() => {
        return chillout.StopIteration; // break loop
    })
    .then(() => {});

chillout
    .forOf([1, 2, 3], value => {
        console.log(value);
    })
    .then(() => {
        console.log('done');
    });
chillout
    .forOf('abc', value => {
        console.log(value);
    })
    .then(() => {
        console.log('done');
    });
