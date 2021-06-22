import {
    CacheStream,
    camelCaseKeys,
    escapeDiacritic,
    escapeHTML,
    escapeRegExp,
    hash,
    HashStream,
    highlight,
    htmlTag,
    Pattern,
    Permalink,
    slugize,
    spawn,
    truncate,
    wordWrap
} from 'hexo-util';

import { expect } from 'chai';

import { Readable } from 'stream';
import { createHash } from 'crypto';
import { join } from 'path';

let buffer = Buffer.alloc(0);
let directory: { [x: string]: any; } = {};
let string = '';

const cacheStream = new CacheStream();
const hashStream = new HashStream();
const readable = new Readable();

readable.pipe(cacheStream);

buffer = cacheStream.getCache();
cacheStream.destroy();

directory = camelCaseKeys({ foo_bar: 'test' });
directory = camelCaseKeys({ foo_bar: 'test' });
directory = camelCaseKeys({ _foo_bar: 'test', __bar_baz: 'foo' });
directory = camelCaseKeys({ fooBar: 'test' });

escapeDiacritic('Hell\u00F2 w\u00F2rld') === 'Hello world';
escapeHTML('<p>Hello "world".</p>') === '&lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;';
escapeRegExp('hello*world') === 'hello\\*world';

const sha1 = (content: string) => {
    const hash = createHash('sha1');
    hash.update(content);

    return hash.digest();
};

string = '123456';
hash(string).equals(sha1(string));

sha1(string).equals(hashStream.read());

const testString = JSON.stringify({
    foo: 1,
    bar: 2
}, null, '  ');

string = highlight(testString);
string = highlight(testString, { gutter: false });
string = highlight(testString, { wrap: false });
string = highlight(testString, { firstLine: 3 });
string = highlight(testString, { lang: 'json' });
string = highlight(testString, { autoDetect: true });
string = highlight('test', { lang: 'jrowiejrowi' });
string = highlight(testString, { caption: 'hello world' });

string = highlight([
    'function fib(i){',
    '\tif (i <= 1) return i;',
    '\treturn fib(i - 1) + fib(i - 2);',
    '}'
].join('\n'), { tab: '  ', lang: 'js' });

string = highlight([
    'const string = `',
    '  Multi',
    '  line',
    '  string',
    '`'
].join('\n'), { lang: 'js' });

string = highlight([
    'const string = `',
    '  Multi',
    '',
    '  string',
    '`'
].join('\n'), { lang: 'js' });

string = highlight([
    '"use strict";',
    'const string = `',
    '  Multi',
    '',
    '  string',
    '`'
].join('\n'), { autoDetect: true });

string = highlight([
    'roses are red',
    'violets are blue',
    'sugar is sweet',
    'and so are you'
].join('\n'), { mark: [1, 3, 5] });

string.includes('class="line marked">roses');
string.includes('class="line">violets');
string.includes('class="line marked">sugar');
string.includes('class="line">and');

const gutterStart = '<td class="gutter"><pre>';
const codeStart = '<td class="code"><pre>';

string = highlight([
    'a => {',
    '    if (a > 3)',
    '        return true;',
    '    return false;',
    '}'
].join('\n'), { hljs: true, lang: 'javascript' });

string.includes(gutterStart);
string.includes(codeStart);
string.includes('code class="hljs javascript"');
string.includes('class="hljs-function"');

string = highlight([
    'a => {',
    '    if (a > 3)',
    '        return true;',
    '    return false;',
    '}'
].join('\n'), { hljs: true, gutter: false, lang: 'javascript' });

!string.includes(gutterStart);
!string.includes(codeStart);
string.includes('code class="hljs javascript"');
string.includes('class="hljs-function"');

string = htmlTag('hr');
string = htmlTag('img', { src: 'http://placekitten.com/200/300' });
string = htmlTag('img', {
    src: 'http://placekitten.com/200/300',
    width: 200,
    height: 300
});
string = htmlTag('a', { href: 'http://zespia.tw' }, 'My blog');

{
    const pattern = new Pattern('posts/:id');
    const result = pattern.match('/posts/89');

    result![0] === 'posts/89';
    result![1] === '89';
    result!.id === '89';
}

{
    const pattern = new Pattern('posts/*path');
    const result = pattern.match('posts/2013/hello-world');

    result![0] === 'posts/2013/hello-world';
    result![1] === '2013/hello-world';
    result!.path === '2013/hello-world';
}

{
    const pattern = new Pattern('posts/:id?');
    const result = pattern.match('posts/');

    result![0] === 'posts/';
    result![1] === undefined;
    result!.id === undefined;
}

{
    const pattern = new Pattern('posts/:id?');
    const result = pattern.match('posts/89');

    result![0] === 'posts/89';
    result![1] === '89';
    result!.id === '89';
}

{
    const pattern = new Pattern(/ab?cd/);

    pattern.match('abcd')!.length !== 0;
    pattern.match('acd')!.length !== 0;
}

{
    const pattern = new Pattern(str => {
        str === 'foo';
        return {};
    });

    pattern.match('foo').should.eql({});
}

let permalink = new Permalink(':year/:month/:day/:title');

permalink.rule === ':year/:month/:day/:title';
permalink.regex === /^(.+?)\/(.+?)\/(.+?)\/(.+?)$/;
permalink.params.should.eql(['year', 'month', 'day', 'title']);

permalink = new Permalink(':year/:month/:day/:title', {
    segments: {
        year: /(\d{4})/,
        month: /(\d{2})/,
        day: /(\d{2})/
    }
});

permalink.rule === ':year/:month/:day/:title';
permalink.regex === /^(\d{4})\/(\d{2})\/(\d{2})\/(.+?)$/;
permalink.params.should.eql(['year', 'month', 'day', 'title']);
permalink.test('2014/01/31/test');
!permalink.test('foweirojwoier');

expect(permalink.parse('2014/01/31/test')).eql({
    year: '2014',
    month: '01',
    day: '31',
    title: 'test'
});

permalink.stringify({
    year: '2014',
    month: '01',
    day: '31',
    title: 'test'
}) === '2014/01/31/test';

slugize('Hello World') === 'Hello-World';
slugize('Hell\u00F2 w\u00F2rld') === 'Hello-world';
slugize('Hello  World') === 'Hello-World';
slugize('~Hello World~') === 'Hello-World';
slugize('Hello ~`!@#$%^&*()-_+=[]{}|\\;:"\'<>,.?/World') === 'Hello-World';
slugize('Hello World', { separator: '_' }) === 'Hello_World';
slugize('Hello World', { transform: 1 }) === 'hello-world';
slugize('Hello World', { transform: 2 }) === 'HELLO-WORLD';
slugize('遊戲') === '遊戲';

async () => {
    const fixturePath = join(__dirname, 'spawn_test.txt');

    string = await spawn('cat', [fixturePath]);

    try {
        await spawn('cat', ['nothing']);
    } catch (err) {
        err.message.trim() === 'cat: nothing: No such file or directory';
        err.code === 1;
    }

    string = await spawn('cat', [fixturePath], { encoding: 'hex' });
    buffer = await spawn('cat', [fixturePath], { encoding: null });

    await spawn('echo', ['something'], { stdio: 'inherit' });
};

string = truncate('Once upon a time in a world far far away');
string = truncate('Once upon');
string = truncate('Once upon a time in a world far far away', { length: 17 });
string = truncate('Once upon a time in a world far far away', { length: 17, separator: ' ' });
string = truncate('And they found that many people were sleeping better.', { length: 25, omission: '... (continued)' });

string = wordWrap('Once upon a time');
string = wordWrap('Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding a successor to the throne turned out to be more trouble than anyone could have imagined...');
string = wordWrap('Once upon a time', { width: 8 });
string = wordWrap('Once upon a time', { width: 1 });
