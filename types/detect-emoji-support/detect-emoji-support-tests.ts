const emojiSupport = require('detect-emoji-support');

if (emojiSupport()) {
    console.log('☕');
}
