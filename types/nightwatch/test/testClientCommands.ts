import { Cookie, NightwatchAPI, NightwatchElement, NightwatchLogEntry } from "nightwatch";

import { isNightwatchAPI, isNightwatchCallbackResult, isType } from "./utils";

//
// .navigateTo
//
describe("Navigation commands demo", function() {
    test("demoTest", function(browser) {
        // navigate to new url:
        browser.navigateTo("https://nightwatchjs.org");
        // with callback
        browser.navigateTo("https://nightwatchjs.org", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
            // @ts-expect-error
            this.navigateTo();
        });
    });

    test("demoTestAsync", async function(browser) {
        const result = await browser.navigateTo("https://nightwatchjs.org");
        isType<null>(result);
    });
});

//
// .openNewWindow
//
describe("openNewWindow demo", function() {
    test("demo test", function(browser) {
        // open a new window tab (default)
        browser.openNewWindow("tab", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });

        // open a new window
        browser.openNewWindow("window", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.openNewWindow("window");
        isType<null>(result);
    });
});

//
// .closeWindow
//
describe("closeWindow demo", function() {
    test("demo test", function(browser) {
        browser.closeWindow(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.closeWindow();
        isType<null>(result);
    });
});

//
// .fullscreenWindow
//
describe("fullscreenWindow demo", function() {
    test("demo test", function(browser) {
        browser.fullscreenWindow(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.fullscreenWindow();
        isType<null>(result);
    });
});

//
// .minimizeWindow
//
describe("minimizeWindow demo", function() {
    test("demo test", function(browser) {
        browser.minimizeWindow(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.minimizeWindow();
        isType<null>(result);
    });
});

//
// .deleteCookie
//
describe("deleteCookie demo", function() {
    test("demo test", function(browser) {
        browser
            .navigateTo("https://www.google.com")
            .setCookie({
                name: "test_cookie",
                value: "test_value",
            })
            .deleteCookie("test_cookie", function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.deleteCookie("test_cookie");
        isType<null>(result);
    });
});

//
// .deleteCookies
//
describe("deleteCookies demo", function() {
    test("demo test", function(browser) {
        browser
            .navigateTo("https://www.google.com")
            .setCookie({
                name: "test_cookie",
                value: "test_value",
            })
            .deleteCookies(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.deleteCookies();
        isType<null>(result);
    });
});

//
// .end
//
describe("end command demo", function() {
    test("demo test", function(browser) {
        browser.end(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });
});

//
// .getCookie
//
describe("getCookie command demo", function() {
    test("demo test", function(browser) {
        browser
            .navigateTo("https://www.google.com")
            .setCookie({
                name: "test_cookie",
                value: "test_value",
            }).getCookie("test_cookie", function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<Cookie>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.getCookie("test_cookie");
        isType<Cookie>(result);
    });
});

//
// .setCookie
//
describe("setCookie command demo", function() {
    test("demo test", function(browser) {
        browser
            .navigateTo("https://www.google.com")
            .setCookie({
                name: "test_cookie",
                value: "test_value",
            }, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.setCookie({
            name: "test_cookie",
            value: "test_value",
        });
        isType<null>(result);
    });
});

//
// .getLog
//
describe("getLog command demo", function() {
    test("demo test", function() {
        browser
            .getLog("browser", function(result) {
                isNightwatchAPI(this);
                isType<NightwatchLogEntry[]>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.getLog("browser");
        isType<NightwatchLogEntry[]>(result);
    });
});

//
// .getCurrentUrl
//
describe("getCurrentUrl command demo", function() {
    test("demo test", function() {
        browser
            .navigateTo("https://www.nightwatchjs.org")
            .getCurrentUrl(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.navigateTo("https://www.nightwatchjs.org").getCurrentUrl();
        isType<string>(result);
    });
});

//
// .getTitle
//
describe("getTitle command demo", function() {
    test("demo test", function() {
        browser
            .navigateTo("https://www.ecosia.org")
            .getTitle(function(result) {
                isNightwatchAPI(this);
                isType<string>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.navigateTo("https://www.ecosia.org").getTitle();
        isType<string>(result);
    });
});

//
// .isLogAvailable
//
describe("isLogAvailable command demo", function() {
    test("demo test", function() {
        browser
            .isLogAvailable("browser", function(result) {
                isNightwatchAPI(this);
                isType<boolean>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.isLogAvailable("browser");
        isType<boolean>(result);
    });
});

//
// .resizeWindow
//
describe("resizeWindow command demo", function() {
    test("demo test", function() {
        browser
            .navigateTo("https://www.ecosia.org")
            .resizeWindow(1000, 500, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.resizeWindow(1000, 800);
        isType<null>(result);
    });
});

//
// .screenshot
//
describe("screenshot command demo", function() {
    test("demo test", function(browser) {
        browser
            .screenshot(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            })
            .screenshot(true, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.screenshot();
        isType<string>(result);

        const result2 = await browser.screenshot(true);
        isType<string>(result2);
    });
});

//
// .saveScreenshot
//
describe("saveScreenshot command demo", function() {
    test("async demo test", async function(browser) {
        const result = await browser.saveScreenshot("bcd.jpg");
        isType<string>(result);
    });
});

//
// .setCookie
//
describe("setCookie command demo", function() {
    test("demo test", function() {
        return browser
            .navigateTo("https://www.ecosia.org")
            .setCookie({
                name: "testCookie",
                value: "",
            }, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.setCookie({
            name: "testCookie",
            value: "",
        });
        isType<null>(result);
    });
});

//
// .setWindowPosition
//
describe("setWindowPosition command demo", function() {
    test("demo test", function() {
        browser
            .setWindowPosition(0, 0, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.setWindowPosition(0, 0);
        isType<null>(result);
    });
});

//
// .setWindowRect
//
describe("setWindowRect command demo", function() {
    test("demo test", function() {
        browser
            .setWindowRect({ x: 0, y: 0, width: 500, height: 500 }, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });
    test("async demo test", async function(browser) {
        const result = await browser.setWindowRect({ x: 0, y: 0, width: 500, height: 500 });
        isType<null>(result);
    });
});

//
// .setWindowSize
//
describe("setWindowSize command demo", function() {
    test("demo test", function() {
        browser
            .setWindowSize(500, 500, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.setWindowSize(500, 500);
        isType<null>(result);
    });
});

//
// switchWindow
//
describe("switchWindow command demo", function() {
    test("async demo test", async function(browser) {
        const handle = await browser.windowHandle();
        const result = await browser.switchWindow(handle);
        isType<null>(result);
    });
});

//
// switchToWindow
//
describe("switchToWindow command demo", function() {
    test("async demo test", async function(browser) {
        const handle = await browser.windowHandle();
        const result = await browser.switchToWindow(handle);
        isType<null>(result);
    });
});

//
// .init
//
describe("init command demo", function() {
    test("demo test", function() {
        browser.init("https://www.google.com", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });
});

//
// .waitUntil
//
describe("waitUntil command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function() {
        browser.waitUntil(
            async function() {
                isNightwatchAPI(this);
                return true;
            },
            5000,
            5000,
            function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            },
        );
    });

    it("demo Test 2", function(browser) {
        browser
            .url("https://nightwatchjs.org")
            .waitUntil(
                async function() {
                    const title = await this.execute(function() {
                        return document.title;
                    });

                    return title === "Nightwatch.js";
                },
                1000,
                100,
                "some message",
            );
    });

    test("async demo test", async function(browser) {
        const result = await browser.waitUntil(async function() {
            return true;
        });
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .axeInject
//
describe("axeInject test", function() {
    test("async demo test", async function(browser) {
        const result = await browser.axeInject();
        isType<null>(result);
    });
    after(browser => browser.end());
});

//
// .injectScript
//
describe("injectScript command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.injectScript("<script-url>", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<NightwatchElement>(result);
        });
        browser.injectScript("<script-url>", "id", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<NightwatchElement>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.injectScript("<script-url>");
        isType<NightwatchElement>(result);

        const result2 = await browser.injectScript("<script-url>", "id");
        isType<NightwatchElement>(result2);
    });

    after(browser => browser.end());
});

//
// .perform
//
describe("perform command demo", function() {
    test("demo test", function() {
        browser.perform(async function() {
            isNightwatchAPI(this);
        });
        browser.perform(function() {
            isNightwatchAPI(this);
        });
        browser.perform(function(done: () => void) {
            isNightwatchAPI(this);
            done();
        });
        browser.perform(function(client: NightwatchAPI, done: () => void) {
            isNightwatchAPI(this);
            isNightwatchAPI(client);
            done();
        });
    });

    test("async demo test", async function() {
        const result = await browser.perform(function() {
            isNightwatchAPI(this);
            return "";
        });
        isType<string>(result);

        const result2 = await browser.perform(async function() {
            isNightwatchAPI(this);
            return true;
        });
        isType<boolean>(result2);

        const result3 = await browser.perform(function(done: (result?: number) => void) {
            isNightwatchAPI(this);
            done(2);
        });
        isType<number>(result3);

        const result4 = await browser.perform(function(client: NightwatchAPI, done: (result?: string) => void) {
            isNightwatchAPI(this);
            isNightwatchAPI(client);

            client.getTitle((result) => {
                done(result);
            });
        });
        isType<string>(result4);
    });
});
