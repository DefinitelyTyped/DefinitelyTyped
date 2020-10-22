import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { describe, before, after, it, ignore, xdescribe, xit, beforeEach, afterEach, controlFlow } from 'selenium-webdriver/testing';

describe('Google Search', () => {
    let driver: WebDriver;

    before(() => {
        driver = new Builder().forBrowser('firefox').build();
    });

    beforeEach(() => { });

    after(() => {
        driver.quit();
    });

    afterEach(() => { });

    it('should append query to title', () => {
        const flow = controlFlow();
        flow.execute(() => {
            driver.get('http://www.google.com/ncr');
            driver.findElement(By.name('q')).sendKeys('webdriver');
            driver.findElement(By.name('btnG')).click();
            driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        });
    });
});

ignore(maybe).it('is flaky', () => {
    if (Math.random() < 0.5) throw Error();
});

function maybe() { return Math.random() < 0.5; }

describe.only('just this', () => {
    it.only('just this too', () => { });
});

describe.skip('not this', () => {
    it.skip('not this either', () => { });
});

xdescribe('not this', () => {
    xit('not this either', () => { });
});
