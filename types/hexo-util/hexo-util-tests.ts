import 'mocha';
import 'chai';

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
    hexoSpawnOptions,
    truncate,
    wordWrap
} from './';

import { Readable } from 'stream';
import * as crypto from 'crypto';
import * as pathFn from 'path';
import * as fs from 'fs';

import * as hljs from 'highlight.js';
import { XmlEntities as Entities } from 'html-entities';
const entities = new Entities();
const validator = require('html-tag-validator');
import rewire = require('rewire');
import { SpawnOptions } from 'child_process';

describe('CacheStream', () => {
    it('default', () => {
        const src = new Readable();
        const cacheStream = new CacheStream();
        const content = Buffer.from('test');

        src.push(content);
        src.push(null);
        src.pipe(cacheStream);

        cacheStream.on('finish', () => {
            cacheStream.getCache().should.eql(content);
        });
    });

    it('destroy', () => {
        const cacheStream = new CacheStream();
        cacheStream.destroy();
        cacheStream.getCache().should.have.length(0);
    });
});

describe('camelCaseKeys', () => {

    it('default', () => {
        const result = camelCaseKeys({
            foo_bar: 'test'
        });

        result.should.eql({
            foo_bar: 'test',
            fooBar: 'test'
        });
    });

    it('setter', () => {
        const result = camelCaseKeys({
            foo_bar: 'test'
        });

        result.foo_bar = 'new';
        result.fooBar.should.eql('new');
    });

    it('ignore prefixing underscore', () => {
        const result = camelCaseKeys({
            _foo_bar: 'test',
            __bar_baz: 'foo'
        });

        result.should.eql({
            _fooBar: 'test',
            _foo_bar: 'test',
            __barBaz: 'foo',
            __bar_baz: 'foo'
        });
    });

    it('do nothing if the key is camelCase', () => {
        const result = camelCaseKeys({
            fooBar: 'test'
        });

        result.should.eql({
            fooBar: 'test'
        });
    });
});

escapeDiacritic('Hell\u00F2 w\u00F2rld').should.eql('Hello world');
escapeHTML('<p>Hello "world".</p>').should.eql('&lt;p&gt;Hello &quot;world&quot;.&lt;&#x2F;p&gt;');
escapeRegExp('hello*world').should.eql('hello\\*world');

describe('hash', () => {
    function sha1(content: string) {
        const hash = crypto.createHash('sha1');
        hash.update(content);

        return hash.digest();
    }

    it('hash', () => {
        const content = '123456';
        hash(content).should.eql(sha1(content));
    });

    it('HashStream', () => {
        const content = '123456';
        const stream = new HashStream();

        stream.write(Buffer.from(content));
        stream.end();

        stream.read().should.eql(sha1(content));
    });
});

describe('highlight', () => {
    const testString = JSON.stringify({
        foo: 1,
        bar: 2
    }, null, '  ');

    const start = '<figure class="highlight plain"><table><tr>';
    const end = '</tr></table></figure>';

    const gutterStart = '<td class="gutter"><pre>';
    const gutterEnd = '</pre></td>';

    const codeStart = '<td class="code"><pre>';
    const codeEnd = '</pre></td>';

    function gutter(start: number, end: number) {
        let result = gutterStart;

        for (let i = start; i <= end; i++) {
            result += '<span class="line">' + i + '</span><br>';
        }

        result += gutterEnd;

        return result;
    }

    function code(str: string, lang?: string | null) {
        let data;

        if (lang) {
            data = hljs.highlight(lang.toLowerCase(), str);
        } else if (lang === null) {
            data = { value: str };
        } else {
            data = { value: entities.encode(str) };
        }

        const lines = data.value.split('\n');

        const result = lines.reduce((prev, line) => {
            return `${prev}<span class="line">${line}</span><br>`;
        }, codeStart) + codeEnd;

        return result;
    }

    function assertResult(result: string, ...args: string[]) {
        let expected = start;

        for (let i = 1, len = args.length; i < len; i++) {
            expected += args[i];
        }

        expected += end;

        result.should.eql(expected);
    }

    function validateHtmlAsync(str: string, done: Function) {
        validator(str, (err: any) => {
            if (err) {
                done(err);
            } else {
                done();
            }
        });
    }

    it('default', done => {
        const result = highlight(testString);
        assertResult(result, gutter(1, 4), code(testString));
        validateHtmlAsync(result, done);
    });

    it('gutter: false', done => {
        const result = highlight(testString, { gutter: false });
        assertResult(result, code(testString));
        validateHtmlAsync(result, done);
    });

    it('wrap: false', done => {
        const result = highlight(testString, { wrap: false });
        result.should.eql(entities.encode(testString));
        validateHtmlAsync(result, done);
    });

    it('firstLine', done => {
        const result = highlight(testString, { firstLine: 3 });
        assertResult(result, gutter(3, 6), code(testString));
        validateHtmlAsync(result, done);
    });

    it('lang = json', done => {
        const result = highlight(testString, { lang: 'json' });

        result.should.eql([
            '<figure class="highlight json"><table><tr>',
            gutter(1, 4),
            code(testString, 'json'),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('auto detect', done => {
        const result = highlight(testString, { autoDetect: true });

        result.should.eql([
            '<figure class="highlight json"><table><tr>',
            gutter(1, 4),
            code(testString, 'json'),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('don\'t highlight if language not found', done => {
        const result = highlight('test', { lang: 'jrowiejrowi' });
        assertResult(result, gutter(1, 1), code('test'));
        validateHtmlAsync(result, done);
    });

    it('don\'t highlight if parse failed');

    it('caption', done => {
        const result = highlight(testString, {
            caption: 'hello world'
        });

        result.should.eql([
            '<figure class="highlight plain"><figcaption>hello world</figcaption><table><tr>',
            gutter(1, 4),
            code(testString),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('tab', done => {
        const str = [
            'function fib(i){',
            '\tif (i <= 1) return i;',
            '\treturn fib(i - 1) + fib(i - 2);',
            '}'
        ].join('\n');

        const result = highlight(str, { tab: '  ', lang: 'js' });

        result.should.eql([
            '<figure class="highlight js"><table><tr>',
            gutter(1, 4),
            code(str.replace(/\t/g, '  '), 'js'),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('escape html entity', done => {
        const str = [
            'deploy:',
            '  type: git',
            '  repo: <repository url>',
            '  branch: [branch]',
            '  message: [message]'
        ].join('\n');

        const result = highlight(str);
        result.should.include('&lt;repository url&gt;');
        validateHtmlAsync(result, done);
    });

    it('parse multi-line strings correctly', done => {
        const str = [
            'const string = `',
            '  Multi',
            '  line',
            '  string',
            '`'
        ].join('\n');

        const result = highlight(str, { lang: 'js' });
        result.should.eql([
            '<figure class="highlight js"><table><tr>',
            gutter(1, 5),
            code('<span class="keyword">var</span> string = <span class="string">`</span>\n<span class="string">  Multi</span>\n<span class="string">  line</span>\n<span class="string">  string</span>\n<span class="string">`</span>', null),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('parse multi-line strings including empty line', done => {
        const str = [
            'const string = `',
            '  Multi',
            '',
            '  string',
            '`'
        ].join('\n');

        const result = highlight(str, { lang: 'js' });
        result.should.eql([
            '<figure class="highlight js"><table><tr>',
            gutter(1, 5),
            code('<span class="keyword">var</span> string = <span class="string">`</span>\n<span class="string">  Multi</span>\n<span class="string"></span>\n<span class="string">  string</span>\n<span class="string">`</span>', null),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('auto detect of multi-line statement', done => {
        const str = [
            '"use strict";',
            'const string = `',
            '  Multi',
            '',
            '  string',
            '`'
        ].join('\n');

        const result = highlight(str, { autoDetect: true });
        result.should.eql([
            '<figure class="highlight javascript"><table><tr>',
            gutter(1, 6),
            code('<span class="meta">"use strict"</span>;\n<span class="keyword">var</span> string = <span class="string">`</span>\n<span class="string">  Multi</span>\n<span class="string"></span>\n<span class="string">  string</span>\n<span class="string">`</span>', null),
            end
        ].join(''));
        validateHtmlAsync(result, done);
    });

    it('gives the highlight class to marked lines', done => {
        const str = [
            'roses are red',
            'violets are blue',
            'sugar is sweet',
            'and so are you'
        ].join('\n');

        const result = highlight(str, { mark: [1, 3, 5] });

        result.should.include('class="line marked">roses');
        result.should.include('class="line">violets');
        result.should.include('class="line marked">sugar');
        result.should.include('class="line">and');
        validateHtmlAsync(result, done);
    });

    it('hljs compatibility - with lines', done => {
        const str = [
            'a => {',
            '    if (a > 3)',
            '        return true;',
            '    return false;',
            '}'
        ].join('\n');
        const result = highlight(str, { hljs: true, lang: 'javascript' });
        result.should.include(gutterStart);
        result.should.include(codeStart);
        result.should.include('code class="hljs javascript"');
        result.should.include('class="hljs-function"');
        result.should.include(gutter(1, 5));
        validateHtmlAsync(result, done);
    });

    it('hljs compatibility - no lines', done => {
        const str = [
            'a => {',
            '    if (a > 3)',
            '        return true;',
            '    return false;',
            '}'
        ].join('\n');
        const result = highlight(str, { hljs: true, gutter: false, lang: 'javascript' });
        result.should.not.include(gutterStart);
        result.should.not.include(codeStart);
        result.should.include('code class="hljs javascript"');
        result.should.include('class="hljs-function"');
        validateHtmlAsync(result, done);
    });
});

describe('htmlTag', () => {
    it('tag', () => {
        htmlTag('hr').should.eql('<hr>');
    });

    it('tag + attrs', () => {
        htmlTag('img', {
            src: 'http://placekitten.com/200/300'
        }).should.eql('<img src="http://placekitten.com/200/300">');

        htmlTag('img', {
            src: 'http://placekitten.com/200/300',
            width: 200,
            height: 300
        }).should.eql('<img src="http://placekitten.com/200/300" width="200" height="300">');
    });

    it('tag + attrs + text', () => {
        htmlTag('a', {
            href: 'http://zespia.tw'
        }, 'My blog').should.eql('<a href="http://zespia.tw">My blog</a>');
    });
});

describe('Pattern', () => {
    it('String - posts/:id', () => {
        const pattern = new Pattern('posts/:id');
        const result = pattern.match('/posts/89');

        result.should.eql({
            0: 'posts/89',
            1: '89',
            id: '89'
        });
    });

    it('String - posts/*path', () => {
        const pattern = new Pattern('posts/*path');
        const result = pattern.match('posts/2013/hello-world');

        result.should.eql({
            0: 'posts/2013/hello-world',
            1: '2013/hello-world',
            path: '2013/hello-world'
        });
    });

    it('String - posts/:id?', () => {
        const pattern = new Pattern('posts/:id?');

        pattern.match('posts/').should.eql({
            0: 'posts/',
            1: undefined,
            id: undefined
        });

        pattern.match('posts/89').should.eql({
            0: 'posts/89',
            1: '89',
            id: '89'
        });
    });

    it('RegExp', () => {
        const pattern = new Pattern(/ab?cd/);

        pattern.match('abcd').should.be.ok;
        pattern.match('acd').should.be.ok;
    });

    it('Function', () => {
        const pattern = new Pattern(str => {
            str.should.eql('foo');
            return {};
        });

        pattern.match('foo').should.eql({});
    });
});

describe('Permalink', () => {
    let permalink: Permalink;

    it('constructor', () => {
        permalink = new Permalink(':year/:month/:day/:title');

        permalink.rule.should.eql(':year/:month/:day/:title');
        permalink.regex.should.eql(/^(.+?)\/(.+?)\/(.+?)\/(.+?)$/);
        permalink.params.should.eql(['year', 'month', 'day', 'title']);

        permalink = new Permalink(':year/:month/:day/:title', {
            segments: {
                year: /(\d{4})/,
                month: /(\d{2})/,
                day: /(\d{2})/
            }
        });

        permalink.rule.should.eql(':year/:month/:day/:title');
        permalink.regex.should.eql(/^(\d{4})\/(\d{2})\/(\d{2})\/(.+?)$/);
        permalink.params.should.eql(['year', 'month', 'day', 'title']);
    });

    it('test()', () => {
        permalink.test('2014/01/31/test').should.be.true;
        permalink.test('foweirojwoier').should.be.false;
    });

    it('parse()', () => {
        permalink.parse('2014/01/31/test').should.eql({
            year: '2014',
            month: '01',
            day: '31',
            title: 'test'
        });
    });

    it('stringify()', () => {
        permalink.stringify({
            year: '2014',
            month: '01',
            day: '31',
            title: 'test'
        }).should.eql('2014/01/31/test');
    });
});

describe('slugize', () => {
    it('spaces', () => {
        slugize('Hello World').should.eql('Hello-World');
    });

    it('diacritic', () => {
        slugize('Hell\u00F2 w\u00F2rld').should.eql('Hello-world');
    });

    it('continous dashes', () => {
        slugize('Hello  World').should.eql('Hello-World');
    });

    it('prefixing and trailing dashes', () => {
        slugize('~Hello World~').should.eql('Hello-World');
    });

    it('other special characters', () => {
        slugize('Hello ~`!@#$%^&*()-_+=[]{}|\\;:"\'<>,.?/World').should.eql('Hello-World');
    });

    it('custom separator', () => {
        slugize('Hello World', { separator: '_' }).should.eql('Hello_World');
    });

    it('lower case', () => {
        slugize('Hello World', { transform: 1 }).should.eql('hello-world');
    });

    it('upper case', () => {
        slugize('Hello World', { transform: 2 }).should.eql('HELLO-WORLD');
    });

    it('non-english', () => {
        slugize('遊戲').should.eql('遊戲');
    });
});

describe('spawn', () => {
    const fixturePath = pathFn.join(__dirname, 'spawn_test.txt');
    const fixture = 'test content';

    before((done) => {
        fs.writeFile(fixturePath, fixture, done);
    });

    after((done) => {
        fs.unlink(fixturePath, done);
    });

    it('default', () => {
        return spawn('cat', [fixturePath]).then(content => {
            content.should.eql(fixture);
        });
    });

    it('error', () => {
        return spawn('cat', ['nothing']).catch((err) => {
            err.message.trim().should.eql('cat: nothing: No such file or directory');
            err.code.should.eql(1);
        });
    });

    it('verbose - stdout', () => {
        const spawn = rewire<(command: string, args: string[], options?: hexoSpawnOptions) => Promise<string>>('../../lib/spawn');
        const stdoutCache = new CacheStream();
        const stderrCache = new CacheStream();
        const content = 'something';

        spawn.__set__('process', {
            stdout: stdoutCache,
            stderr: stderrCache
        });

        return spawn('echo', [content], {
            verbose: true
        }).then(() => {
            stdoutCache.getCache().toString('utf8').trim().should.eql(content);
        });
    });

    it('verbose - stderr', () => {
        const spawn = rewire<(command: string, args: string[], options?: hexoSpawnOptions) => Promise<string>>('../../lib/spawn');
        const stdoutCache = new CacheStream();
        const stderrCache = new CacheStream();

        spawn.__set__('process', {
            stdout: stdoutCache,
            stderr: stderrCache
        });

        return spawn('cat', ['nothing'], {
            verbose: true
        }).catch(() => {
            stderrCache.getCache().toString('utf8').trim().should
                .eql('cat: nothing: No such file or directory');
        });
    });

    it('custom encoding', () => {
        return spawn('cat', [fixturePath], { encoding: 'hex' }).then(content => {
            content.should.eql(Buffer.from(fixture).toString('hex'));
        });
    });

    it('encoding = null', () => {
        return spawn('cat', [fixturePath], { encoding: null }).then(content => {
            content.should.eql(Buffer.from(fixture));
        });
    });

    it('stdio = inherit', () => {
        return spawn('echo', ['something'], {
            stdio: 'inherit'
        });
    });
});

describe('truncate', () => {
    it('default', () => {
        truncate('Once upon a time in a world far far away')
            .should.eql('Once upon a time in a world...');
    });

    it('shorter string', () => {
        truncate('Once upon')
            .should.eql('Once upon');
    });

    it('truncate', () => {
        truncate('Once upon a time in a world far far away', { length: 17 })
            .should.eql('Once upon a ti...');
    });

    it('separator', () => {
        truncate('Once upon a time in a world far far away', { length: 17, separator: ' ' })
            .should.eql('Once upon a...');
    });

    it('omission', () => {
        truncate('And they found that many people were sleeping better.', { length: 25, omission: '... (continued)' })
            .should.eql('And they f... (continued)');
    });
});

describe('wordWrap', () => {

    it('default', () => {
      wordWrap('Once upon a time').should.eql('Once upon a time');
    });

    it('default width', () => {
      wordWrap('Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding a successor to the throne turned out to be more trouble than anyone could have imagined...')
        .should.eql('Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding\na successor to the throne turned out to be more trouble than anyone could have\nimagined...');
    });

    it('width = 8', () => {
      wordWrap('Once upon a time', {width: 8}).should.eql('Once\nupon a\ntime');
    });

    it('width = 1', () => {
      wordWrap('Once upon a time', {width: 1}).should.eql('Once\nupon\na\ntime');
    });
  });
