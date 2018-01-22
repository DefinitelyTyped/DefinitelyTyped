import * as Readability from 'mozilla-readability';
import { JSDOM } from 'jsdom';

// Compiling requires `--noImplicitUseStrict`
// because issue https://github.com/mozilla/readability/issues/346
// requires global variable `Node` when using nodejs.

const fakeUri: Readability.Uri = {
    spec: "http://fakehost/test/page.html",
    host: "fakehost",
    prePath: "http://fakehost",
    scheme: "http",
    pathBase: "http://fakehost/test/"
};

function test_basic_usage() {
    const dom = new JSDOM(`<p>Hello</p><p><strong>Hi!</strong>`);
    // Required until https://github.com/mozilla/readability/issues/346
    // is fixed.
    Node = dom.window.Node;

    const reader = new Readability(fakeUri, dom.window.document);
    const article = reader.parse();
}

function test_readability_with_options() {
    const dom = new JSDOM(`<p>Hello</p><p><strong>Hi!</strong>`);
    // Required until https://github.com/mozilla/readability/issues/346
    // is fixed.
    Node = dom.window.Node;

    const options: Readability.Options = {
        debug: true,
        maxElemsToParse: 100,
    };
    const article = new Readability(fakeUri, dom.window.document, options).parse();
}

function test_is_probably_readerable() {
    const dom = new JSDOM(`<p>Hello</p><p><strong>Hi!</strong>`);
    // Required until https://github.com/mozilla/readability/issues/346
    // is fixed.
    Node = dom.window.Node;

    const isReadable = new Readability(fakeUri, dom.window.document).isProbablyReaderable();
}
