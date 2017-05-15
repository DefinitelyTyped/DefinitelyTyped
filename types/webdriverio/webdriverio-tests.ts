/// <reference types="mocha" />

import * as webdriverio from "webdriverio";
import { assert } from "chai";

describe("webdriver.io page", () => {
    it("should have the right title - the good old callback way", () => {
        assert.equal(
            browser
                .url("/")
                .getTitle(),
            "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
        );
    });

    it("should have the right title - the promise way", () => {
        return browser
            .url("/")
            .getTitle().then((title) => {
                assert.equal(title, "WebdriverIO - Selenium 2.0 javascript bindings for nodejs");
            });
    });
});

describe.only("my webdriverio tests", () => {
    let client: webdriverio.Client<void>;

    before(async () => {
        client = webdriverio.remote({ desiredCapabilities: { browserName: "phantomjs" } });
        await client.init();
    });

    it("Github test", async () => {
        await client.url("https://github.com/");
        await client.waitForVisible('.header-logo-invertocat');

        const elementSize = await client.getElementSize(".header-logo-invertocat");

        assert.isNumber(elementSize.height);
        assert.isNumber(elementSize.width);
        assert.strictEqual(elementSize.height, 32);
        assert.strictEqual(elementSize.width, 32);

        const title = await client.getTitle();
        assert.isString(title);
        assert.strictEqual(title, "The world's leading software development platform · GitHub");

        const cssProperty = await client.getCssProperty("a[href='/pricing']", "color");
        assert.strictEqual(cssProperty.value, "rgba(255,255,255,1)");
    });

    after(async () => {
        await client.end();
    });
});

const matrix = webdriverio.multiremote({
        browserA: {
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    args: [
                        "use-fake-device-for-media-stream",
                        "use-fake-ui-for-media-stream",
                    ]
                }
            }
        },
        browserB: {
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    args: [
                        "use-fake-device-for-media-stream",
                        "use-fake-ui-for-media-stream",
                    ]
                }
            }
        }
    });

const channel = Math.round(Math.random() * 100000000000);

matrix
    .init()
    .url("https://apprtc.appspot.com/r/" + channel)
    .click("#confirm-join-button")
    .pause(5000)
    .end();

const options = {
    desiredCapabilities: {
        browserName: "chrome"
    }
};

webdriverio
    .remote(options)
    .init()
    .url("https://news.ycombinator.com/")
    .selectorExecute("//div", (inputs: HTMLElement[], message: string) => {
        return inputs.length + " " + message;
    }, "divs on the page")
    .then((res: string) => {
        console.log(res);
    })
    .end();

webdriverio
    .remote(options)
    .init()
    .url("http://www.google.com/")
    .waitForVisible("//input[@type='submit']", 5000)
    .then((visible) => {
        console.log(visible); // Should return true
    })
    .end();
