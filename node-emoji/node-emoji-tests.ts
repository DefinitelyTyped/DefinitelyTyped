import emoji = require('node-emoji');

let coffee: string = emoji.get('coffee');
let result: string = emoji.random();

let cofee_name: string = emoji.which('☕️');

let emoji_string: string = emoji.emojify('I :heart:  :coffee:! -  :hushed::star::heart_eyes:  ::: test : : :+1:+');

let emoji_string2: string = emoji.emojify('I :unknown_emoji: :star: :another_one:', (name: string) => name);

let emoji_direct: string = emoji.emoji.coffee;
