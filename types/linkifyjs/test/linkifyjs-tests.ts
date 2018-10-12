'use strict';

import * as linkifyjs from "linkifyjs";
import { JSDOM } from 'jsdom';

const options: linkifyjs.Options = {
    defaultProtocol: 'https',
    events: {
        click() {},
        mouseover() {}
    },
    ignoreTags: [
        'script',
        'style'
    ],
};

// Functions
linkifyjs.test('Herp derp'); // $ExpectType boolean
linkifyjs.test('https://google.com/?q=yey'); // $ExpectType boolean
linkifyjs.test('https://google.com/?q=yey', 'url'); // $ExpectType boolean
linkifyjs.test('https://google.com/?q=yey', 'email'); // $ExpectType boolean

// Element
import linkifyElement from 'linkifyjs/element';
const dom = new JSDOM('<html><head><title>Linkify Test</title></head><body></body></html>');
const doc = dom.window.document;
const testContainer = doc.createElement('div');

linkifyElement(testContainer, undefined, doc); // $ExpectType HTMLElement
linkifyElement(testContainer, options, doc); // $ExpectType HTMLElement

// HTML
import linkifyHtml from 'linkifyjs/html';

linkifyHtml('Test with no links'); // $ExpectType string
linkifyHtml('The URL is google.com and the email is <strong>test@example.com</strong>'); // $ExpectType string
linkifyHtml('6. Link followed by nbsp escape sequence https://github.com&nbsp;'); // $ExpectType string

linkifyHtml('Test with no links', options); // $ExpectType string
linkifyHtml('The URL is google.com and the email is <strong>test@example.com</strong>', options); // $ExpectType string
linkifyHtml('6. Link followed by nbsp escape sequence https://github.com&nbsp;', options); // $ExpectType string

// String
import linkifyString from 'linkifyjs/string';

linkifyString('Test with no links'); // $ExpectType string
linkifyString('The URL is google.com and the email is <strong>test@example.com</strong>'); // $ExpectType string
linkifyString('6. Link followed by nbsp escape sequence https://github.com&nbsp;'); // $ExpectType string

linkifyString('Test with no links', options); // $ExpectType string
linkifyString('The URL is google.com and the email is <strong>test@example.com</strong>', options); // $ExpectType string
linkifyString('6. Link followed by nbsp escape sequence https://github.com&nbsp;', options); // $ExpectType string
