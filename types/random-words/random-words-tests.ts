import randomWords = require("random-words");

randomWords(); // $ExpectType string

randomWords(5); // $ExpectType string[]

randomWords({ min: 3, max: 10 }); // $ExpectType string[]
randomWords({ exactly: 2 }); // $ExpectType string[]

randomWords({ exactly: 5, join: " " }); // $ExpectType string

randomWords({ exactly: 5, join: "" }); // $ExpectType string

randomWords({ exactly: 5, maxLength: 4 }); // $ExpectType string[]

randomWords({ exactly: 5, wordsPerString: 2 }); // $ExpectType string[]

randomWords({ exactly: 5, wordsPerString: 2, separator: "-" }); // $ExpectType string[]

randomWords({ exactly: 5, wordsPerString: 2, formatter: word => word.toUpperCase() }); // $ExpectType string[]

// $ExpectType string[]
randomWords({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word, index) => {
        return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
    },
});
