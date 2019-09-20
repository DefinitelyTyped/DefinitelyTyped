// Type definitions for protractor-helpers v1.0.0
// Project: https://github.com/wix/protractor-helpers
// Definitions by: John Cant <https://github.com/johncant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as webdriver from "selenium-webdriver";

declare global {
  // ElementArrayFinder

  namespace protractor {
    interface ElementArrayFinder {
      getByText(text: string) : protractor.ElementFinder;
      $$data(hook: string) : protractor.ElementArrayFinder;
    }

    interface ElementFinder {
      $data(hook: string) : protractor.ElementFinder;
    }
  }

  // Globals

  function $data(hook: string) : protractor.ElementFinder;
  function $$data(hook: string) : protractor.ElementArrayFinder;


  // Locators

  // TODO - find out about result of querySelector and querySelector all.
  //        Are they Locator s?
  namespace protractor {
    interface IProtractorLocatorStrategy {
      dataHook(hook: string, optParentElement?: protractor.ElementFinder, optRootSelector?: string) : webdriver.Locator;
      dataHookAll(hook: string, optParentElement?: protractor.ElementFinder, optRootSelector?: string) : webdriver.Locator;
    }
  }

  // Matchers
  // TODO - Use `T` to improve types

  // Note: This augments a namespace from '@types/jasmine'.
  // Intentionally not referencing those types from this file as they introduce many globals,
  // and users may use protractor-helpers but not jasmine, and have different definitions of those globals (e.g. through `jest`)
  namespace jasmine {
    interface Matchers<T> {
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
}

export function not(arg: webdriver.promise.IThenable<any>) : webdriver.promise.IThenable<boolean>;

// Copied definitions from angular-translate.
export function translate(translationId: string, interpolateParams?: any): webdriver.promise.IThenable<string>;
export function translate(translationId: string[], interpolateParams?: any): webdriver.promise.IThenable<{ [key: string]: string }>;

export function safeGet(url: string) : void;

export function maximizeWindow(width?: number, height?: number) : void; // TODO
export function resetPosition() : void;
export function moveToElement(hook: string) : void;
export function displayHover(element: protractor.ElementFinder) : void;

export function waitForElement(element: protractor.ElementFinder, timeout?: number) : void;
export function waitForElementToDisappear(element: protractor.ElementFinder, timeout?: number) : void;

export function selectOptionByText(select: protractor.ElementFinder, text: string) : void;
export function selectOptionByIndex(select: protractor.ElementFinder, index: number) : void;

export function selectOption(option: protractor.ElementFinder) : void

export function isFirefox() : boolean;
export function isIE() : boolean;

export function createMessage(actual : string, message : string, isNot : any) : string; // isNot : boolean too inflexible
export function createMessage(actual : protractor.ElementFinder, message : string, isNot : any) : string; // isNot : boolean too inflexible
export function createMessage(actual : protractor.ElementArrayFinder, message : string, isNot : any) : string; // isNot : boolean too inflexible

export function clearAndSetValue(input : protractor.ElementFinder, value : string) : void; // TODO - sendKeys(value)

export function hasClass(element: protractor.ElementFinder, className: string) : webdriver.promise.IThenable<boolean>;
export function hasValue(element: protractor.ElementFinder, expectedValue: string) : webdriver.promise.IThenable<boolean>;
export function hasValue(element: protractor.ElementFinder, expectedValue: number) : webdriver.promise.IThenable<boolean>;
export function hasLink(element: protractor.ElementFinder, url: string) : webdriver.promise.IThenable<boolean>;
export function isDisabled(element: protractor.ElementFinder) : webdriver.promise.IThenable<boolean>;
export function isChecked(element: protractor.ElementFinder) : webdriver.promise.IThenable<boolean>;
export function getFilteredConsoleErrors() : webdriver.promise.IThenable<string[]>; // TODO - discuss handling in IE
