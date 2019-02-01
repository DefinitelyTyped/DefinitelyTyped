import emoji = require('node-emoji');

const coffee: string = emoji.get('coffee');
const result = emoji.random();
const result_emoji: string = result.emoji;

const cofee_name: string = emoji.which('☕️');

const emoji_string: string = emoji.emojify('I :heart:  :coffee:! -  :hushed::star::heart_eyes:  ::: test : : :+1:+');

const emoji_string2: string = emoji.emojify('I :unknown_emoji: :star: :another_one:', (name: string) => name);

const emoji_direct: string = emoji.emoji.coffee;

const emoji_search = emoji.search('cof');
const emojis_from_search: string[] = emoji_search.map(emoji => emoji.emoji);

const unemojified_string: string = emoji.unemojify('I ❤️ 🍕');

const found_emoji = emoji.find('🍕');
const found_emoji_string: string = found_emoji.emoji;

const hasEmoji: boolean = emoji.hasEmoji('🍕');

const stripped_emoji: string = emoji.strip('⚠️ 〰️ 〰️ low disk space');

const replaced_emoji: string = emoji.replace('⚠️ 〰️ 〰️ low disk space', (emoji) => `${emoji.key}:`);

const replaced_emoji_with_string: string = emoji.replace('⚠️ 〰️ 〰️ low disk space', 'example');

const replaced_emoji_keep_spaces: string = emoji.replace('⚠️ 〰️ 〰️ low disk space', '', false);
