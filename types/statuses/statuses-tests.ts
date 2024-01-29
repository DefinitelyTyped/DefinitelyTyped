import status = require("statuses");

declare let input: "418" | string;
status(input); // $ExpectType string | number

status(403); // $ExpectType string
status("403"); // $ExpectType string
status(306); // $ExpectType string

status("forbidden"); // $ExpectType number
status("Forbidden"); // $ExpectType number

let codes: number[];
codes = status.codes;

let msg: string | undefined;
msg = status.message[404]; // => 'Not Found'

let code: number | undefined;
code = status.code["not found"]; // => 404
code = status.code["Not Found"]; // => 404

let isRedirect: boolean | undefined;
isRedirect = status.redirect[200]; // => undefined
isRedirect = status.redirect[301]; // => true

let isEmpty: boolean | undefined;
isEmpty = status.empty[200]; // => undefined
isEmpty = status.empty[204]; // => true
isEmpty = status.empty[304]; // => true

let isRetry: boolean | undefined;
isRetry = status.retry[501]; // => undefined
isRetry = status.retry[503]; // => true

type R = status.Result<any>;
