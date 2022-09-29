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

// Dummy console. Comment it out if you want to run this code and see output
class DummyConsole {
    log(...args: string[]) {
    }
}

const console = new DummyConsole();

// Dummy helper function
function dbSelectByLastName(val: string, stat: string): Promise<any> {
    return new Promise(((resolve, reject) => resolve(184)));
}

function calculateAge(age1: number, age2: number): Promise<any> {
    return new Promise(((resolve, reject) => resolve(age1 + age2)));
}

/* Type testing */

// $ExpectType Promise<any>
jexl.eval('assoc[.first == "Lana"].last', context);

// $ExpectType any
jexl.evalSync('assoc[.first == "Lana"].last');

// $ExpectType Promise<any>
jexl.eval('age * (3 - 1)', context);

// $ExpectType Promise<any>
jexl.eval('name.first + " " + name["la" + "st"]', context);

// $ExpectType Promise<any>
jexl.eval('assoc[.last == "Figgis"].first == "Cyril" && assoc[.last == "Poovey"].first == "Pam"', context);

// $ExpectType Promise<any>
jexl.eval('assoc[1]', context);

// $ExpectType Promise<any>
jexl.eval('age > 62 ? "retired" : "working"', context);

// $ExpectType void
jexl.addTransform('upper', (val) => val.toUpperCase());
// $ExpectType Promise<any>
jexl.eval('"duchess"|upper + " " + name.last|upper', context);

// $ExpectType void
jexl.addTransform('getStat', async (val, stat) => dbSelectByLastName(val, stat));
// $ExpectType Promise<any>
jexl.eval('name.last|getStat("weight")', context);

// $ExpectType void
jexl.addBinaryOp('_=', 20, (left, right) => left.toLowerCase() === right.toLowerCase());
// $ExpectType Promise<any>
jexl.eval('"Guest" _= "gUeSt"');

/* Example - runnable code */
(async function testStuff() {
// Filter an array asynchronously...
    jexl.eval('assoc[.first == "Lana"].last', context).then(filterArray => {
        console.log('1. Filter Array', filterArray); // Output: Kane
    });

// Or synchronously!
    console.log('2. Filter Array Sync', jexl.evalSync('assoc[.first == "Lana"].last')); // Output: Kane

// Do math
    const match = await jexl.eval('age * (3 - 1)', context);
    console.log('3. Match', match); // Output: 72

// Concatenate
    const concatenate = await jexl.eval('name.first + " " + name["la" + "st"]', context);
    console.log('4. Concatenate', concatenate); // "Sterling Archer"

// Compound
    const compound = await jexl.eval('assoc[.last == "Figgis"].first == "Cyril" && assoc[.last == "Poovey"].first == "Pam"', context);
    console.log('5. Compound', compound); // true

// Use array indexes
    const arrayIndex = await jexl.eval('assoc[1]', context);
    console.log('6. Array Index', arrayIndex); // { first: 'Cyril', last: 'Figgis' }

// Use conditional logic
    const conditional = await jexl.eval('age > 62 ? "retired" : "working"', context);
    console.log('7. Conditional', conditional); // "working"

// Transform
    jexl.addTransform('upper', (val) => val.toUpperCase());
    const transform = await jexl.eval('"duchess"|upper + " " + name.last|upper', context);
    console.log('8. Transform', transform); // "DUCHESS ARCHER"

// Transform asynchronously, with arguments
    jexl.addTransform('getStat', async (val, stat) => dbSelectByLastName(val, stat));
    try {
        const asyncTransform = await jexl.eval('name.last|getStat("weight")', context);
        console.log('9. Async Transform', asyncTransform); // Output: 184
    } catch (e) {
        console.log('Database Error', e.stack);
    }

// Add your own (a)synchronous operators
// Here's a case-insensitive string equality
    jexl.addBinaryOp('_=', 20, (left, right) => left.toLowerCase() === right.toLowerCase());
    const binaryOp = await jexl.eval('"Guest" _= "gUeSt"');
    console.log('10. Binary Op', binaryOp); // true

// Function
    jexl.addFunction('getAge', () => 0);
    const func = await jexl.eval('age > getAge()', context);
    console.log('11. Function', func); // true

// Function asynchronously, with arguments
    jexl.addFunction('calculateAge', async (age1, age2) => calculateAge(age1, age2));
    try {
        const asyncFunc = await jexl.eval('age > calculateAge(20, 21)');
        console.log('12. Async Function', asyncFunc); // false
    } catch (e) {
        console.log('Calculation Error', e.stack);
    }
})().then(() => console.log('Testing done'));

// $ExpectType Grammar
jexl._grammar;

// Compile expressions
const expression = jexl.compile('1 + 2');

// $ExpectType Expression
expression;

// $ExpectType Ast
expression._getAst();
