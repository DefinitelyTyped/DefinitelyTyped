import v = require('voca');

let str: string;
let num: number;
let bool: boolean;
let strAry: string[];

// Case
str = v('bird flight').camelCase().value();
str = v.chain('bird flight').camelCase().value();

str = v('apple').capitalize().value();
str = v('apple').capitalize(true).value();
str = v.chain('apple').capitalize(true).value();

str = v('learning to fly').swapCase().value();
str = v.chain('learning to fly').swapCase().value();

// Chain
strAry = v('Back to School').lowerCase().words();
str = v(' Back to School ').trim().truncate(7).value();

strAry = v.chain('Back to School').lowerCase().words().value();

strAry = v('Back to School').chain().lowerCase().words().value();
str = v(' Back to School ').chain().trim().truncate(7).value();

str = v
    .chain('sun is shining')
    .words()
    .thru((words: string[]) => words[0])
    .value();

str = v.chain('Hello world').replace('Hello', 'Hi').lowerCase().slugify().value();
str = v(' Space travel ').trim().truncate(8).value();

// Chop
str = v('helicopter').charAt(0).value();
str = v.chain('helicopter').charAt(0).value();

// Count
num = v('rain').count();
num = v.chain('rain').count().value();

// Escape
str = v('<p>wonderful world</p>').escapeHtml().value();
str = v.chain('<p>wonderful world</p>').escapeHtml().value();

str = v('(hours)[minutes]{seconds}').escapeRegExp().value();
str = v.chain('(hours)[minutes]{seconds}').escapeRegExp().value();

str = v('&lt;p&gt;wonderful world&lt;/p&gt;').unescapeHtml().value();
str = v.chain('&lt;p&gt;wonderful world&lt;/p&gt;').unescapeHtml().value();

// Format
str = v('%s, %s!').sprintf('Hello', 'World').value();
str = v.chain('%s, %s!').sprintf('Hello', 'World').value();

str = v('%s').vprintf(['Welcome']).value();
str = v.chain('%s').vprintf(['Welcome']).value();

// Index
num = v('morning').indexOf('n');
num = v.chain('morning').indexOf('n').value();

num = v('morning').lastIndexOf('n');
num = v.chain('morning').lastIndexOf('n').value();

// Manipulate
str = v('ct').insert('a', 1).value();
str = v.chain('ct').insert('a', 1).value();

str = v('hello').tr('el', 'ip').value();
str = v('Yes. The fire rises.')
    .tr({
        Yes: 'Awesome',
        fire: 'flame',
    })
    .value();
str = v.chain('hello').tr('el', 'ip').value();
str = v
    .chain('Yes. The fire rises.')
    .tr({
        Yes: 'Awesome',
        fire: 'flame',
    })
    .value();

// Query
bool = v('Murphy').endsWith('ph', 5);
bool = v.chain('Murphy').endsWith('ph', 5).value();

bool = v('galaxy').includes('g', 1);
bool = v.chain('galaxy').includes('g', 1).value();

bool = v('vacation').isString();
bool = v(560).isString();
bool = v.chain('vacation').isString().value();
bool = v.chain(560).isString().value();
