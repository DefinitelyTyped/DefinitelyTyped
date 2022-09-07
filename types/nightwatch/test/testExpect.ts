import { NightwatchAPI } from "nightwatch";
import { NightwatchExpectResult } from "nightwatch/expect";

function isNightwatchAPI(v: NightwatchAPI) {}
function isNightwatchExpectResult(result: NightwatchExpectResult) {}
function isNull(v: null) {}
function isPromise(v: PromiseLike<any>) {}

// Expect test for language chains
it('expect.equal(value)/.contain(value)/.match(regex)', () => {
    browser.expect.element('#main').text.to.equal('The Night Watch');
    browser.expect.element('#main').text.to.contain('The Night Watch');
    browser.expect.element('#main').to.have.css('display').which.equals('block');
});

it('expect.startWith(value)/.endWith(value)', () => {
    browser.expect.element('#main').text.to.endWith('Watch');
    browser.expect.element('#main').text.to.startWith('The');
});

it('expect.not', () => {
    browser.expect.element('#main').text.to.not.equal('The Night Watch');
    browser.expect.element('#main').text.to.not.contain('The Night Watch');
    browser.expect.element('#main').to.have.css('display').which.does.not.equal('block');
});

it('expect.before(ms)/.after(ms)', () => {
    browser.expect.element('#main').text.to.contain('The Night Watch').before(1000);
    browser.expect.element('#main').text.to.not.contain('The Night Watch').after(500);
});

it('expect.cookie()', () => {
    browser.expect.cookie('cookie-name').to.contain('cookie-value');
    browser.expect.cookie('cookie-name').to.match(/regex/);
    browser.expect.cookie('loginCookie', 'example.org').to.contain('cookie-value');
});

describe('expect.element()', () => {
    it('have .a(type)', () => {
        browser.expect.element('#q').to.be.an('input');
        browser.expect.element('#q').to.be.an('input', 'Testing if #q is an input');
        browser.expect.element('#w').to.be.a('span');
    });

    it('have .active()', () => {
        browser.expect.element('#main').to.be.active;
        browser.expect.element('#main').to.not.be.active;
        browser.expect.element('#main').to.be.active.before(100);
        // with two properties together
        browser.expect.element('#main').to.be.active.and.visible;
    });

    it('have .attribute()', () => {
        browser.expect.element('body').to.have.attribute('data-attr');
        browser.expect.element('body').to.not.have.attribute('data-attr');
        browser.expect.element('body').to.not.have.attribute('data-attr', 'Testing if body does not have data-attr');
        browser.expect.element('body').to.have.attribute('data-attr').before(100);
        browser.expect.element('body').to.have.attribute('data-attr').equals('some attribute');
        browser.expect.element('body').to.have.attribute('data-attr').not.equals('other attribute');
        browser.expect.element('body').to.have.attribute('data-attr').which.contains('something');
        browser.expect
            .element('body')
            .to.have.attribute('data-attr')
            .which.matches(/^something\ else/);
        // with assertion before the attribute property
        browser.expect.element('body').to.contain('Search').with.attribute('placeholder');
        // with multiple properties
        browser.expect.element('input[name=q]').to.have.attribute('class').and.attribute('id').contain('searchbox');
    });

    it('have .css(property)', () => {
        browser.expect.element('#main').to.have.css('display');
        browser.expect.element('#main').to.have.css('display', 'Testing for display');
        browser.expect.element('#main').to.not.have.css('display');
        browser.expect.element('#main').to.have.css('display').before(100);
        browser.expect.element('#main').to.have.css('display').which.eq('block');
        browser.expect.element('#main').to.have.css('display').which.contains('some value');
        browser.expect
            .element('#main')
            .to.have.css('display')
            .which.matches(/some\ value/);
    });

    it('have .enabled', () => {
        browser.expect.element('#weblogin').to.be.enabled;
        browser.expect.element('#main').to.not.be.enabled;
        browser.expect.element('#main').to.be.enabled.before(100);
    });

    it('have .present', () => {
        browser.expect.element('#main').to.be.present;
        browser.expect.element('#main').to.not.be.present;
        browser.expect.element('#main').to.be.present.before(100);
    });

    it('have .property', () => {
        browser.expect.element('body').to.have.property('className').equals('test-class');
        browser.expect
            .element('body')
            .to.have.property('className')
            .matches(/^something\ else/);
        browser.expect.element('body').to.not.have.property('classList').equals('test-class');
        browser.expect.element('body').to.have.property('classList').deep.equal(['class-one', 'class-two']);
        browser.expect.element('body').to.have.property('classList').contain('class-two');
        browser.expect.element('body').to.have.domProperty('classList').contain('class-two');
    });

    it('have .selected', () => {
        browser.expect.element('#main').to.be.selected;
        browser.expect.element('#main').to.not.be.selected;
        browser.expect.element('#main').to.be.selected.before(100);
    });

    it('have .text', () => {
        browser.expect.element('#main').text.to.equal('The Night Watch');
        browser.expect.element('#main').text.to.not.equal('The Night Watch');
        browser.expect.element('#main').text.to.equal('The Night Watch').before(100);
        browser.expect.element('#main').text.to.contain('The Night Watch');
        browser.expect.element('#main').text.to.match(/The\ Night\ Watch/);
    });

    it('have .value', () => {
        browser.expect.element('#q').to.have.value.that.equals('search');
        browser.expect.element('#q').to.have.value.not.equals('search');
        browser.expect.element('#q').to.have.value.which.contains('search');
        browser.expect.element('#q').to.have.value.which.matches(/search/);
    });

    it('have .visible', () => {
        browser.expect.element('#main').to.be.visible;
        browser.expect.element('#main').to.not.be.visible;
        browser.expect.element('#main').to.be.visible.before(100);
    });

    it('have .domProperty(property)', () => {
        browser.expect.element('#main').to.have.domProperty('classList');
        browser.expect.element('#main').to.have.domProperty('classList', 'Testing DOM property classList exists');
        browser.expect.element('#main').to.not.have.domProperty('classList');
        browser.expect.element('#main').to.have.domProperty('classList').before(100);
        browser.expect.element('#main').to.have.domProperty('classList').which.equals('js-search-input');
        browser.expect.element('#main').to.have.domProperty('classList').which.includes('search');
        browser.expect
            .element('#main')
            .to.have.domProperty('classList')
            .which.matches(/search/);
    });
});

describe('expect.elements()', () => {
    it('description', () => {
        browser.expect.elements('div').count.to.equal(10);
        browser.expect.elements('p').count.to.not.equal(1);
        // @ts-expect-error
        browser.expect.elements('div').value.contain('nightwatch');
    });

    it('selector element properties - all & required', () => {
        browser.expect.elements({
            selector: 'div',
            locateStrategy: 'css selector',
            index: 0,
            timeout: 3000,
            retryInterval: 1000,
            suppressNotFoundErrors: false,
            abortOnFailure: true
        }).count.to.equal(10);
        browser.expect.elements({
            selector: 'div'
        }).count.to.not.equal(1);
    });
});

it('expect.title()', () => {
    browser.expect.title().to.contain('value');
    browser.expect.title().to.match(/value/);
});

it('expect.url()', () => {
    browser.expect.url().to.equal('https://nightwatch.org');
    browser.expect.url().to.contain('https://');
    browser.expect.url().to.endWith('.org');
});

it('chains expect assertions', () => {
    browser
        .navigateTo('https://duckduckgo.com')
        .expect.element('input[name=q]').with.attribute('placeholder').toContain('Search')
        .expect.elements('input').count.toEqual(4)
        .assert.titleContains('Privacy')
        .url('https://google.com');

    const result = browser.expect.elements('div').count.toEqual(4);
    isNightwatchAPI(result);

    // @ts-expect-error
    isPromise(result);
});

it('works with async/await', async () => {
    const result = await browser.expect.element('#main').text.to.equal('The Night Watch');
    isNightwatchExpectResult(result);
    isNull(result.value);
});
