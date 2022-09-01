import { NightwatchAPI, JSON_WEB_OBJECT, NightwatchSizeAndPosition } from "nightwatch";

function isNull(v: null) {}
function isNightwatchAPI(v: NightwatchAPI) {}
function isStringOrNull(v: string | null) {}
function isString(v: string) {}
function isBoolean(v: boolean) {}
function isElementSize(v: { width: number; height: number; x: number; y: number }) {}
function isAny(v: any) {}
function isJSON_WEB_OBJECT(v: JSON_WEB_OBJECT) {}
function isNightwatchSizeAndPosition(v: NightwatchSizeAndPosition) {}
function isObject(v: object) {}

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
            }).expect.element('input[type=text]').text.to.equal('');
    });

    test('async demo test', async function(browser) {
        const result = await browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .clearValue('input[type=text]');
        isNull(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser
            .url('https://google.com')
            .waitForElementVisible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch.js')
            .click('input[type=submit]');
        isNull(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAttribute('input[type=text]', 'title');
        isStringOrNull(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getCssProperty('input[type=text]', 'background-color');
        isString(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.url('https://www.ecosia.org/').getElementSize('#__nuxt');
        isElementSize(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.url('https://www.ecosia.org/').getLocation('#__nuxt');
        console.log(result);
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
                this.assert.strictEqual(result.value, 'div');
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getTagName('#__nuxt');
        isString(result);
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
                this.assert.strictEqual(result.value, 'Nightwatch.js\nEnd-to-end testing, the easy way.');
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getText('#top-section');
        isString(result);
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
                this.assert.strictEqual(result.value, 'nightwatchjs');
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getValue('input[type=text]');
        isString(result);
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
                this.assert.strictEqual(result.value, true);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isVisible('input[type=text]');
        isBoolean(result);
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
                this.assert.strictEqual(result.value, true);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isPresent('input[type=text]');
        isBoolean(result);
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
                this.assert.strictEqual(result.value, null);
            })
            .getValue('input[type=text]', function(result) {
                this.assert.strictEqual(result.value, 'nightwatchjs');
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setValue('input[type=text]', 'nightwatchjs');
        isNull(result);
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
                this.assert.strictEqual(result.value, null);
            })
            .getValue('input[type=text]', function(result) {
                this.assert.strictEqual(result.value, 'nightwatchjs');
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setValue('input[type=text]', ['nightwatchjs', browser.Keys.ENTER]);
        isNull(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setPassword('input[type=text]', ['nightwatchjs', browser.Keys.ENTER]);
        isNull(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setAttribute('input[type=text]', 'disabled' , 'false');
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
                this.assert.strictEqual(result.value, false);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isEnabled('input[type=text]');
        isBoolean(result);
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
                this.assert.strictEqual(result.value, false);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getElementProperty('input[type=text]', 'disabled');
        isAny(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.findElement('input[type=text]');
        isJSON_WEB_OBJECT(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getElementRect('#__nuxt');
        isNightwatchSizeAndPosition(result);
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
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAriaRole('#__nuxt');
        isString(result);
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
                this.assert.strictEqual(result.value, 'search');
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getAccessibleName('input[type=text]');
        isString(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.waitForElementVisible('input[type=text]', undefined, undefined, true);
        isBoolean(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.waitForElementPresent('input[type=text]');
        isObject(result);
    });

    after(browser => browser.end());
});
