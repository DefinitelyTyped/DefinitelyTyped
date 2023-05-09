import browser from 'k6/experimental/browser';

const url = 'http://example.com';
const selector = 'a[href="http://example.com"]';
const elementHandle: browser.ElementHandle = new browser.ElementHandle();

//
// Create a page
//
const page = new browser.Page();

// $ExpectType void
page.bringToFront();

// @ts-expect-error
page.check();
// $ExpectType void
page.check(selector);
// $ExpectType void
page.check(selector, { force: true });
// $ExpectType void
page.check(selector, { noWaitAfter: true });
// $ExpectType void
page.check(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.check(selector, { strict: true });
// $ExpectType void
page.check(selector, { timeout: 10000 });
// $ExpectType void
page.check(selector, { trial: true });

// @ts-expect-error
page.click();
// $ExpectType Promise<void>
page.click(selector);
// $ExpectType Promise<void>
page.click(selector, { button: 'left' });
// $ExpectType Promise<void>
page.click(selector, { button: 'middle' });
// $ExpectType Promise<void>
page.click(selector, { button: 'right' });
// $ExpectType Promise<void>
page.click(selector, { clickCount: 3 });
// $ExpectType Promise<void>
page.click(selector, { delay: 1000 });
// $ExpectType Promise<void>
page.click(selector, { force: true });
// $ExpectType Promise<void>
page.click(selector, { modifiers: ['Alt', 'Control', 'Meta', 'Shift'] });
// $ExpectType Promise<void>
page.click(selector, { noWaitAfter: true });
// $ExpectType Promise<void>
page.click(selector, { position: { x: 0, y: 0 } });
// $ExpectType Promise<void>
page.click(selector, { strict: true });
// $ExpectType Promise<void>
page.click(selector, { timeout: 10000 });
// $ExpectType Promise<void>
page.click(selector, { trial: true });

// $ExpectType void
page.close();

// $ExpectType string
page.content();

// $ExpectType BrowserContext
page.context();

// @ts-expect-error
page.dblclick();
// $ExpectType void
page.dblclick(selector);
// $ExpectType void
page.dblclick(selector, { button: 'left' });
// $ExpectType void
page.dblclick(selector, { button: 'middle' });
// $ExpectType void
page.dblclick(selector, { button: 'right' });
// $ExpectType void
page.dblclick(selector, { delay: 1000 });
// $ExpectType void
page.dblclick(selector, { force: true });
// $ExpectType void
page.dblclick(selector, { modifiers: ['Alt', 'Control', 'Meta', 'Shift'] });
// $ExpectType void
page.dblclick(selector, { noWaitAfter: true });
// $ExpectType void
page.dblclick(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.dblclick(selector, { strict: true });
// $ExpectType void
page.dblclick(selector, { timeout: 10000 });
// $ExpectType void
page.dblclick(selector, { trial: true });

// @ts-expect-error
page.dispatchEvent();
// @ts-expect-error
page.dispatchEvent(selector);
// $ExpectType void
page.dispatchEvent(selector, 'click');
// $ExpectType void
page.dispatchEvent(selector, 'click', undefined, { strict: true });
// $ExpectType void
page.dispatchEvent(selector, 'click', undefined, { timeout: 10000 });
// $ExpectType void
page.dispatchEvent(selector, 'click', { type: 'look' });
// @ts-expect-error
page.dispatchEvent(selector, 'click', 'string');

// $ExpectType void
page.emulateMedia();
// $ExpectType void
page.emulateMedia({ colorScheme: 'light' });
// $ExpectType void
page.emulateMedia({ colorScheme: 'dark' });
// $ExpectType void
page.emulateMedia({ colorScheme: 'no-preference' });
// $ExpectType void
page.emulateMedia({ media: 'screen' });
// $ExpectType void
page.emulateMedia({ media: 'print' });
// $ExpectType void
page.emulateMedia({ reducedMotion: 'no-preference' });
// $ExpectType void
page.emulateMedia({ reducedMotion: 'reduce' });

// @ts-expect-error
page.emulateVisionDeficiency();
// @ts-expect-error
page.emulateVisionDeficiency("");
// @ExpectType void
page.emulateVisionDeficiency("none");
// @ExpectType void
page.emulateVisionDeficiency("blurredVision");
// @ExpectType void
page.emulateVisionDeficiency("deuteranopia");
// @ExpectType void
page.emulateVisionDeficiency("protanopia");
// @ExpectType void
page.emulateVisionDeficiency("tritanopia");
// @ExpectType void
page.emulateVisionDeficiency("achromatopsia");

// @ts-expect-error
page.evaluate();
// @ts-expect-error
page.evaluate(1);
// @ExpectType void
page.evaluate("");
// @ExpectType void
page.evaluate(() => {});
// @ExpectType string
page.evaluate(() => { ""; });
// @ExpectType string
page.evaluate((a: string) => { a; }, "");
// @ExpectType string[]
page.evaluate((a: string[]) => a, [""]);

// @ts-expect-error
page.evaluateHandle();
// @ts-expect-error
page.evaluateHandle(1);
// @ExpectType JSHandle
page.evaluateHandle("");
// @ExpectType JSHandle
page.evaluateHandle(() => {});
// @ExpectType JSHandle
page.evaluateHandle(() => { ""; });
// @ExpectType JSHandle
page.evaluateHandle((a: string) => { a; }, "");
// @ExpectType JSHandle
page.evaluateHandle((a: string[]) => a, [""]);

// @ts-expect-error
page.fill();
// @ts-expect-error
page.fill(selector);
// $ExpectType void
page.fill(selector, "text");
// $ExpectType void
page.fill(selector, "text", { force: true });
// $ExpectType void
page.fill(selector, "text", { noWaitAfter: true });
// $ExpectType void
page.fill(selector, "text", { strict: true });
// $ExpectType void
page.fill(selector, "text", { timeout: 10000 });

// @ts-expect-error
page.focus();
// $ExpectType void
page.focus(selector);
// $ExpectType void
page.focus(selector, { strict: true });
// $ExpectType void
page.focus(selector, { timeout: 10000 });

// $ExpectType Frame[]
page.frames();

// @ts-expect-error
page.getAttribute();
// @ts-expect-error
page.getAttribute(selector);
// $ExpectType string | null
page.getAttribute(selector, "text");
// $ExpectType string | null
page.getAttribute(selector, "text", { strict: true });
// $ExpectType string | null
page.getAttribute(selector, "text", { timeout: 10000 });

// @ts-expect-error
page.goto();
// $ExpectType Promise<Response | null>
page.goto(url);
// $ExpectType Promise<Response | null>
page.goto(url, { referer: "http://example.com" });
// $ExpectType Promise<Response | null>
page.goto(url, { timeout: 10000 });
// $ExpectType Promise<Response | null>
page.goto(url, { waitUntil: "networkidle" });

// @ts-expect-error
page.hover();
// $ExpectType void
page.hover(selector);
// $ExpectType void
page.hover(selector, { force: true });
// $ExpectType void
page.hover(selector, { modifiers: ['Alt', 'Control', 'Meta', 'Shift'] });
// $ExpectType void
page.hover(selector, { noWaitAfter: true });
// $ExpectType void
page.hover(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.hover(selector, { strict: true });
// $ExpectType void
page.hover(selector, { timeout: 10000 });
// $ExpectType void
page.hover(selector, { trial: true });

// @ts-expect-error
page.innerHTML();
// $ExpectType string
page.innerHTML(selector);
// $ExpectType string
page.innerHTML(selector, { strict: true });
// $ExpectType string
page.innerHTML(selector, { timeout: 10000 });

// @ts-expect-error
page.innerText();
// $ExpectType string
page.innerText(selector);
// $ExpectType string
page.innerText(selector, { strict: true });
// $ExpectType string
page.innerText(selector, { timeout: 10000 });

// @ts-expect-error
page.inputValue();
// $ExpectType string
page.inputValue(selector);
// $ExpectType string
page.inputValue(selector, { strict: true });
// $ExpectType string
page.inputValue(selector, { timeout: 10000 });

// @ts-expect-error
page.isChecked();
// $ExpectType boolean
page.isChecked(selector);
// $ExpectType boolean
page.isChecked(selector, { strict: true });
// $ExpectType boolean
page.isChecked(selector, { timeout: 10000 });

// $ExpectType boolean
page.isClosed();

// @ts-expect-error
page.isDisabled();
// $ExpectType boolean
page.isDisabled(selector);
// $ExpectType boolean
page.isDisabled(selector, { strict: true });
// $ExpectType boolean
page.isDisabled(selector, { timeout: 10000 });

// @ts-expect-error
page.isEditable();
// $ExpectType boolean
page.isEditable(selector);
// $ExpectType boolean
page.isEditable(selector, { strict: true });
// $ExpectType boolean
page.isEditable(selector, { timeout: 10000 });

// @ts-expect-error
page.isEnabled();
// $ExpectType boolean
page.isEnabled(selector);
// $ExpectType boolean
page.isEnabled(selector, { strict: true });
// $ExpectType boolean
page.isEnabled(selector, { timeout: 10000 });

// @ts-expect-error
page.isHidden();
// $ExpectType boolean
page.isHidden(selector);
// $ExpectType boolean
page.isHidden(selector, { strict: true });
// $ExpectType boolean
page.isHidden(selector, { timeout: 10000 });

// @ts-expect-error
page.isVisible();
// $ExpectType boolean
page.isVisible(selector);
// $ExpectType boolean
page.isVisible(selector, { strict: true });
// $ExpectType boolean
page.isVisible(selector, { timeout: 10000 });

// $ExpectType Keyboard
page.keyboard;

// @ts-expect-error
page.locator();
// $ExpectType Locator
page.locator(selector);

// $ExpectType Frame
page.mainFrame();

// $ExpectType Mouse
page.mouse;

// $ExpectType Page | null
page.opener();

// @ts-expect-error
page.press();
// @ts-expect-error
page.press(selector);
// $ExpectType void
page.press(selector, "a");
// $ExpectType void
page.press(selector, "a", { delay: 1000 });
// $ExpectType void
page.press(selector, "a", { noWaitAfter: true });
// $ExpectType void
page.press(selector, "a", { strict: true });
// $ExpectType void
page.press(selector, "a", { timeout: 10000 });

// $ExpectType Response | null
page.reload();
// $ExpectType Response | null
page.reload({ timeout: 10000 });
// $ExpectType Response | null
page.reload({ waitUntil: "domcontentloaded" });

// $ExpectType ArrayBuffer
page.screenshot();
// $ExpectType ArrayBuffer
page.screenshot({ clip: { x: 0, y: 0, width: 800, height: 600 } });
// $ExpectType ArrayBuffer
page.screenshot({ fullPage: true });
// $ExpectType ArrayBuffer
page.screenshot({ omitBackground: true });
// $ExpectType ArrayBuffer
page.screenshot({ path: "image.jpeg" });
// $ExpectType ArrayBuffer
page.screenshot({ quality: 50 });
// $ExpectType ArrayBuffer
page.screenshot({ type: "jpeg" });
// $ExpectType ArrayBuffer
page.screenshot({ type: "png" });

// @ts-expect-error
page.selectOption();
// @ts-expect-error
page.selectOption(selector);
// $ExpectType string[]
page.selectOption(selector, "option");
// $ExpectType string[]
page.selectOption(selector, elementHandle);
// $ExpectType string[]
page.selectOption(selector, { value: "" });
// $ExpectType string[]
page.selectOption(selector, { label: "" });
// $ExpectType string[]
page.selectOption(selector, { index: "" });
// $ExpectType string[]
page.selectOption(selector, ["option", "option2"]);
// $ExpectType string[]
page.selectOption(selector, [elementHandle, elementHandle]);
// $ExpectType string[]
page.selectOption(selector, [{ value: "" }, { label: "" }]);
// $ExpectType string[]
page.selectOption(selector, "option", { force: true });
// $ExpectType string[]
page.selectOption(selector, "option", { noWaitAfter: true });
// $ExpectType string[]
page.selectOption(selector, "option", { strict: true });
// $ExpectType string[]
page.selectOption(selector, "option", { timeout: 10000 });

// @ts-expect-error
page.setContent();
// $ExpectType void
page.setContent("<html></html>", { timeout: 10000 });
// $ExpectType void
page.setContent("<html></html>", { timeout: 10000 });
// $ExpectType void
page.setContent("<html></html>", { waitUntil: "domcontentloaded" });

// @ts-expect-error
page.setDefaultNavigationTimeout();
// $ExpectType void
page.setDefaultNavigationTimeout(1000);

// @ts-expect-error
page.setDefaultTimeout();
// $ExpectType void
page.setDefaultTimeout(1000);

// @ts-expect-error
page.setExtraHTTPHeaders();
// $ExpectType void
page.setExtraHTTPHeaders({ Accept: "text/html" });

// @ts-expect-error
page.setViewportSize();
// $ExpectType void
page.setViewportSize({ width: 800, height: 600 });

// @ts-expect-error
page.tap();
// $ExpectType void
page.tap(selector);
// $ExpectType void
page.tap(selector, { force: true });
// $ExpectType void
page.tap(selector, { modifiers: ['Alt', 'Control', 'Meta', 'Shift'] });
// $ExpectType void
page.tap(selector, { noWaitAfter: true });
// $ExpectType void
page.tap(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.tap(selector, { strict: true });
// $ExpectType void
page.tap(selector, { timeout: 10000 });
// $ExpectType void
page.tap(selector, { trial: true });

// @ts-expect-error
page.textContent();
// $ExpectType string
page.textContent(selector);
// $ExpectType string
page.textContent(selector, { strict: true });
// $ExpectType string
page.textContent(selector, { timeout: 10000 });

// $ExpectType string
page.title();

// $ExpectType Touchscreen
page.touchscreen;

// @ts-expect-error
page.type();
// @ts-expect-error
page.type(selector);
// $ExpectType void
page.type(selector, "a");
// $ExpectType void
page.type(selector, "a", { delay: 1000 });
// $ExpectType void
page.type(selector, "a", { noWaitAfter: true });
// $ExpectType void
page.type(selector, "a", { strict: true });
// $ExpectType void
page.type(selector, "a", { timeout: 10000 });

// @ts-expect-error
page.uncheck();
// $ExpectType void
page.uncheck(selector);
// $ExpectType void
page.uncheck(selector, { force: true });
// $ExpectType void
page.uncheck(selector, { noWaitAfter: true });
// $ExpectType void
page.uncheck(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.uncheck(selector, { strict: true });
// $ExpectType void
page.uncheck(selector, { timeout: 10000 });
// $ExpectType void
page.uncheck(selector, { trial: true });

// $ExpectType string
page.url();

// $ExpectType { width: number; height: number; }
page.viewportSize();

// @ts-expect-error
page.waitForFunction();
// $ExpectType Promise<JSHandle<boolean>>
page.waitForFunction(() => true);
// $ExpectType Promise<JSHandle<boolean>>
page.waitForFunction(() => true, { polling: "raf" });
// $ExpectType Promise<JSHandle<boolean>>
page.waitForFunction(() => true, { polling: 100 });
// $ExpectType Promise<JSHandle<boolean>>
page.waitForFunction(() => true, { timeout: 10000 });
// $ExpectType Promise<JSHandle<boolean>>
page.waitForFunction((a: number) => a === 1, {}, 1);

// $ExpectType void
page.waitForLoadState();
// $ExpectType void
page.waitForLoadState("load");
// $ExpectType void
page.waitForLoadState("domcontentloaded");
// $ExpectType void
page.waitForLoadState("networkidle");
// $ExpectType void
page.waitForLoadState("load", { timeout: 10000 });

// $ExpectType Promise<Response | null>
page.waitForNavigation();
// $ExpectType Promise<Response | null>
page.waitForNavigation({ timeout: 10000 });
// $ExpectType Promise<Response | null>
page.waitForNavigation({ waitUntil: "load" });
// $ExpectType Promise<Response | null>
page.waitForNavigation({ waitUntil: "domcontentloaded" });
// $ExpectType Promise<Response | null>
page.waitForNavigation({ waitUntil: "networkidle" });

// @ts-expect-error
page.waitForSelector();
// $ExpectType ElementHandle
page.waitForSelector(selector);
// $ExpectType ElementHandle
page.waitForSelector(selector, { state: "attached" });
// $ExpectType ElementHandle
page.waitForSelector(selector, { state: "detached" });
// $ExpectType ElementHandle
page.waitForSelector(selector, { state: "visible" });
// $ExpectType ElementHandle
page.waitForSelector(selector, { state: "hidden" });
// $ExpectType ElementHandle
page.waitForSelector(selector, { strict: true });
// $ExpectType ElementHandle
page.waitForSelector(selector, { timeout: 10000 });

// @ts-expect-error
page.waitForTimeout();
// $ExpectType void
page.waitForTimeout(10000);

// $ExpectType Worker[]
page.workers();

// @ts-expect-error
page.$();
// $ExpectType ElementHandle
page.$(selector);

// @ts-expect-error
page.$$();
// $ExpectType ElementHandle[]
page.$$(selector);
