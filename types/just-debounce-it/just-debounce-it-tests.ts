import debounce = require("just-debounce-it");

const doThings = () => 1;

const num: number = debounce(doThings)();
const num2: number = debounce(doThings, 0)();
const num3: number = debounce(doThings, 0, true)();
const num4: number = debounce(doThings, 0, false)();
const num5: number = debounce(doThings, 1000, true)();

// $ExpectType void
debounce(doThings, 1000)();

const exclaim = (a: string) => a + '!';

const str: string = debounce(exclaim)('hey');
const str2: string = debounce(exclaim, 0)('hi');
const str3: string = debounce(exclaim, 0, true)('hi');
const str4: string = debounce(exclaim, 0, false)('hi');
const str5: string = debounce(exclaim, 1000, true)('hooray');

// $ExpectType void
debounce(exclaim, 1000)('hello');
