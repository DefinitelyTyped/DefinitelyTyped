import * as jexl from "jexl";

const context = {
    name: {first: 'Sterling', last: 'Archer'},
    assoc: [
        {first: 'Lana', last: 'Kane'},
        {first: 'Cyril', last: 'Figgis'},
        {first: 'Pam', last: 'Poovey'}
    ],
    age: 36
};

// Filter an array
// Output: Kane
// $ExpectType Promise<any>
jexl.eval('assoc[.first == "Lana"].last', context);

// Do math
// Output: 72
// $ExpectType Promise<any>
jexl.eval('age * (3 - 1)', context, (err, res) => {
});

// Concatenate
// Output: Sterling Archer
// $ExpectType Promise<any>
jexl.eval('name.first + " " + name["la" + "st"]', context);

// Compound
// Output: true
// $ExpectType Promise<any>
jexl.eval('assoc[.last == "Figgis"].first == "Cyril" && assoc[.last == "Poovey"].first == "Pam"', context);

// Use array indexes
// Output: Cyril Figgis
// $ExpectType Promise<any>
jexl.eval('assoc[1]', context, (err, res) => {
});

// Use conditional logic
// Output: working
// $ExpectType Promise<any>
jexl.eval('age > 62 ? "retired" : "working"', context);

// Transform
// $ExpectType void
jexl.addTransform('upper', (val) => {
    return val.toUpperCase();
});
// Output: DUCHESS ARCHER
// $ExpectType Promise<any>
jexl.eval('"duchess"|upper + " " + name.last|upper', context);

// Transform asynchronously, with arguments
// $ExpectType void
jexl.addTransform('getStat', (val, stat) => {
    return Promise.resolve('Test'); // Returns a promise
});
// Output: 184
// $ExpectType Promise<any>
jexl.eval('name.last|getStat("weight")', context, (err, res) => {
});

// Transform with multiple arguments
// $ExpectType void
jexl.addTransform('substring', (val: string, start: number, end?: number) => {
    return val.substring(start, end);
});

// Add your own (a)synchronous operators
// Here's a case-insensitive string equality
// $ExpectType void
jexl.addBinaryOp('_=', 20, (left, right) => {
    return left.toLowerCase() === right.toLowerCase();
});
// Output: true
// $ExpectType Promise<any>
jexl.eval('"Guest" _= "gUeSt"');

const newJexlInstance = new jexl.Jexl();

// $ExpectType Promise<any>
newJexlInstance.eval("true == true");
