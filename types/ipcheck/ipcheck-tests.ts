import * as ipcheck from "ipcheck";

// @ts-expect-error
ipcheck.match(1, 1);
// @ts-expect-error
ipcheck.match("", 1);
// @ts-expect-error
ipcheck.match(1, "");

// @ts-expect-error
new ipcheck(1);

const ip = new ipcheck("");

// @ts-expect-error
if (ip.ipv === 1) {
}

// @ts-expect-error
if (ip.ipv === 1) {
}

// @ts-expect-error
ip.match(1);
