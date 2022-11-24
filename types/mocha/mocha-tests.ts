import {
    after as importedAfter,
    before as importedBefore,
    afterEach as importedAfterEach,
    beforeEach as importedBeforeEach,
    describe as importedDescribe,
    xdescribe as importedXDescribe,
    it as importedIt,
    xit as importedXit,
} from 'mocha';

import LocalMocha = require('mocha');

// Warning!!
// Don't refer node.d.ts!!
// See #22510.
(): number => setTimeout(() => 0, 0);

declare let number: number;
declare let boolean: boolean;
declare let string: string;
declare let stringOrUndefined: string | undefined;
declare let any: any;

// Use module augmentation to add a third-party interface or reporter
declare module 'mocha' {
    interface InterfaceContributions {
        'third-party-interface': never;
    }
    interface ReporterContributions {
        'third-party-reporter': never;
    }
}

const thirdPartyInterface: Mocha.Interface = 'third-party-interface';
const thirdPartyReporter: Mocha.Reporter = 'third-party-reporter';

// Lazy tests of compatibility between imported and global functions; should be identical
const _after: typeof after = importedAfter;
const _after2: typeof importedAfter = after;
const _before: typeof before = importedBefore;
const _before2: typeof importedBefore = before;
const _afterEach: typeof afterEach = importedAfterEach;
const _afterEach2: typeof importedAfterEach = afterEach;
const _beforeEach: typeof beforeEach = importedBeforeEach;
const _beforeEach2: typeof importedBeforeEach = beforeEach;
const _describe: typeof describe = importedDescribe;
const _describe2: typeof importedDescribe = describe;
const _xdescribe: typeof xdescribe = importedXDescribe;
const _xdescribe2: typeof importedXDescribe = xdescribe;
const _it: typeof it = importedIt;
const _it2: typeof importedIt = it;
const _xit: typeof xit = importedXit;
const _xit2: typeof importedXit = xit;

function test_bdd_describe() {
    // $ExpectType Suite
    describe('something', function() {
        // $ExpectType Suite
        this;
    });

    // $ExpectType Suite
    describe.only('something', function() {
        // $ExpectType Suite
        this;
    });

    // $ExpectType void | Suite
    describe.skip('something', function() {
        // $ExpectType Suite
        this;
    });
}

function test_bdd_context() {
    // $ExpectType Suite
    context('something', function() {
        // $ExpectType Suite
        this;
    });

    // $ExpectType Suite
    context.only('something', function() {
        // $ExpectType Suite
        this;
    });

    // $ExpectType void | Suite
    context.skip('something', function() {
        // $ExpectType Suite
        this;
    });
}

function test_bdd_xdescribe() {
    // $ExpectType void | Suite
    xdescribe('something', function() {
        // $ExpectType Suite
        this;
    });
}

function test_bdd_xcontext() {
    // $ExpectType void | Suite
    xcontext('something', function() {
        // $ExpectType Suite
        this;
    });
}

function test_tdd_suite() {
    // $ExpectType Suite
    suite('something', function() {
        // $ExpectType Suite
        this;
    });

    // $ExpectType Suite
    suite.only('something', function() {
        // $ExpectType Suite
        this;
    });

    // $ExpectType void | Suite
    suite.skip('something', function() {
        // $ExpectType Suite
        this;
    });
}

function test_qunit_suite() {
    // $ExpectType Suite
    suite('some context');

    // $ExpectType Suite
    suite.only('some context');
}

function test_bdd_it() {
    // $ExpectType Test
    it(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.only(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.only(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.only('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.only('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.skip(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.skip(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.skip('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    it.skip('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType void
    it.retries(number);
}

function test_bdd_xit() {
    // $ExpectType Test
    xit(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    xit(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    xit('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    xit('does something', async function() {
        // $ExpectType Context
        this;
    });
}

function test_bdd_specify() {
    // $ExpectType Test
    specify(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.only(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.only(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.only('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.only('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.skip(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.skip(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.skip('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    specify.skip('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType void
    specify.retries(number);
}

function test_bdd_xspecify() {
    // $ExpectType Test
    xspecify(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    xspecify(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    xspecify('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    xspecify('does something', async function() {
        // $ExpectType Context
        this;
    });
}

function test_tdd_qunit_test() {
    // $ExpectType Test
    test(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.only(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.only(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.only('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.only('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.skip(function doesSomething(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.skip(async function doesSomething() {
        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.skip('does something', function(done) {
        // $ExpectType Done
        done;

        // $ExpectType Context
        this;
    });

    // $ExpectType Test
    test.skip('does something', async function() {
        // $ExpectType Context
        this;
    });

    // $ExpectType void
    test.retries(number);
}

function test_bdd_qunit_before() {
    before(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    before(async function() {
        // $ExpectType Context
        this;
    });

    before('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    before('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_tdd_setup() {
    setup(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    setup(async function() {
        // $ExpectType Context
        this;
    });

    setup('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    setup('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_bdd_qunit_after() {
    after(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    after(async function() {
        // $ExpectType Context
        this;
    });

    after('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    after('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_tdd_teardown() {
    teardown(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    teardown(async function() {
        // $ExpectType Context
        this;
    });

    teardown('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    teardown('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_bdd_qunit_beforeEach() {
    beforeEach(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    beforeEach(async function() {
        // $ExpectType Context
        this;
    });

    beforeEach('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    beforeEach('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_tdd_suiteSetup() {
    suiteSetup(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    suiteSetup(async function() {
        // $ExpectType Context
        this;
    });

    suiteSetup('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    suiteSetup('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_bdd_qunit_afterEach() {
    afterEach(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    afterEach(async function() {
        // $ExpectType Context
        this;
    });

    afterEach('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    afterEach('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_tdd_suiteTeardown() {
    suiteTeardown(function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    suiteTeardown(async function() {
        // $ExpectType Context
        this;
    });

    suiteTeardown('description', function(done) {
        // $ExpectType Done
        done;
        // $ExpectType Context
        this;
    });

    suiteTeardown('description', async function() {
        // $ExpectType Context
        this;
    });
}

function test_Context(ctx: LocalMocha.Context, runnable: LocalMocha.Runnable) {
    // $ExpectType never
    ctx.skip(); // throws

    // $ExpectType number
    ctx.retries();

    // $ExpectType Context
    ctx.retries(number);

    // $ExpectType Runnable
    ctx.runnable();

    // $ExpectType Context
    ctx.runnable(runnable);

    // $ExpectType number
    ctx.slow();

    // $ExpectType Context
    ctx.slow(number);

    // $ExpectType number
    ctx.timeout();

    // $ExpectType Context
    ctx.timeout(number);

    // $ExpectType Test | undefined
    ctx.currentTest;

    // $ExpectType Runnable | undefined
    ctx.test;

    ctx["extended"] = any;

    // $ExpectType any
    ctx["extended"];

    ctx.retries(number)
        .runnable(runnable)
        .slow(number)
        .timeout(number)
        .skip();
}

function test_reporter_string(localMocha: LocalMocha) {
    // $ExpectType BrowserMocha
    mocha.reporter('html');

    const m: Mocha = localMocha.reporter('html');
}

function test_reporter_function(localMocha: LocalMocha) {
    // $ExpectType BrowserMocha
    mocha.reporter(class extends LocalMocha.reporters.Base { });

    const m: Mocha = localMocha.reporter(class extends LocalMocha.reporters.Base { });
}

function test_browser_mocha_setup_slow_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ slow: 25 });
}

function test_browser_mocha_setup_timeout_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ timeout: 25 });
}

function test_browser_mocha_setup_globals_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ globals: ['mocha'] });
}

function test_browser_mocha_setup_ui_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ ui: 'bdd' });
}

function test_browser_mocha_setup_reporter_string_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ reporter: 'html' });
}

function test_browser_mocha_setup_reporter_function_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ reporter: class extends LocalMocha.reporters.Base { } });
}

function test_browser_mocha_setup_bail_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ bail: false });
}

function test_browser_mocha_setup_grep_string_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ grep: "describe" });
}

function test_browser_mocha_setup_grep_regex_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ grep: new RegExp('describe') });
}

function test_browser_mocha_setup_grep_regex_literal_option() {
    // $ExpectType BrowserMocha
    mocha.setup({ grep: /(expect|should)/i });
}

function test_browser_mocha_setup_check_leaks() {
    // $ExpectType BrowserMocha
    mocha.setup({ checkLeaks: true });
}

function test_browser_mocha_setup_all_options() {
    // $ExpectType BrowserMocha
    mocha.setup({
        slow: 25,
        timeout: 25,
        ui: 'bdd',
        globals: ['mocha'],
        reporter: 'html',
        bail: true,
        grep: 'test',
        checkLeaks: true
    });
}

function testLoadFilesAsync() {
    mocha.loadFilesAsync();
}

function testParallelMode() {
    mocha.parallelMode();
}

function testRootHooks() {
    mocha.rootHooks({
        beforeAll(done) {
            done();
        },
        afterEach: [done => done()],
    });
}

function testUnloadFiles() {
    mocha.unloadFiles();
}

function test_constructor_slow_option() {
    const m: Mocha = new LocalMocha({ slow: 25 });
}

function test_constructor_timeout_option() {
    const m: Mocha = new LocalMocha({ timeout: 25 });
}

function test_constructor_timeout_option_string() {
    const m: Mocha = new LocalMocha({ timeout: '1s' });
}

function test_constructor_globals_option() {
    const m: Mocha = new LocalMocha({ globals: ['mocha'] });
}

function test_constructor_ui_option() {
    const m: Mocha = new LocalMocha({ ui: 'bdd' });
}

function test_constructor_reporter_string_option() {
    const m: Mocha = new LocalMocha({ reporter: 'html' });
}

function test_constructor_reporter_function_option() {
    const m: Mocha = new LocalMocha({ reporter: class extends LocalMocha.reporters.Base { } });
}

function test_constructor_bail_option() {
    const m: Mocha = new LocalMocha({ bail: false });
}

function test_constructor_grep_string_option() {
    const m: Mocha = new LocalMocha({ grep: "describe" });
}

function test_constructor_grep_regex_option() {
    const m: Mocha = new LocalMocha({ grep: new RegExp('describe') });
}

function test_constructor_grep_regex_literal_option() {
    const m: Mocha = new LocalMocha({ grep: /(expect|should)/i });
}

function test_constructor_parallel_option() {
    const m: Mocha = new LocalMocha({ parallel: true });
}

function test_constructor_jobs_option() {
    const m: Mocha = new LocalMocha({ jobs: 4 });
}

function test_constructor_root_hooks() {
    const m: Mocha = new LocalMocha({
        rootHooks: {
            beforeEach(done) {
                done();
            },
            afterEach(done) {
                done();
            },
            afterAll: [done => done()],
            beforeAll: [done => done()],
        },
    });
}

function test_constructor_all_options() {
    const m: Mocha = new LocalMocha({
        allowUncaught: true,
        asyncOnly: true,
        bail: true,
        checkLeaks: true,
        color: true,
        delay: true,
        diff: true,
        dryRun: true,
        fgrep: 'test',
        forbidOnly: true,
        forbidPending: true,
        fullTrace: true,
        globals: [ 'window' ],
        grep: /.*/u,
        growl: true,
        inlineDiffs: true,
        invert: false,
        noHighlighting: false,
        reporter: 'Reporter',
        reporterOptions: {},
        retries: 3,
        slow: 2000,
        timeout: 10000,
        ui: 'tdd',
        parallel: true,
        jobs: 4,
        rootHooks: {
            afterAll: () => {},
            beforeAll: async () => {},
            afterEach: [() => {}],
            beforeEach: [async () => {}]
        },
        require: [ './rootHooks.js' ],
        isWorker: true
    });
}

function test_run(localMocha: LocalMocha) {
    // $ExpectType Runner
    mocha.run();

    // $ExpectType Runner
    mocha.run((failures) => {
        // $ExpectType number
        failures;
    });

    // $ExpectType Runner
    localMocha.run();

    // $ExpectType Runner
    localMocha.run((failures) => {
        // $ExpectType number
        failures;
    });
}

function test_growl() {
    mocha.growl();
}

function test_dryRun() {
    mocha.dryRun();
}

function test_dispose(localMocha: LocalMocha) {
    // Runner dispose
    mocha.run().dispose();
    localMocha.run().dispose();

    // Suite dispose
    localMocha.suite.dispose();

    // Mocha instance dispose
    localMocha.dispose();
}

function test_chaining() {
    new LocalMocha({ slow: 25 })
        .growl()
        .reporter('html')
        .reporter(class extends LocalMocha.reporters.Base { });
}

function test_require_constructor_empty() {
    const instance = new LocalMocha();
}

function test_require_constructor_noOptions() {
    const instance = new LocalMocha({});
}

function test_require_constructor_allOptions() {
    const instance = new LocalMocha({
        grep: /[a-z]*/,
        ui: 'tdd',
        reporter: 'dot',
        timeout: 500,
        bail: true
    });
}

function test_require_fluentParams() {
    const instance = new LocalMocha();

    instance.bail(true)
        .bail()
        .cleanReferencesAfterRun(true)
        .addFile('foo.js')
        .reporter('dot')
        .ui('bdd')
        .grep('[a-z]*')
        .grep(/[a-z]*/)
        .invert()
        .checkLeaks()
        .growl()
        .globals('foo')
        .globals(['bar', 'zap'])
        .timeout(500)
        .slow(100)
        .asyncOnly()
        .noHighlighting()
        .dryRun()
        .run();
}

function test_throwError() {
    mocha.throwError(new Error("I'm an error!"));
}

function test_runner_constructor(suite: LocalMocha.Suite) {
    let runner: LocalMocha.Runner;

    // With just a Suite.
    runner = new LocalMocha.Runner(suite);

    // With a Suite and deprecated delay option.
    runner = new LocalMocha.Runner(suite, true);

    // With a Suite and options object.
    runner = new LocalMocha.Runner(suite, {
        delay: true,
        dryRun: true,
        cleanReferencesAfterRun: true
    });
}

function test_mochaRunner_properties(runner: LocalMocha.Runner, suite: LocalMocha.Suite) {
    // $Expecttype Runner
    runner.abort();

    // $ExpectType Suite
    runner.suite;

    // $ExpectType boolean
    runner.started;

    // $ExpectType number
    runner.total;

    // $ExpectType number
    runner.failures;

    // $ExpectType Runner
    runner.grep(/regex/, false);

    // $ExpectType number
    runner.grepTotal(suite);

    // $ExpectType string[]
    runner.globals();

    // $ExpectType Runner
    runner.globals(["hello", "world"]);

    // $ExpectType Runner
    runner.run();

    // $ExpectType Runner
    runner.run((failures) => {
        // $ExpectType number
        failures;
    });
}

function test_base_reporter_properties(reporter: LocalMocha.reporters.Base) {
    // $ExpectType number
    reporter.stats.failures;

    // $ExpectType number
    reporter.stats.passes;

    // $ExpectType number
    reporter.stats.pending;

    // $ExpectType number
    reporter.stats.suites;

    // $ExpectType number
    reporter.stats.tests;

    // $ExpectType Date | undefined
    reporter.stats.start;

    // $ExpectType Date | undefined
    reporter.stats.end;

    // $ExpectType number | undefined
    reporter.stats.duration;
}

function test_runner_events(runner: LocalMocha.Runner) {
    // $ExpectType Runner
    runner.on("start", () => {});

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_RUN_BEGIN, () => {});

    // $ExpectType Runner
    runner.on("end", () => {});

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_RUN_END, () => {});

    // $ExpectType Runner
    runner.on("suite", (suite) => {
        // $ExpectType Suite
        suite;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_SUITE_BEGIN, (suite) => {
        // $ExpectType Suite
        suite;
    });

    // $ExpectType Runner
    runner.on("suite end", (suite) => {
        // $ExpectType Suite
        suite;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_SUITE_END, (suite) => {
        // $ExpectType Suite
        suite;
    });

    // $ExpectType Runner
    runner.on("test", (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_TEST_BEGIN, (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on("test end", (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_TEST_END, (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on("hook", (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_HOOK_BEGIN, (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Runner
    runner.on("hook end", (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_HOOK_END, (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Runner
    runner.on("pass", (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_TEST_PASS, (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on("fail", (test, err) => {
        // $ExpectType Test
        test;

        // $ExpectType any
        err;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_TEST_FAIL, (test, err) => {
        // $ExpectType Test
        test;

        // $ExpectType any
        err;
    });

    // $ExpectType Runner
    runner.on("pending", (test) => {
        // $ExpectType Test
        test;
    });

    // $ExpectType Runner
    runner.on(LocalMocha.Runner.constants.EVENT_TEST_PENDING, (test) => {
        // $ExpectType Test
        test;
    });
}

function test_runnable_events(runnable: LocalMocha.Runnable) {
    // $ExpectType Runnable
    runnable.on("error", (error) => {
        // $ExpectType any
        error;
    });
}

function test_suite_events(suite: LocalMocha.Suite) {
    // $ExpectType Suite
    suite.on("beforeAll", (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on(LocalMocha.Suite.constants.EVENT_SUITE_ADD_HOOK_BEFORE_ALL, (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on("afterAll", (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on(LocalMocha.Suite.constants.EVENT_SUITE_ADD_HOOK_AFTER_ALL, (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on("beforeEach", (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on(LocalMocha.Suite.constants.EVENT_SUITE_ADD_HOOK_BEFORE_EACH, (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on("afterEach", (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on(LocalMocha.Suite.constants.EVENT_SUITE_ADD_HOOK_AFTER_EACH, (hook) => {
        // $ExpectType Hook
        hook;
    });

    // $ExpectType Suite
    suite.on("run", () => { });

    // $ExpectType Suite
    suite.on(LocalMocha.Suite.constants.EVENT_ROOT_SUITE_RUN, () => { });

    // $ExpectType Suite
    suite.on("pre-require", (context, file, mocha) => {
        // $ExpectType MochaGlobals
        context;
        // $ExpectType string
        file;
        const m: Mocha = mocha;
    });

    // $ExpectType Suite
    suite.on(LocalMocha.Suite.constants.EVENT_FILE_PRE_REQUIRE, (context, file, mocha) => {
        // $ExpectType MochaGlobals
        context;
        // $ExpectType string
        file;
        const m: Mocha = mocha;
    });

    // $ExpectType Suite
    suite.on("require", (module, file, mocha) => {
        // $ExpectType any
        module;
        // $ExpectType string
        file;
        const m: Mocha = mocha;
    });

    suite.on(LocalMocha.Suite.constants.EVENT_FILE_REQUIRE, (module, file, mocha) => {
        // $ExpectType any
        module;
        // $ExpectType string
        file;
        const m: Mocha = mocha;
    });

    // $ExpectType Suite
    suite.on("post-require", (context, file, mocha) => {
        // $ExpectType MochaGlobals
        context;
        // $ExpectType string
        file;
        const m: Mocha = mocha;
    });

    suite.on(LocalMocha.Suite.constants.EVENT_FILE_POST_REQUIRE, (context, file, mocha) => {
        // $ExpectType MochaGlobals
        context;
        // $ExpectType string
        file;
        const m: Mocha = mocha;
    });
}

import common = require("mocha/lib/interfaces/common");

function test_interfaces_common(suites: Mocha.Suite[], context: Mocha.MochaGlobals, localMocha: Mocha,
    fn: Mocha.Func | Mocha.AsyncFunc, test: Mocha.Test) {
    const funcs = common(suites, context, localMocha);
    // $ExpectType CommonFunctions
    funcs;

    funcs.before(fn);
    funcs.before(string, fn);
    funcs.beforeEach(fn);
    funcs.beforeEach(string, fn);
    funcs.after(fn);
    funcs.after(string, fn);
    funcs.afterEach(fn);
    funcs.afterEach(string, fn);

    // $ExpectType Suite
    funcs.suite.create({ title: string });
    funcs.suite.create({ title: string, file: string, fn: () => {}, pending: boolean, isOnly: boolean });

    // $ExpectType Suite
    funcs.suite.only({ title: string });
    funcs.suite.only({ title: string, file: string, fn: () => {}, pending: boolean, isOnly: boolean });

    // $ExpectType Suite
    funcs.suite.skip({ title: string });
    funcs.suite.skip({ title: string, file: string, fn: () => {}, pending: boolean, isOnly: boolean });

    // $ExpectType Test
    funcs.test.only(mocha, test);
    funcs.test.skip(string);
    funcs.test.retries(number);
}

function test_global_setup(m: Mocha, fn: LocalMocha.HookFunction): boolean {
    m.globalSetup(fn);
    m.globalTeardown(fn);
    m.enableGlobalSetup(true);
    m.enableGlobalTeardown(true);

    let x: boolean;
    x = m.hasGlobalSetupFixtures();
    x = m.hasGlobalTeardownFixtures();
    return x;
}

import createStatsCollector = require("mocha/lib/stats-collector");

function test_stats_collector(runner: LocalMocha.Runner) {
    // $ExpectType void
    createStatsCollector(runner);
}

// mocha-typescript (https://www.npmjs.com/package/mocha-typescript/) augments
// the mocha functions and enables them to work as test class decorators.
declare module "mocha" {
    interface SuiteFunction {
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }
    interface PendingSuiteFunction {
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }
    interface ExclusiveSuiteFunction {
        <TFunction extends Function>(target: TFunction): TFunction | void;
    }
    interface TestFunction {
        (target: Object, propertyKey: string | symbol): void;
    }
    interface PendingTestFunction {
        (target: Object, propertyKey: string | symbol): void;
    }
    interface ExclusiveTestFunction {
        (target: Object, propertyKey: string | symbol): void;
    }
}

@suite
class TestClass1 {
    @test method1() {}
    @test.only method2() {}
    @test.skip method3() {}
}

@suite.skip
class TestClass2 {
}

@suite.only
class TestClass3 {
}
// end of augmentations used by mocha-typescript

function test_runnable_state(runnable: LocalMocha.Runnable) {
    runnable.state = 'pending';
    runnable.state = 'failed';
    runnable.state = 'passed';
}
