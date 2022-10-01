import token = require('random-web-token');

function syncTest() {
    const newToken = token.genSync('extra', 50); // $ExpectType string
    token.syncValidator('extra', 50, newToken); // $ExpectType boolean
}
async function asyncTest() {
    const newToken = await token.genAsync('extra', 50); // $ExpectType string
    const tokenWithMyOwnCharacters = await token.withMyOwnCharacters('abc123', 50); // $ExpectType string
    const isValid = await token.asyncValidator('extra', 50, newToken); // $ExpectType boolean
}

syncTest();
asyncTest();
