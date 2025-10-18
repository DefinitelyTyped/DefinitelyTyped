import after = require('after');

// Basic usage - should return a proxy function
const done1 = after(2, (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType any
});
done1; // $ExpectType AfterProxy<any> | undefined

// Test with count 0 - should return undefined and execute immediately
const result0 = after(0, () => {});
result0; // $ExpectType AfterProxy<any> | undefined

// Test with typed results
interface TestResult {
    value: number;
    message: string;
}

const done2 = after<TestResult>(1, (err, result) => {
    err; // $ExpectType Error | null
    result; // $ExpectType TestResult | undefined
});
done2; // $ExpectType AfterProxy<TestResult> | undefined

// Test with error callback
const done3 = after(3, (err) => {
    err; // $ExpectType Error | null
}, (err) => {
    err; // $ExpectType Error
});
done3; // $ExpectType AfterProxy<any> | undefined

// Test proxy function properties
const done4 = after(3, () => {});
if (done4) {
    done4.count; // $ExpectType number
    done4(null, 'test'); // $ExpectType void
}

// Test function calls
const done5 = after(2, (err, result) => {});
if (done5) {
    done5(null, 'first');
    done5(new Error('error'));
    done5(null, { value: 42 });
}

// Test that count property is accessible
const done6 = after(5, () => {});
if (done6) {
    const count: number = done6.count;
    count; // $ExpectType number
}

// Test with different parameter types
const done7 = after<string>(1, (err, result) => {
    result; // $ExpectType string | undefined
});

const done8 = after<number>(1, (err, result) => {
    result; // $ExpectType number | undefined
});

const done9 = after<{ id: number; name: string }>(1, (err, result) => {
    result; // $ExpectType { id: number; name: string; } | undefined
});

// Test error cases that should fail compilation
// @ts-expect-error - count must be a number
const invalid1 = after('2', () => {});

// @ts-expect-error - callback is required
const invalid2 = after(2);

// @ts-expect-error - too many arguments
const invalid3 = after(2, () => {}, () => {}, () => {});

// Test that the proxy function can be called with different argument patterns
const done10 = after(1, (err, result) => {});
if (done10) {
    // @ts-expect-error - requires at least one argument
    done10(); // No arguments
    done10(null); // Only error
    done10(null, 'result'); // Error and result
    done10(new Error('test')); // Only error
}

// Test that count property is mutable (it decreases on each call)
const done11 = after(3, () => {});
if (done11) {
    const foo = done11.count; // $ExpectType number
}
