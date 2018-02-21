import * as ipcheck from "ipcheck";

ipcheck.match(1, 1); // Argument of type '1' is not assignable to parameter of type 'string | IPCheck'
ipcheck.match("", 1); // Argument of type '1' is not assignable to parameter of type 'string | IPCheck'
ipcheck.match(1, ""); // Argument of type '1' is not assignable to parameter of type 'string | IPCheck'

new ipcheck(1); // Argument of type '1' is not assignable to parameter of type 'string'

const ip = new ipcheck("");

// Operator '===' cannot be applied to types '0 | 4 | 6' and '1'
if (ip.ipv === 1) {
}

// Operator '===' cannot be applied to types '0 | 4 | 6' and '1'
if (ip.ipv === 1) {
}

ip.match(1); // Argument of type '1' is not assignable to parameter of type 'string | IPCheck'
