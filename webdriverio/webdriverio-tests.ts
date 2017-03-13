
/// <reference types="mocha" />

import {assert} from "chai";

describe("webdriver.io page", function() {

    it("should have the right title - the good old callback way", function() {
        assert.equal(
            browser
                .url("/")
                .getTitle(),
            "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
        );

    });

    it("should have the right title - the promise way", function() {

        return browser
            .url("/")
            .getTitle().then(function(title) {
                assert.equal(title, "WebdriverIO - Selenium 2.0 javascript bindings for nodejs");
            });

    });
});

import * as webdriverio from "webdriverio";

describe("my webdriverio tests", function(){

    this.timeout(99999999);
    var client: webdriverio.Client<void>;

    before(function() {
        client = webdriverio.remote({ desiredCapabilities: { browserName: "phantomjs" } });
        client.init();
    });

    it("Github test", function() {
        client.url("https://github.com/");

        var elementSize = client.getElementSize(".header-logo-wordmark");

        var foo = client.getElementSize('div');

        assert.isNumber(elementSize.height);
        assert.isNumber(elementSize.width);
        assert.strictEqual(elementSize.height, 26);
        assert.strictEqual(elementSize.width, 89);

        var title = client.getTitle();
        assert.isString(title);
        assert.strictEqual(title, "GitHub · Where software is built");

        var cssProperty = client.getCssProperty("a[href='/plans']", "color");
        assert.strictEqual(cssProperty.value, "rgba(64,120,192,1)");
    });

    after(function() {
        client.end();
    });
});

var matrix = webdriverio.multiremote({
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

var channel = Math.round(Math.random() * 100000000000);

matrix
    .init()
    .url("https://apprtc.appspot.com/r/" + channel)
    .click("#confirm-join-button")
    .pause(5000)
    .end();

var options = {
    desiredCapabilities: {
        browserName: "chrome"
    }
};

webdriverio
    .remote(options)
    .init()
    .url("https://news.ycombinator.com/")
    .selectorExecute("//div", function(inputs: HTMLElement[], message: string) {
        return inputs.length + " " + message;
    }, "divs on the page")
    .then(function(res: string) {
        console.log(res);
    })
    .end();

webdriverio
    .remote(options)
    .init()
    .url("http://www.google.com/")
    .waitForVisible("//input[@type='submit']", 5000)
    .then(function(visible){
        console.log(visible); //Should return true
    })
    .end();
