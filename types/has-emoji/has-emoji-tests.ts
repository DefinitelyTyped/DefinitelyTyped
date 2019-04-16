import hasEmoji = require('has-emoji');

// $ExpectType boolean
hasEmoji('Unicorn 🦄');
// $ExpectType boolean
hasEmoji('Cat');
