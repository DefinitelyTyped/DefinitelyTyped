import arrayToSentence = require("array-to-sentence");

arrayToSentence(["one", "two", 3]); // => 'one, two and 3'
arrayToSentence(["one", "two"]); // => 'one and two'
arrayToSentence(["one"]); // => 'one'

arrayToSentence([]); // => ''

arrayToSentence(["A", "B", "C"], {
    separator: "-",
    lastSeparator: "-",
}); // => 'A-B-C'

arrayToSentence(["Earth", "Wind", "Fire"], {
    lastSeparator: " & ",
}); // => 'Earth, Wind & Fire'

arrayToSentence([], {}); // $EXpectType string
