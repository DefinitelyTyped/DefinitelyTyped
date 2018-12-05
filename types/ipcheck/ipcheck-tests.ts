import * as ipcheck from "ipcheck";

ipcheck.match(1, 1); // $ExpectError
ipcheck.match("", 1); // $ExpectError
ipcheck.match(1, ""); // $ExpectError

new ipcheck(1); // $ExpectError

const ip = new ipcheck("");

// $ExpectError
if (ip.ipv === 1) {
}

// $ExpectError
if (ip.ipv === 1) {
}

ip.match(1); // $ExpectError
