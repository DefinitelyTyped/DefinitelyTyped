import { browser } from "k6/experimental/browser";

const url = "http://example.com";
const selector = "a[href=\"http://example.com\"]";

//
// browser tests
//

// $ExpectType void
browser.closeContext();

// $ExpectType BrowserContext
browser.context();

// $ExpectType boolean
browser.isConnected();

// $ExpectType BrowserContext
browser.newContext();
// $ExpectType BrowserContext
browser.newContext({ bypassCSP: true });
// $ExpectType BrowserContext
browser.newContext({ colorScheme: "light" });
// $ExpectType BrowserContext
browser.newContext({ colorScheme: "dark" });
// $ExpectType BrowserContext
browser.newContext({ colorScheme: "no-preference" });
// $ExpectType BrowserContext
browser.newContext({ deviceScaleFactor: 2 });
// $ExpectType BrowserContext
browser.newContext({ extraHTTPHeaders: { Accept: "text/html" } });
// $ExpectType BrowserContext
browser.newContext({ geolocation: { latitude: 0, longitude: 0, accuracy: 1 } });
// $ExpectType BrowserContext
browser.newContext({ hasTouch: true });
// $ExpectType BrowserContext
browser.newContext({ httpCredentials: { username: "username", password: "password" } });
// $ExpectType BrowserContext
browser.newContext({ ignoreHTTPSErrors: true });
// $ExpectType BrowserContext
browser.newContext({ isMobile: true });
// $ExpectType BrowserContext
browser.newContext({ javaScriptEnabled: true });
// $ExpectType BrowserContext
browser.newContext({ locale: "en-US" });
// $ExpectType BrowserContext
browser.newContext({ offline: true });
// $ExpectType BrowserContext
browser.newContext({ permissions: ["geolocation"] });
// $ExpectType BrowserContext
browser.newContext({ permissions: ["geolocation", "notifications"] });
// $ExpectType BrowserContext
browser.newContext({ reducedMotion: "reduce" });
// $ExpectType BrowserContext
browser.newContext({ reducedMotion: "no-preference" });
// $ExpectType BrowserContext
browser.newContext({ screen: { width: 1280, height: 720 } });
// $ExpectType BrowserContext
browser.newContext({ timezoneID: "GMT" });
// $ExpectType BrowserContext
browser.newContext({ userAgent: "foo" });
// $ExpectType BrowserContext
browser.newContext({ viewport: { width: 1280, height: 720 } });

// $ExpectType Page
browser.newPage();
// $ExpectType Page
browser.newPage({ bypassCSP: true });
// $ExpectType Page
browser.newPage({ colorScheme: "light" });
// $ExpectType Page
browser.newPage({ colorScheme: "dark" });
// $ExpectType Page
browser.newPage({ colorScheme: "no-preference" });
// $ExpectType Page
browser.newPage({ deviceScaleFactor: 2 });
// $ExpectType Page
browser.newPage({ extraHTTPHeaders: { Accept: "text/html" } });
// $ExpectType Page
browser.newPage({ geolocation: { latitude: 0, longitude: 0, accuracy: 1 } });
// $ExpectType Page
browser.newPage({ hasTouch: true });
// $ExpectType Page
browser.newPage({ httpCredentials: { username: "username", password: "password" } });
// $ExpectType Page
browser.newPage({ ignoreHTTPSErrors: true });
// $ExpectType Page
browser.newPage({ isMobile: true });
// $ExpectType Page
browser.newPage({ javaScriptEnabled: true });
// $ExpectType Page
browser.newPage({ locale: "en-US" });
// $ExpectType Page
browser.newPage({ offline: true });
// $ExpectType Page
browser.newPage({ permissions: ["geolocation"] });
// $ExpectType Page
browser.newPage({ permissions: ["geolocation", "notifications"] });
// $ExpectType Page
browser.newPage({ reducedMotion: "reduce" });
// $ExpectType Page
browser.newPage({ reducedMotion: "no-preference" });
// $ExpectType Page
browser.newPage({ screen: { width: 1280, height: 720 } });
// $ExpectType Page
browser.newPage({ timezoneID: "GMT" });
// $ExpectType Page
browser.newPage({ userAgent: "foo" });
// $ExpectType Page
browser.newPage({ viewport: { width: 1280, height: 720 } });

// $ExpectType string
browser.version();

//
// Create a browserContext
//
const browserContext = browser.newContext();

// $ExpectType Browser
browserContext.browser();
// @ts-expect-error
browserContext.addCookies();
// $ExpectType void
browserContext.addCookies([{
    name: "foo",
    value: "bar",
    domain: "test.k6.io",
    path: "/browser.php",
    url: "https://test.k6.io",
    expires: 60,
    httpOnly: false,
    secure: true,
    sameSite: "Lax",
}, {
    name: "foo",
    value: "bar",
    sameSite: "Strict",
}, {
    name: "foo",
    value: "bar",
    sameSite: "None",
}]);
// @ts-expect-error
browserContext.cookies()[0].sameSite = "NotAllowed";
// @ts-expect-error
browserContext.addCookies([{ /* without value */ name: "foo" }]);
// @ts-expect-error
browserContext.addCookies([{ /* without name */ value: "bar" }]);
// $ExpectType Cookie[]
browserContext.cookies();
// $ExpectType Cookie[]
browserContext.cookies("https://test.k6.io", "https://k6.io");
// $ExpectType void
browserContext.clearCookies();
// $ExpectType void
browserContext.clearPermissions();
// $ExpectType void
browserContext.close();
// @ts-expect-error
browserContext.grantPermissions();
// $ExpectType void
browserContext.grantPermissions(["geolocation", "notifications"]);
// $ExpectType void
browserContext.grantPermissions(["geolocation", "notifications"], { origin: "https://test.k6.io" });
// $ExpectType Page
browserContext.newPage();
// $ExpectType Page[]
browserContext.pages();
// $ExpectType void
browserContext.setDefaultNavigationTimeout(30000);
// $ExpectType void
browserContext.setDefaultTimeout(30000);
// $ExpectType void
browserContext.setGeolocation({ latitude: 0, longitude: 0, accuracy: 1 });
// $ExpectType void
browserContext.setOffline(true);
// $ExpectType Promise<Page>
browserContext.waitForEvent("page");
// $ExpectType Promise<Page>
browserContext.waitForEvent("page", () => true);
// $ExpectType Promise<Page>
browserContext.waitForEvent("page", { predicate: () => true });
// $ExpectType Promise<Page>
browserContext.waitForEvent("page", { predicate: () => true, timeout: 10000 });
// $ExpectType Promise<Page>
browserContext.waitForEvent("page", { timeout: 10000 });

//
// Create a page
//
const page = browser.newPage();

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
page.click(selector, { button: "left" });
// $ExpectType Promise<void>
page.click(selector, { button: "middle" });
// $ExpectType Promise<void>
page.click(selector, { button: "right" });
// $ExpectType Promise<void>
page.click(selector, { clickCount: 3 });
// $ExpectType Promise<void>
page.click(selector, { delay: 1000 });
// $ExpectType Promise<void>
page.click(selector, { force: true });
// $ExpectType Promise<void>
page.click(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
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
page.dblclick(selector, { button: "left" });
// $ExpectType void
page.dblclick(selector, { button: "middle" });
// $ExpectType void
page.dblclick(selector, { button: "right" });
// $ExpectType void
page.dblclick(selector, { delay: 1000 });
// $ExpectType void
page.dblclick(selector, { force: true });
// $ExpectType void
page.dblclick(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
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
page.dispatchEvent(selector, "click");
// $ExpectType void
page.dispatchEvent(selector, "click", undefined, { strict: true });
// $ExpectType void
page.dispatchEvent(selector, "click", undefined, { timeout: 10000 });
// $ExpectType void
page.dispatchEvent(selector, "click", { type: "look" });
// @ts-expect-error
page.dispatchEvent(selector, "click", "string");

// $ExpectType void
page.emulateMedia();
// $ExpectType void
page.emulateMedia({ colorScheme: "light" });
// $ExpectType void
page.emulateMedia({ colorScheme: "dark" });
// $ExpectType void
page.emulateMedia({ colorScheme: "no-preference" });
// $ExpectType void
page.emulateMedia({ media: "screen" });
// $ExpectType void
page.emulateMedia({ media: "print" });
// $ExpectType void
page.emulateMedia({ reducedMotion: "no-preference" });
// $ExpectType void
page.emulateMedia({ reducedMotion: "reduce" });

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
page.evaluate(() => {
    "";
});
// @ExpectType string
page.evaluate((a: string) => {
    a;
}, "");
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
page.evaluateHandle(() => {
    "";
});
// @ExpectType JSHandle
page.evaluateHandle((a: string) => {
    a;
}, "");
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
page.hover(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
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

// @ts-expect-error
page.isVisible();
// $ExpectType boolean
page.isVisible(selector);
// $ExpectType boolean
page.isVisible(selector, { strict: true });

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

// @ts-expect-error
page.on();
// @ts-expect-error
page.on("invalid");
// @ts-expect-error
page.on("console");
// $ExpectType void
page.on("console", msg => {
    // $ExpectType JSHandle<any>[]
    msg.args();
    // $ExpectType Page | null
    msg.page();
    // $ExpectType string
    msg.text();
    // $ExpectType string
    msg.type();
});

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
for (const format of ["png", "jpeg"]) {
    // $ExpectType ArrayBuffer
    page.screenshot({ type: format as any });
}

// @ts-expect-error
page.selectOption();
// @ts-expect-error
page.selectOption(selector);
// $ExpectType string[]
page.selectOption(selector, "option");
// $ExpectType string[]
page.selectOption(selector, page.waitForSelector(selector));
// $ExpectType string[]
page.selectOption(selector, { value: "" });
// $ExpectType string[]
page.selectOption(selector, { label: "" });
// $ExpectType string[]
page.selectOption(selector, { index: 0 });
// $ExpectType string[]
page.selectOption(selector, ["option", "option2"]);
// $ExpectType string[]
page.selectOption(selector, [page.waitForSelector(selector), page.waitForSelector(selector)]);
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
page.tap(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
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
page.throttleCPU();
// $ExpectType void
page.throttleCPU({ rate: 2 });

// @ts-expect-error
page.throttleNetwork();
// $ExpectType void
page.throttleNetwork({ latency: 500, download: 200, upload: 100 });

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

//
// Keyboard
//
const keyboard = page.keyboard;

// @ts-expect-error
keyboard.down();
// $ExpectType void
keyboard.down("a");

// @ts-expect-error
keyboard.insertText();
// $ExpectType void
keyboard.insertText("a");

// @ts-expect-error
keyboard.press();
// $ExpectType void
keyboard.press("a");
// $ExpectType void
keyboard.press("a", { delay: 1000 });

// @ts-expect-error
keyboard.type();
// $ExpectType void
keyboard.type("a");
// $ExpectType void
keyboard.type("a", { delay: 1000 });

// @ts-expect-error
keyboard.up();
// $ExpectType void
keyboard.up("a");

//
// Mouse
//

const mouse = page.mouse;

// @ts-expect-error
mouse.click();
// @ts-expect-error
mouse.click(0);
// $ExpectType void
mouse.click(0, 0);
// $ExpectType void
mouse.click(0, 0, { button: "right" });
// $ExpectType void
mouse.click(0, 0, { clickCount: 2 });
// $ExpectType void
mouse.click(0, 0, { delay: 1000 });

// @ts-expect-error
mouse.dblclick();
// @ts-expect-error
mouse.dblclick(0);
// $ExpectType void
mouse.dblclick(0, 0);
// $ExpectType void
mouse.dblclick(0, 0, { button: "right" });
// $ExpectType void
mouse.dblclick(0, 0, { delay: 1000 });

// $ExpectType void
mouse.down();
// $ExpectType void
mouse.down({ button: "right" });
// $ExpectType void
mouse.down({ clickCount: 2 });

// @ts-expect-error
mouse.move();
// @ts-expect-error
mouse.move(0);
// $ExpectType void
mouse.move(0, 0);
// $ExpectType void
mouse.move(0, 0, { steps: 10 });

// $ExpectType void
mouse.up();
// $ExpectType void
mouse.up({ button: "right" });
// $ExpectType void
mouse.up({ clickCount: 2 });

//
// Locator
//
const locator = page.locator(selector);

// $ExpectType void
locator.clear();
// $ExpectType void
locator.clear({ noWaitAfter: true, timeout: 10000 });

// $ExpectType Promise<void>
locator.click();
// $ExpectType Promise<void>
locator.click({ button: "right" });
// @ts-expect-error
locator.click({ button: "top" });
// $ExpectType Promise<void>
locator.click({ delay: 1000 });
// $ExpectType Promise<void>
locator.click({ clickCount: 2 });
// $ExpectType Promise<void>
locator.click({ force: true });
// $ExpectType Promise<void>
locator.click({ modifiers: ["Alt", "Control", "Meta", "Shift"] });
// $ExpectType Promise<void>
locator.click({ noWaitAfter: true });
// $ExpectType Promise<void>
locator.click({ position: { x: 0, y: 0 } });
// $ExpectType Promise<void>
locator.click({ timeout: 10000 });
// $ExpectType Promise<void>
locator.click({ trial: true });

// $ExpectType void
locator.dblclick();
// $ExpectType void
locator.dblclick({ button: "right" });
// @ts-expect-error
locator.dblclick({ button: "top" });
// $ExpectType void
locator.dblclick({ delay: 1000 });
// $ExpectType void
locator.dblclick({ force: true });
// $ExpectType void
locator.dblclick({ modifiers: ["Alt", "Control", "Meta", "Shift"] });
// @ts-expect-error
locator.dblclick({ modifiers: ["Esc"] });
// $ExpectType void
locator.dblclick({ noWaitAfter: true });
// $ExpectType void
locator.dblclick({ position: { x: 0, y: 0 } });
// $ExpectType void
locator.dblclick({ timeout: 10000 });
// $ExpectType void
locator.dblclick({ trial: true });

// $ExpectType void
locator.check();
// $ExpectType void
locator.check({ force: true });
// $ExpectType void
locator.check({ noWaitAfter: true });
// $ExpectType void
locator.check({ position: { x: 0, y: 0 } });
// $ExpectType void
locator.check({ timeout: 10000 });
// $ExpectType void
locator.check({ trial: true });

// $ExpectType void
locator.uncheck();
// $ExpectType void
locator.uncheck({ force: true });
// $ExpectType void
locator.uncheck({ noWaitAfter: true });
// $ExpectType void
locator.uncheck({ position: { x: 0, y: 0 } });
// $ExpectType void
locator.uncheck({ timeout: 10000 });
// $ExpectType void
locator.uncheck({ trial: true });

// $ExpectType boolean
locator.isChecked();
// $ExpectType boolean
locator.isChecked({ timeout: 10000 });

// $ExpectType boolean
locator.isEnabled();
// $ExpectType boolean
locator.isEnabled({ timeout: 10000 });

// $ExpectType boolean
locator.isDisabled();
// $ExpectType boolean
locator.isDisabled({ timeout: 10000 });

// $ExpectType boolean
locator.isVisible();

// $ExpectType boolean
locator.isHidden();

// @ts-expect-error
locator.fill();
// $ExpectType void
locator.fill("text");
// $ExpectType void
locator.fill("text", { force: true });
// $ExpectType void
locator.fill("text", { noWaitAfter: true });
// $ExpectType void
locator.fill("text", { timeout: 10000 });

// $ExpectType void
locator.focus();
// $ExpectType void
locator.focus({ timeout: 10000 });

// @ts-expect-error
locator.getAttribute();
// $ExpectType string | null
locator.getAttribute("attr");
// $ExpectType string | null
locator.getAttribute("attr", { timeout: 10000 });

// $ExpectType string
locator.innerHTML();
// $ExpectType string
locator.innerHTML({ timeout: 10000 });

// $ExpectType string
locator.innerText();
// $ExpectType string
locator.innerText({ timeout: 10000 });

// $ExpectType string
locator.textContent();
// $ExpectType string
locator.textContent({ timeout: 10000 });

// $ExpectType string
locator.inputValue();
// $ExpectType string
locator.inputValue({ timeout: 10000 });

// @ts-expect-error
locator.selectOption();
// @ts-expect-error
locator.selectOption({ timeout: 10000 });
// $ExpectType string[]
locator.selectOption("value");
// $ExpectType string[]
locator.selectOption(["value1", "value2"]);
// $ExpectType string[]
locator.selectOption({ value: "value" });
// $ExpectType string[]
locator.selectOption({ label: "label" });
// $ExpectType string[]
locator.selectOption({ index: 1 });
// $ExpectType string[]
locator.selectOption("value", { force: true });
// $ExpectType string[]
locator.selectOption("value", { noWaitAfter: true });
// $ExpectType string[]
locator.selectOption("value", { timeout: 10000 });

// @ts-expect-error
locator.type();
// @ts-expect-error
locator.type({ timeout: 10000 });
// $ExpectType void
locator.type("text");
// $ExpectType void
locator.type("text", { delay: 1000 });
// @ts-expect-error
locator.type("text", { force: true });
// $ExpectType void
locator.type("text", { noWaitAfter: true });
// $ExpectType void
locator.type("text", { timeout: 10000 });
// @ts-expect-error
locator.type("text", { trial: true });

// $ExpectType void
locator.hover();
// $ExpectType void
locator.hover({ force: true });
// $ExpectType void
locator.hover({ position: { x: 0, y: 0 } });
// $ExpectType void
locator.hover({ timeout: 10000 });
// $ExpectType void
locator.hover({ trial: true });

// $ExpectType void
locator.tap();
// $ExpectType void
locator.tap({ force: true });
// $ExpectType void
locator.tap({ noWaitAfter: true });
// $ExpectType void
locator.tap({ position: { x: 0, y: 0 } });
// $ExpectType void
locator.tap({ timeout: 10000 });
// $ExpectType void
locator.tap({ trial: true });

// @ts-expect-error
locator.dispatchEvent();
// $ExpectType void
locator.dispatchEvent("click");
// $ExpectType void
locator.dispatchEvent("click", { buttons: 2 & 4 });
// $ExpectType void
locator.dispatchEvent("click", { buttons: 2 & 4 }, { timeout: 10000 });
// $ExpectType void
locator.dispatchEvent("click", { buttons: 2 & 4 });

// $ExpectType void
locator.waitFor();
for (const state of ["attached", "detached", "visible", "hidden"]) {
    // $ExpectType void
    locator.waitFor({ state: state as any });
}
// $ExpectType void
locator.waitFor({ timeout: 10000 });

//
// JSHandle
//
const jsHandle = page.evaluateHandle(() => null);

// $ExpectType ElementHandle | null
jsHandle.asElement();

// $ExpectType void
jsHandle.dispose();

// @ts-expect-error
jsHandle.evaluate();
// @ts-expect-error
jsHandle.evaluate(1);
// @ExpectType void
jsHandle.evaluate("");
// @ExpectType void
jsHandle.evaluate(() => {});
// @ExpectType string
jsHandle.evaluate(() => {
    "";
});
// @ExpectType string
jsHandle.evaluate((a: string) => {
    a;
}, "");
// @ExpectType string[]
jsHandle.evaluate((a: string[]) => a, [""]);

// @ts-expect-error
jsHandle.evaluateHandle();
// @ts-expect-error
jsHandle.evaluateHandle(1);
// @ExpectType JSHandle
jsHandle.evaluateHandle("");
// @ExpectType JSHandle
jsHandle.evaluateHandle(() => {});
// @ExpectType JSHandle
jsHandle.evaluateHandle(() => {
    "";
});
// @ExpectType JSHandle
jsHandle.evaluateHandle((a: string) => {
    a;
}, "");
// @ExpectType JSHandle
jsHandle.evaluateHandle((a: string[]) => a, [""]);

// $ExpectType Map<string, JSHandle<any>>
jsHandle.getProperties();

// $ExpectType any
jsHandle.jsonValue();

//
// Request
//
const request = page.goto(url).then(r => r?.request());

// $ExpectType Promise<Record<string, string> | undefined>
request.then(r => r?.allHeaders());

// $ExpectType Promise<Frame | undefined>
request.then(r => r?.frame());

// $ExpectType Promise<Record<string, string> | undefined>
request.then(r => r?.headers());

// $ExpectType Promise<{ name: string; value: string; }[] | undefined>
request.then(r => r?.headersArray());

// @ts-expect-error
request.then(r => r?.headerValue());
// $ExpectType Promise<string | null | undefined>
request.then(r => r?.headerValue("content-type"));

// $ExpectType Promise<boolean | undefined>
request.then(r => r?.isNavigationRequest());

// $ExpectType Promise<string | undefined>
request.then(r => r?.method());

// $ExpectType Promise<string | undefined>
request.then(r => r?.postData());

// $ExpectType Promise<ArrayBuffer | null | undefined>
request.then(r => r?.postDataBuffer());

// $ExpectType Promise<"document" | "stylesheet" | "image" | "media" | "font" | "script" | "texttrack" | "xhr" | "fetch" | "eventsource" | "websocket" | "manifest" | "other" | undefined>
request.then(r => r?.resourceType());

// $ExpectType Promise<Response | null | undefined>
request.then(r => r?.response());

// $ExpectType Promise<{ body: number; headers: number; } | undefined>
request.then(r => r?.size());

// $ExpectType Promise<ResourceTiming | undefined>
request.then(r => r?.timing());

//
// Response
//
const response = page.goto(url);

// $ExpectType Promise<Record<string, string> | undefined>
response.then(r => r?.allHeaders());

// $ExpectType Promise<ArrayBuffer | undefined>
response.then(r => r?.body());

// $ExpectType Promise<Frame | undefined>
response.then(r => r?.frame());

// $ExpectType Promise<Record<string, string> | undefined>
response.then(r => r?.headers());

// $ExpectType Promise<{ name: string; value: string; }[] | undefined>
response.then(r => r?.headersArray());

// @ts-expect-error
response.then(r => r?.headerValue());
// $ExpectType Promise<string | null | undefined>
response.then(r => r?.headerValue("content-type"));

// @ts-expect-error
response.then(r => r?.headerValues());
// $ExpectType Promise<string[] | undefined>
response.then(r => r?.headerValues("content-type"));

// $ExpectType Promise<any>
response.then(r => r?.json());

// $ExpectType Promise<boolean | undefined>
response.then(r => r?.ok());

// $ExpectType Promise<Request | undefined>
response.then(r => r?.request());

// $ExpectType Promise<SecurityDetailsObject | null | undefined>
response.then(r => r?.securityDetails());

// $ExpectType Promise<{ ipAddress: string; port: number; } | null | undefined>
response.then(r => r?.serverAddr());

// $ExpectType Promise<number | undefined>
response.then(r => r?.status());

// $ExpectType Promise<string | undefined>
response.then(r => r?.statusText());

// $ExpectType Promise<{ body: number; headers: number; } | undefined>
response.then(r => r?.size());

// $ExpectType Promise<string | undefined>
response.then(r => r?.url());

//
// ElementHandle
//

const elementHandle = page.$(selector);

// @ts-expect-error
elementHandle.$();
// $ExpectType ElementHandle | null
elementHandle.$("div");

// @ts-expect-error
elementHandle.$$();
// $ExpectType ElementHandle[]
elementHandle.$$("div");

// $ExpectType Rect
elementHandle.boundingBox();

// $ExpectType Frame
elementHandle.contentFrame();

// @ts-expect-error
elementHandle.fill();
// $ExpectType void
elementHandle.fill("text");
// $ExpectType void
elementHandle.fill("text", { force: true });
// $ExpectType void
elementHandle.fill("text", { noWaitAfter: true });
// $ExpectType void
elementHandle.fill("text", { timeout: 10000 });

// $ExpectType void
elementHandle.focus();

// @ts-expect-error
elementHandle.getAttribute();
// $ExpectType string | null
elementHandle.getAttribute("foo");

// $ExpectType void
elementHandle.hover();
// $ExpectType void
elementHandle.hover({ force: true });
// $ExpectType void
elementHandle.hover({ timeout: 10000 });
// $ExpectType void
elementHandle.hover({ trial: true });
// $ExpectType void
elementHandle.hover({ position: { x: 0, y: 0 } });
// $ExpectType void
elementHandle.hover({ modifiers: ["Shift"] });

// $ExpectType string
elementHandle.innerHTML();

// $ExpectType string
elementHandle.innerText();

// $ExpectType string
elementHandle.inputValue();
// $ExpectType string
elementHandle.inputValue({ timeout: 10000 });

// $ExpectType boolean
elementHandle.isChecked();

// $ExpectType boolean
elementHandle.isDisabled();

// $ExpectType boolean
elementHandle.isEditable();

// $ExpectType boolean
elementHandle.isEnabled();

// $ExpectType boolean
elementHandle.isHidden();

// $ExpectType boolean
elementHandle.isVisible();

// $ExpectType Frame
elementHandle.ownerFrame();

// @ts-expect-error
elementHandle.press();
// $ExpectType void
elementHandle.press("Enter");
// $ExpectType void
elementHandle.press("Enter", { noWaitAfter: true });
// $ExpectType void
elementHandle.press("Enter", { delay: 100 });
// $ExpectType void
elementHandle.press("Enter", { timeout: 10000 });

// $ExpectType ArrayBuffer
elementHandle.screenshot();
// $ExpectType ArrayBuffer
elementHandle.screenshot({ timeout: 10000 });
// $ExpectType ArrayBuffer
elementHandle.screenshot({ omitBackground: true });
// $ExpectType ArrayBuffer
elementHandle.screenshot({ quality: 100 });
for (const format of ["png", "jpeg"]) {
    // $ExpectType ArrayBuffer
    elementHandle.screenshot({ type: format as any });
}

// $ExpectType void
elementHandle.scrollIntoViewIfNeeded();
// $ExpectType void
elementHandle.scrollIntoViewIfNeeded({ timeout: 10000 });
// $ExpectType void
elementHandle.scrollIntoViewIfNeeded({ force: true });
// $ExpectType void
elementHandle.scrollIntoViewIfNeeded({ noWaitAfter: true });

// @ts-expect-error
elementHandle.selectOption();
// @ts-expect-error
elementHandle.selectOption({ timeout: 10000 });
// $ExpectType string[]
elementHandle.selectOption("foo");
// $ExpectType string[]
elementHandle.selectOption(["foo", "bar"]);
// $ExpectType string[]
elementHandle.selectOption(elementHandle);
// $ExpectType string[]
elementHandle.selectOption({ value: "foo" });
// $ExpectType string[]
elementHandle.selectOption({ label: "bar" });
// $ExpectType string[]
elementHandle.selectOption({ index: 1 });
// $ExpectType string[]
elementHandle.selectOption("foo", { timeout: 10000 });
// $ExpectType string[]
elementHandle.selectOption("foo", { force: true });
// $ExpectType string[]
elementHandle.selectOption("foo", { noWaitAfter: true });

// $ExpectType void
elementHandle.selectText();
// $ExpectType void
elementHandle.selectText({ timeout: 10000 });
// $ExpectType void
elementHandle.selectText({ force: true });
// $ExpectType void
elementHandle.selectText({ noWaitAfter: true });

// $ExpectType void
elementHandle.tap();
// $ExpectType void
elementHandle.tap({ timeout: 10000 });
// $ExpectType void
elementHandle.tap({ force: true });
// $ExpectType void
elementHandle.tap({ noWaitAfter: true });
// $ExpectType void
elementHandle.tap({ position: { x: 0, y: 0 } });
// $ExpectType void
elementHandle.tap({ modifiers: ["Shift"] });
// $ExpectType void
elementHandle.tap({ trial: true });

// $ExpectType string
elementHandle.textContent();

// @ts-expect-error
elementHandle.type();
// $ExpectType void
elementHandle.type("text");
// $ExpectType void
elementHandle.type("text", { delay: 100 });
// $ExpectType void
elementHandle.type("text", { timeout: 10000 });
// $ExpectType void
elementHandle.type("text", { noWaitAfter: true });

// $ExpectType void
elementHandle.uncheck();
// $ExpectType void
elementHandle.uncheck({ force: true });
// $ExpectType void
elementHandle.uncheck({ noWaitAfter: true });
// $ExpectType void
elementHandle.uncheck({ timeout: 10000 });
// $ExpectType void
elementHandle.uncheck({ trial: true });
// $ExpectType void
elementHandle.uncheck({ position: { x: 0, y: 0 } });
// $ExpectType void
elementHandle.uncheck({ strict: true });

// @ts-expect-error
elementHandle.waitForElementState();
for (const state of ["visible", "hidden", "stable", "enabled", "disabled", "editable", "disabled"]) {
    // $ExpectType void
    elementHandle.waitForElementState(state as any);
}
// $ExpectType void
elementHandle.waitForElementState("visible", { timeout: 10000 });

// @ts-expect-error
elementHandle.waitForSelector();
// $ExpectType void
elementHandle.waitForSelector("div");
// $ExpectType void
elementHandle.waitForSelector("div", { timeout: 10000 });
// $ExpectType void
elementHandle.waitForSelector("div", { state: "attached" });
// $ExpectType void
elementHandle.waitForSelector("div", { strict: true });

//
// Frame
//

const frame = page.mainFrame();

// @ts-expect-error
frame.$();
// $ExpectType ElementHandle | null
frame.$("div");

// @ts-expect-error
frame.$$();
// $ExpectType ElementHandle[]
frame.$$("div");

// @ts-expect-error
frame.check();
// $ExpectType void
frame.check("input[type=checkbox]");
// $ExpectType void
frame.check("input[type=checkbox]", { force: true });
// $ExpectType void
frame.check("input[type=checkbox]", { noWaitAfter: true });
// $ExpectType void
frame.check("input[type=checkbox]", { timeout: 10000 });
// $ExpectType void
frame.check("input[type=checkbox]", { trial: true });
// $ExpectType void
frame.check("input[type=checkbox]", { position: { x: 0, y: 0 } });
// $ExpectType void
frame.check("input[type=checkbox]", { strict: true });

// @ts-expect-error
frame.uncheck();
// $ExpectType void
frame.uncheck("input[type=checkbox]");
// $ExpectType void
frame.uncheck("input[type=checkbox]", { force: true });
// $ExpectType void
frame.uncheck("input[type=checkbox]", { noWaitAfter: true });
// $ExpectType void
frame.uncheck("input[type=checkbox]", { timeout: 10000 });
// $ExpectType void
frame.uncheck("input[type=checkbox]", { trial: true });
// $ExpectType void
frame.uncheck("input[type=checkbox]", { position: { x: 0, y: 0 } });
// $ExpectType void
frame.uncheck("input[type=checkbox]", { strict: true });

// @ts-expect-error
frame.click();
// $ExpectType Promise<void>
frame.click("div");
// $ExpectType Promise<void>
frame.click("div", { button: "left" });
// $ExpectType Promise<void>
frame.click("div", { clickCount: 2 });
// $ExpectType Promise<void>
frame.click("div", { delay: 100 });
// $ExpectType Promise<void>
frame.click("div", { strict: true });

// @ts-expect-error
frame.dblclick();
// $ExpectType void
frame.dblclick("div");
// $ExpectType void
frame.dblclick("div", { delay: 100 });
// $ExpectType void
frame.dblclick("div", { timeout: 10000 });
// $ExpectType void
frame.dblclick("div", { noWaitAfter: true });
// $ExpectType void
frame.dblclick("div", { force: true });
// $ExpectType void
frame.dblclick("div", { trial: true });
// $ExpectType void
frame.dblclick("div", { position: { x: 0, y: 0 } });
// $ExpectType void
frame.dblclick("div", { modifiers: ["Shift"] });
// $ExpectType void
frame.dblclick("div", { strict: true });

// @ts-expect-error
frame.fill();
// $ExpectType void
frame.fill("input", "text");
// $ExpectType void
frame.fill("input", "text", { timeout: 10000 });
// $ExpectType void
frame.fill("input", "text", { noWaitAfter: true });
// $ExpectType void
frame.fill("input", "text", { force: true });
// $ExpectType void
frame.fill("input", "text", { strict: true });

// @ts-expect-error
frame.focus();
// $ExpectType void
frame.focus("input");
// $ExpectType void
frame.focus("input", { timeout: 10000 });
// $ExpectType void
frame.focus("input", { strict: true });

// @ts-expect-error
frame.hover();
// $ExpectType void
frame.hover("div");
// $ExpectType void
frame.hover("div", { timeout: 10000 });
// $ExpectType void
frame.hover("div", { force: true });
// $ExpectType void
frame.hover("div", { position: { x: 0, y: 0 } });
// $ExpectType void
frame.hover("div", { modifiers: ["Shift"] });
// $ExpectType void
frame.hover("div", { strict: true });
// $ExpectType void
frame.hover("div", { trial: true });
// $ExpectType void
frame.hover("div", { noWaitAfter: true });

// @ts-expect-error
frame.tap();
// $ExpectType void
frame.tap("div");
// $ExpectType void
frame.tap("div", { timeout: 10000 });
// $ExpectType void
frame.tap("div", { force: true });
// $ExpectType void
frame.tap("div", { position: { x: 0, y: 0 } });
// $ExpectType void
frame.tap("div", { modifiers: ["Shift"] });
// $ExpectType void
frame.tap("div", { strict: true });
// $ExpectType void
frame.tap("div", { trial: true });
// $ExpectType void
frame.tap("div", { noWaitAfter: true });

// @ts-expect-error
frame.press();
// @ts-expect-error
frame.press("div");
// $ExpectType void
frame.press("div", "a");
// $ExpectType void
frame.press("div", "a", { delay: 100 });
// $ExpectType void
frame.press("div", "a", { timeout: 10000 });
// $ExpectType void
frame.press("div", "a", { noWaitAfter: true });
// $ExpectType void
frame.press("div", "a", { strict: true });

// @ts-expect-error
frame.type();
// @ts-expect-error
frame.type("input");
// $ExpectType void
frame.type("input", "text");
// $ExpectType void
frame.type("input", "text", { delay: 100 });
// $ExpectType void
frame.type("input", "text", { timeout: 10000 });
// $ExpectType void
frame.type("input", "text", { noWaitAfter: true });
// $ExpectType void
frame.type("input", "text", { strict: true });

// @ts-expect-error
frame.selectOption();
// @ts-expect-error
frame.selectOption("select");
// $ExpectType string[]
frame.selectOption("select", "value");
// $ExpectType string[]
frame.selectOption("select", ["value1", "value2"]);
// $ExpectType string[]
frame.selectOption("select", elementHandle);
// $ExpectType string[]
frame.selectOption("select", [elementHandle, elementHandle]);
// $ExpectType string[]
frame.selectOption("select", { value: "value", index: 1, label: "label" });
// $ExpectType string[]
frame.selectOption("select", [
    { value: "value1", index: 1, label: "label1" },
    { value: "value2", index: 2, label: "label2" },
]);
// $ExpectType string[]
frame.selectOption("select", "value", { force: true });
// $ExpectType string[]
frame.selectOption("select", "value", { noWaitAfter: true });
// $ExpectType string[]
frame.selectOption("select", "value", { timeout: 10000 });
// $ExpectType string[]
frame.selectOption("select", "value", { strict: true });

// @ts-expect-error
frame.dispatchEvent();
// @ts-expect-error
frame.dispatchEvent("div");
// $ExpectType void
frame.dispatchEvent("div", "click");
// $ExpectType void
frame.dispatchEvent("div", "click", { button: "left" });
// $ExpectType void
frame.dispatchEvent("div", "click", {}, { timeout: 10000 });
// $ExpectType void
frame.dispatchEvent("div", "click", {}, { strict: true });

// @ts-expect-error
frame.evaluate();
// @ts-expect-error
frame.evaluate(1);
// @ExpectType void
frame.evaluate("");
// @ExpectType void
frame.evaluate(() => {});
// @ExpectType string
frame.evaluate(() => {
    "";
});
// @ExpectType string
frame.evaluate((a: string) => {
    a;
}, "");
// @ExpectType string[]
frame.evaluate((a: string[]) => a, [""]);

// @ts-expect-error
frame.evaluateHandle();
// @ts-expect-error
frame.evaluateHandle(1);
// @ExpectType JSHandle
frame.evaluateHandle("");
// @ExpectType JSHandle
frame.evaluateHandle(() => {});
// @ExpectType JSHandle
frame.evaluateHandle(() => {
    "";
});
// @ExpectType JSHandle
frame.evaluateHandle((a: string) => {
    a;
}, "");
// @ExpectType JSHandle
frame.evaluateHandle((a: string[]) => a, [""]);

// $ExpectType Page
frame.page();

// $ExpectType Frame | null
frame.parentFrame();

// $ExpectType Frame[]
frame.childFrames();

// $ExpectType ElementHandle
frame.frameElement();

// @ts-expect-error
frame.goto();
// $ExpectType Promise<Response | null>
frame.goto("https://example.com");
// $ExpectType Promise<Response | null>
frame.goto("https://example.com", { timeout: 10000 });
for (const state of ["load", "domcontentloaded", "networkidle"]) {
    // $ExpectType Promise<Response | null>
    frame.goto("https://example.com", { waitUntil: state as any });
}
// $ExpectType Promise<Response | null>
frame.goto("https://example.com", { referer: "https://example.com" });

// @ts-expect-error
frame.setContent();
// $ExpectType void
frame.setContent("<div>content</div>");
// $ExpectType void
frame.setContent("<div>content</div>", { timeout: 10000 });
for (const state of ["load", "domcontentloaded", "networkidle"]) {
    // $ExpectType void
    frame.setContent("<div>content</div>", { waitUntil: state as any });
}

// $ExpectType string
frame.name();

// $ExpectType string
frame.title();

// $ExpectType string
frame.url();

// $ExpectType string
frame.content();

// $ExpectType boolean
frame.isDetached();

// @ts-expect-error
frame.locator();
// $ExpectType Locator
frame.locator("div");

// @ts-expect-error
frame.innerHTML();
// $ExpectType string
frame.innerHTML("div");
// $ExpectType string
frame.innerHTML("div", { timeout: 10000 });
// $ExpectType string
frame.innerHTML("div", { strict: true });

// @ts-expect-error
frame.innerText();
// $ExpectType string
frame.innerText("div");
// $ExpectType string
frame.innerText("div", { timeout: 10000 });
// $ExpectType string
frame.innerText("div", { strict: true });

// @ts-expect-error
frame.textContent();
// $ExpectType string
frame.textContent("div");
// $ExpectType string
frame.textContent("div", { timeout: 10000 });
// $ExpectType string
frame.textContent("div", { strict: true });

// @ts-expect-error
frame.getAttribute();
// @ts-expect-error
frame.getAttribute("div");
// $ExpectType string
frame.getAttribute("div", "attr");
// $ExpectType string
frame.getAttribute("div", "attr", { timeout: 10000 });
// $ExpectType string
frame.getAttribute("div", "attr", { strict: true });

// @ts-expect-error
frame.inputValue();
// $ExpectType string
frame.inputValue("input");
// $ExpectType string
frame.inputValue("input", { timeout: 10000 });
// $ExpectType string
frame.inputValue("input", { strict: true });

// @ts-expect-error
frame.isChecked();
// $ExpectType boolean
frame.isChecked("input");
// $ExpectType boolean
frame.isChecked("input", { timeout: 10000 });
// $ExpectType boolean
frame.isChecked("input", { strict: true });

// @ts-expect-error
frame.isDisabled();
// $ExpectType boolean
frame.isDisabled("input");
// $ExpectType boolean
frame.isDisabled("input", { timeout: 10000 });
// $ExpectType boolean
frame.isDisabled("input", { strict: true });

// @ts-expect-error
frame.isEnabled();
// $ExpectType boolean
frame.isEnabled("input");
// $ExpectType boolean
frame.isEnabled("input", { timeout: 10000 });
// $ExpectType boolean
frame.isEnabled("input", { strict: true });

// @ts-expect-error
frame.isEditable();
// $ExpectType boolean
frame.isEditable("input");
// $ExpectType boolean
frame.isEditable("input", { timeout: 10000 });
// $ExpectType boolean
frame.isEditable("input", { strict: true });

// @ts-expect-error
frame.isHidden();
// $ExpectType boolean
frame.isHidden("input");
// $ExpectType boolean
frame.isHidden("input", { strict: true });

// @ts-expect-error
frame.isVisible();
// $ExpectType boolean
frame.isVisible("input");
// $ExpectType boolean
frame.isVisible("input", { strict: true });

// @ts-expect-error
frame.waitForFunction();
// $ExpectType Promise<JSHandle<boolean>>
frame.waitForFunction(() => true);
// $ExpectType Promise<JSHandle<boolean>>
frame.waitForFunction(() => true, { polling: "raf" });
// $ExpectType Promise<JSHandle<boolean>>
frame.waitForFunction(() => true, { polling: "interval", interval: 10000 });
// $ExpectType Promise<JSHandle<boolean>>
frame.waitForFunction(() => true, { timeout: 10000 });
// $ExpectType Promise<JSHandle<boolean>>
frame.waitForFunction((a: number) => a === 1, {}, 1);

// $ExpectType void
frame.waitForLoadState();
for (const state of ["load", "domcontentloaded", "networkidle"]) {
    // $ExpectType void
    frame.waitForLoadState(state as any);
}
// $ExpectType void
frame.waitForLoadState("domcontentloaded", { timeout: 10000 });

// $ExpectType Promise<Response | null>
frame.waitForNavigation();
// $ExpectType Promise<Response | null>
frame.waitForNavigation({ timeout: 10000 });
// $ExpectType Promise<Response | null>
frame.waitForNavigation({ waitUntil: "domcontentloaded" });

// @ts-expect-error
frame.waitForSelector();
// $ExpectType ElementHandle
frame.waitForSelector("div");
// $ExpectType ElementHandle
frame.waitForSelector("div", { timeout: 10000 });
for (const state of ["attached", "detached", "visible", "hidden"]) {
    // $ExpectType ElementHandle
    frame.waitForSelector("div", { state: state as any });
}

// @ts-expect-error
frame.waitForTimeout();
// $ExpectType void
frame.waitForTimeout(10000);

//
// Touchscreen.tap
//

// @ts-expect-error
page.touchscreen.tap();
// $ExpectType void
page.touchscreen.tap(1, 2);

//
// Worker
//

const worker = page.workers()[0];

// $ExpectType string
worker.url();
