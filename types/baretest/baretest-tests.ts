import baretest = require('baretest');

const test = baretest('my program');

function doSetup(): void {}
function doCleanup(): void {}
function assertSomeThings(): void {}

test.before(doSetup);

test.after(doCleanup);

test('it can do things', assertSomeThings);

test.skip('it can create world peace', assertSomeThings);

test('it can do things asynchronously', async () => {
    return;
});

// $ExpectError
test("you shouldn't return from a test function", () => {
    return 2 + 2;
});

// $ExpectError
test("you shouldn't take parameters in a test function", (people: number) => {});

// $ExpectError
test("you shouldn't return from an async test function", async () => {
    return 'data from an API under test';
});

(async () => {
    const result = await test.run();
    result; // $ExpectType boolean
})();
