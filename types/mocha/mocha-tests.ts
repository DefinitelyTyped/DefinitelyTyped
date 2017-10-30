let boolean: boolean;
let string: string;

function test_describe() {
    describe('something', () => { });

    describe.only('something', () => { });

    describe.skip('something', () => { });

    describe('something', function () {
        this.retries(3).slow(1000).timeout(2000).retries(3);
    });
}

function test_context() {
    context('some context', () => { });

    context.only('some context', () => { });

    context.skip('some context', () => { });

    context('some context', function () {
        this.retries(3).slow(1000).timeout(2000).retries(3);
    });
}

function test_suite() {
    suite('some context', () => { });

    suite.only('some context', () => { });

    suite.skip('some context', () => { });

    suite('some context', function () {
        this.retries(3).slow(1000).timeout(2000).retries(3);
    });
}

function test_it() {

    it('does something', () => { });

    it('does something', function () { this['sharedState'] = true; });

    it('does something', (done) => { done(); });

    it.only('does something', () => { });

    it.skip('does something', () => { });

    it('does something', function () {
        this.skip().retries(3).slow(1000).timeout(2000).skip();
    });
}

function test_test() {

    test('does something', () => { });

    test('does something', function () { this['sharedState'] = true; });

    test('does something', (done) => { done(); });

    test.only('does something', () => { });

    test.skip('does something', () => { });

    test('does something', function () {
        this.skip().retries(3).slow(1000).timeout(2000).skip();
    });
}

function test_specify() {

    specify('does something', () => { });

    specify('does something', function () { this['sharedState'] = true; });

    specify('does something', (done) => { done(); });

    specify.only('does something', () => { });

    specify.skip('does something', () => { });

    specify('does something', function () {
        this.skip().retries(3).slow(1000).timeout(2000).skip();
    });
}

function test_before() {
    before(() => { });

    before(function () { this['sharedState'] = true; });

    before((done) => { done(); });

    before("my description", () => { });

    before("my description", done => { });

    before("my description", function () {
        this.skip().timeout(2000).skip();
    });
}

function test_setup() {
    setup(function () {
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    setup(function () {
        this['sharedState'] = true;
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    setup(function (done) {
        done();
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });
}

function test_after() {
    after(() => { });

    after(function () { this['sharedState'] = true; });

    after((done) => { done(); });

    after("my description", () => { });

    after("my description", done => { });
}

function test_teardown() {
    teardown(function () {
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    teardown(function () {
        this['sharedState'] = true;
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    teardown(function (done) {
        done();
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });
}

function test_beforeEach() {
    beforeEach(function () {
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    beforeEach(function () {
        this['sharedState'] = true;
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    beforeEach(function (done) {
        done();
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    beforeEach("my description", function () {
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    beforeEach("my description", function (done) {
        done();
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });
}

function test_suiteSetup() {
    suiteSetup(() => { });

    suiteSetup(function () { this['sharedState'] = true; });

    suiteSetup((done) => { done(); });
}

function test_afterEach() {
    afterEach(function () {
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    afterEach(function () {
        this['sharedState'] = true;
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    afterEach(function (done) {
        done();
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    afterEach("my description", function () {
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

    afterEach("my description", function (done) {
        done();
        boolean = this.currentTest.async;
        boolean = this.currentTest.pending;
        boolean = this.currentTest.sync;
        boolean = this.currentTest.timedOut;
        string = this.currentTest.title;
        string = this.currentTest.fullTitle();
        string = this.currentTest.state;
    });

}

function test_suiteTeardown() {
    suiteTeardown(() => { });

    suiteTeardown(function () { this['sharedState'] = true; });

    suiteTeardown((done) => { done(); });
}

function test_reporter_string() {
    mocha.reporter('html');
}

function test_reporter_function() {
    mocha.reporter(class { });
}

function test_setup_slow_option() {
    mocha.setup({ slow: 25 });
}

function test_setup_timeout_option() {
    mocha.setup({ timeout: 25 });
}

function test_setup_globals_option() {
    mocha.setup({ globals: ['mocha'] });
}

function test_setup_ui_option() {
    mocha.setup({ ui: 'bdd' });
}

function test_setup_reporter_string_option() {
    mocha.setup({ reporter: 'html' });
}

function test_setup_require_stringArray_option() {
    mocha.setup({ require: ['ts-node/register'] });
}

function test_setup_reporter_function_option() {
    mocha.setup({ reporter: class { } });
}

function test_setup_bail_option() {
    mocha.setup({ bail: false });
}

function test_setup_ignore_leaks_option() {
    mocha.setup({ ignoreLeaks: false });
}

function test_setup_grep_string_option() {
    mocha.setup({ grep: "describe" });
}

function test_setup_grep_regex_option() {
    mocha.setup({ grep: new RegExp('describe') });
}

function test_setup_grep_regex_literal_option() {
    mocha.setup({ grep: /(expect|should)/i });
}

function test_setup_all_options() {
    mocha.setup({
        slow: 25,
        timeout: 25,
        ui: 'bdd',
        globals: ['mocha'],
        reporter: 'html',
        bail: true,
        ignoreLeaks: true,
        grep: 'test',
        require: ['ts-node/register']
    });
}

function test_run() {
    mocha.run(function () { })
}

function test_growl() {
    mocha.growl();
}

function test_chaining() {
    mocha
        .setup({ slow: 25 })
        .growl()
        .reporter('html')
        .reporter(class { });
}

import MochaDef = require('mocha');

function test_require_constructor_empty() {
    var instance = new MochaDef();
}

function test_require_constructor_noOptions() {
    var instance = new MochaDef({});
}

function test_require_constructor_allOptions() {
    var instance = new MochaDef({
        grep: /[a-z]*/,
        ui: 'tdd',
        reporter: 'dot',
        timeout: 500,
        bail: true
    });
}


function test_require_fluentParams() {
    var instance = new MochaDef();

    instance.bail(true)
        .bail()
        .addFile('foo.js')
        .reporter('bdd')
        .ui('dot')
        .grep('[a-z]*')
        .grep(/[a-z]*/)
        .invert()
        .ignoreLeaks(true)
        .checkLeaks()
        .growl()
        .globals('foo')
        .globals(['bar', 'zap'])
        .useColors(true)
        .useInlineDiffs(true)
        .timeout(500)
        .slow(100)
        .enableTimeouts(true)
        .asyncOnly(false)
        .noHighlighting(true)
        .run();
}

function test_run_withOnComplete() {
    var instance = new MochaDef();

    instance.run((failures: number): void => {
        console.log(failures);
    });
}

function test_throwError() {
    mocha.throwError(new Error("I'm an error!"));
}
