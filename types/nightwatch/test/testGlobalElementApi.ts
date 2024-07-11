import { ElementGlobal, NightwatchAPI, NightwatchCallbackResult, NightwatchSizeAndPosition } from "nightwatch";
import { WebElement } from "selenium-webdriver";
import { isNightwatchAPI, isNightwatchCallbackResult, isType } from "./utils";

describe("global element() api", function() {
    it("test element()", async function() {
        // string as locator
        const elem = element("selector");
        isType<ElementGlobal>(elem);
        isType<WebElement>(await elem.getWebElement());

        // WebElement as selector
        isType<ElementGlobal>(element(await elem.getWebElement()));

        // By as selector
        isType<ElementGlobal>(element(by.css("selector")));

        // ElementProperties as selector
        isType<ElementGlobal>(element({ selector: "selector", index: 4 }));

        // with options
        isType<ElementGlobal>(element("selector", { isComponent: true, type: "vue" }));
    });

    it("test element() methods and properties", async function() {
        // string as locator
        const elem = element("selector");
        isType<ElementGlobal>(elem);

        // .getId()
        isNightwatchAPI(elem.getId(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.getId());

        // .findElement()
        isNightwatchAPI(elem.findElement());
        isType<WebElement>(await elem.findElement());

        isNightwatchAPI(elem.findElement("child-selector", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<WebElement>(result);
        }));
        isType<WebElement>(await elem.findElement("child-selector"));

        // .find()
        isNightwatchAPI(elem.find());
        isType<WebElement>(await elem.find());

        isNightwatchAPI(elem.find("child-selector", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<ElementGlobal | null>(result);
        }));
        isType<ElementGlobal | null>(await elem.find("child-selector"));

        // .get()
        isNightwatchAPI(elem.get());
        isType<WebElement>(await elem.get());
        isType<WebElement>(await elem.element());

        isNightwatchAPI(elem.get("child-selector", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<ElementGlobal | null>(result);
        }));
        isType<ElementGlobal | null>(await elem.get("child-selector"));
        isType<ElementGlobal | null>(await elem.element("child-selector"));

        // .findElements()
        isNightwatchAPI(elem.findElements("child-selector", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<WebElement[]>(result);
        }));
        isType<WebElement[]>(await elem.findElements("child-selector"));

        // .findAll()
        isNightwatchAPI(elem.findAll("child-selector", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<ElementGlobal[]>(result);
        }));
        isType<ElementGlobal[]>(await elem.findAll("child-selector"));

        // .clear()
        isNightwatchAPI(elem.clear(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        }));
        isType<null>(await elem.clear());

        // .click()
        isNightwatchAPI(elem.click(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        }));
        isType<null>(await elem.click());

        // .getAccessibleName()
        isNightwatchAPI(elem.getAccessibleName(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.getAccessibleName());
        isType<string>(await elem.accessibleName());

        // .getAriaRole()
        isNightwatchAPI(elem.getAriaRole(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.getAriaRole());
        isType<string>(await elem.arialRole());

        // .getAttribute()
        isNightwatchAPI(elem.getAttribute("attribute-name", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string | null>(result);
        }));
        isType<string | null>(await elem.getAttribute("attribute-name"));
        isType<string | null>(await elem.attr("attribute-name"));
        isType<string | null>(await elem.attribute("attribute-name"));

        // .getCssValue()
        isNightwatchAPI(elem.getCssValue("prop-name", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.getCssValue("prop-name"));
        isType<string>(await elem.css("prop-name"));

        // .getProperty()
        isNightwatchAPI(elem.getProperty("prop-name", function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string | null>(result);
        }));
        isType<string | null>(await elem.getProperty("prop-name"));
        isType<string | null>(await elem.property("prop-name"));
        isType<string | null>(await elem.prop("prop-name"));

        // .getRect()
        isNightwatchAPI(elem.getRect(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<NightwatchSizeAndPosition>(result);
        }));
        isType<NightwatchSizeAndPosition>(await elem.getRect());
        isType<NightwatchSizeAndPosition>(await elem.rect());

        // .getTagName()
        isNightwatchAPI(elem.getTagName(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.getTagName());
        isType<string>(await elem.tagName());

        // .getText()
        isNightwatchAPI(elem.getText(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.getText());
        isType<string>(await elem.text());

        // .sendKeys()
        isNightwatchAPI(elem.sendKeys(1, "something", browser.Keys.SPACE, Promise.resolve(2)));
        isType<null>(await elem.sendKeys());

        // .submit()
        isNightwatchAPI(elem.submit(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
        }));
        isType<null>(await elem.submit());

        // .takeScreenshot()
        isNightwatchAPI(elem.takeScreenshot(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<string>(result);
        }));
        isType<string>(await elem.takeScreenshot());
        isType<string>(await elem.screenshot());

        // .isDisplayed()
        isNightwatchAPI(elem.isDisplayed(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<boolean>(result);
        }));
        isType<boolean>(await elem.isDisplayed());

        // .isEnabled()
        isNightwatchAPI(elem.isEnabled(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<boolean>(result);
        }));
        isType<boolean>(await elem.isEnabled());

        // .isSelected()
        isNightwatchAPI(elem.isSelected(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<boolean>(result);
        }));
        isType<boolean>(await elem.isSelected());

        // .getWebElement()
        isNightwatchAPI(elem.getWebElement());
        isType<WebElement>(await elem.getWebElement());

        // .isComponent
        isType<boolean>(elem.isComponent!);
    });
});
