import emojijs = require('emoji-js');

const emoji = new emojijs.EmojiConvertor();

emoji.replace_colons(':smile:');

emoji.replace_unified('\u{1F604}');

emoji.text_mode = true;

emoji.include_title = true;

emoji.img_sets.apple.path = 'http://my-cdn.com/emoji-apple-64/';

emoji.img_sets.apple.sheet = 'http://my-cdn.com/emoji-apple-sheet-64.png';

emoji.use_sheet = true;

emoji.addAliases({
    doge: '1f415',
    cat: '1f346',
});

emoji.removeAliases(['doge', 'cat']);
