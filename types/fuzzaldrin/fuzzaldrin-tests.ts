import { match, filter, score } from 'fuzzaldrin';

let number = 0;
const string = '' as string;
let strings: string[] = [];
let objects: Array<{name: string, speed: number}> = [];

strings = filter(strings, string);
strings = filter(strings, string, {maxResults: number});
objects = filter(objects, string, {key: 'name'});
objects = filter(objects, string, {key: 'name', maxResults: number});

number = score(string, string);

match(string, string);

// These should be type errors! Uncomment to verify.
// objects = filter(objects, string);
// objects = filter(objects, string, {key: 'speed'});
// strings = filter(strings, string, {key: 'speed'});
