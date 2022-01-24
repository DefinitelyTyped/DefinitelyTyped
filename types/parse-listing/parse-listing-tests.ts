import { parseEntries } from "./";
// $ExpectType void
const result = parseEntries("some-listing", (err, result) => {})
// $ExpectError
const resultErr = parseEntries("some-listing");

