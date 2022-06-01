import { digest, similarity } from 'ssdeep.js';

const testStrings = {
    test1: 'I love typescript',
    test2: 'I love javascript',
    test3: 'I love python :(',
};

digest(testStrings.test1); // $ExpectType string
digest(testStrings.test2); // $ExpectType string
digest(testStrings.test3); // $ExpectType string

const digestedStrings = {
    test1: digest(testStrings.test1),
    test2: digest(testStrings.test2),
    test3: digest(testStrings.test3),
};

similarity(digestedStrings.test1, digestedStrings.test2); // $ExpectType number
similarity(digestedStrings.test1, digestedStrings.test3); // $ExpectType number
