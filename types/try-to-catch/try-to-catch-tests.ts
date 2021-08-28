import tryToCatch = require("try-to-catch");

const main = async () => {
    await tryToCatch(() => 5); // $ExpectType [error: null, result: 5]

    await tryToCatch(async () => 5); // $ExpectType [error: null, result: 5]

    await tryToCatch(() => throw Error("error"));  // $ExpectType [error: Error]
};
