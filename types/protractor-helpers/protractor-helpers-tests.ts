/// <reference types="jasmine" />

import helpers = require('protractor-helpers');
import * as webdriver from "selenium-webdriver";

declare var $$: any, $: any, by: any, element: any; // ??

function testElementArrayFinder() {

  var single1 : protractor.ElementFinder = $$('.foo').getByText('Hello');
  var multiple : protractor.ElementArrayFinder = $$('.foo').$$data('Hello');

}

function testElementFinder () {
  var single2 : protractor.ElementFinder = $('.foo').$data('Hello');
}

function testGlobals() {

  var single : protractor.ElementFinder = $data('Hello');
  var multiple : protractor.ElementArrayFinder = $$data('Hello');

}

function testHelpers() {

  var q0 : webdriver.promise.IThenable<boolean> = helpers.not($('.foo').isDisplayed());
  // TODO - Check impl
  var q1 : webdriver.promise.IThenable<{[key: string]:string}> = helpers.translate(["foo", "bar"]);
  var q2 : webdriver.promise.IThenable<{[key: string]:string}> = helpers.translate(["foo", "bar"], {name: 'foo'});
  var q3 : webdriver.promise.IThenable<string> = helpers.translate("foo");
  var q4 : webdriver.promise.IThenable<string> = helpers.translate("foo", {name: 'foo'});

  helpers.safeGet('https://foo/');

  helpers.maximizeWindow(500, 500);
  helpers.maximizeWindow(500);
  helpers.maximizeWindow(undefined, 500);
  helpers.maximizeWindow();

  helpers.resetPosition();
  helpers.moveToElement(".foo"); // TODO - ?

  helpers.displayHover($('.foo'));

  helpers.waitForElement($('.foo'));
  helpers.waitForElement($('.foo'), 1000);
  helpers.waitForElementToDisappear($('.foo'));;
  helpers.waitForElementToDisappear($('.foo'), 1000);

  helpers.selectOptionByText($('select'), "GB");
  helpers.selectOptionByIndex($('select'), 1);

  helpers.selectOption($$('select option').first());

  var ff : boolean = helpers.isFirefox();
  var ie : boolean = helpers.isIE();

  var msg : string = helpers.createMessage("actual", "message", true);
  var msg : string = helpers.createMessage($('.foo'), "message", true);
  var msg : string = helpers.createMessage($$('.foo'), "message", true);

  helpers.clearAndSetValue($('input'), 'Foo');

  var hc : webdriver.promise.IThenable<boolean> = helpers.hasClass($('.foo'), 'foo');

  var hv : webdriver.promise.IThenable<boolean> = helpers.hasValue($('input[type=text]'), 'foo');
  var hv1 : webdriver.promise.IThenable<boolean> = helpers.hasValue($('input[type=numeric]'), 12);
  var hl : webdriver.promise.IThenable<boolean> = helpers.hasLink($('div'), 'http://foo.com');
  var disabled : webdriver.promise.IThenable<boolean> = helpers.isDisabled($('foo'));
  var checked : webdriver.promise.IThenable<boolean> = helpers.isChecked($('foo'));

  var q5 : webdriver.promise.IThenable<string[]> = helpers.getFilteredConsoleErrors();

}

function testLocators() {

	element(by.dataHook("foo"));
	element(by.dataHook("foo", $('.parentfoo')));
	element(by.dataHook("foo", undefined          , ".foo"));
	element(by.dataHook("foo", $('.parentfoo'), ".foo")); // TODO - This might not make much sense, but can technically be used in working code. Opinions welcome

	element.all(by.dataHook("foo"));
	element.all(by.dataHook("foo", $('parentfoo')));
	element.all(by.dataHook("foo", undefined          , ".foo"));
	element.all(by.dataHook("foo", $('parentfoo'), ".foo")); // TODO - This might not make much sense, but can technically be used in working code. Opinions welcome

}

function testMatchers() {

  var expectResult : boolean;
	expectResult = expect($('.foo')).toBePresent();
	expectResult = expect($('.foo')).toBeDisplayed();
	expectResult = expect($$('.foo').count()).toHaveCountOf(1);
	expectResult = expect($('.foo')).toHaveText("bla");
	expectResult = expect($('.foo')).toMatchRegex(/bla/);
	expectResult = expect($('.foo').getText()).toMatchMoney(123, "£");
	expectResult = expect($('.foo').getText()).toMatchMoneyWithFraction(123.45, "£");
	expectResult = expect($('input')).toHaveValue(12);
	expectResult = expect($('input')).toHaveValue("bla");
	expectResult = expect($('.foo')).toHaveClass("foo");
	expectResult = expect($('.foo')).toHaveUrl('https://foo.com');
	expectResult = expect($('.foo')).toBeDisabled();
	expectResult = expect($('.foo')).toBeChecked();
	expectResult = expect($('.foo')).toBeValid();
	expectResult = expect($('.foo')).toBeInvalid();
	expectResult = expect($('.foo')).toBeInvalidRequired();
	expectResult = expect($('.foo')).toMatchTranslated("foo");
	expectResult = expect($('.foo')).toMatchTranslated("foo", {foo: "bar"});
	expectResult = expect($('.foo')).toMatchTranslated(["foo"]);
	expectResult = expect($('.foo')).toMatchTranslated(["foo", "bla"], {foo: "bar"});

}

