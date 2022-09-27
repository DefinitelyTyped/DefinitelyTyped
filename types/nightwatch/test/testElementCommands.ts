import { NightwatchAPI, JSON_WEB_OBJECT, NightwatchCallbackResult, NightwatchSizeAndPosition, ElementResult } from "nightwatch";

function isNightwatchAPI(v: NightwatchAPI) {}
function isNightwatchCallbackResult<T>(result: NightwatchCallbackResult<T>): T | void {
    if (result.status === 0) {
        return result.value;
    }
}
function isType<T>(v: T): T { return v; }

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
                isNightwatchCallbackResult<null>(result);
            }).expect.element('input[type=text]').text.to.equal('');
    });

    test('async demo test', async function(browser) {
        const result = await browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .clearValue('input[type=text]');
        isType<null>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .click('input[type=submit]');
        isType<null>(result);
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
                isNightwatchCallbackResult<string | null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAttribute('input[type=text]', 'title');
        isType<string | null>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getCssProperty('input[type=text]', 'background-color');
        isType<string>(result);
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
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.url('https://www.ecosia.org/').getElementSize('#__nuxt');
        isType<NightwatchSizeAndPosition>(result);
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
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.url('https://www.ecosia.org/').getLocation('#__nuxt');
        isType<NightwatchSizeAndPosition>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getTagName('#__nuxt');
        isType<string>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getText('#top-section');
        isType<string>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getValue('input[type=text]');
        isType<string>(result);
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
                isNightwatchCallbackResult<boolean>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isVisible('input[type=text]');
        isType<boolean>(result);
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
                isNightwatchCallbackResult<boolean>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isPresent('input[type=text]');
        isType<boolean>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setValue('input[type=text]', 'nightwatchjs');
        isType<null>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setValue('input[type=text]', ['nightwatchjs', browser.Keys.ENTER]);
        isType<null>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setPassword('input[type=text]', ['nightwatchjs', browser.Keys.ENTER]);
        isType<null>(result);
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
                isNightwatchCallbackResult<boolean>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setAttribute('input[type=text]', 'disabled' , 'false');
        isType<boolean>(result);
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
                isNightwatchCallbackResult<boolean>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isEnabled('input[type=text]');
        isType<boolean>(result);
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
                isNightwatchCallbackResult<any>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getElementProperty('input[type=text]', 'disabled');
        isType<any>(result);
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
                isNightwatchCallbackResult<JSON_WEB_OBJECT>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.findElement('input[type=text]');
        isType<JSON_WEB_OBJECT>(result);
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
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getElementRect('#__nuxt');
        isType<NightwatchSizeAndPosition>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAriaRole('#__nuxt');
        isType<string>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAccessibleName('input[type=text]');
        isType<string>(result);
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
                isNightwatchCallbackResult<boolean>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.waitForElementVisible('input[type=text]', undefined, undefined, true);
        isType<boolean>(result);
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
                isNightwatchCallbackResult<ElementResult[]>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.waitForElementPresent('input[type=text]');
        isType<ElementResult[]>(result);
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
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.dragAndDrop('input[type=text]', {x: 50, y: 50});
        isType<null>(result);
    });

    after(browser => browser.end());
});
