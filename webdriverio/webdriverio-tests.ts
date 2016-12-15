import * as webdriverio from "webdriverio";

const button = browser.element("#myButton");

browser
    .moveToObject("#object", 0, 0)
    .pause(500);

browser
    .getTitle(function(err: any, title: string) {
        console.log(title);
    });

browser
    .getTitle()
    .then(function(title: string) {
        console.log(title);
    });


var client: webdriverio.Client<void>;

client = webdriverio.remote({ desiredCapabilities: {browserName: "phantomjs"} });
client.init();

client
    .url("https://github.com/")
    .getElementSize(".header-logo-wordmark", function(err: any, result: webdriverio.Size) {})
    .getTitle(function(err: any, title: string) {})
    .getCssProperty("a[href='/plans']", "color", function(err: any, result: webdriverio.CssProperty) {});

client.end();

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

matrix
    .init()
    .url("https://apprtc.appspot.com/r/1234")
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
    .then(function(visible: boolean){
        console.log(visible);
    })
    .end();
