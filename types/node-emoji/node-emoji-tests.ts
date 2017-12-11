import { IEmoji } from "./index";
import emoji = require('node-emoji');

const coffee: string = emoji.get('coffee');
const result: IEmoji = emoji.random();

const cofee_name: string = emoji.which('☕️');

const emoji_string: string = emoji.emojify('I :heart:  :coffee:! -  :hushed::star::heart_eyes:  ::: test : : :+1:+');

const emoji_string2: string = emoji.emojify('I :unknown_emoji: :star: :another_one:', (name: string) => name);

const emoji_direct: string = emoji.emoji.coffee;

const emoji_search: IEmoji[] = emoji.search('cof');

const unemojified_string: string = emoji.unemojify('I ❤️ 🍕');

const found_emoji: IEmoji = emoji.find('🍕');

const hasEmoji: boolean = emoji.hasEmoji('🍕');

const stripped_emoji: string = emoji.strip('⚠️ 〰️ 〰️ low disk space');

const replaced_emoji: string = emoji.replace('⚠️ 〰️ 〰️ low disk space', (emoji) => `${emoji.key}:`);
