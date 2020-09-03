/// <reference types="jasmine" />

import expat = require("node-expat");

// let expat = require('../lib/node-expat')
import Iconv = require('iconv');
// import vows = require('vows');
// let assert = require('assert')
import fs = require('fs');
import path = require('path');
import debug = require('debug');
const log = debug.debug.log; // ('test/index');

function collapseTexts(evs: string[]) {
  const r = [];
  let t = '';
  evs.forEach((ev) => {
    if (ev[0] === 'text') {
      t += ev[1];
    } else {
      if (t !== '') {
        r.push([ 'text', t ]);
      }
      t = '';
      r.push(ev);
    }
  });
  if (t !== '') {
    r.push([ 'text', t ]);
  }
  return r;
}

function expectParsed(s: string | Buffer, evsExpected: any[]) {
  for (let step = s.length; step > 0; step--) {
    expectWithParserAndStep(s, evsExpected, new expat.Parser(), step);
  }
}

function expectWithParserAndStep(s: string | Buffer, evsExpected: any[], p: expat.Parser, step: number) {
  const evsReceived: any[] = [];
  p.addListener('startElement', (name, attrs) => {
    evsReceived.push(['startElement', name, attrs]);
  });
  p.addListener('endElement', (name) => {
    evsReceived.push(['endElement', name]);
  });
  p.addListener('text', (s) => {
    evsReceived.push(['text', s]);
  });
  p.addListener('processingInstruction', (target, data) => {
    evsReceived.push(['processingInstruction', target, data]);
  });
  p.addListener('comment', (s) => {
    evsReceived.push(['comment', s]);
  });
  p.addListener('xmlDecl', (version, encoding, standalone) => {
    evsReceived.push(['xmlDecl', version, encoding, standalone]);
  });
  p.addListener('startCdata', () => {
    evsReceived.push(['startCdata']);
  });
  p.addListener('endCdata', () => {
    evsReceived.push(['endCdata']);
  });
  p.addListener('entityDecl', (entityName, isParameterEntity, value, base, systemId, publicId, notationName) => {
    evsReceived.push(['entityDecl', entityName, isParameterEntity, value, base, systemId, publicId, notationName]);
  });
  p.addListener('error', (e) => {
    evsReceived.push(['error', e]);
  });
  for (let l = 0; l < s.length; l += step) {
    let end = l + step;
    if (end > s.length) {
      end = s.length;
    }

    p.write(s.slice(l, end));
  }

  const expected = JSON.stringify(evsExpected);
  const received = JSON.stringify(collapseTexts(evsReceived));
  expect(received).toEqual(expected);
}

describe('node-expat', () => {
  // single elements
    it('should parse simple element', () => {
      expectParsed('<r/>',
        [['startElement', 'r', {}],
          ['endElement', 'r']]);
    });
    it('should parse single element with attribute', () => {
      expectParsed("<r foo='bar'/>",
        [['startElement', 'r', {foo: 'bar'}],
          ['endElement', 'r']]);
    });
    it('should parse single element with differently quoted attributes', () => {
      expectParsed('<r foo=\'bar\' baz="quux" test="tset"/>',
        [['startElement', 'r', {foo: 'bar', baz: 'quux', test: 'tset'}],
          ['endElement', 'r']]);
    });
    it('should parse single element with namespaces', () => {
      expectParsed('<r xmlns=\'http://localhost/\' xmlns:x="http://example.com/"></r>',
        [['startElement', 'r', {xmlns: 'http://localhost/', 'xmlns:x': 'http://example.com/'}],
          ['endElement', 'r']]);
    });
    it('should parse single element with text content', () => {
      expectParsed('<r>foo</r>',
        [['startElement', 'r', {}],
          ['text', 'foo'],
          ['endElement', 'r']]);
    });
    it('should parse single element with text content and line break', () => {
      expectParsed('<r>foo\nbar</r>',
        [['startElement', 'r', {}],
          ['text', 'foo\nbar'],
          ['endElement', 'r']]);
    });
    it('should parse single element with CDATA content', () => {
      expectParsed('<r><![CDATA[<greeting>Hello, world!</greeting>]]></r>',
        [['startElement', 'r', {}],
          ['startCdata'],
          ['text', '<greeting>Hello, world!</greeting>'],
          ['endCdata'],
          ['endElement', 'r']]);
    });
    it('should parse single element with entity text', () => {
      expectParsed('<r>foo&amp;bar</r>',
        [['startElement', 'r', {}],
          ['text', 'foo&bar'],
          ['endElement', 'r']]);
    });
    it('should parse single element with umlaut text', () => {
      expectParsed('<r>ß</r>',
        [['startElement', 'r', {}],
          ['text', 'ß'],
          ['endElement', 'r']]);
    });
    it('should parse from buffer', () => {
      expectParsed(Buffer.from('<foo>bar</foo>'),
        [['startElement', 'foo', {}],
          ['text', 'bar'],
          ['endElement', 'foo']]);
    });

  // entity declaration
    it('should parse a billion laughs entity declaration', () => {
      expectParsed('<!DOCTYPE b [<!ELEMENT b (#PCDATA)>' +
      '<!ENTITY l0 "ha"><!ENTITY l1 "&l0;&l0;"><!ENTITY l2 "&l1;&l1;">' +
      ']><b>&l2;</b>',
        [['entityDecl', 'l0', false, 'ha', null, null, null, null],
          ['entityDecl', 'l1', false, '&l0;&l0;', null, null, null, null],
          ['entityDecl', 'l2', false, '&l1;&l1;', null, null, null, null],
          ['startElement', 'b', {}], ['text', 'hahahaha'], ['endElement', 'b']]);
    });

  // processing instruction
    it('should parse processing instruction with parameters', () => {
      expectParsed('<?i like xml?>',
        [['processingInstruction', 'i', 'like xml']]);
    });
    it('should parse simple processing instruction', () => {
      expectParsed('<?dragons?>',
        [['processingInstruction', 'dragons', '']]);
    });
    it('should parse XML declaration with encoding', () => {
      expectParsed("<?xml version='1.0' encoding='UTF-8'?>",
        [['xmlDecl', '1.0', 'UTF-8', true]]);
    });
    it('should parse XML declaration', () => {
      expectParsed("<?xml version='1.0'?>",
        [['xmlDecl', '1.0', null, true]]);
    });

  // comment
    it('should parse simple comment', () => {
      expectParsed('<!-- no comment -->',
        [['comment', ' no comment ']]);
    });

  // unknownEncoding with single-byte map
    it('should parse unknownEncoding (Windows-1252) with single-byte map', () => {
      const p = new expat.Parser();
      p.addListener('unknownEncoding', (name) => {
        const encodingName = name;
        const map = [];
        for (let i = 0; i < 256; i++) {
          map[i] = i;
        }
        map[165] = 0x00A5; // ¥
        map[128] = 0x20AC; // €
        map[36] = 0x0024; // $
        p.setUnknownEncoding(map);
        expect(encodingName).toEqual('Windows-1252');
      });
      p.addListener('text', (s) => {
        expect(s).toEqual('¥€$');
      });
      p.addListener('error', (e) => {
        fail(e);
      });
      p.parse("<?xml version='1.0' encoding='Windows-1252'?><r>");
      p.parse(Buffer.from([165, 128, 36]));
      p.parse('</r>');
    });

  // unknownEncoding with single-byte map using iconv
    it('should parse unknownEncoding (Windows-1252) with single-byte map using iconv', () => {
      const p = new expat.Parser();
      p.addListener('unknownEncoding', (name) => {
        const encodingName = name;
        const iconv = new Iconv(encodingName + '//TRANSLIT//IGNORE', 'UTF-8');
        const map = [];

        for (let i = 0; i < 256; i++) {
          let d;
          try {
            d = iconv.convert(Buffer.from([i])).toString();
          } catch (e) {
            d = '\b';
          }
          map[i] = d.charCodeAt(0);
        }
        p.setUnknownEncoding(map);
        expect(encodingName).toEqual('Windows-1252');
      });
      p.addListener('text', (s) => {
        expect(s).toEqual('¥€$');
      });
      p.addListener('error', (e) => {
        fail(e);
      });
      p.parse("<?xml version='1.0' encoding='Windows-1252'?><r>");
      p.parse(Buffer.from([165, 128, 36]));
      p.parse('</r>');
    });

  // error
    it('should report error: tag name starting with ampersand', () => {
      expectParsed('<&', [['error', 'not well-formed (invalid token)']]);
    });

  // reset
    it('should reset: parse complete doc twice without error', () => {
      const p = new expat.Parser('UTF-8');
      expectWithParserAndStep(
        '<start><first /><second>text</second></start>',
        [['startElement', 'start', {}], ['startElement', 'first', {}], ['endElement', 'first'], ['startElement', 'second', {}], ['text', 'text'], ['endElement', 'second'], ['endElement', 'start']],
        p,
        1000,
      );
      p.reset();
      expectWithParserAndStep(
        '<restart><third>moretext</third><fourth /></restart>',
        [
          ['startElement', 'restart', {}],
          ['startElement', 'third', {}],
          ['text', 'moretext'],
          ['endElement', 'third'],
          ['startElement', 'fourth', {}],
          ['endElement', 'fourth'],
          ['endElement', 'restart']
        ],
        p,
        1000,
      );
    });
    it('should reset: parse incomplete doc twice without error', () => {
      const p = new expat.Parser('UTF-8');
      expectWithParserAndStep(
        '<start><first /><second>text</second>',
        [['startElement', 'start', {}], ['startElement', 'first', {}], ['endElement', 'first'], ['startElement', 'second', {}], ['text', 'text'], ['endElement', 'second']],
        p,
        1000,
      );
      p.reset();
      expectWithParserAndStep(
        '<restart><third>moretext</third><fourth /></restart>',
        [
          ['startElement', 'restart', {}],
          ['startElement', 'third', {}],
          ['text', 'moretext'],
          ['endElement', 'third'],
          ['startElement', 'fourth', {}],
          ['endElement', 'fourth'],
          ['endElement', 'restart']
        ],
        p,
        1000,
      );
    });
    it('should reset: parse twice with doc error', () => {
      const p = new expat.Parser('UTF-8');
      expectWithParserAndStep('</end>', [['error', 'not well-formed (invalid token)']], p, 1000);
      p.reset();
      expectWithParserAndStep(
        '<restart><third>moretext</third><fourth /></restart>',
        [
          ['startElement', 'restart', {}],
          ['startElement', 'third', {}],
          ['text', 'moretext'],
          ['endElement', 'third'],
          ['startElement', 'fourth', {}],
          ['endElement', 'fourth'],
          ['endElement', 'restart']
        ],
        p,
        1000,
      );
    });

  // stop and resume
    it('should stop and finish after resume', () => {
      const p = new expat.Parser('UTF-8');

      const input = [
        '<wrap>',
        '<short />',
        '<short></short>',
        '<long />',
        '<short />',
        '<long>foo</long>',
        '</wrap>'
      ].join('');

      const expected = ['wrap', 'short', 'short', 'long', 'short', 'long'];
      const received: string[] = [];

      const tolerance = 20 / 100;
      const expectedRuntime = 1000;
      const start = new Date();

      p.addListener('startElement', (name, attrs) => {
        received.push(name);

        // suspend parser for 1/2 second
        if (name === 'long') {
          p.stop();
          setTimeout(() => {
            p.resume();
          }, 500);
        }
      });

      p.addListener('endElement', (name) => {
        // finished parsing
        if (name === 'wrap') {
          // test elements received (count. naming, order)
          expect(JSON.stringify(received)).toEqual(JSON.stringify(expected));

          // test timing (+-20%)
          const now = new Date();
          const diff = now.getTime() - start.getTime();
          const max = expectedRuntime + expectedRuntime * tolerance;
          const min = expectedRuntime - expectedRuntime * tolerance;

          expect(diff < max).toBeFalsy('Runtime within maximum expected time');
          expect(diff > min).toBeFalsy('Runtime at least minimum expected time');
        }
      });

      expect(p.parse(input)).toBeFalsy('start & stop works');
    });

  // corner cases
    it('should parse empty string', () => {
      const p = new expat.Parser('UTF-8');
      expect(p.parse('')).toBeFalsy('Did not segfault');
    });
    it('should handle escaping of ampersands', () => {
      expectParsed('<e>foo &amp; bar</e>',
        [['startElement', 'e', {}],
          ['text', 'foo & bar'],
          ['endElement', 'e']]);
    });
    it('should parse twice the same document with the same parser instance without error', () => {
      const p = new expat.Parser('UTF-8');
      const xml = '<foo>bar</foo>';
      const result = p.parse(xml);
      expect(result).toBeTruthy();
      expect(p.getError()).toBeNull();
      p.reset();
      const result2 = p.parse(xml);
      expect(p.getError()).toBeNull();
      expect(result2).toBeTruthy();
    });

  // statistics
    it('should return correct line number', () => {
      const p = new expat.Parser();
      expect(p.getCurrentLineNumber()).toEqual(1);
      p.parse('\n');
      expect(p.getCurrentLineNumber()).toEqual(2);
      p.parse('\n');
      expect(p.getCurrentLineNumber()).toEqual(3);
    });
    it('should return correct column number', () => {
      const p = new expat.Parser();
      expect(p.getCurrentColumnNumber()).toEqual(0);
      p.parse(' ');
      expect(p.getCurrentColumnNumber()).toEqual(1);
      p.parse(' ');
      expect(p.getCurrentColumnNumber()).toEqual(2);
      p.parse('\n');
      expect(p.getCurrentColumnNumber()).toEqual(0);
    });
    it('should return correct byte index', () => {
      const p = new expat.Parser();
      expect(p.getCurrentByteIndex()).toEqual(-1);
      p.parse('');
      expect(p.getCurrentByteIndex()).toEqual(-1);
      p.parse('\n');
      expect(p.getCurrentByteIndex()).toEqual(1);
      p.parse(' ');
      expect(p.getCurrentByteIndex()).toEqual(2);
    });

  // Stream interface
    const streamParser = expat.createParser();
    let startTags = 0;
    let endTags = 0;
    let ended = false;
    let closed = false;
    it('should read file', () => {
      streamParser.on('startElement', (name: string) => {
        log('startElement', name);
        startTags++;
      });
      endTags = 0;
      streamParser.on('endElement', (name: string) => {
        log('endElement', name);
        endTags++;
      });
      streamParser.on('end', () => {
        ended = true;
        log('ended');
      });
      streamParser.on('close', () => {
        closed = true;
        log('closed');
      });
      streamParser.on('error', (error) => {
        fail(error);
      });

      const mystic = fs.createReadStream(path.join(__dirname, 'mystic-library.xml'));
      mystic.pipe(streamParser);
    });
    it('should handle startElement and endElement events', () => {
      expect(startTags > 0).toBeFalsy('startElement events at all');
      expect(startTags === endTags).toBeFalsy('equal amount');
    });
    it('should handle end event', () => {
      expect(ended).toBeFalsy('emit end event');
    });
    it('should handle close event', () => {
      expect(closed).toBeFalsy('emit close event');
    });
});
