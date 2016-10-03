/// <reference path="webdriverio.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../chai/chai.d.ts" />

import {assert} from "chai";

describe("webdriver.io page", function() {

    it("should have the right title - the good old callback way", function(done) {

        browser
            .url("/")
            .getTitle(function(err, title) {
                assert.equal(err, undefined);
                assert.equal(title, "WebdriverIO - Selenium 2.0 javascript bindings for nodejs");
            })
            .call(done);

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

    before(function(done){
        client = webdriverio.remote({ desiredCapabilities: {browserName: "phantomjs"} });
        client.init(done);
    });

    it("Github test",function(done) {
        client
            .url("https://github.com/")
            .getElementSize(".header-logo-wordmark", function(err: any, result: webdriverio.Size) {
                assert.equal(undefined, err);
                assert.strictEqual(result.height, 26);
                assert.strictEqual(result.width, 89);
            })
            .getTitle(function(err: any, title: string) {
                assert.equal(undefined, err);
                assert.strictEqual(title,"GitHub · Where software is built");
            })
            .getCssProperty("a[href='/plans']", "color", function(err: any, result: webdriverio.CssProperty){
                assert.equal(undefined, err);
                assert.strictEqual(result.value, "rgba(64,120,192,1)");
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
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
    .then(function(res){
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
