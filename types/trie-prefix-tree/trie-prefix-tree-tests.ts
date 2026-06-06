import trie from "trie-prefix-tree";

// Instantiate the Trie
let test = trie(["cat", "cats", "dogs", "elephant", "tiger"]);

// retrieve a stringified dump of the Trie object
// $ExpectType string
test.dump();

// optionally pass in spacer parameter to format the output string
// $ExpectType string
test.dump(2);

// retrieve the Trie object instance
const rawTree = test.tree();
// $ExpectType RawTree | undefined
rawTree.c;
// $ExpectType 1 | undefined
rawTree.$;

// add a new word to the Trie
test = test.addWord("lion");

// remove an existing word from the Trie
test = test.removeWord("dogs");

// Adding and removing words can be chained:
test = test.addWord("hello").removeWord("hello");
test = test.removeWord("hello").addWord("hello");

// check if a prefix exists:
// $ExpectType boolean
test.isPrefix("do");
// $ExpectType boolean
test.isPrefix("z");

// count prefixes
// $ExpectType number
test.countPrefix("c");

// get an array of words with the passed in prefix
// $ExpectType string[]
test.getPrefix("c");

// Pass false as the second parameter to disable
// output being sorted alphabetically
// this is useful when your dictionary is already sorted
// and will therefore save performance
// $ExpectType string[]
test.getPrefix("c", false);

// get a random word at a prefix
// $ExpectType string
test.getRandomWordWithPrefix("c");
// $ExpectType string
test.getRandomWordWithPrefix("c");

// retrieve a full list of words in the Trie
// the output array is automatically sorted
test.getWords();

// pass false to disable the output being sorted
// this is useful when your dictionary is already sorted
// and will therefore save performance
test.getWords(false);

// check if a word exists in the Trie
test.hasWord("elephant");
test.hasWord("zoo");

// generate a list of valid anagrams from the given letters
test.getAnagrams("act");

// generate a list of valid sub-anagrams from the given letters
test.getSubAnagrams("ctalion");
