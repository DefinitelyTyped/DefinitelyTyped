import tryToCatch = require("try-to-catch");

const main = async () => {
    await tryToCatch(() => {}); // $ExpectType [error: Error, result?: any]
};
