import { get, runWith, set } from "fast-als";

interface ALSPayload {
    foo: {
        a: boolean;
        b: number;
        c: string;
    };
    bar: number;
}

// Runwith sync callback
runWith({
    foo: {
        a: false,
        b: 3,
        c: 'hi',
    },
    bar: 42,
}, () => {
    return;
});

// Run with async callback
runWith({
    some: 'value'
}, async () => {
    return;
});

// Set value with value typing
set<ALSPayload, 'bar'>('bar', 23);

// Set value with payload typing
set<ALSPayload>('bar', 23);

// Set value without typing
set('bar', 23);

// Get value
const anyTyped = get('bar');
const broadlyTyped = get<ALSPayload>('bar');
const correctlyTyped = get<ALSPayload, 'bar'>('bar');
