import wrapAnsi from "wrap-ansi";
// tslint:disable-next-line: no-duplicate-imports

wrapAnsi("input", 80); // $ExpectType string
wrapAnsi("input", 80, {}); // $ExpectType string
wrapAnsi("input", 80, { hard: true }); // $ExpectType string
wrapAnsi("input", 80, { hard: false }); // $ExpectType string
wrapAnsi("input", 80, { trim: true }); // $ExpectType string
wrapAnsi("input", 80, { trim: false }); // $ExpectType string
wrapAnsi("input", 80, { wordWrap: true }); // $ExpectType string
wrapAnsi("input", 80, { wordWrap: false }); // $ExpectType string
