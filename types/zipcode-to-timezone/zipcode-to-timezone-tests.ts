import { lookup } from "zipcode-to-timezone";

// $ExpectType string | null
const stringLookup = lookup("10001");

// $ExpectType string | null
const numberLookup = lookup(10001);

// $ExpectError
const noArg = lookup();

// $ExpectError
const wrongType = lookup([]);
