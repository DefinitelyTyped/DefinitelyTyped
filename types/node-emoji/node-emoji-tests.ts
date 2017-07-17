import emoji = require('node-emoji');

const coffee: string = emoji.get('coffee');
const result: string = emoji.random();

const cofee_name: string = emoji.which('☕️');

const emoji_string: string = emoji.emojify('I :heart:  :coffee:! -  :hushed::star::heart_eyes:  ::: test : : :+1:+');

const emoji_string2: string = emoji.emojify('I :unknown_emoji: :star: :another_one:', (name: string) => name);

const emoji_direct: string = emoji.emoji.coffee;
