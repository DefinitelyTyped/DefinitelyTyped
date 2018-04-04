import * as Hoek from "hoek";

/**
 * Import the entire module as above or use named imports:
 *      import { clone, merge, assert } from "hoek";
 * "Tests" taken straight from hoek API reference and adapted to TypeScript.
 */

// clone(obj)

let nestedObj = {
    w: /^something$/ig,
    x: {
        a: [1, 2, 3],
        b: 123456,
        c: new Date()
    },
    y: 'y',
    z: new Date()
};

let copy = Hoek.clone(nestedObj);

copy.x.b = 100;

console.log(copy.y);        // results in 'y'
console.log(nestedObj.x.b); // results in 123456
console.log(copy.x.b);      // results in 100

// cloneWithShallow(obj, keys)

nestedObj = {
    w: /^something$/ig,
    x: {
        a: [1, 2, 3],
        b: 123456,
        c: new Date()
    },
    y: 'y',
    z: new Date()
};

copy = Hoek.cloneWithShallow(nestedObj, ['x']);

copy.x.b = 100;

console.log(copy.y);        // results in 'y'
console.log(nestedObj.x.b); // results in 100
console.log(copy.x.b);      // results in 100

// merge(target, source, isNullOverride, isMergeArrays)

const target = { a: 1, b: 2 };
const source = { a: 0, c: 5 };
const source2 = { a: null, c: 5 };

Hoek.merge(target, source);         // results in {a: 0, b: 2, c: 5}
Hoek.merge(target, source2);        // results in {a: null, b: 2, c: 5}
Hoek.merge(target, source2, false); // results in {a: 1, b: 2, c: 5}

const targetArray = [1, 2, 3];
const sourceArray = [4, 5];

Hoek.merge(targetArray, sourceArray);              // results in [1, 2, 3, 4, 5]
Hoek.merge(targetArray, sourceArray, true, false); // results in [4, 5]

// applyToDefaults(defaults, options, isNullOverride)

let defaults = { host: "localhost", port: 8000 };
const options = { port: 8080 };

let config = Hoek.applyToDefaults(defaults, options); // results in { host: "localhost", port: 8080 }

defaults = { host: "localhost", port: 8000 };
const options1 = { host: null, port: 8080 };

config = Hoek.applyToDefaults(defaults, options1, true); // results in { host: null, port: 8080 }

// applyToDefaultsWithShallow(defaults, options, keys)

const defaults1 = {
    server: {
        host: "localhost",
        port: 8000
    },
    name: 'example'
};

const options2 = { server: { port: 8080 } };

const config1 = Hoek.applyToDefaultsWithShallow(defaults1, options2, ['server']); // results in { server: { port: 8080 }, name: 'example' }

// deepEqual(b, a, [options])

Hoek.deepEqual({ a: [1, 2], b: 'string', c: { d: true } }, { a: [1, 2], b: 'string', c: { d: true } }); // results in true
Hoek.deepEqual(Object.create(null), {}, { prototype: false }); // results in true
Hoek.deepEqual(Object.create(null), {}); // results in false

// unique(array, key)

let array = [1, 2, 2, 3, 3, 4, 5, 6];

const newArray = Hoek.unique(array);    // results in [1,2,3,4,5,6]

let array1 = [{ id: 1 }, { id: 1 }, { id: 2 }];

const newArray1 = Hoek.unique(array1, "id");  // results in [{id: 1}, {id: 2}]

// mapToObject(array, key)

array = [1, 2, 3];
let newObject = Hoek.mapToObject(array);   // results in {"1": true, "2": true, "3": true}

array1 = [{ id: 1 }, { id: 2 }];
newObject = Hoek.mapToObject(array1, "id"); // results in {"1": true, "2": true}

// intersect(array1, array2)

array = [1, 2, 3];
const array2 = [1, 4, 5];

const newArray2 = Hoek.intersect(array, array2); // results in [1]

// contain(ref, values, [options])

Hoek.contain('aaa', 'a', { only: true });                           // true
Hoek.contain([{ a: 1 }], [{ a: 1 }], { deep: true });               // true
Hoek.contain([1, 2, 2], [1, 2], { once: true });                    // false
Hoek.contain({ a: 1, b: 2, c: 3 }, { a: 1, d: 4 }, { part: true }); // true

// flatten(array, [target])

let array3 = [1, [2, 3]];

let flattenedArray = Hoek.flatten(array); // results in [1, 2, 3]

array3 = [1, [2, 3]];
const target1 = [4, [5]];

flattenedArray = Hoek.flatten(array3, target1); // results in [4, [5], 1, 2, 3]

// reach(obj, chain, [options])

let chain = 'a.b.c';
let obj = { a: { b: { c: 1 } } };

Hoek.reach(obj, chain); // returns 1

chain = 'a.b.-1';
const obj1 = { a: { b: [2, 3, 6] } };

Hoek.reach(obj1, chain); // returns 6

// reachTemplate(obj, template, [options])

chain = 'a.b.c';
obj = { a: { b: { c: 1 } } };

Hoek.reachTemplate(obj, '1+{a.b.c}=2'); // returns '1+1=2'

// transform(obj, transform, [options])

const source1 = {
    address: {
        one: '123 main street',
        two: 'PO Box 1234'
    },
    title: 'Warehouse',
    state: 'CA'
};

let result = Hoek.transform(source1, {
    'person.address.lineOne': 'address.one',
    'person.address.lineTwo': 'address.two',
    title: 'title',
    'person.address.region': 'state'
});
// Results in
// {
//     person: {
//         address: {
//             lineOne: '123 main street',
//             lineTwo: 'PO Box 1234',
//             region: 'CA'
//         }
//     },
//     title: 'Warehouse'
// }

// shallow(obj)

const shallow = Hoek.shallow({ a: { b: 1 } });

// stringify(obj)

let a: any = {};
a.b = a;
Hoek.stringify(a);      // Returns '[Cannot display object: Converting circular structure to JSON]'

// Timer

const timerObj = new Hoek.Timer();
console.log("Time is now: " + timerObj.ts);
console.log(`Elapsed time from initialization: ${timerObj.elapsed()}milliseconds`);

// Bench

const benchObj = new Hoek.Bench();
console.log(`Elapsed time from initialization: ${benchObj.elapsed()}milliseconds`);

// base64urlEncode(value)

Hoek.base64urlEncode("hoek");

// base64urlDecode(value)

Hoek.base64urlDecode("aG9law==");

// escapeHtml(string)

const string = '<html> hey </html>';
const escapedString = Hoek.escapeHtml(string); // returns &lt;html&gt; hey &lt;/html&gt;

// escapeHeaderAttribute(attribute)

a = Hoek.escapeHeaderAttribute('I said "go w\\o me"');  // returns I said \"go w\\o me\"

// escapeRegex(string)

a = Hoek.escapeRegex('4^f$s.4*5+-_?%=#!:@|~\\/`"(>)[<]d{}s,');  // returns 4\^f\$s\.4\*5\+\-_\?%\=#\!\:@\|~\\\/`"\(>\)\[<\]d\{\}s\,

// assert(condition, message)

const x = 1;
const y = 2 as number;

Hoek.assert(x === y, 'x should equal y');  // Throws 'x should equal y'

Hoek.assert(x === y, new Error('x should equal y')); // Throws the given error object

// abort(message)

Hoek.abort("Error message");

// displayStack(slice)

const stack = Hoek.displayStack();
console.log(stack);

// callStack(slice)

const stack2 = Hoek.callStack();
console.log(stack2);

// nextTick(fn)

let myFn = () => {
    console.log('Do this later');
};

const nextFn = Hoek.nextTick(myFn);

nextFn();
console.log('Do this first');

// Results in:
//
// Do this first
// Do this later

// once(fn)

myFn = () => {
    console.log('Ran myFn');
};

const onceFn = Hoek.once(myFn);
onceFn(); // results in "Ran myFn"
onceFn(); // results in undefined

// ignore

Hoek.ignore();

// uniqueFilename(path, extension)

const result1 = Hoek.uniqueFilename('./test/modules', 'txt'); // results in "full/path/test/modules/{random}.txt"

// isInteger(value)

result = Hoek.isInteger('23');
