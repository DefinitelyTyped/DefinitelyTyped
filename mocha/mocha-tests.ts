/// <reference path="mocha.d.ts" />

function test_describe() {
    describe('something', () => { });

    describe.only('something', () => { });

    describe.skip('something', () => { });

    describe('something', function() {
        this.timeout(2000);
    });
}

function test_it() {

    it('does something', () => { });

    it('does something', (done) => { done(); });

    it.only('does something', () => { });

    it.skip('does something', () => { });

    it('does something', function () {
        this.timeout(2000);
    });
}

function test_before() {
    before(() => { });

    before((done) => { done(); });
}

function test_setup() {
    setup(() => { });

    setup((done) => { done(); });
}

function test_after() {
    after(() => { });

    after((done) => { done(); });
}

function test_teardown() {
    teardown(() => { });

    teardown((done) => { done(); });
}

function test_beforeEach() {
    beforeEach(() => { });

    beforeEach((done) => { done(); });
}

function test_suiteSetup() {
    suiteSetup(() => { });

    suiteSetup((done) => { done(); });
}

function test_afterEach() {
    afterEach(() => { });

    afterEach((done) => { done(); });
}

function test_suiteTeardown() {
    suiteTeardown(() => { });

    suiteTeardown((done) => { done(); });
}

function test_reporter_string(){
    mocha.reporter('html');
}

function test_reporter_function(){
    mocha.reporter(function(){});
}

function test_setup_slow_option(){
    mocha.setup({slow: 25});
}

function test_setup_timeout_option(){
    mocha.setup({timeout: 25});
}

function test_setup_globals_option(){
    mocha.setup({globals: ['mocha']});
}

function test_setup_ui_option(){
    mocha.setup({ui: 'bdd'});
}

function test_setup_reporter_string_option(){
    mocha.setup({reporter: 'html'});
}

function test_setup_reporter_function_option(){
    mocha.setup({reporter: function(){}});
}

function test_setup_bail_option(){
    mocha.setup({bail: false});
}

function test_setup_ignore_leaks_option(){
    mocha.setup({ignoreLeaks: false});
}

function test_setup_grep_string_option(){
    mocha.setup({grep: "describe"});
}

function test_setup_grep_regex_option(){
    mocha.setup({grep: new RegExp('describe')});
}

function test_setup_grep_regex_literal_option(){
    mocha.setup({grep: /(expect|should)/i });
}

function test_setup_all_options(){
    mocha.setup({
        slow: 25,
        timeout: 25,
        ui: 'bdd',
        globals: ['mocha'],
        reporter: 'html',
        bail: true,
        ignoreLeaks: true,
        grep: 'test'
    });
}

function test_run(){
    mocha.run(function(){})
}

function test_growl(){
    mocha.growl();
}

function test_chaining(){
    mocha
        .setup({slow:25})
        .growl()
        .reporter('html')
        .reporter(function(){});
}
