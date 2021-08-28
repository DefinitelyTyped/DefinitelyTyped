import tryToCatch = require("try-to-catch");

const main = async () => {
    await tryToCatch(() => 5); // $ExpectType [error: Error] | [error: null, result: number]

    await tryToCatch(async () => 5); // $ExpectType [error: Error] | [error: null, result: number]

    await tryToCatch(() => { throw new Error("error") });  // $ExpectType [error: Error] | [error: null, result: unknown]
};
