import * as Tokenizer from "wink-tokenizer";

const tokenizer = new Tokenizer();

tokenizer.defineConfig({
    currency: false
});

tokenizer.tokenize("asd asd asd ads");

tokenizer.getTokensFP();

// samples taken from the official API docs:
// https://winkjs.org/wink-tokenizer/Tokenizer.html#getTokensFP
// Adding a regex for an existing tag
tokenizer.addRegex(/\(oo\)/gi, 'emoticon');
tokenizer.tokenize('(oo) Hi!');
// -> [ { value: '(oo)', tag: 'emoticon' },
//      { value: 'Hi', tag: 'word' },
//      { value: '!', tag: 'punctuation' } ]

// Adding a regex to parse a new token type
tokenizer.addRegex(/hello/gi, 'greeting', 'g');
tokenizer.tokenize('hello, how are you?');
// -> [ { value: 'hello', tag: 'greeting' },
//      { value: ',', tag: 'punctuation' },
//      { value: 'how', tag: 'word' },
//      { value: 'are', tag: 'word' },
//      { value: 'you', tag: 'word' },
//      { value: '?', tag: 'punctuation' } ]
// Notice how "hello" is now tagged as "greeting" and not as "word".

// Using definConfig will reset the above!
tokenizer.defineConfig({ word: true });
tokenizer.tokenize('hello, how are you?');
// -> [ { value: 'hello', tag: 'word' },
//      { value: ',', tag: 'punctuation' },
//      { value: 'how', tag: 'word' },
//      { value: 'are', tag: 'word' },
//      { value: 'you', tag: 'word' },
//      { value: '?', tag: 'punctuation' } ]
// Do not tokenize & tag @mentions.
tokenizer.defineConfig({ mention: false });
// -> 13
// Only tokenize words as defined above.
tokenizer.defineConfig({});
// -> 0
