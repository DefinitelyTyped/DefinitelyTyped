import { NightwatchAPI, JSON_WEB_OBJECT, NightwatchCallbackResult, NightwatchSizeAndPosition } from "nightwatch";

function isNightwatchAPI(v: NightwatchAPI) {}
function isNightwatchCallbackResult<T>(v1: NightwatchCallbackResult<T>, v2: NightwatchCallbackResult<T>) {}
function isResultType<T>(v1: T, v2: T) {}

//
// .clearValue
//
describe('clearValue Command demo', function() {
    test('demo test', function() {
        browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .clearValue('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            }).expect.element('input[type=text]').text.to.equal('');
    });

    test('async demo test', async function(browser) {
        const result = await browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .clearValue('input[type=text]');
        isResultType<null>(result, result);
    });
});

//
// .click
//
describe('click Command demo', function() {
    test('demo test', function() {
        browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .click('input[type=submit]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .click('input[type=submit]');
        isResultType(result, result);
    });
});

//
// .getAttribute
//
describe('getAttribute command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function() {
        browser
            .getAttribute('input[type=text]', 'title' , function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string | null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAttribute('input[type=text]', 'title');
        isResultType<string | null>(result, result);
    });

    after(browser => browser.end());
});

//
// .getCssProperty
//
describe('getCssProperty command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function() {
        browser
            .getCssProperty('input[type=text]', 'background-color' , function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getCssProperty('input[type=text]', 'background-color');
        isResultType<string>(result, result);
    });

    after(browser => browser.end());
});

//
// .getElementSize
//
describe('getElementSize command demo', function() {
    test('demo test', function() {
        browser
            .url('https://www.ecosia.org/')
            .getElementSize('#navbartop', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.url('https://www.ecosia.org/').getElementSize('#__nuxt');
        isResultType<NightwatchSizeAndPosition>(result, result);
    });
});

//
// .getLocation
//
describe('getLocation command demo', function() {
    test('demo test', function() {
        browser
            .url('https://www.ecosia.org/')
            .getLocation('#__nuxt', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.url('https://www.ecosia.org/').getLocation('#__nuxt');
        isResultType<NightwatchSizeAndPosition>(result, result);
    });
});

//
// .getTagName
//
describe('getTagName command demo', function() {
    before(browser => browser.url('https://www.ecosia.org/'));

    test('demo test', function() {
        browser
            .getTagName('#__nuxt', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getTagName('#__nuxt');
        isResultType<string>(result, result);
    });

    after(browser => browser.end());
});

//
// .getText
//
describe('getText command demo', function() {
    before(browser => browser.url('https://nightwatchjs.org/'));

    test('demo test', function() {
        browser
            .getText('#top-section', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getText('#top-section');
        isResultType<string>(result, result);
    });

    after(browser => browser.end());
});

//
// .getValue
//
describe('getValue command demo', function() {
    before(browser => browser.url('https://google.com/'));

    test('demo test', function() {
        browser
            .setValue('input[type=text]', 'nightwatchjs')
            .getValue('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getValue('input[type=text]');
        isResultType<string>(result, result);
    });

    after(browser => browser.end());
});

//
// .isVisible
//
describe('isVisible command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .isVisible('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isVisible('input[type=text]');
        isResultType<boolean>(result, result);
    });

    after(browser => browser.end());
});

//
// .isPresent
//
describe('isPresent command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .isPresent('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isPresent('input[type=text]');
        isResultType<boolean>(result, result);
    });

    after(browser => browser.end());
});

//
// .setValue
//
describe('setValue command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .setValue('input[type=text]', 'nightwatchjs', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setValue('input[type=text]', 'nightwatchjs');
        isResultType<null>(result, result);
    });

    after(browser => browser.end());
});

//
// .sendKeys
//
describe('sendKeys command demo', function() {
    before(browser => browser.url('https://google.com/'));

    test('demo test', function() {
        browser
            .sendKeys('input[type=text]', 'nightwatchjs', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setValue('input[type=text]', ['nightwatchjs', browser.Keys.ENTER]);
        isResultType<null>(result, result);
    });
    after(browser => browser.end());
});

//
// .setPassword
//
describe('setPassword command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .setPassword('input[type=text]', 'nightwatchjs', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setPassword('input[type=text]', ['nightwatchjs', browser.Keys.ENTER]);
        isResultType<null>(result, result);
    });

    after(browser => browser.end());
});

//
// .setAttribute
//
describe('setAttribute command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .setAttribute('input[type=text]', 'disabled' , 'true', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setAttribute('input[type=text]', 'disabled' , 'false');
        isResultType<boolean>(result, result);
    });

    after(browser => browser.end());
});

//
// .isEnabled
//
describe('isEnabled command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .setAttribute('input[type=text]', 'disabled', 'true')
            .isEnabled('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isEnabled('input[type=text]');
        isResultType<boolean>(result, result);
    });

    after(browser => browser.end());
});

//
// .getElementProperty
//
describe('getElementProperty command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .getElementProperty('input[type=text]', 'disabled', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<any>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getElementProperty('input[type=text]', 'disabled');
        isResultType<any>(result, result);
    });

    after(browser => browser.end());
});

//
// .findElement
//
describe('findElement command demo', function() {
    before(browser => browser.url('https://google.com/'));
    test('demo test', function() {
        browser
            .findElement('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<JSON_WEB_OBJECT>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.findElement('input[type=text]');
        isResultType<JSON_WEB_OBJECT>(result, result);
    });

    after(browser => browser.end());
});

//
// .getElementRect
//
describe('getElementRect command demo', function() {
    before(browser => browser.url('https://www.ecosia.org/'));

    test('demo test', function() {
        browser
            .getElementRect('#__nuxt', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getElementRect('#__nuxt');
        isResultType<NightwatchSizeAndPosition>(result, result);
    });

    after(browser => browser.end());
});

//
// getAriaRole
//
describe('getAriaRole command demo', function() {
    before(browser => browser.url('https://www.ecosia.org/'));

    test('demo test', function() {
        browser
            .getAriaRole('#__nuxt', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAriaRole('#__nuxt');
        isResultType<string>(result, result);
    });

    after(browser => browser.end());
});

//
// .getAccessibleName
//
describe('getAccessibleName command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function() {
        browser
            .getAccessibleName('input[type=text]', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAccessibleName('input[type=text]');
        isResultType<string>(result, result);
    });

    after(browser => browser.end());
});

//
// waitForElementVisible
//
describe('waitForElementVisible command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function() {
        browser
            .waitForElementVisible('input[type=text]', undefined, undefined, true, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.waitForElementVisible('input[type=text]', undefined, undefined, true);
        isResultType<boolean>(result, result);
    });

    after(browser => browser.end());
});

//
// .waitForElementPresent
//
describe('waitForElementPresent command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function() {
        browser
            .waitForElementPresent('input[type=text]', undefined, undefined, undefined, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<[ {ELEMENT_KEY: string }]>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.waitForElementPresent('input[type=text]');
        isResultType<[ {ELEMENT_KEY: string }]>(result, result);
    });

    after(browser => browser.end());
});

//
// .dragAndDrop
//
describe('dragAndDrop command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('hello', function() {
        browser.dragAndDrop('input[type=text]', {x: 50, y: 50}, function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result, result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.dragAndDrop('input[type=text]', {x: 50, y: 50});
        isResultType<null>(result, result);
    });

    after(browser => browser.end());
});
