import v = require('voca');

let str: string;
let num: number;
let bool: boolean;
let strAry: string[];
let numAry: number[];

// Case
str = v.camelCase();
str = v.camelCase('bird flight');
str = v('bird flight').camelCase().value();
str = v.chain('bird flight').camelCase().value();

str = v.capitalize();
str = v.capitalize('apple');
str = v.capitalize('aPPle', true);
str = v('apple').capitalize().value();
str = v('apple').capitalize(true).value();
str = v.chain('apple').capitalize(true).value();

str = v.decapitalize('Sun');
str = v.kebabCase('goodbye blue sky');
str = v.lowerCase('Green');
str = v.snakeCase('learning to fly');

str = v.swapCase('learning to fly');
str = v('learning to fly').swapCase().value();
str = v.chain('learning to fly').swapCase().value();

str = v.titleCase('learning to fly');
str = v.titleCase('another brick in the wall', ['in', 'the']);
str = v.upperCase('school');

// Chain
strAry = v('Back to School')
    .lowerCase()
    .words();
str = v(" Back to School ")
    .trim()
    .truncate(7)
    .value();

strAry = v
    .chain('Back to School')
    .lowerCase()
    .words()
    .value();

strAry = v('Back to School')
     .chain()
     .lowerCase()
     .words()
     .value();
str = v(" Back to School ")
    .chain()
    .trim()
    .truncate(7)
    .value();

str = v
    .chain('sun is shining')
    .words()
    .thru((words: string[]) => {
        return words[0];
    })
    .value();

str = v
    .chain('Hello world')
    .replace('Hello', 'Hi')
    .lowerCase()
    .slugify()
    .value();
str = v(' Space travel ')
    .trim()
    .truncate(8)
    .value();

// Chop
str = v.charAt('helicopter', 0);
str = v('helicopter').charAt(0).value();
str = v.chain('helicopter').charAt(0).value();

str = v.codePointAt('rain', 1);
str = v.first('helicopter');
str = v.first('vehicle', 2);
str = v.graphemeAt('\uD835\uDC00\uD835\uDC01', 0);
str = v.last('helicopter');
str = v.last('vehicle', 2);
str = v.prune('Once upon a time', 7);
str = v.prune('Good day, Little Red Riding Hood', 16, ' (more)');
str = v.slice('miami', 1);
str = v.slice('florida', 1, 4);
str = v.substr('infinite loop', 9);
str = v.substr('dreams', 2, 2);
str = v.substring('beach', 1);
str = v.substring('ocean', 1, 3);
str = v.truncate('Once upon a time', 7);
str = v.truncate('Good day, Little Red Riding Hood', 14, ' (...)');

// Count
num = v.count();
num = v.count('rain');
num = v('rain').count();
num = v.chain('rain').count().value();

num = v.countGraphemes('cafe\u0301');
num = v.countSubstrings('bad boys, bad boys whatcha gonna do?', 'boys');
num = v.countWhere('hola!', v.isAlpha);
num = v.countWhere('2022', (character: string, index: number, str: string) => {
    return character === '2';
});
num = v.countWords('gravity can cross dimensions');

// Escape
str = v.escapeHtml();
str = v.escapeHtml('<p>wonderful world</p>');
str = v('<p>wonderful world</p>').escapeHtml().value();
str = v.chain('<p>wonderful world</p>').escapeHtml().value();

str = v.escapeRegExp();
str = v.escapeRegExp('(hours)[minutes]{seconds}');
str = v('(hours)[minutes]{seconds}').escapeRegExp().value();
str = v.chain('(hours)[minutes]{seconds}').escapeRegExp().value();

str = v.unescapeHtml();
str = v.unescapeHtml('&lt;p&gt;wonderful world&lt;/p&gt;');
str = v('&lt;p&gt;wonderful world&lt;/p&gt;').unescapeHtml().value();
str = v.chain('&lt;p&gt;wonderful world&lt;/p&gt;').unescapeHtml().value();

// Format
str = v.sprintf();
str = v.sprintf('%s, %s!', 'Hello', 'World');
str = v.sprintf('%s costs $%d', 'coffee', 2);
str = v.sprintf('%1$s %2$s %1$s %2$s, watcha gonna %3$s', 'bad', 'boys', 'do');
str = v.sprintf('% 6s', 'bird');
str = v.sprintf('%d %i %+d', 15, -2, 25);
str = v.sprintf("%06d", 15);
str = v.sprintf('%.2e %g', 100.5, 0.455);
str = v('%s, %s!').sprintf('Hello', 'World').value();
str = v.chain('%s, %s!').sprintf('Hello', 'World').value();

str = v.vprintf();
str = v.vprintf('%s', ['Welcome']);
str = v.vprintf('%s has %d apples', ['Alexandra', 3]);
str = v('%s').vprintf(['Welcome']).value();
str = v.chain('%s').vprintf(['Welcome']).value();

// Index
num = v.indexOf();
num = v.indexOf('morning');
num = v.indexOf('morning', 'n');
num = v('morning').indexOf('n');
num = v.chain('morning').indexOf('n').value();

num = v.lastIndexOf();
num = v.lastIndexOf('morning');
num = v.lastIndexOf('morning', 'n');
num = v('morning').lastIndexOf('n');
num = v.chain('morning').lastIndexOf('n').value();

num = v.search('morning', /rn/);
num = v.search('evening', '/\d/');

// Manipulate
str = v.insert();
str = v.insert('ct');
str = v.insert('ct', 'a');
str = v.insert('ct', 'a', 1);
str = v('ct').insert('a', 1).value();
str = v.chain('ct').insert('a', 1).value();

str = v.latinise();
str = v.latinise('cafe\u0301');

str = v.pad();
str = v.pad('dog');
str = v.pad('dog', 5);
str = v.pad('bird', 6, '-');

str = v.padLeft();
str = v.padLeft('dog');
str = v.padLeft('dog', 5);
str = v.padLeft('bird', 6, '-');

str = v.padRight();
str = v.padRight('dog');
str = v.padRight('dog', 5);
str = v.padRight('bird', 6, '-');

str = v.repeat();
str = v.repeat('w');
str = v.repeat('w', 3);

str = v.replace();
str = v.replace('swan', 'wa', 'u');
str = v.replace('domestic duck', /domestic\s/, '');
str = v.replace('nice duck', /(nice)(duck)/, (match: string, nice: string, duck: string) => {
    return `the ${duck} is ${nice}`;
});

str = v.replaceAll();
str = v.replaceAll('good morning', 'o', '*');
str = v.replaceAll('evening', /n/, 's');

str = v.reverse();
str = v.reverse('winter');

str = v.reverseGrapheme();
str = v.reverseGrapheme('summer');

str = v.slugify();
str = v.slugify('Italian cappuccino drink');

str = v.splice();
str = v.splice('new year');
str = v.splice('new year', 0);
str = v.splice('new year', 0, 4);
str = v.splice('new year', 0, 3, 'happy');

str = v.tr();
str = v.tr('hello', 'el', 'ip');
str = v.tr('Yes. The fire rises.', {
    Yes: 'Awesome',
    fire: 'flame'
});
str = v('hello').tr('el', 'ip').value();
str = v('Yes. The fire rises.').tr({
    Yes: 'Awesome',
    fire: 'flame'
}).value();
str = v.chain('hello').tr('el', 'ip').value();
str = v.chain('Yes. The fire rises.').tr({
    Yes: 'Awesome',
    fire: 'flame'
}).value();

str = v.trim();
str = v.trim(' Mother nature ');
str = v.trim('--Earth--', '-');

str = v.trimLeft();
str = v.trimLeft('  Starship Troopers');
str = v.trimLeft('***Mobile Infantry', '*');

str = v.trimRight();
str = v.trimRight('the fire rises   ');
str = v.trimRight('do you feel in charge?!!!', '!');

str = v.wordWrap();
str = v.wordWrap('Hello world');
str = v.wordWrap('Hello world', {
    width: 5
});
str = v.wordWrap('Hello world', {
    width: 5,
    newLine: '<br/>',
    indent: '__'
});
str = v.wordWrap('Wonderful world', {
    width: 5,
    cut: true
});

// Query
bool = v.endsWith();
bool = v.endsWith('red alert');
bool = v.endsWith('red alert', 'alert');
bool = v.endsWith('Murphy', 'ph', 5);
bool = v('Murphy').endsWith('ph', 5);
bool = v.chain('Murphy').endsWith('ph', 5).value();

bool = v.includes();
bool = v.includes('starship');
bool = v.includes('starship', 'star');
bool = v.includes('galaxy', 'g', 1);
bool = v('galaxy').includes('g', 1);
bool = v.chain('galaxy').includes('g', 1).value();

bool = v.isAlpha();
bool = v.isAlpha('bart');

bool = v.isAlphaDigit();
bool = v.isAlphaDigit('year2020');

bool = v.isBlank();
bool = v.isBlank('');

bool = v.isDigit();
bool = v.isDigit('35');

bool = v.isEmpty();
bool = v.isEmpty('');

bool = v.isLowerCase();
bool = v.isLowerCase('motorcycle');

bool = v.isNumeric();
bool = v.isNumeric('350');

bool = v.isString();
bool = v.isString('vacation');
bool = v.isString(560);
bool = v('vacation').isString();
bool = v(560).isString();
bool = v.chain('vacation').isString().value();
bool = v.chain(560).isString().value();

bool = v.isUpperCase();
bool = v.isUpperCase('ACDC');

bool = v.matches();
bool = v.matches('pluto');
bool = v.matches('pluto', /plu.{2}/);
bool = v.matches('sun', 'S', 'i');
bool = v.matches('apollo 11', '\\d{3}');

bool = v.startsWith();
bool = v.startsWith('say hello to my little friend');
bool = v.startsWith('say hello to my little friend', 'say hello');
bool = v.startsWith('tony', 'on', 1);
bool = v.startsWith('the world is yours', 'world');

// Split
strAry = v.chars();
strAry = v.chars('cloud');

numAry = v.codePoints();
numAry = v.codePoints('rain');

strAry = v.graphemes();
strAry = v.graphemes('\uD835\uDC00\uD835\uDC01');

strAry = v.split('rage against the dying of the light', ' ');
strAry = v.split('the dying of the light', /\s/, 3);

strAry = v.words();
strAry = v.words('gravity can cross dimensions');
strAry = v.words('Earth gravity', /[^\s]+/g);

// Strip
str = v.stripBom();
str = v.stripBom('\uFEFFsummertime sadness');

str = v.stripTags();
str = v.stripTags('<span><a href="#">Summer</a> is nice</span>');
str = v.stripTags('<span><i>Winter</i> is <b>cold</b></span>', ['b', 'i']);
str = v.stripTags('Sun<br/>set', '', '-');

// Util
const voca: v.VocaStatic = v.noConflict();
const version: string = v.version;
