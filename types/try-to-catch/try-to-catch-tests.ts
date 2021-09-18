import tryToCatch = require("try-to-catch");

const main = async () => {
    await tryToCatch(() => 5); // $ExpectType [Error] | [null, number]

    await tryToCatch(async () => 5); // $ExpectType [Error] | [null, number]

    await tryToCatch(() => { throw new Error("error"); });  // $ExpectType [Error] | [null, unknown]
};
