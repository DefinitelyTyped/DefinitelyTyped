import {
    Cookie,
    ElementResult,
    JSON_WEB_OBJECT,
    NightwatchLogEntry,
    NightwatchLogTypes,
    NightwatchSizeAndPosition,
    WindowPosition,
    WindowSizeAndPosition,
} from "nightwatch";

import { isNightwatchAPI, isNightwatchCallbackResult, isType, UnknownToTrue } from "./utils";

//
// .elementIdAttribute
//
describe("elementIdAttribute command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdAttribute(webElement.getId(), "title", function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string | null>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdAttribute(webElement.getId(), "title");
        isType<string | null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdCssProperty
//
describe("elementIdCssProperty command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdCssProperty(webElement.getId(), "background-color", function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string | null>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdCssProperty(webElement.getId(), "background-color");
        isType<string | null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdDisplayed
//
describe("elementIdDisplayed command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdDisplayed(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdDisplayed(webElement.getId());
        isType<boolean>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdEnabled
//
describe("elementIdEnabled command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdEnabled(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdEnabled(webElement.getId());
        isType<boolean>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdName
//
describe("elementIdName command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdName(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdName(webElement.getId());
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdSelected
//
describe("elementIdSelected command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdSelected(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<boolean>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdSelected(webElement.getId());
        isType<boolean>(result);
    });

    after(browser => browser.end());
});

//
// .submit
//
describe("submit command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.submit(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.submit(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdSize
//
describe("elementIdSize command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdSize(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdSize(webElement.getId());
        isType<NightwatchSizeAndPosition>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdText
//
describe("elementIdText command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdText(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdText(webElement.getId());
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdClear
//
describe("elementIdClear command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdClear(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdClear(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdClick
//
describe("elementIdClick command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdClick(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdClick(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdValue
//
describe("elementIdValue command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdValue(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdValue(webElement.getId());
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdLocation
//
describe("elementIdLocation command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdLocation(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdLocation(webElement.getId());
        isType<NightwatchSizeAndPosition>(result);
    });

    after(browser => browser.end());
});

//
// .source
//
describe("source command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.source(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.source();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .doubleClick
//
describe("doubleClick command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.doubleClick("input[type=text]", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.doubleClick("input[type=text]");
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .clickAndHold
//
describe("clickAndHold command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.clickAndHold("input[type=text]", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.clickAndHold("input[type=text]");
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .moveTo
//
describe("moveTo command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.moveTo(null, 100, 100, function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.moveTo(100, 100);
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .rightClick
//
describe("rightClick command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.rightClick("input[type=text]", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.rightClick("input[type=text]");
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .acceptAlert
//
describe("acceptAlert command demo", function() {
    before(browser => browser.url("https://nightwatchjs.org/__e2e/window/alerts.html/"));

    test("demo test", function(browser) {
        browser.click("#show-alert")
            .acceptAlert(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.click("#show-alert").acceptAlert();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .dismissAlert
//
describe("dismissAlert command demo", function() {
    before(browser => browser.url("https://nightwatchjs.org/__e2e/window/alerts.html/"));

    test("demo test", function(browser) {
        browser.click("#show-alert")
            .dismissAlert(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.click("#show-alert").dismissAlert();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .getAlertText
//
describe("getAlertText command demo", function() {
    before(browser => browser.url("https://nightwatchjs.org/__e2e/window/alerts.html/"));

    test("demo test", function(browser) {
        browser.click("#show-alert")
            .getAlertText(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.click("#show-alert").getAlertText();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .setAlertText
//
describe("setAlertText command demo", function() {
    before(browser => browser.url("https://nightwatchjs.org/__e2e/window/alerts.html/"));

    test("demo test", function(browser) {
        browser.click("#show-alert")
            .setAlertText("nightwatch", function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
    });

    test("async demo test", async function(browser) {
        const result = await browser.click("#show-alert").setAlertText("nightwatch");
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .registerBasicAuth
//
describe("registerBasicAuth command demo", function() {
    test("demo test", function(browser) {
        browser.registerBasicAuth("test", "test", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.registerBasicAuth("test", "test");
        isType<null>(result);
    });
});

//
// .cookie
//
describe("cookie command demo", function() {
    test("demo test", function(browser) {
        browser.cookie("GET", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<Cookie[] | null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.cookie("DELETE", "sample");
        isType<null>(result);
    });
});

//
// .session
//
describe("session command demo", function() {
    test("demo test", function(browser) {
        browser.session(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<Record<string, any>>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.session();
        isType<Record<string, any>>(result);
    });
});

//
// .sessionLog
//
describe("sessionLog command demo", function() {
    test("demo test", function(browser) {
        browser.sessionLog("driver", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<NightwatchLogEntry[]>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.sessionLog("driver");
        isType<NightwatchLogEntry[]>(result);
    });
});

//
// .sessionLogTypes
//
describe("sessionLogTypes command demo", function() {
    test("demo test", function(browser) {
        browser.sessionLogTypes(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<NightwatchLogTypes[]>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.sessionLogTypes();
        isType<NightwatchLogTypes[]>(result);
    });
});

//
// .url
//
describe("url command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.url(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.url();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .title
//
describe("title command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.title(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.title();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .back
//
describe("back command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.back(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.back();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .forward
//
describe("forward command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.forward(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.forward();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .refresh
//
describe("refresh command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.refresh(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.refresh();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .windowHandle
//
describe("windowHandle command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.windowHandle(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.windowHandle();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .windowMaximize
//
describe("windowMaximize command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.windowMaximize("current", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.windowMaximize();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .windowPosition
//
describe("windowPosition command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.windowPosition("current", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<WindowPosition>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.windowPosition("current", 22, 47);
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .windowSize
//
describe("windowSize command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.windowSize("current", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<WindowSizeAndPosition>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.windowSize("current", 746, 1200);
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .windowRect
//
describe("windowRect command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.windowRect({ width: 100, height: 100 }, function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.windowRect(null);
        isType<WindowSizeAndPosition>(result);
    });

    after(browser => browser.end());
});

//
// .frame
//
describe("frame command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.frame(null, function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.frame(null);
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .frameParent
//
describe("frameParent command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.frame(null).frameParent(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.frame(null).frameParent();
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdElement
//
describe("elementIdElement command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdElement(webElement.getId(), "css selector", "body", function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<ElementResult | []>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdElement(webElement.getId(), "css selector", "body");
        isType<ElementResult | []>(result);
    });

    after(browser => browser.end());
});

//
// .elementIdDoubleClick
//
describe("elementIdDoubleClick command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.findElement("input[type=text]", function(result) {
            const webElement = result.value as JSON_WEB_OBJECT;
            browser.elementIdDoubleClick(webElement.getId(), function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result);
            });
        });
    });

    test("async demo test", async function(browser) {
        const webElement = await browser.findElement("input[type=text]");
        const result = await browser.elementIdDoubleClick(webElement.getId());
        isType<null>(result);
    });

    after(browser => browser.end());
});

//
// .elementActive
//
describe("elementActive command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.elementActive(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.elementActive();
        isType<string>(result);
    });

    after(browser => browser.end());
});

//
// .element
//
describe("element command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", function(browser) {
        browser.element("css selector", "body", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<ElementResult>(result);
        });
    });

    test("async demo test", async function(browser) {
        const result = await browser.element("css selector", "body");
        isType<ElementResult>(result);
    });

    after(browser => browser.end());
});

//
// .execute
//
describe("execute command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", async function(browser) {
        const result1 = await browser.execute(function() {});
        isType<null>(result1);

        const result2 = await browser.execute(function() {
            return "nightwatch";
        });
        isType<string>(result2);

        // @ts-expect-error
        await browser.execute(function(arg1: string) {
            return "nightwatch";
        });

        await browser.execute(function(arg1: string) {
            return "nightwatch";
        }, ["js"]);

        // @ts-expect-error
        await browser.execute(function(arg1: string) {
            return "nightwatch";
        }, [123]);

        // @ts-expect-error
        await browser.execute(function(arg1: string) {
            return "nightwatch";
        }, ["js", 123]);

        const result3 = await browser.execute("something");
        const result3Type: UnknownToTrue<typeof result3> = true;

        const result4 = await browser.execute("something", ["something", 5]);
        const result4Type: UnknownToTrue<typeof result4> = true;
    });

    after(browser => browser.end());
});

//
// .executeScript
//
describe("executeScript command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", async function(browser) {
        const result1 = await browser.executeScript(function() {});
        isType<null>(result1);

        const result2 = await browser.executeScript(function() {
            return "nightwatch";
        });
        isType<string>(result2);

        const result3 = await browser.executeScript(function(arg1) {
            return arg1;
        }, ["nightwatch"]);
        isType<string>(result3);

        // @ts-expect-error
        await browser.executeScript(function(arg1: string) {
            return "nightwatch";
        });

        await browser.executeScript(function(arg1: string) {
            return "nightwatch";
        }, ["js"]);

        // @ts-expect-error
        await browser.executeScript(function(arg1: string) {
            return "nightwatch";
        }, [123]);

        // @ts-expect-error
        await browser.executeScript(function(arg1: string) {
            return "nightwatch";
        }, ["js", 123]);

        const result4 = await browser.execute("something");
        const result4Type: UnknownToTrue<typeof result4> = true;

        const result5 = await browser.execute("something", ["something", 5]);
        const result5Type: UnknownToTrue<typeof result5> = true;
    });

    after(browser => browser.end());
});

//
// .executeAsyncScript
//
describe("executeAsyncScript command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", async function(browser) {
        const result = await browser.executeAsyncScript(
            function(arg1: string, arg2: number, done: (arg: string) => void) {
                return "nightwatch";
            },
            ["js", 1],
        );
        isType<string>(result);

        const result1 = await browser.executeAsyncScript(function(done: () => void) {
            return "nightwatch";
        });
        const result1Type: UnknownToTrue<typeof result1> = true;

        const result2 = await browser.executeAsyncScript(function() {});
        const result2Type: UnknownToTrue<typeof result2> = true;

        const result3 = await browser.executeAsyncScript(function(arg1: number, done) {
            return "nightwatch";
        }, [2]);
        const result3Type: UnknownToTrue<typeof result3> = true;

        // @ts-expect-error
        await browser.executeAsyncScript(function(arg1: string) {
            return "nightwatch";
        });

        // @ts-expect-error
        await browser.executeAsyncScript(function(arg1: string, done: (result: string) => void) {
            return "nightwatch";
        }, [123]);

        // @ts-expect-error
        await browser.executeAsyncScript(function(arg1: string, done) {
            return "nightwatch";
        }, ["js", 123]);

        const result4 = await browser.executeAsyncScript("something");
        const result4Type: UnknownToTrue<typeof result4> = true;

        const result5 = await browser.executeAsyncScript("something", ["something", 5]);
        const result5Type: UnknownToTrue<typeof result5> = true;
    });

    after(browser => browser.end());
});

//
// .executeAsync
//
describe("executeAsync command demo", function() {
    before(browser => browser.url("https://www.google.com/"));

    test("demo test", async function(browser) {
        const result = await browser.executeAsync(
            function(arg1: string, arg2: number, done: (arg: string) => void) {
                return "nightwatch";
            },
            ["js", 1],
        );
        isType<string>(result);

        const result1 = await browser.executeAsync(function(done: () => void) {
            return "nightwatch";
        });
        const result1Type: UnknownToTrue<typeof result1> = true;

        const result2 = await browser.executeAsync(function() {});
        const result2Type: UnknownToTrue<typeof result2> = true;

        const result3 = await browser.executeAsync(function(arg1: number, done) {
            return "nightwatch";
        }, [2]);
        const result3Type: UnknownToTrue<typeof result3> = true;

        // @ts-expect-error
        await browser.executeAsync(function(arg1: string) {
            return "nightwatch";
        });

        // @ts-expect-error
        await browser.executeAsync(function(arg1: string, done: (result: string) => void) {
            return "nightwatch";
        }, [123]);

        // @ts-expect-error
        await browser.executeAsync(function(arg1: string, done) {
            return "nightwatch";
        }, ["js", 123]);

        const result4 = await browser.executeAsync("something");
        const result4Type: UnknownToTrue<typeof result4> = true;

        const result5 = await browser.executeAsync("something", ["something", 5]);
        const result5Type: UnknownToTrue<typeof result5> = true;
    });

    after(browser => browser.end());
});
