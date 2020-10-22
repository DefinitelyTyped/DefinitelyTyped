import Readability = require('mozilla-readability');

declare class JSDOM {
    constructor(html?: string);

    readonly window: Window;
}

// Compiling requires `--noImplicitUseStrict`
// because issue https://github.com/mozilla/readability/issues/346
// requires global variable `Node` when using nodejs.

function test_basic_usage() {
    const dom = new JSDOM(`<p>Hello</p><p><strong>Hi!</strong>`);

    const reader = new Readability(dom.window.document);
    const article = reader.parse();
}

function test_readability_with_options() {
    const dom = new JSDOM(`<p>Hello</p><p><strong>Hi!</strong>`);

    const options: Readability.Options = {
        debug: true,
        maxElemsToParse: 100,
    };
    const article = new Readability(dom.window.document, options).parse();
}
