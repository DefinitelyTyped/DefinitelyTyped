import pa11y = require('pa11y');
import puppeteer = require('puppeteer');

pa11y('http://example.com/');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com');

    pa11y('', {
        browser,
        ignoreUrl: true,
        page,
    });

    await browser.close();
})();

pa11y('http://example.com/', {
    log: {
        debug: console.log,
        error: console.error,
        info: console.info
    }
});

pa11y('http://example.com/', {
    actions: [
        'set field #username to exampleUser',
        'wait for url to be http://example.com/myaccount'
    ],
    log: {
        debug: console.log,
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    postData: 'foo=bar&bar=baz',
    rootElement: '#main'
});

pa11y.isValidAction('open the pod bay doors');
