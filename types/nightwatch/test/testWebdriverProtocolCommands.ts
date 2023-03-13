import { NightwatchSizeAndPosition, Cookie, Element } from 'nightwatch';

import { isNightwatchAPI, isNightwatchCallbackResult, isType } from './utils';

//
// .elementIdAttribute
//
describe('elementIdAttribute command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdAttribute(webElement.getId(), 'title', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string | null>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdAttribute(webElement.getId(), 'title');
        isType<string | null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdCssProperty
//
describe('elementIdCssProperty command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdCssProperty(webElement.getId(), 'background-color', function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string | null>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdCssProperty(webElement.getId(), 'background-color');
        isType<string | null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdDisplayed
//
describe('elementIdDisplayed command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdDisplayed(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdDisplayed(webElement.getId());
        isType<boolean>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdEnabled
//
describe('elementIdEnabled command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdEnabled(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdEnabled(webElement.getId());
        isType<boolean>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdName
//
describe('elementIdName command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdName(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdName(webElement.getId());
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdSelected
//
describe('elementIdSelected command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdSelected(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdSelected(webElement.getId());
        isType<boolean>(result);
    });

    after(browser => browser.end());
});

//
// .submit
//
describe('submit command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.submit(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.submit(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdSize
//
describe('elementIdSize command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdSize(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdSize(webElement.getId());
        isType<NightwatchSizeAndPosition>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdText
//
describe('elementIdText command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdText(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdText(webElement.getId());
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdClear
//
describe('elementIdClear command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdClear(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdClear(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdClick
//
describe('elementIdClick command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdClick(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdClick(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdValue
//
describe('elementIdValue command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdValue(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdValue(webElement.getId());
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdLocation
//
describe('elementIdLocation command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.findElement('input[type=text]', (result) => {
            const webElement = result.value;
            browser.elementIdLocation(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
        });
    });

    test('async demo test', async function(browser) {
        const webElement = await browser.findElement('input[type=text]');
        const result = await browser.elementIdLocation(webElement.getId());
        isType<NightwatchSizeAndPosition>(result);
    });

    after(browser => browser.end());
});

//
// .source
//
describe('source command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.source((result) => {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.source();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .doubleClick
//
describe('doubleClick command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.doubleClick('input[type=text]', (result) => {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.doubleClick('input[type=text]');
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .clickAndHold
//
describe('clickAndHold command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.clickAndHold('input[type=text]', (result) => {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.clickAndHold('input[type=text]');
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .moveTo
//
describe('moveTo command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.moveTo(null, 100, 100, (result) => {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.moveTo(null, 100, 100);
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .rightClick
//
describe('rightClick command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function(browser) {
        browser.rightClick('input[type=text]', (result) => {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.rightClick('input[type=text]');
        isType<null>(result);
    });

    after(browser => browser.end());
});


//
// .acceptAlert
//
describe('acceptAlert command demo', function() {
    before(browser => browser.url('https://nightwatchjs.org/__e2e/window/alerts.html/'));

    test('demo test', function(browser) {
        browser.click('#show-alert')
            .acceptAlert((result) => {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.click('#show-alert').acceptAlert();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .dismissAlert
//
describe('dismissAlert command demo', function() {
    before(browser => browser.url('https://nightwatchjs.org/__e2e/window/alerts.html/'));

    test('demo test', function(browser) {
        browser.click('#show-alert')
            .dismissAlert((result) => {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.click('#show-alert').dismissAlert();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .getAlertText
//
describe('getAlertText command demo', function() {
    before(browser => browser.url('https://nightwatchjs.org/__e2e/window/alerts.html/'));

    test('demo test', function(browser) {
        browser.click('#show-alert')
            .getAlertText((result) => {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.click('#show-alert').getAlertText();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .setAlertText
//
describe('setAlertText command demo', function() {
    before(browser => browser.url('https://nightwatchjs.org/__e2e/window/alerts.html/'));

    test('demo test', function(browser) {
        browser.click('#show-alert')
            .setAlertText('nightwatch', (result) => {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.click('#show-alert').setAlertText('nightwatch');
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .registerBasicAuth
//
describe('registerBasicAuth command demo', function() {

    test('demo test', function(browser) {
        browser.registerBasicAuth('test', 'test', (result) => {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.registerBasicAuth('test', 'test');
        isType<null>(result);
    });
});

//
// .cookie
//
describe('cookie command demo', function() {

    test('demo test', function(browser) {
        browser.cookie('GET', (result) => {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<Cookie[] | null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.cookie('GET');
        isType<Cookie[] | null>(result);
    });
});
