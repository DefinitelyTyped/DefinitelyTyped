// Type definitions for protractor-helpers v1.0.0
// Project: https://github.com/wix/protractor-helpers
// Definitions by: John Cant <https://github.com/johncant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angular-protractor/angular-protractor.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />
/// <reference path="../selenium-webdriver/selenium-webdriver.d.ts" />

// ElementArrayFinder

declare namespace protractor {
  interface ElementArrayFinder {
    getByText(text: string) : protractor.ElementFinder;
    $$data(hook: string) : protractor.ElementArrayFinder;
  }

  interface ElementFinder {
    $data(hook: string) : protractor.ElementFinder;
  }
}

// Globals

declare function $data(hook: string) : protractor.ElementFinder;
declare function $$data(hook: string) : protractor.ElementArrayFinder;


// Locators

// TODO - find out about result of querySelector and querySelector all.
//        Are they Locator s?
declare namespace protractor {
	interface IProtractorLocatorStrategy {
		dataHook(hook: string, optParentElement?: protractor.ElementFinder, optRootSelector?: string) : webdriver.Locator;
		dataHookAll(hook: string, optParentElement?: protractor.ElementFinder, optRootSelector?: string) : webdriver.Locator;
	}
}

// Matchers
// TODO - Typescript doesn't really help much here
//        we don't know what type is being tested.
//        Fixing this would require modifying the
//        jasmine d.ts.

declare namespace jasmine {
  interface Matchers {
    toBePresent() : boolean;
    toBeDisplayed() : boolean;
    toHaveCountOf(expectedCount : number) : boolean;
    toHaveText(expectedText : string) : boolean;
    toMatchRegex(regex : RegExp) : boolean;
    toMatchMoney(expectedValue : number, currencySymbol? : string) : boolean;
    toMatchMoneyWithFraction(expectedValue : number, currencySymbol?: string) : boolean;
    toHaveValue(actual: string | number) : boolean;
    toHaveClass(className : string) : boolean;
    toHaveUrl(url : string) : boolean;
    toBeDisabled() : boolean;
    toBeChecked() : boolean;
    toBeValid() : boolean;
    toBeInvalid() : boolean;
    toBeInvalidRequired() : boolean;
    // Copied definitions from angular-translate.
    toMatchTranslated(translationId : string, interpolateParams? : any) : boolean;
    toMatchTranslated(translationId : string[], interpolateParams? : any) : boolean;
  }
}


declare module "protractor-helpers" {

  function not(arg: webdriver.promise.IThenable<any>) : webdriver.promise.IThenable<boolean>;

  // Copied definitions from angular-translate.
  function translate(translationId: string, interpolateParams?: any): webdriver.promise.IThenable<string>;
  function translate(translationId: string[], interpolateParams?: any): webdriver.promise.IThenable<{ [key: string]: string }>;

  function safeGet(url: string) : void;

  function maximizeWindow(width?: number, height?: number) : void; // TODO
  function resetPosition() : void;
  function moveToElement(hook: string) : void;
  function displayHover(element: protractor.ElementFinder) : void;

  function waitForElement(element: protractor.ElementFinder, timeout?: number) : void;
  function waitForElementToDisappear(element: protractor.ElementFinder, timeout?: number) : void;

  function selectOptionByText(select: protractor.ElementFinder, text: string) : void;
  function selectOptionByIndex(select: protractor.ElementFinder, index: number) : void;

  function selectOption(option: protractor.ElementFinder) : void

  function isFirefox() : boolean;
  function isIE() : boolean;

  function createMessage(actual : string, message : string, isNot : any) : string; // isNot : boolean too inflexible
  function createMessage(actual : protractor.ElementFinder, message : string, isNot : any) : string; // isNot : boolean too inflexible
  function createMessage(actual : protractor.ElementArrayFinder, message : string, isNot : any) : string; // isNot : boolean too inflexible

  function clearAndSetValue(input : protractor.ElementFinder, value : string) : void; // TODO - sendKeys(value)

  function hasClass(element: protractor.ElementFinder, className: string) : webdriver.promise.IThenable<boolean>;
  function hasValue(element: protractor.ElementFinder, expectedValue: string) : webdriver.promise.IThenable<boolean>;
  function hasValue(element: protractor.ElementFinder, expectedValue: number) : webdriver.promise.IThenable<boolean>;
  function hasLink(element: protractor.ElementFinder, url: string) : webdriver.promise.IThenable<boolean>;
  function isDisabled(element: protractor.ElementFinder) : webdriver.promise.IThenable<boolean>;
  function isChecked(element: protractor.ElementFinder) : webdriver.promise.IThenable<boolean>;
  function getFilteredConsoleErrors() : webdriver.promise.IThenable<string[]>; // TODO - discuss handling in IE

}
