const key = "7ed049e344f73f399ba1f7868cf9494f4b13347ecce02a8e463feb32507b73a5";
import Branca = require("branca");

/*
 * Encode/Decode Arbitrary data
 *
 * Example from https://github.com/tuupola/branca-js
 */
const branca = Branca(key);
const token = branca.encode("tuupola@appelsiini.net"); // $ExpectType string
console.log(token);

/*
TYfc6x7g8HiQf9HMkPwXC33UKwESCiBHrnVbb6AjDTaRR5oDxt3bK8kyiEyyc8HDqfnukQlMHT
*/

try {
    const payload = branca.decode(token); // $ExpectType Buffer
    console.log(payload.toString());
    /* tuupola@appelsiini.net */
} catch (error) {
    console.log(error);
}

/*
 * Encode/Decode JSON
 *
 * Example from https://github.com/tuupola/branca-js
 */
const json = JSON.stringify({ scope: ["read", "write", "delete"] });

const token2 = branca.encode(json); // $ExpectType string
console.log(token);

/*
3Gq57osRXk7UsZsqzLuLOoHYj2VgrGvhkETjZ4J1ftW7zhALYFUol2jDyxYtmrqJfi5DbKx7BqIptfeaoN2yadmJxSIx
*/

try {
    const decoded = branca.decode(token); // $ExpectType Buffer
    console.log(JSON.parse(decoded.toString()));
} catch (error) {
    console.log(error);
}
