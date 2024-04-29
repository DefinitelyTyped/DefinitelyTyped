import { EventEmitter } from "events";
import {
    ELEMENT_KEY,
    EnhancedPageObject,
    EnhancedSectionInstance,
    JSON_WEB_OBJECT,
    NightwatchAPI,
    NightwatchAssertion,
    NightwatchAssertionsResult,
    NightwatchClient,
    NightwatchClientObject,
    NightwatchEnsureResult,
    NightwatchNodeAssertionsResult,
    NightwatchTests,
    PageObjectModel,
} from "nightwatch";

import { isNightwatchAPI, isType } from "./utils";

function isNightwatchAssertionsResult<T>(result: NightwatchAssertionsResult<T>): T {
    return result.value;
}

//
// ./tests/general.ts
//

const testGeneral: NightwatchTests = {
    "Demo test Google 1": () => {
        browser.registerBasicAuth("test-username", "test-password").navigateTo("https://google.com").pause(1000);

        // expect element <body> to be present in 1000ms
        browser.expect.element("body").to.be.present.before(1000);

        // expect element <#lst-ib> to have css property 'display'
        browser.expect.element("#lst-ib").to.have.css("display");

        // expect element <body> to have attribute 'class' which contains text 'vasq'
        browser.expect.element("body").to.have.attribute("class").which.contains("vasq");

        browser.expect.element("#hplogo").to.have.attribute("alt").which.startsWith("G").and.endsWith("oogle");

        // expect element <#lst-ib> to be an input tag
        browser.expect.element("#lst-ib").to.be.an("input");

        // expect element <#lst-ib> to be visible
        browser.expect.element("#lst-ib").to.be.visible;

        browser.end();
    },

    "Demo test Google 2": () => {
        browser
            .url("https://www.google.com")
            .waitForElementVisible("body")
            .setValue("input[type=text]", "nightwatch")
            .getElementRect("input[type=text]", res => {
                console.log(res.value);
            })
            .waitForElementVisible("input[name=btnK]")
            .click("input[name=btnK]")
            .pause(1000)
            .assert.containsText("#main", "Night Watch")
            .end();
    },

    "Demo Nightwatch API commands": () => {
        isType<boolean>(browser.isChrome());
        isType<boolean>(browser.isAndroid());
        isType<boolean>(browser.isMobile());
        isType<boolean>(browser.isAppiumClient());

        const element_id = browser.WEBDRIVER_ELEMENT_ID;
        console.log(element_id);
        const browserName = browser.browserName;
        console.log(browserName);
        // @ts-expect-errors
        browser.WEBDRIVER_ELEMENT_ID = "some-element-id";
        // @ts-expect-errors
        browser.browserName = "firefox";

        browser.element("css selector", "something", function(result) {
            if (result.status === 0) {
                isType<string>(result.value[ELEMENT_KEY]);
            }
            isNightwatchAPI(this);
        });

        browser.elements("css selector", "something", function(result) {
            if (result.status === 0) {
                isType<string>(result.value[0][ELEMENT_KEY]);
            }
            isNightwatchAPI(this);
        });

        // check types on browser.options
        isType<string | string[] | undefined>(browser.options.tag_filter);
    },

    "Demo Nightwatch API commands with async/await": async () => {
        const element = await browser.element("css selector", "something");
        isType<string>(element[ELEMENT_KEY]);

        const elements = await browser.elements("css selector", "something");
        isType<string>(elements[0][ELEMENT_KEY]);
    },

    "Can run accessibility tests": () => {
        browser
            .url("https://www.google.com")
            .axeInject()
            .axeRun(
                "body",
                {
                    rules: {
                        "color-contrast": {
                            enabled: false,
                        },
                        region: {
                            enabled: false,
                        },
                    },
                },
                results => {},
            );
    },

    "step one: navigate to google": () => {
        browser
            .url("https://www.google.com")
            .waitForElementVisible("body", 1000)
            .setValue("input[type=text]", "nightwatch")
            .waitForElementVisible("input[name=btnK]", 1000);
    },

    "step two: click input": () => {
        browser.click("input[name=btnK]").pause(1000).assert.containsText("#main", "Night Watch").end();
    },

    "test user defined globals": () => {
        browser.url(`http://${browser.globals.username}:${browser.globals.password}@example.com`).end();
    },

    "Demo test for built-in API commands for working with the Chrome Devtools Protocol": () => {
        // setGeolocation
        browser
            // Set location of Tokyo, Japan
            .setGeolocation({
                latitude: 35.689487,
                longitude: 139.691706,
                accuracy: 100,
            })
            .captureNetworkRequests(requestParams => {
                console.log("Request URL:", requestParams.request.url);
                console.log("Request method:", requestParams.request.method);
                console.log("Request headers:", requestParams.request.headers);
            })
            .navigateTo("https://www.gps-coordinates.net/my-location")
            .end();

        browser
            .mockNetworkResponse(
                "https://www.google.com/",
                {
                    status: 200,
                    headers: {
                        "Content-Type": "UTF-8",
                    },
                    body: "Hello there!",
                },
                res => {
                    console.log(res);
                },
            )
            .setDeviceDimensions({
                width: 400,
                height: 600,
                deviceScaleFactor: 50,
                mobile: true,
            })
            .navigateTo("https://www.google.com")
            .end();

        browser
            .enablePerformanceMetrics()
            .navigateTo("https://www.google.com")
            .getPerformanceMetrics(metrics => {
                console.log(metrics);
            });

        browser.navigateTo("https://www.google.com").takeHeapSnapshot("./snap.heapsnapshot").end();

        browser
            .captureBrowserConsoleLogs(event => {
                console.log(event.type, event.timestamp, event.args[0].value);
            })
            .navigateTo(browser.baseUrl)
            .executeScript(() => {
                console.error("here");
            }, []);
    },
    "test assert with async/await": async () => {
        const attributeResult = browser.assert.attributeContains("input[name=q]", "placeholder", "Search");
        isNightwatchAPI(attributeResult);
        isNightwatchAssertionsResult<string>(await attributeResult);

        const cssPropertyResult = browser.assert.cssProperty("input[name=q]", "classList", "searchbox");
        isNightwatchAPI(cssPropertyResult);
        isNightwatchAssertionsResult<string | number>(await cssPropertyResult);

        const domPropertyResult = browser.assert.domPropertyContains("input[name=q]", "classList", "searchbox");
        isNightwatchAPI(domPropertyResult);
        isNightwatchAssertionsResult<any>(await domPropertyResult);

        const elementsCountResult = browser.assert.elementsCount("input", 8);
        isNightwatchAPI(elementsCountResult);
        const elementsCountAwaitedResult = await elementsCountResult;
        isType<JSON_WEB_OBJECT[]>(elementsCountAwaitedResult.value);
        isType<string>(elementsCountAwaitedResult.WebdriverElementId);

        const elementPresentResult = browser.assert.elementPresent("input");
        isNightwatchAPI(elementPresentResult);
        isNightwatchAssertionsResult<Array<{ [ELEMENT_KEY]: string }>>(await elementPresentResult);

        const hasAttributeResult = browser.assert.hasAttribute("input[name=q]", "placeholder");
        isNightwatchAPI(hasAttributeResult);
        isNightwatchAssertionsResult<string>(await hasAttributeResult);

        const selectedResult = browser.assert.selected("input[name=q]");
        isNightwatchAPI(selectedResult);
        isNightwatchAssertionsResult<boolean>(await selectedResult);

        const textResult = browser.assert.textMatches("input[name=q]", /^Search/);
        isNightwatchAPI(textResult);
        isNightwatchAssertionsResult<string>(await textResult);

        const urlResult = browser.assert.urlMatches("https://nightwatch.org");
        isNightwatchAPI(urlResult);
        isNightwatchAssertionsResult<string>(await urlResult);
    },
    "test node assertions with async/await": async () => {
        const result = browser.assert.strictEqual("nightwatch", "nightwatch");
        isNightwatchAPI(result);
        isType<NightwatchNodeAssertionsResult | Error>(await result);
    },
};

//
// ./tests/duckDuckGo.ts
//
describe("duckduckgo example", function() {
    it("Search Nightwatch.js and check results", function(browser) {
        browser
            .navigateTo("https://duckduckgo.com")
            .waitForElementVisible("input[name=q]")
            .sendKeys("input[name=q]", ["Nightwatch.js"])
            .click("*[type=\"submit\"]")
            .assert.visible(".results--main")
            .assert.textContains(".results--main", "Nightwatch.js");
    });
});

//
// .tests/native/wikipedia.ts
//
const wikipediaAppTest: NightwatchTests = {
    before: (client: NightwatchAPI) => {
        client.click(by.xpath("//XCUIElementTypeButton[@name=\"Skip\"]"));
    },

    "Search for BrowserStack": async (client: NightwatchAPI) => {
        client
            .useXpath()
            .click("//XCUIElementTypeSearchField[@name=\"Search Wikipedia\"]")
            .getOrientation(function(result) {
                if (result.status === 0) {
                    isType<"LANDSCAPE" | "PORTRAIT">(result.value);
                }
                isNightwatchAPI(this);
            })
            .setOrientation("LANDSCAPE", function(result) {
                if (result.status === 0) {
                    isType<"LANDSCAPE" | "PORTRAIT">(result.value);
                }
                isNightwatchAPI(this);
            })
            .appium.pressKeyCode(13, 44)
            .sendKeys("//XCUIElementTypeSearchField[@name=\"Search Wikipedia\"]", "browserstack")
            .click("//XCUIElementTypeStaticText[@name=\"BrowserStack\"]")
            .waitUntil(async function() {
                // wait for webview context to be available
                const contexts = await this.appium.getContexts(function(result) {
                    if (result.status === 0) {
                        isType<string[]>(result.value);
                    }
                    isNightwatchAPI(this);
                });

                return contexts.length > 1;
            }, 50000)
            .perform(async function() {
                // switch to webview context
                const contexts = await this.contexts();
                const setContextResult = await this.setContext(contexts[1], function(result) {
                    if (result.status === 0) {
                        isType<null>(result.value);
                    }
                    isNightwatchAPI(this);
                });

                const currContext = await this.currentContext(function(result) {
                    if (result.status === 0) {
                        isType<string | null>(result.value);
                    }
                    isNightwatchAPI(this);
                });

                isType<string[]>(contexts);
                isType<null>(setContextResult);
                isType<string | null>(currContext);

                // switch orientation back to portrait
                const currOrientation = await client.getOrientation();
                const setOrientationResult = await client.setOrientation("PORTRAIT");

                isType<"LANDSCAPE" | "PORTRAIT">(currOrientation);
                isType<"LANDSCAPE" | "PORTRAIT">(setOrientationResult);
            })
            .useCss()
            .assert.textEquals(".pcs-edit-section-title", "BrowserStack"); // command run in webview context

        client.end();
    },
};

//
// ./pages/google.ts
//

const appsSection = {
    selector: "div.gb_qc",
    commands: [
        {
            clickYoutube(this: AppsSection) {
                return this.click("@youtube");
            },
        },
    ],
    elements: {
        myAccount: {
            selector: "#gb192",
        },
        youtube: {
            selector: "#gb36",
        },
    },
};

interface AppsSection extends EnhancedSectionInstance<typeof appsSection.commands[0], typeof appsSection.elements> {}

const menuSection = {
    selector: "#gb",
    commands: [
        {
            // add section commands here
            clickApps(this: MenuSection) {
                return this.click("@appSection");
            },
        },
    ],
    elements: {
        mail: {
            selector: "a[href=\"mail\"]",
        },
        images: {
            selector: "a[href=\"imghp\"]",
        },
    },
    sections: {
        apps: appsSection,
    },
};

interface MenuSection extends
    EnhancedSectionInstance<
        typeof menuSection.commands[0],
        typeof menuSection.elements,
        { apps: AppsSection }
    >
{}

const googleCommands = {
    submit(this: GooglePage) {
        this.api.pause(1000);
        return this.waitForElementVisible("@submitButton", 1000)
            .click("@submitButton")
            .waitForElementNotPresent("@submitButton");
    },
};

const googlePage: PageObjectModel = {
    commands: [googleCommands],
    elements: {
        searchBar: {
            selector: "input[type=text]",
        },
        submitButton: {
            selector: "input[name=btnK]",
        },
    },
    sections: {
        menu: menuSection,
    },
};

// export = googlePage;

const iFrame = {
    elements: {
        iframe: "#mce_0_ifr",
        textbox: "body#tinymce p",
    },
    commands: [
        {
            url(this: EnhancedPageObject) {
                return `${this.api.launch_url}/iframe`;
            },
        },
    ],
};
const _: PageObjectModel = iFrame;

interface GooglePage
    extends EnhancedPageObject<typeof googleCommands, typeof googlePage.elements, { menu: MenuSection }>
{}

interface iFramePage extends EnhancedPageObject<typeof iFrame.commands, typeof iFrame.elements> {}

declare module "nightwatch" {
    interface NightwatchCustomPageObjects {
        google(): GooglePage;
        IFrame(): iFramePage;
    }
}

const testPage = {
    "Test commands": () => {
        const google = browser.page.google();
        google.setValue("@searchBar", "nightwatch").submit();

        isType<NightwatchAPI>(google.api);
        isType<NightwatchClient>(google.client);

        browser.end();
    },

    "Test sections": () => {
        const google = browser.page.google();

        const menuSection = google.section.menu;
        menuSection.expect.element("@mail").to.be.visible;
        menuSection.expect.element("@images").to.be.visible;

        menuSection.clickApps();

        const appSection = menuSection.section.apps;
        appSection.expect.element("@myAccount").to.be.visible;
        appSection.expect.element("@youtube").to.be.visible;

        appSection.clickYoutube();

        browser.end();
    },

    "Test assertions on page": () => {
        const google: GooglePage = browser.page.google();

        google
            .navigate()
            .assert.title("Google") // deprecated
            .assert.titleEquals("Google") // new in 2.0
            .assert.visible("@searchBar")
            .assert.strictEqual("Google", "Google") // node assertion returning NightwatchAPI
            .assert.not.titleContains("DuckDuckGo")
            .moveToElement("@searchBar", 1, 1)
            .setValue("@searchBar", "nightwatch")
            .click("@submit");

        // @ts-expect-error
        google.assert.not.not.elementPresent("@searchbar");
        // @ts-expect-error
        google.assert.not.strictEqual("nightwatch", "nightwatch");

        browser.end();
    },

    "Test iFrame on page": async () => {
        const iFrame = browser.page.IFrame();
        iFrame.navigate();
        const frame = await browser.findElement(iFrame.elements.iframe);
        console.log(frame.getId());
        browser.frame(frame.getId());
        iFrame.expect.element("@textbox").text.to.equal("Your content goes here.");

        browser.end();
    },

    "Test passing CSS selector string to frame": () => {
        const iFrame = browser.page.IFrame();
        iFrame.navigate().waitForElementPresent("#mce_0_ifr", 10000);
        browser.frame("#mce_0_ifr");
        iFrame.expect.element("@textbox").text.to.equal("Your content goes here.");
        browser.end();
    },

    "Test nested page objects": () => {
        const google = browser.page.subfolder1.subfolder2.subfolder3.google();
    },
};

//
// ./tests/specific-commands.ts
//

const testSpecificCommands: NightwatchTests = {
    executeAsync: () => {
        browser.executeAsync(
            done => {
                setTimeout(() => {
                    done(true);
                }, 500);
            },
            [],
            result => {
                browser.assert.equal(result.value, true);
            },
        );

        browser.executeAsync(
            (arg1: number, arg2: string, done: (result: true) => void) => {
                setTimeout(() => {
                    done(true);
                }, 500);
            },
            [1, "2"],
            result => {
                browser.assert.equal(result.value, true);
            },
        );

        browser.end();
    },

    executeAsyncScript: () => {
        browser.executeAsyncScript(
            done => {
                setTimeout(() => {
                    done(true);
                }, 500);
            },
            [],
            result => {
                browser.assert.equal(result.value, true);
            },
        );

        browser.executeAsyncScript(
            (arg1: number, arg2: number, done: (result: boolean) => void) => {
                setTimeout(() => {
                    done(true);
                }, 500);
            },
            [1, 2],
            result => {
                browser.assert.equal(result.value, true);
            },
        );

        browser.end();
    },
};

//
// ./commands/localStorageValue.ts
// - function based command
//

function localStorageValueCommand(this: NightwatchAPI, key: string, callback?: (value: string | null) => void) {
    const self = this;

    this.execute(
        // tslint:disable-next-line:only-arrow-functions
        function(key) {
            return window.localStorage.getItem(key);
        },
        [key], // arguments array to be passed
        result => {
            if (result.status) {
                throw result.value;
            }
            if (typeof callback === "function") {
                callback.call(self, result.value);
            }
        },
    );

    return this;
}

declare module "nightwatch" {
    interface NightwatchCustomCommands {
        localStorageValue(key: string, callback?: (value: string | null) => void): this;
    }
}

// module.exports.command = resizeCommand;

const testCustomCommandFunction = {
    "Test command function": () => {
        browser.localStorageValue("my-key", result => {
            console.log(result);
        });
    },
};

//
// ./commands/consoleLog.ts
// - class based command
//

class ConsoleLog extends EventEmitter {
    command(this: ConsoleLog & NightwatchAPI, message: string, ...args: any[]) {
        setTimeout(() => {
            console.log(message, ...args);
            this.emit("complete");
        }, 1);

        return this;
    }
}

declare module "nightwatch" {
    interface NightwatchCustomCommands {
        consoleLog(message: string, ...args: any[]): this;
    }
}

// module.exports = ConsoleLog;

const testCustomCommandClass = {
    "Test command class": () => {
        browser.consoleLog("Hello world!");
    },
};

//
// ./assertions/text.ts
//

function text(this: NightwatchAssertion<string>, selector: string, expectedText: string, msg?: string) {
    this.expected = expectedText;

    this.message = msg || `Element <${selector}> has text ${this.expected}.`;

    this.pass = value => value === expectedText;

    this.value = result => result;

    this.command = function(callback) {
        this.api.element("css selector", selector, elementResult => {
            if (elementResult.status) {
                callback(null);
                return;
            }
            this.api.elementIdText(elementResult.value[ELEMENT_KEY], textResult => {
                if (textResult.status) {
                    callback(null);
                    return;
                }
                callback(textResult.value);
            });
        });
        return this;
    };

    isType<NightwatchClientObject>(this.client);
}

// exports.assertion = text;

declare module "nightwatch" {
    interface NightwatchCustomAssertions {
        text: (selector: string, expectedText: string, msg?: string) => NightwatchAPI;
    }
}

const testCustomAssertion = {
    "Test custom assertion": () => {
        browser.assert.text("#checkme", "Exactly match text");
    },
};

// test global element

describe("demo element() global", () => {
    const signupEl = element(by.css("#signupSection"));
    const loginEl = element("#weblogin");

    test("element globals command", async () => {
        // use elements created with element() to regular nightwatch assertions
        browser.assert.visible(loginEl);

        // use elements created with element() to expect assertions
        browser.expect.element(loginEl).to.be.visible;

        // retrieve the WebElement instance
        const loginWebElement = await loginEl.getWebElement();
    });
});

// Ensure test

it("Ensure demo test", () => {
    browser
        .url("https://nightwatchjs.org")
        .ensure.titleMatches(/Nightwatch.js/)
        .ensure.elementIsVisible("#index-container");
});

it("Ensure async/await demo test", async () => {
    const result = await browser
        .url("https://nightwatchjs.org")
        .ensure.urlContains("nightwatch")
        .ensure.titleMatches(/Nightwatch.js/)
        .ensure.elementIsVisible("#index-container");

    function isNightwatchEnsureResult(v: NightwatchEnsureResult) {}
    function isNull(v: null) {}

    isNightwatchEnsureResult(result);
    isNull(result.value);
});

// chai expect test

it("Chai demo test", () => {
    const infoElement = element(".info");
    expect(infoElement.property("innerHTML")).to.be.a("string").and.to.include("validation code");
});

// Relative locator test

describe("sample with relative locators", () => {
    before(browser => browser.navigateTo("https://archive.org/account/login"));

    it("locates password input", () => {
        const passwordElement = locateWith(By.tagName("input")).below(By.css("input[type=email]"));

        browser.waitForElementVisible(passwordElement).expect.element(passwordElement).to.be.an("input");

        browser.expect.element(passwordElement).attribute("type").equal("password");
    });
});
