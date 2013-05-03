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

function test_after() {
    after(() => { });

    after((done) => { done(); });
}

function test_beforeEach() {
    beforeEach(() => { });

    beforeEach((done) => { done(); });
}

function test_afterEach() {
    afterEach(() => { });

    afterEach((done) => { done(); });
}