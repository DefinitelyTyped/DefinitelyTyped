import { browser } from "k6/browser";

const url = "http://example.com";
const selector = "a[href=\"http://example.com\"]";

//
// browser tests
//
async function test() {
    // $ExpectType void
    browser.closeContext();

    // $ExpectType BrowserContext | null
    browser.context();

    // $ExpectType boolean
    browser.isConnected();

    // $ExpectType Promise<BrowserContext>
    browser.newContext();
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ bypassCSP: true });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ colorScheme: "light" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ colorScheme: "dark" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ colorScheme: "no-preference" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ deviceScaleFactor: 2 });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ extraHTTPHeaders: { Accept: "text/html" } });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ geolocation: { latitude: 0, longitude: 0, accuracy: 1 } });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ hasTouch: true });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ httpCredentials: { username: "username", password: "password" } });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ ignoreHTTPSErrors: true });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ isMobile: true });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ javaScriptEnabled: true });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ locale: "en-US" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ offline: true });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ permissions: ["geolocation"] });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ permissions: ["geolocation", "notifications"] });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ reducedMotion: "reduce" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ reducedMotion: "no-preference" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ screen: { width: 1280, height: 720 } });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ timezoneID: "GMT" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ userAgent: "foo" });
    // $ExpectType Promise<BrowserContext>
    browser.newContext({ viewport: { width: 1280, height: 720 } });

    // $ExpectType Promise<Page>
    browser.newPage();
    // $ExpectType Promise<Page>
    browser.newPage({ bypassCSP: true });
    // $ExpectType Promise<Page>
    browser.newPage({ colorScheme: "light" });
    // $ExpectType Promise<Page>
    browser.newPage({ colorScheme: "dark" });
    // $ExpectType Promise<Page>
    browser.newPage({ colorScheme: "no-preference" });
    // $ExpectType Promise<Page>
    browser.newPage({ deviceScaleFactor: 2 });
    // $ExpectType Promise<Page>
    browser.newPage({ extraHTTPHeaders: { Accept: "text/html" } });
    // $ExpectType Promise<Page>
    browser.newPage({ geolocation: { latitude: 0, longitude: 0, accuracy: 1 } });
    // $ExpectType Promise<Page>
    browser.newPage({ hasTouch: true });
    // $ExpectType Promise<Page>
    browser.newPage({ httpCredentials: { username: "username", password: "password" } });
    // $ExpectType Promise<Page>
    browser.newPage({ ignoreHTTPSErrors: true });
    // $ExpectType Promise<Page>
    browser.newPage({ isMobile: true });
    // $ExpectType Promise<Page>
    browser.newPage({ javaScriptEnabled: true });
    // $ExpectType Promise<Page>
    browser.newPage({ locale: "en-US" });
    // $ExpectType Promise<Page>
    browser.newPage({ offline: true });
    // $ExpectType Promise<Page>
    browser.newPage({ permissions: ["geolocation"] });
    // $ExpectType Promise<Page>
    browser.newPage({ permissions: ["geolocation", "notifications"] });
    // $ExpectType Promise<Page>
    browser.newPage({ reducedMotion: "reduce" });
    // $ExpectType Promise<Page>
    browser.newPage({ reducedMotion: "no-preference" });
    // $ExpectType Promise<Page>
    browser.newPage({ screen: { width: 1280, height: 720 } });
    // $ExpectType Promise<Page>
    browser.newPage({ timezoneID: "GMT" });
    // $ExpectType Promise<Page>
    browser.newPage({ userAgent: "foo" });
    // $ExpectType Promise<Page>
    browser.newPage({ viewport: { width: 1280, height: 720 } });

    // $ExpectType string
    browser.userAgent();

    // $ExpectType string
    browser.version();

    //
    // Create a browserContext
    //
    const browserContext = await browser.newContext();

    // @ts-expect-error
    browserContext.addInitScript();
    // $ExpectType Promise<void>
    browserContext.addInitScript("Math.random = function(){return 0}");
    // $ExpectType Promise<void>
    browserContext.addInitScript({ content: "Math.random = function(){return 0}" });

    // $ExpectType Browser
    browserContext.browser();
    // @ts-expect-error
    browserContext.addCookies();
    // $ExpectType Promise<void>
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
    // $ExpectType Promise<Cookie[]>
    browserContext.cookies();
    // $ExpectType Promise<Cookie[]>
    browserContext.cookies("https://test.k6.io", "https://k6.io");
    // $ExpectType Promise<void>
    browserContext.clearCookies();
    // $ExpectType Promise<void>
    browserContext.clearPermissions();
    // $ExpectType Promise<void>
    browserContext.close();
    // @ts-expect-error
    browserContext.grantPermissions();
    // $ExpectType Promise<void>
    browserContext.grantPermissions(["geolocation", "notifications"]);
    // $ExpectType Promise<void>
    browserContext.grantPermissions(["geolocation", "notifications"], { origin: "https://test.k6.io" });
    // $ExpectType Promise<Page>
    browserContext.newPage();
    // $ExpectType Page[]
    browserContext.pages();
    // $ExpectType void
    browserContext.setDefaultNavigationTimeout(30000);
    // $ExpectType void
    browserContext.setDefaultTimeout(30000);
    // $ExpectType Promise<void>
    browserContext.setGeolocation({ latitude: 0, longitude: 0, accuracy: 1 });
    // $ExpectType Promise<void>
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
    const page = await browser.newPage();

    // $ExpectType Promise<void>
    page.bringToFront();

    // @ts-expect-error
    page.check();
    // $ExpectType Promise<void>
    page.check(selector);
    // $ExpectType Promise<void>
    page.check(selector, { force: true });
    // $ExpectType Promise<void>
    page.check(selector, { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.check(selector, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    page.check(selector, { strict: true });
    // $ExpectType Promise<void>
    page.check(selector, { timeout: 10000 });
    // $ExpectType Promise<void>
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

    // $ExpectType Promise<void>
    page.close();

    // $ExpectType Promise<string>
    page.content();

    // $ExpectType BrowserContext
    page.context();

    // @ts-expect-error
    page.dblclick();
    // $ExpectType Promise<void>
    page.dblclick(selector);
    // $ExpectType Promise<void>
    page.dblclick(selector, { button: "left" });
    // $ExpectType Promise<void>
    page.dblclick(selector, { button: "middle" });
    // $ExpectType Promise<void>
    page.dblclick(selector, { button: "right" });
    // $ExpectType Promise<void>
    page.dblclick(selector, { delay: 1000 });
    // $ExpectType Promise<void>
    page.dblclick(selector, { force: true });
    // $ExpectType Promise<void>
    page.dblclick(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
    // $ExpectType Promise<void>
    page.dblclick(selector, { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.dblclick(selector, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    page.dblclick(selector, { strict: true });
    // $ExpectType Promise<void>
    page.dblclick(selector, { timeout: 10000 });
    // $ExpectType Promise<void>
    page.dblclick(selector, { trial: true });

    // @ts-expect-error
    page.dispatchEvent();
    // @ts-expect-error
    page.dispatchEvent(selector);
    // $ExpectType Promise<void>
    page.dispatchEvent(selector, "click");
    // $ExpectType Promise<void>
    page.dispatchEvent(selector, "click", undefined, { strict: true });
    // $ExpectType Promise<void>
    page.dispatchEvent(selector, "click", undefined, { timeout: 10000 });
    // $ExpectType Promise<void>
    page.dispatchEvent(selector, "click", { type: "look" });
    // @ts-expect-error
    page.dispatchEvent(selector, "click", "string");

    // $ExpectType Promise<void>
    page.emulateMedia();
    // $ExpectType Promise<void>
    page.emulateMedia({ colorScheme: "light" });
    // $ExpectType Promise<void>
    page.emulateMedia({ colorScheme: "dark" });
    // $ExpectType Promise<void>
    page.emulateMedia({ colorScheme: "no-preference" });
    // $ExpectType Promise<void>
    page.emulateMedia({ media: "screen" });
    // $ExpectType Promise<void>
    page.emulateMedia({ media: "print" });
    // $ExpectType Promise<void>
    page.emulateMedia({ reducedMotion: "no-preference" });
    // $ExpectType Promise<void>
    page.emulateMedia({ reducedMotion: "reduce" });

    // @ts-expect-error
    page.emulateVisionDeficiency();
    // @ts-expect-error
    page.emulateVisionDeficiency("");
    // @ExpectType Promise<void>
    page.emulateVisionDeficiency("none");
    // @ExpectType Promise<void>
    page.emulateVisionDeficiency("blurredVision");
    // @ExpectType Promise<void>
    page.emulateVisionDeficiency("deuteranopia");
    // @ExpectType Promise<void>
    page.emulateVisionDeficiency("protanopia");
    // @ExpectType Promise<void>
    page.emulateVisionDeficiency("tritanopia");
    // @ExpectType Promise<void>
    page.emulateVisionDeficiency("achromatopsia");

    // @ts-expect-error
    page.evaluate();
    // @ts-expect-error
    page.evaluate(1);
    // @ExpectType Promise<void>
    page.evaluate("");
    // @ExpectType Promise<void>
    page.evaluate(() => {});
    // @ExpectType Promise<string>
    page.evaluate(() => {
        "";
    });
    // @ExpectType Promise<string>
    page.evaluate((a: string) => {
        a;
    }, "");
    // @ExpectType Promise<string[]>
    page.evaluate((a: string[]) => a, [""]);

    // @ts-expect-error
    page.evaluateHandle();
    // @ts-expect-error
    page.evaluateHandle(1);
    // @ExpectType Promise<JSHandle>
    page.evaluateHandle("");
    // @ExpectType Promise<JSHandle>
    page.evaluateHandle(() => {});
    // @ExpectType Promise<JSHandle>
    page.evaluateHandle(() => {
        "";
    });
    // @ExpectType Promise<JSHandle>
    page.evaluateHandle((a: string) => {
        a;
    }, "");
    // @ExpectType Promise<JSHandle>
    page.evaluateHandle((a: string[]) => a, [""]);

    // @ts-expect-error
    page.fill();
    // @ts-expect-error
    page.fill(selector);
    // $ExpectType Promise<void>
    page.fill(selector, "text");
    // $ExpectType Promise<void>
    page.fill(selector, "text", { force: true });
    // $ExpectType Promise<void>
    page.fill(selector, "text", { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.fill(selector, "text", { strict: true });
    // $ExpectType Promise<void>
    page.fill(selector, "text", { timeout: 10000 });

    // @ts-expect-error
    page.focus();
    // $ExpectType Promise<void>
    page.focus(selector);
    // $ExpectType Promise<void>
    page.focus(selector, { strict: true });
    // $ExpectType Promise<void>
    page.focus(selector, { timeout: 10000 });

    // $ExpectType Frame[]
    page.frames();

    // @ts-expect-error
    page.getAttribute();
    // @ts-expect-error
    page.getAttribute(selector);
    // $ExpectType Promise<string | null>
    page.getAttribute(selector, "text");
    // $ExpectType Promise<string | null>
    page.getAttribute(selector, "text", { strict: true });
    // $ExpectType Promise<string | null>
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
    // $ExpectType Promise<void>
    page.hover(selector);
    // $ExpectType Promise<void>
    page.hover(selector, { force: true });
    // $ExpectType Promise<void>
    page.hover(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
    // $ExpectType Promise<void>
    page.hover(selector, { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.hover(selector, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    page.hover(selector, { strict: true });
    // $ExpectType Promise<void>
    page.hover(selector, { timeout: 10000 });
    // $ExpectType Promise<void>
    page.hover(selector, { trial: true });

    // @ts-expect-error
    page.innerHTML();
    // $ExpectType Promise<string>
    page.innerHTML(selector);
    // $ExpectType Promise<string>
    page.innerHTML(selector, { strict: true });
    // $ExpectType Promise<string>
    page.innerHTML(selector, { timeout: 10000 });

    // @ts-expect-error
    page.innerText();
    // $ExpectType Promise<string>
    page.innerText(selector);
    // $ExpectType Promise<string>
    page.innerText(selector, { strict: true });
    // $ExpectType Promise<string>
    page.innerText(selector, { timeout: 10000 });

    // @ts-expect-error
    page.inputValue();
    // $ExpectType Promise<string>
    page.inputValue(selector);
    // $ExpectType Promise<string>
    page.inputValue(selector, { strict: true });
    // $ExpectType Promise<string>
    page.inputValue(selector, { timeout: 10000 });

    // @ts-expect-error
    page.isChecked();
    // $ExpectType Promise<boolean>
    page.isChecked(selector);
    // $ExpectType Promise<boolean>
    page.isChecked(selector, { strict: true });
    // $ExpectType Promise<boolean>
    page.isChecked(selector, { timeout: 10000 });

    // $ExpectType boolean
    page.isClosed();

    // @ts-expect-error
    page.isDisabled();
    // $ExpectType Promise<boolean>
    page.isDisabled(selector);
    // $ExpectType Promise<boolean>
    page.isDisabled(selector, { strict: true });
    // $ExpectType Promise<boolean>
    page.isDisabled(selector, { timeout: 10000 });

    // @ts-expect-error
    page.isEditable();
    // $ExpectType Promise<boolean>
    page.isEditable(selector);
    // $ExpectType Promise<boolean>
    page.isEditable(selector, { strict: true });
    // $ExpectType Promise<boolean>
    page.isEditable(selector, { timeout: 10000 });

    // @ts-expect-error
    page.isEnabled();
    // $ExpectType Promise<boolean>
    page.isEnabled(selector);
    // $ExpectType Promise<boolean>
    page.isEnabled(selector, { strict: true });
    // $ExpectType Promise<boolean>
    page.isEnabled(selector, { timeout: 10000 });

    // @ts-expect-error
    page.isHidden();
    // $ExpectType Promise<boolean>
    page.isHidden(selector);
    // $ExpectType Promise<boolean>
    page.isHidden(selector, { strict: true });

    // @ts-expect-error
    page.isVisible();
    // $ExpectType Promise<boolean>
    page.isVisible(selector);
    // $ExpectType Promise<boolean>
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

    // $ExpectType Promise<Page | null>
    page.opener();

    // @ts-expect-error
    page.press();
    // @ts-expect-error
    page.press(selector);
    // $ExpectType Promise<void>
    page.press(selector, "a");
    // $ExpectType Promise<void>
    page.press(selector, "a", { delay: 1000 });
    // $ExpectType Promise<void>
    page.press(selector, "a", { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.press(selector, "a", { strict: true });
    // $ExpectType Promise<void>
    page.press(selector, "a", { timeout: 10000 });

    // $ExpectType Promise<Response | null>
    page.reload();
    // $ExpectType Promise<Response | null>
    page.reload({ timeout: 10000 });
    // $ExpectType Promise<Response | null>
    page.reload({ waitUntil: "domcontentloaded" });

    // $ExpectType Promise<ArrayBuffer>
    page.screenshot();
    // $ExpectType Promise<ArrayBuffer>
    page.screenshot({ clip: { x: 0, y: 0, width: 800, height: 600 } });
    // $ExpectType Promise<ArrayBuffer>
    page.screenshot({ fullPage: true });
    // $ExpectType Promise<ArrayBuffer>
    page.screenshot({ omitBackground: true });
    // $ExpectType Promise<ArrayBuffer>
    page.screenshot({ path: "image.jpeg" });
    // $ExpectType Promise<ArrayBuffer>
    page.screenshot({ quality: 50 });
    for (const format of ["png", "jpeg"]) {
        // $ExpectType Promise<ArrayBuffer>
        page.screenshot({ type: format as any });
    }

    // @ts-expect-error
    page.selectOption();
    // @ts-expect-error
    page.selectOption(selector);
    // $ExpectType Promise<string[]>
    page.selectOption(selector, "option");
    // $ExpectType Promise<string[]>
    page.selectOption(selector, await page.waitForSelector(selector));
    // $ExpectType Promise<string[]>
    page.selectOption(selector, { value: "" });
    // $ExpectType Promise<string[]>
    page.selectOption(selector, { label: "" });
    // $ExpectType Promise<string[]>
    page.selectOption(selector, { index: 0 });
    // $ExpectType Promise<string[]>
    page.selectOption(selector, ["option", "option2"]);
    // $ExpectType Promise<string[]>
    page.selectOption(selector, [await page.waitForSelector(selector), await page.waitForSelector(selector)]);
    // $ExpectType Promise<string[]>
    page.selectOption(selector, [{ value: "" }, { label: "" }]);
    // $ExpectType Promise<string[]>
    page.selectOption(selector, "option", { force: true });
    // $ExpectType Promise<string[]>
    page.selectOption(selector, "option", { noWaitAfter: true });
    // $ExpectType Promise<string[]>
    page.selectOption(selector, "option", { strict: true });
    // $ExpectType Promise<string[]>
    page.selectOption(selector, "option", { timeout: 10000 });

    // @ts-expect-error
    page.setChecked();
    // @ts-expect-error
    page.setChecked(selector);
    // $ExpectType Promise<void>
    page.setChecked(selector, true);
    // $ExpectType Promise<void>
    page.setChecked(selector, false);
    // $ExpectType Promise<void>
    page.setChecked(selector, true, { force: true });
    // $ExpectType Promise<void>
    page.setChecked(selector, true, { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.setChecked(selector, true, { timeout: 10000 });
    // $ExpectType Promise<void>
    page.setChecked(selector, true, { trial: true });
    // $ExpectType Promise<void>
    page.setChecked(selector, true, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    page.setChecked(selector, true, { strict: true });

    // @ts-expect-error
    page.setContent();
    // $ExpectType Promise<void>
    page.setContent("<html></html>", { timeout: 10000 });
    // $ExpectType Promise<void>
    page.setContent("<html></html>", { timeout: 10000 });
    // $ExpectType Promise<void>
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
    // $ExpectType Promise<void>
    page.setExtraHTTPHeaders({ Accept: "text/html" });

    // @ts-expect-error
    page.setInputFiles();
    // @ts-expect-error
    page.setInputFiles("foo");
    // @ts-expect-error
    page.setInputFiles("foo", {});
    // @ts-expect-error
    page.setInputFiles("foo", { name: "file.txt" });
    // @ts-expect-error
    page.setInputFiles("foo", { name: "file.txt", mimeType: "text/plain" });
    // $ExpectType Promise<void>
    page.setInputFiles("foo", { name: "file.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) });
    // $ExpectType Promise<void>
    page.setInputFiles("foo", [{ name: "file1.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) }, {
        name: "file2.txt",
        mimeType: "text/plain",
        buffer: new ArrayBuffer(0),
    }]);
    // $ExpectType Promise<void>
    page.setInputFiles("foo", { name: "file.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) }, {
        noWaitAfter: true,
        timeout: 1000,
    });

    // @ts-expect-error
    page.setViewportSize();
    // $ExpectType Promise<void>
    page.setViewportSize({ width: 800, height: 600 });

    // @ts-expect-error
    page.tap();
    // $ExpectType Promise<void>
    page.tap(selector);
    // $ExpectType Promise<void>
    page.tap(selector, { force: true });
    // $ExpectType Promise<void>
    page.tap(selector, { modifiers: ["Alt", "Control", "Meta", "Shift"] });
    // $ExpectType Promise<void>
    page.tap(selector, { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.tap(selector, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    page.tap(selector, { strict: true });
    // $ExpectType Promise<void>
    page.tap(selector, { timeout: 10000 });
    // $ExpectType Promise<void>
    page.tap(selector, { trial: true });

    // @ts-expect-error
    page.throttleCPU();
    // $ExpectType Promise<void>
    page.throttleCPU({ rate: 2 });

    // @ts-expect-error
    page.throttleNetwork();
    // $ExpectType Promise<void>
    page.throttleNetwork({ latency: 500, download: 200, upload: 100 });

    // @ts-expect-error
    page.textContent();
    // $ExpectType Promise<string | null>
    page.textContent(selector);
    // $ExpectType Promise<string | null>
    page.textContent(selector, { strict: true });
    // $ExpectType Promise<string | null>
    page.textContent(selector, { timeout: 10000 });

    // $ExpectType Promise<string>
    page.title();

    // $ExpectType Touchscreen
    page.touchscreen;

    // @ts-expect-error
    page.type();
    // @ts-expect-error
    page.type(selector);
    // $ExpectType Promise<void>
    page.type(selector, "a");
    // $ExpectType Promise<void>
    page.type(selector, "a", { delay: 1000 });
    // $ExpectType Promise<void>
    page.type(selector, "a", { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.type(selector, "a", { strict: true });
    // $ExpectType Promise<void>
    page.type(selector, "a", { timeout: 10000 });

    // @ts-expect-error
    page.uncheck();
    // $ExpectType Promise<void>
    page.uncheck(selector);
    // $ExpectType Promise<void>
    page.uncheck(selector, { force: true });
    // $ExpectType Promise<void>
    page.uncheck(selector, { noWaitAfter: true });
    // $ExpectType Promise<void>
    page.uncheck(selector, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    page.uncheck(selector, { strict: true });
    // $ExpectType Promise<void>
    page.uncheck(selector, { timeout: 10000 });
    // $ExpectType Promise<void>
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
    page.waitForFunction(() => true, { polling: "mutation" });
    // $ExpectType Promise<JSHandle<boolean>>
    page.waitForFunction(() => true, { polling: 100 });
    // $ExpectType Promise<JSHandle<boolean>>
    page.waitForFunction(() => true, { timeout: 10000 });
    // $ExpectType Promise<JSHandle<boolean>>
    page.waitForFunction((a: number) => a === 1, {}, 1);

    // $ExpectType Promise<void>
    page.waitForLoadState();
    // $ExpectType Promise<void>
    page.waitForLoadState("load");
    // $ExpectType Promise<void>
    page.waitForLoadState("domcontentloaded");
    // $ExpectType Promise<void>
    page.waitForLoadState("networkidle");
    // $ExpectType Promise<void>
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
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector);
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector, { state: "attached" });
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector, { state: "detached" });
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector, { state: "visible" });
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector, { state: "hidden" });
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector, { strict: true });
    // $ExpectType Promise<ElementHandle>
    page.waitForSelector(selector, { timeout: 10000 });

    // @ts-expect-error
    page.waitForTimeout();
    // $ExpectType Promise<void>
    page.waitForTimeout(10000);

    // $ExpectType Worker[]
    page.workers();

    // @ts-expect-error
    page.$();
    // $ExpectType Promise<ElementHandle | null>
    page.$(selector);

    // @ts-expect-error
    page.$$();
    // $ExpectType Promise<ElementHandle[]>
    page.$$(selector);

    //
    // Keyboard
    //
    const keyboard = page.keyboard;

    // @ts-expect-error
    keyboard.down();
    // $ExpectType Promise<void>
    keyboard.down("a");

    // @ts-expect-error
    keyboard.insertText();
    // $ExpectType Promise<void>
    keyboard.insertText("a");

    // @ts-expect-error
    keyboard.press();
    // $ExpectType Promise<void>
    keyboard.press("a");
    // $ExpectType Promise<void>
    keyboard.press("a", { delay: 1000 });

    // @ts-expect-error
    keyboard.type();
    // $ExpectType Promise<void>
    keyboard.type("a");
    // $ExpectType Promise<void>
    keyboard.type("a", { delay: 1000 });

    // @ts-expect-error
    keyboard.up();
    // $ExpectType Promise<void>
    keyboard.up("a");

    //
    // Mouse
    //

    const mouse = page.mouse;

    // @ts-expect-error
    mouse.click();
    // @ts-expect-error
    mouse.click(0);
    // $ExpectType Promise<void>
    mouse.click(0, 0);
    // $ExpectType Promise<void>
    mouse.click(0, 0, { button: "right" });
    // $ExpectType Promise<void>
    mouse.click(0, 0, { clickCount: 2 });
    // $ExpectType Promise<void>
    mouse.click(0, 0, { delay: 1000 });

    // @ts-expect-error
    mouse.dblclick();
    // @ts-expect-error
    mouse.dblclick(0);
    // $ExpectType Promise<void>
    mouse.dblclick(0, 0);
    // $ExpectType Promise<void>
    mouse.dblclick(0, 0, { button: "right" });
    // $ExpectType Promise<void>
    mouse.dblclick(0, 0, { delay: 1000 });

    // $ExpectType Promise<void>
    mouse.down();
    // $ExpectType Promise<void>
    mouse.down({ button: "right" });
    // $ExpectType Promise<void>
    mouse.down({ clickCount: 2 });

    // @ts-expect-error
    mouse.move();
    // @ts-expect-error
    mouse.move(0);
    // $ExpectType Promise<void>
    mouse.move(0, 0);
    // $ExpectType Promise<void>
    mouse.move(0, 0, { steps: 10 });

    // $ExpectType Promise<void>
    mouse.up();
    // $ExpectType Promise<void>
    mouse.up({ button: "right" });
    // $ExpectType Promise<void>
    mouse.up({ clickCount: 2 });

    //
    // Locator
    //
    const locator = page.locator(selector);

    // $ExpectType Promise<void>
    locator.clear();
    // $ExpectType Promise<void>
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

    // $ExpectType Promise<void>
    locator.dblclick();
    // $ExpectType Promise<void>
    locator.dblclick({ button: "right" });
    // @ts-expect-error
    locator.dblclick({ button: "top" });
    // $ExpectType Promise<void>
    locator.dblclick({ delay: 1000 });
    // $ExpectType Promise<void>
    locator.dblclick({ force: true });
    // $ExpectType Promise<void>
    locator.dblclick({ modifiers: ["Alt", "Control", "Meta", "Shift"] });
    // @ts-expect-error
    locator.dblclick({ modifiers: ["Esc"] });
    // $ExpectType Promise<void>
    locator.dblclick({ noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.dblclick({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    locator.dblclick({ timeout: 10000 });
    // $ExpectType Promise<void>
    locator.dblclick({ trial: true });

    // $ExpectType Promise<void>
    locator.check();
    // $ExpectType Promise<void>
    locator.check({ force: true });
    // $ExpectType Promise<void>
    locator.check({ noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.check({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    locator.check({ timeout: 10000 });
    // $ExpectType Promise<void>
    locator.check({ trial: true });

    // $ExpectType Promise<void>
    locator.uncheck();
    // $ExpectType Promise<void>
    locator.uncheck({ force: true });
    // $ExpectType Promise<void>
    locator.uncheck({ noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.uncheck({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    locator.uncheck({ timeout: 10000 });
    // $ExpectType Promise<void>
    locator.uncheck({ trial: true });

    // $ExpectType Promise<boolean>
    locator.isChecked();
    // $ExpectType Promise<boolean>
    locator.isChecked({ timeout: 10000 });

    // $ExpectType Promise<boolean>
    locator.isEnabled();
    // $ExpectType Promise<boolean>
    locator.isEnabled({ timeout: 10000 });

    // $ExpectType Promise<boolean>
    locator.isDisabled();
    // $ExpectType Promise<boolean>
    locator.isDisabled({ timeout: 10000 });

    // $ExpectType Promise<boolean>
    locator.isVisible();

    // $ExpectType Promise<boolean>
    locator.isHidden();

    // @ts-expect-error
    locator.fill();
    // $ExpectType Promise<void>
    locator.fill("text");
    // $ExpectType Promise<void>
    locator.fill("text", { force: true });
    // $ExpectType Promise<void>
    locator.fill("text", { noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.fill("text", { timeout: 10000 });

    // $ExpectType Promise<void>
    locator.focus();
    // $ExpectType Promise<void>
    locator.focus({ timeout: 10000 });

    // @ts-expect-error
    locator.getAttribute();
    // $ExpectType Promise<string | null>
    locator.getAttribute("attr");
    // $ExpectType Promise<string | null>
    locator.getAttribute("attr", { timeout: 10000 });

    // $ExpectType Promise<string>
    locator.innerHTML();
    // $ExpectType Promise<string>
    locator.innerHTML({ timeout: 10000 });

    // $ExpectType Promise<string>
    locator.innerText();
    // $ExpectType Promise<string>
    locator.innerText({ timeout: 10000 });

    // $ExpectType Promise<string | null>
    locator.textContent();
    // $ExpectType Promise<string | null>
    locator.textContent({ timeout: 10000 });

    // $ExpectType Promise<string>
    locator.inputValue();
    // $ExpectType Promise<string>
    locator.inputValue({ timeout: 10000 });

    // @ts-expect-error
    locator.selectOption();
    // @ts-expect-error
    locator.selectOption({ timeout: 10000 });
    // $ExpectType Promise<string[]>
    locator.selectOption("value");
    // $ExpectType Promise<string[]>
    locator.selectOption(["value1", "value2"]);
    // $ExpectType Promise<string[]>
    locator.selectOption({ value: "value" });
    // $ExpectType Promise<string[]>
    locator.selectOption({ label: "label" });
    // $ExpectType Promise<string[]>
    locator.selectOption({ index: 1 });
    // $ExpectType Promise<string[]>
    locator.selectOption("value", { force: true });
    // $ExpectType Promise<string[]>
    locator.selectOption("value", { noWaitAfter: true });
    // $ExpectType Promise<string[]>
    locator.selectOption("value", { timeout: 10000 });

    // @ts-expect-error
    locator.setChecked();
    // $ExpectType Promise<void>
    locator.setChecked(true);
    // $ExpectType Promise<void>
    locator.setChecked(false);
    // $ExpectType Promise<void>
    locator.setChecked(true, { force: true });
    // $ExpectType Promise<void>
    locator.setChecked(true, { noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.setChecked(true, { timeout: 10000 });
    // $ExpectType Promise<void>
    locator.setChecked(true, { trial: true });
    // $ExpectType Promise<void>
    locator.setChecked(true, { position: { x: 0, y: 0 } });

    // @ts-expect-error
    locator.type();
    // @ts-expect-error
    locator.type({ timeout: 10000 });
    // $ExpectType Promise<void>
    locator.type("text");
    // $ExpectType Promise<void>
    locator.type("text", { delay: 1000 });
    // @ts-expect-error
    locator.type("text", { force: true });
    // $ExpectType Promise<void>
    locator.type("text", { noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.type("text", { timeout: 10000 });
    // @ts-expect-error
    locator.type("text", { trial: true });

    // $ExpectType Promise<void>
    locator.hover();
    // $ExpectType Promise<void>
    locator.hover({ force: true });
    // $ExpectType Promise<void>
    locator.hover({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    locator.hover({ timeout: 10000 });
    // $ExpectType Promise<void>
    locator.hover({ trial: true });

    // $ExpectType Promise<void>
    locator.tap();
    // $ExpectType Promise<void>
    locator.tap({ force: true });
    // $ExpectType Promise<void>
    locator.tap({ noWaitAfter: true });
    // $ExpectType Promise<void>
    locator.tap({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    locator.tap({ timeout: 10000 });
    // $ExpectType Promise<void>
    locator.tap({ trial: true });

    // @ts-expect-error
    locator.dispatchEvent();
    // $ExpectType Promise<void>
    locator.dispatchEvent("click");
    // $ExpectType Promise<void>
    locator.dispatchEvent("click", { buttons: 2 & 4 });
    // $ExpectType Promise<void>
    locator.dispatchEvent("click", { buttons: 2 & 4 }, { timeout: 10000 });
    // $ExpectType Promise<void>
    locator.dispatchEvent("click", { buttons: 2 & 4 });

    // $ExpectType Promise<void>
    locator.waitFor();
    for (const state of ["attached", "detached", "visible", "hidden"]) {
        // $ExpectType Promise<void>
        locator.waitFor({ state: state as any });
    }
    // $ExpectType Promise<void>
    locator.waitFor({ timeout: 10000 });

    //
    // JSHandle
    //
    const jsHandle = await page.evaluateHandle(() => null);

    // $ExpectType Promise<ElementHandle | null>
    jsHandle.asElement();

    // $ExpectType Promise<void>
    jsHandle.dispose();

    // @ts-expect-error
    jsHandle.evaluate();
    // @ts-expect-error
    jsHandle.evaluate(1);
    // @ExpectType Promise<void>
    jsHandle.evaluate("");
    // @ExpectType Promise<void>
    jsHandle.evaluate(() => {});
    // @ExpectType Promise<string>
    jsHandle.evaluate(() => {
        "";
    });
    // @ExpectType Promise<string>
    jsHandle.evaluate((a: string) => {
        a;
    }, "");
    // @ExpectType Promise<string[]>
    jsHandle.evaluate((a: string[]) => a, [""]);

    // @ts-expect-error
    jsHandle.evaluateHandle();
    // @ts-expect-error
    jsHandle.evaluateHandle(1);
    // @ExpectType Promise<JSHandle>
    jsHandle.evaluateHandle("");
    // @ExpectType Promise<JSHandle>
    jsHandle.evaluateHandle(() => {});
    // @ExpectType Promise<JSHandle>
    jsHandle.evaluateHandle(() => {
        "";
    });
    // @ExpectType Promise<JSHandle>
    jsHandle.evaluateHandle((a: string) => {
        a;
    }, "");
    // @ExpectType Promise<JSHandle>
    jsHandle.evaluateHandle((a: string[]) => a, [""]);

    // $ExpectType Promise<Map<string, JSHandle<any>>>
    jsHandle.getProperties();

    // $ExpectType Promise<any>
    jsHandle.jsonValue();

    //
    // Request
    //
    const request = await page.goto(url).then(r => r?.request()!);

    // $ExpectType Promise<Record<string, string>>
    request.allHeaders();

    // $ExpectType Frame
    request.frame();

    // $ExpectType Record<string, string>
    request.headers();

    // $ExpectType Promise<{ name: string; value: string; }[]>
    request.headersArray();

    // @ts-expect-error
    request.headerValue();
    // $ExpectType Promise<string | null>
    request.headerValue("content-type");

    // $ExpectType boolean
    request.isNavigationRequest();

    // $ExpectType string
    request.method();

    // $ExpectType string | null
    request.postData();

    // $ExpectType ArrayBuffer | null
    request.postDataBuffer();

    // $ExpectType ResourceType
    request.resourceType();

    // $ExpectType Promise<Response | null>
    request.response();

    // $ExpectType Promise<{ body: number; headers: number; }>
    request.size();

    // $ExpectType ResourceTiming
    request.timing();

    //
    // Response
    //
    const response = await page.goto(url).then(r => r!);

    // $ExpectType Promise<Record<string, string>>
    response.allHeaders();

    // $ExpectType Promise<ArrayBuffer>
    response.body();

    // $ExpectType Frame
    response.frame();

    // $ExpectType Record<string, string>
    response.headers();

    // $ExpectType Promise<{ name: string; value: string; }[]>
    response.headersArray();

    // @ts-expect-error
    response.headerValue();
    // $ExpectType Promise<string | null>
    response.headerValue("content-type");

    // @ts-expect-error
    response.headerValues();
    // $ExpectType Promise<string[]>
    response.headerValues("content-type");

    // $ExpectType Promise<any>
    response.json();

    // $ExpectType boolean
    response.ok();

    // $ExpectType Request
    response.request();

    // $ExpectType Promise<SecurityDetailsObject | null>
    response.securityDetails();

    // $ExpectType Promise<{ ipAddress: string; port: number; } | null>
    response.serverAddr();

    // $ExpectType number
    response.status();

    // $ExpectType string
    response.statusText();

    // $ExpectType Promise<{ body: number; headers: number; }>
    response.size();

    // $ExpectType string
    response.url();

    //
    // ElementHandle
    //

    const elementHandle = await page.waitForSelector(selector);

    // @ts-expect-error
    elementHandle.$();
    // $ExpectType Promise<ElementHandle | null>
    elementHandle.$("div");

    // @ts-expect-error
    elementHandle.$$();
    // $ExpectType Promise<ElementHandle[]>
    elementHandle.$$("div");

    // $ExpectType Promise<Rect | null>
    elementHandle.boundingBox();

    // $ExpectType Promise<void>
    elementHandle.check();
    // $ExpectType Promise<void>
    elementHandle.check({ force: true });
    // $ExpectType Promise<void>
    elementHandle.check({ noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.check({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.check({ strict: true });
    // $ExpectType Promise<void>
    elementHandle.check({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.check({ trial: true });

    // $ExpectType Promise<void>
    elementHandle.click();
    // $ExpectType Promise<void>
    elementHandle.click({ button: "left" });
    // $ExpectType Promise<void>
    elementHandle.click({ button: "middle" });
    // $ExpectType Promise<void>
    elementHandle.click({ button: "right" });
    // $ExpectType Promise<void>
    elementHandle.click({ clickCount: 3 });
    // $ExpectType Promise<void>
    elementHandle.click({ delay: 1000 });
    // $ExpectType Promise<void>
    elementHandle.click({ force: true });
    // $ExpectType Promise<void>
    elementHandle.click({ modifiers: ["Alt", "Control", "Meta", "Shift"] });
    // $ExpectType Promise<void>
    elementHandle.click({ noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.click({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.click({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.click({ trial: true });

    // $ExpectType Promise<Frame>
    elementHandle.contentFrame();

    // $ExpectType Promise<void>
    elementHandle.dblclick();
    // $ExpectType Promise<void>
    elementHandle.dblclick({ button: "left" });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ button: "middle" });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ button: "right" });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ delay: 1000 });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ force: true });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ modifiers: ["Alt", "Control", "Meta", "Shift"] });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.dblclick({ trial: true });

    // @ts-expect-error
    elementHandle.dispatchEvent();
    // $ExpectType Promise<void>
    elementHandle.dispatchEvent("click");
    // $ExpectType Promise<void>
    elementHandle.dispatchEvent("click", { type: "look" });

    // @ts-expect-error
    elementHandle.fill();
    // $ExpectType Promise<void>
    elementHandle.fill("text");
    // $ExpectType Promise<void>
    elementHandle.fill("text", { force: true });
    // $ExpectType Promise<void>
    elementHandle.fill("text", { noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.fill("text", { timeout: 10000 });

    // $ExpectType Promise<void>
    elementHandle.focus();

    // @ts-expect-error
    elementHandle.getAttribute();
    // $ExpectType Promise<string | null>
    elementHandle.getAttribute("foo");

    // $ExpectType Promise<void>
    elementHandle.hover();
    // $ExpectType Promise<void>
    elementHandle.hover({ force: true });
    // $ExpectType Promise<void>
    elementHandle.hover({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.hover({ trial: true });
    // $ExpectType Promise<void>
    elementHandle.hover({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.hover({ modifiers: ["Shift"] });

    // $ExpectType Promise<string>
    elementHandle.innerHTML();

    // $ExpectType Promise<string>
    elementHandle.innerText();

    // $ExpectType Promise<string>
    elementHandle.inputValue();
    // $ExpectType Promise<string>
    elementHandle.inputValue({ timeout: 10000 });

    // $ExpectType Promise<boolean>
    elementHandle.isChecked();

    // $ExpectType Promise<boolean>
    elementHandle.isDisabled();

    // $ExpectType Promise<boolean>
    elementHandle.isEditable();

    // $ExpectType Promise<boolean>
    elementHandle.isEnabled();

    // $ExpectType Promise<boolean>
    elementHandle.isHidden();

    // $ExpectType Promise<boolean>
    elementHandle.isVisible();

    // $ExpectType Promise<Frame>
    elementHandle.ownerFrame();

    // @ts-expect-error
    elementHandle.press();
    // $ExpectType Promise<void>
    elementHandle.press("Enter");
    // $ExpectType Promise<void>
    elementHandle.press("Enter", { noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.press("Enter", { delay: 100 });
    // $ExpectType Promise<void>
    elementHandle.press("Enter", { timeout: 10000 });

    // $ExpectType Promise<ArrayBuffer>
    elementHandle.screenshot();
    // $ExpectType Promise<ArrayBuffer>
    elementHandle.screenshot({ timeout: 10000 });
    // $ExpectType Promise<ArrayBuffer>
    elementHandle.screenshot({ omitBackground: true });
    // $ExpectType Promise<ArrayBuffer>
    elementHandle.screenshot({ quality: 100 });
    for (const format of ["png", "jpeg"]) {
        // $ExpectType Promise<ArrayBuffer>
        elementHandle.screenshot({ type: format as any });
    }

    // $ExpectType Promise<void>
    elementHandle.scrollIntoViewIfNeeded();
    // $ExpectType Promise<void>
    elementHandle.scrollIntoViewIfNeeded({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.scrollIntoViewIfNeeded({ force: true });
    // $ExpectType Promise<void>
    elementHandle.scrollIntoViewIfNeeded({ noWaitAfter: true });

    // @ts-expect-error
    elementHandle.selectOption();
    // @ts-expect-error
    elementHandle.selectOption({ timeout: 10000 });
    // $ExpectType Promise<string[]>
    elementHandle.selectOption("foo");
    // $ExpectType Promise<string[]>
    elementHandle.selectOption(["foo", "bar"]);
    // $ExpectType Promise<string[]>
    elementHandle.selectOption(elementHandle);
    // $ExpectType Promise<string[]>
    elementHandle.selectOption({ value: "foo" });
    // $ExpectType Promise<string[]>
    elementHandle.selectOption({ label: "bar" });
    // $ExpectType Promise<string[]>
    elementHandle.selectOption({ index: 1 });
    // $ExpectType Promise<string[]>
    elementHandle.selectOption("foo", { timeout: 10000 });
    // $ExpectType Promise<string[]>
    elementHandle.selectOption("foo", { force: true });
    // $ExpectType Promise<string[]>
    elementHandle.selectOption("foo", { noWaitAfter: true });

    // $ExpectType Promise<void>
    elementHandle.selectText();
    // $ExpectType Promise<void>
    elementHandle.selectText({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.selectText({ force: true });
    // $ExpectType Promise<void>
    elementHandle.selectText({ noWaitAfter: true });

    // @ts-expect-error
    elementHandle.setChecked();
    // $ExpectType Promise<void>
    elementHandle.setChecked(true);
    // $ExpectType Promise<void>
    elementHandle.setChecked(false);
    // $ExpectType Promise<void>
    elementHandle.setChecked(true, { force: true });
    // $ExpectType Promise<void>
    elementHandle.setChecked(true, { noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.setChecked(true, { timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.setChecked(true, { trial: true });
    // $ExpectType Promise<void>
    elementHandle.setChecked(true, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.setChecked(true, { strict: true });

    // @ts-expect-error
    elementHandle.setInputFiles();
    // @ts-expect-error
    elementHandle.setInputFiles({});
    // @ts-expect-error
    elementHandle.setInputFiles({ name: "file.txt" });
    // @ts-expect-error
    elementHandle.setInputFiles({ name: "file.txt", mimeType: "text/plain" });
    // $ExpectType Promise<void>
    elementHandle.setInputFiles({ name: "file.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) });
    // $ExpectType Promise<void>
    elementHandle.setInputFiles([{ name: "file1.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) }, {
        name: "file2.txt",
        mimeType: "text/plain",
        buffer: new ArrayBuffer(0),
    }]);
    // $ExpectType Promise<void>
    elementHandle.setInputFiles({ name: "file.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) }, {
        noWaitAfter: true,
        timeout: 1000,
    });

    // $ExpectType Promise<void>
    elementHandle.tap();
    // $ExpectType Promise<void>
    elementHandle.tap({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.tap({ force: true });
    // $ExpectType Promise<void>
    elementHandle.tap({ noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.tap({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.tap({ modifiers: ["Shift"] });
    // $ExpectType Promise<void>
    elementHandle.tap({ trial: true });

    // $ExpectType Promise<string | null>
    elementHandle.textContent();

    // @ts-expect-error
    elementHandle.type();
    // $ExpectType Promise<void>
    elementHandle.type("text");
    // $ExpectType Promise<void>
    elementHandle.type("text", { delay: 100 });
    // $ExpectType Promise<void>
    elementHandle.type("text", { timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.type("text", { noWaitAfter: true });

    // $ExpectType Promise<void>
    elementHandle.uncheck();
    // $ExpectType Promise<void>
    elementHandle.uncheck({ force: true });
    // $ExpectType Promise<void>
    elementHandle.uncheck({ noWaitAfter: true });
    // $ExpectType Promise<void>
    elementHandle.uncheck({ timeout: 10000 });
    // $ExpectType Promise<void>
    elementHandle.uncheck({ trial: true });
    // $ExpectType Promise<void>
    elementHandle.uncheck({ position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    elementHandle.uncheck({ strict: true });

    // @ts-expect-error
    elementHandle.waitForElementState();
    for (const state of ["visible", "hidden", "stable", "enabled", "disabled", "editable", "disabled"]) {
        // $ExpectType Promise<void>
        elementHandle.waitForElementState(state as any);
    }
    // $ExpectType Promise<void>
    elementHandle.waitForElementState("visible", { timeout: 10000 });

    // @ts-expect-error
    elementHandle.waitForSelector();
    // $ExpectType Promise<ElementHandle>
    elementHandle.waitForSelector("div");
    // $ExpectType Promise<ElementHandle>
    elementHandle.waitForSelector("div", { timeout: 10000 });
    // $ExpectType Promise<ElementHandle>
    elementHandle.waitForSelector("div", { state: "attached" });
    // $ExpectType Promise<ElementHandle>
    elementHandle.waitForSelector("div", { strict: true });

    //
    // Frame
    //

    const frame = page.mainFrame();

    // @ts-expect-error
    frame.$();
    // $ExpectType Promise<ElementHandle | null>
    frame.$("div");

    // @ts-expect-error
    frame.$$();
    // $ExpectType Promise<ElementHandle[]>
    frame.$$("div");

    // @ts-expect-error
    frame.check();
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]");
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]", { force: true });
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]", { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]", { trial: true });
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]", { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    frame.check("input[type=checkbox]", { strict: true });

    // @ts-expect-error
    frame.uncheck();
    // $ExpectType Promise<void>
    frame.uncheck("input[type=checkbox]");
    // $ExpectType Promise<void>
    frame.uncheck("input[type=checkbox]", { force: true });
    // $ExpectType Promise<void>
    frame.uncheck("input[type=checkbox]", { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.uncheck("input[type=checkbox]", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.uncheck("input[type=checkbox]", { trial: true });
    // $ExpectType Promise<void>
    frame.uncheck("input[type=checkbox]", { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
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
    // $ExpectType Promise<void>
    frame.dblclick("div");
    // $ExpectType Promise<void>
    frame.dblclick("div", { delay: 100 });
    // $ExpectType Promise<void>
    frame.dblclick("div", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.dblclick("div", { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.dblclick("div", { force: true });
    // $ExpectType Promise<void>
    frame.dblclick("div", { trial: true });
    // $ExpectType Promise<void>
    frame.dblclick("div", { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    frame.dblclick("div", { modifiers: ["Shift"] });
    // $ExpectType Promise<void>
    frame.dblclick("div", { strict: true });

    // @ts-expect-error
    frame.fill();
    // $ExpectType Promise<void>
    frame.fill("input", "text");
    // $ExpectType Promise<void>
    frame.fill("input", "text", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.fill("input", "text", { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.fill("input", "text", { force: true });
    // $ExpectType Promise<void>
    frame.fill("input", "text", { strict: true });

    // @ts-expect-error
    frame.focus();
    // $ExpectType Promise<void>
    frame.focus("input");
    // $ExpectType Promise<void>
    frame.focus("input", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.focus("input", { strict: true });

    // @ts-expect-error
    frame.hover();
    // $ExpectType Promise<void>
    frame.hover("div");
    // $ExpectType Promise<void>
    frame.hover("div", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.hover("div", { force: true });
    // $ExpectType Promise<void>
    frame.hover("div", { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    frame.hover("div", { modifiers: ["Shift"] });
    // $ExpectType Promise<void>
    frame.hover("div", { strict: true });
    // $ExpectType Promise<void>
    frame.hover("div", { trial: true });
    // $ExpectType Promise<void>
    frame.hover("div", { noWaitAfter: true });

    // @ts-expect-error
    frame.tap();
    // $ExpectType Promise<void>
    frame.tap("div");
    // $ExpectType Promise<void>
    frame.tap("div", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.tap("div", { force: true });
    // $ExpectType Promise<void>
    frame.tap("div", { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    frame.tap("div", { modifiers: ["Shift"] });
    // $ExpectType Promise<void>
    frame.tap("div", { strict: true });
    // $ExpectType Promise<void>
    frame.tap("div", { trial: true });
    // $ExpectType Promise<void>
    frame.tap("div", { noWaitAfter: true });

    // @ts-expect-error
    frame.press();
    // @ts-expect-error
    frame.press("div");
    // $ExpectType Promise<void>
    frame.press("div", "a");
    // $ExpectType Promise<void>
    frame.press("div", "a", { delay: 100 });
    // $ExpectType Promise<void>
    frame.press("div", "a", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.press("div", "a", { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.press("div", "a", { strict: true });

    // @ts-expect-error
    frame.type();
    // @ts-expect-error
    frame.type("input");
    // $ExpectType Promise<void>
    frame.type("input", "text");
    // $ExpectType Promise<void>
    frame.type("input", "text", { delay: 100 });
    // $ExpectType Promise<void>
    frame.type("input", "text", { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.type("input", "text", { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.type("input", "text", { strict: true });

    // @ts-expect-error
    frame.selectOption();
    // @ts-expect-error
    frame.selectOption("select");
    // $ExpectType Promise<string[]>
    frame.selectOption("select", "value");
    // $ExpectType Promise<string[]>
    frame.selectOption("select", ["value1", "value2"]);
    // $ExpectType Promise<string[]>
    frame.selectOption("select", elementHandle);
    // $ExpectType Promise<string[]>
    frame.selectOption("select", [elementHandle, elementHandle]);
    // $ExpectType Promise<string[]>
    frame.selectOption("select", { value: "value", index: 1, label: "label" });
    // $ExpectType Promise<string[]>
    frame.selectOption("select", [
        { value: "value1", index: 1, label: "label1" },
        { value: "value2", index: 2, label: "label2" },
    ]);
    // $ExpectType Promise<string[]>
    frame.selectOption("select", "value", { force: true });
    // $ExpectType Promise<string[]>
    frame.selectOption("select", "value", { noWaitAfter: true });
    // $ExpectType Promise<string[]>
    frame.selectOption("select", "value", { timeout: 10000 });
    // $ExpectType Promise<string[]>
    frame.selectOption("select", "value", { strict: true });

    // @ts-expect-error
    frame.dispatchEvent();
    // @ts-expect-error
    frame.dispatchEvent("div");
    // $ExpectType Promise<void>
    frame.dispatchEvent("div", "click");
    // $ExpectType Promise<void>
    frame.dispatchEvent("div", "click", { button: "left" });
    // $ExpectType Promise<void>
    frame.dispatchEvent("div", "click", {}, { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.dispatchEvent("div", "click", {}, { strict: true });

    // @ts-expect-error
    frame.evaluate();
    // @ts-expect-error
    frame.evaluate(1);
    // @ExpectType Promise<void>
    frame.evaluate("");
    // @ExpectType Promise<void>
    frame.evaluate(() => {});
    // @ExpectType Promise<string>
    frame.evaluate(() => {
        "";
    });
    // @ExpectType Promise<string>
    frame.evaluate((a: string) => {
        a;
    }, "");
    // @ExpectType Promise<string[]>
    frame.evaluate((a: string[]) => a, [""]);

    // @ts-expect-error
    frame.evaluateHandle();
    // @ts-expect-error
    frame.evaluateHandle(1);
    // @ExpectType Promise<JSHandle>
    frame.evaluateHandle("");
    // @ExpectType Promise<JSHandle>
    frame.evaluateHandle(() => {});
    // @ExpectType Promise<JSHandle>
    frame.evaluateHandle(() => {
        "";
    });
    // @ExpectType Promise<JSHandle>
    frame.evaluateHandle((a: string) => {
        a;
    }, "");
    // @ExpectType Promise<JSHandle>
    frame.evaluateHandle((a: string[]) => a, [""]);

    // $ExpectType Page
    frame.page();

    // $ExpectType Frame | null
    frame.parentFrame();

    // $ExpectType Frame[]
    frame.childFrames();

    // $ExpectType Promise<ElementHandle>
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
    frame.setChecked();
    // @ts-expect-error
    frame.setChecked(selector);
    // $ExpectType Promise<void>
    frame.setChecked(selector, true);
    // $ExpectType Promise<void>
    frame.setChecked(selector, false);
    // $ExpectType Promise<void>
    frame.setChecked(selector, true, { force: true });
    // $ExpectType Promise<void>
    frame.setChecked(selector, true, { noWaitAfter: true });
    // $ExpectType Promise<void>
    frame.setChecked(selector, true, { timeout: 10000 });
    // $ExpectType Promise<void>
    frame.setChecked(selector, true, { trial: true });
    // $ExpectType Promise<void>
    frame.setChecked(selector, true, { position: { x: 0, y: 0 } });
    // $ExpectType Promise<void>
    frame.setChecked(selector, true, { strict: true });

    // @ts-expect-error
    frame.setContent();
    // $ExpectType Promise<void>
    frame.setContent("<div>content</div>");
    // $ExpectType Promise<void>
    frame.setContent("<div>content</div>", { timeout: 10000 });
    for (const state of ["load", "domcontentloaded", "networkidle"]) {
        // $ExpectType Promise<void>
        frame.setContent("<div>content</div>", { waitUntil: state as any });
    }

    // $ExpectType string
    frame.name();

    // $ExpectType Promise<string>
    frame.title();

    // $ExpectType string
    frame.url();

    // $ExpectType Promise<string>
    frame.content();

    // $ExpectType boolean
    frame.isDetached();

    // @ts-expect-error
    frame.locator();
    // $ExpectType Locator
    frame.locator("div");

    // @ts-expect-error
    frame.innerHTML();
    // $ExpectType Promise<string>
    frame.innerHTML("div");
    // $ExpectType Promise<string>
    frame.innerHTML("div", { timeout: 10000 });
    // $ExpectType Promise<string>
    frame.innerHTML("div", { strict: true });

    // @ts-expect-error
    frame.innerText();
    // $ExpectType Promise<string>
    frame.innerText("div");
    // $ExpectType Promise<string>
    frame.innerText("div", { timeout: 10000 });
    // $ExpectType Promise<string>
    frame.innerText("div", { strict: true });

    // @ts-expect-error
    frame.textContent();
    // $ExpectType Promise<string>
    frame.textContent("div");
    // $ExpectType Promise<string>
    frame.textContent("div", { timeout: 10000 });
    // $ExpectType Promise<string>
    frame.textContent("div", { strict: true });

    // @ts-expect-error
    frame.getAttribute();
    // @ts-expect-error
    frame.getAttribute("div");
    // $ExpectType Promise<string>
    frame.getAttribute("div", "attr");
    // $ExpectType Promise<string>
    frame.getAttribute("div", "attr", { timeout: 10000 });
    // $ExpectType Promise<string>
    frame.getAttribute("div", "attr", { strict: true });

    // @ts-expect-error
    frame.inputValue();
    // $ExpectType Promise<string>
    frame.inputValue("input");
    // $ExpectType Promise<string>
    frame.inputValue("input", { timeout: 10000 });
    // $ExpectType Promise<string>
    frame.inputValue("input", { strict: true });

    // @ts-expect-error
    frame.isChecked();
    // $ExpectType Promise<boolean>
    frame.isChecked("input");
    // $ExpectType Promise<boolean>
    frame.isChecked("input", { timeout: 10000 });
    // $ExpectType Promise<boolean>
    frame.isChecked("input", { strict: true });

    // @ts-expect-error
    frame.isDisabled();
    // $ExpectType Promise<boolean>
    frame.isDisabled("input");
    // $ExpectType Promise<boolean>
    frame.isDisabled("input", { timeout: 10000 });
    // $ExpectType Promise<boolean>
    frame.isDisabled("input", { strict: true });

    // @ts-expect-error
    frame.isEnabled();
    // $ExpectType Promise<boolean>
    frame.isEnabled("input");
    // $ExpectType Promise<boolean>
    frame.isEnabled("input", { timeout: 10000 });
    // $ExpectType Promise<boolean>
    frame.isEnabled("input", { strict: true });

    // @ts-expect-error
    frame.isEditable();
    // $ExpectType Promise<boolean>
    frame.isEditable("input");
    // $ExpectType Promise<boolean>
    frame.isEditable("input", { timeout: 10000 });
    // $ExpectType Promise<boolean>
    frame.isEditable("input", { strict: true });

    // @ts-expect-error
    frame.isHidden();
    // $ExpectType Promise<boolean>
    frame.isHidden("input");
    // $ExpectType Promise<boolean>
    frame.isHidden("input", { strict: true });

    // @ts-expect-error
    frame.isVisible();
    // $ExpectType Promise<boolean>
    frame.isVisible("input");
    // $ExpectType Promise<boolean>
    frame.isVisible("input", { strict: true });

    // @ts-expect-error
    frame.setInputFiles();
    // @ts-expect-error
    frame.setInputFiles("foo");
    // @ts-expect-error
    frame.setInputFiles("foo", {});
    // @ts-expect-error
    frame.setInputFiles("foo", { name: "file.txt" });
    // @ts-expect-error
    frame.setInputFiles("foo", { name: "file.txt", mimeType: "text/plain" });
    // $ExpectType Promise<void>
    frame.setInputFiles("foo", { name: "file.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) });
    // $ExpectType Promise<void>
    frame.setInputFiles("foo", [{ name: "file1.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) }, {
        name: "file2.txt",
        mimeType: "text/plain",
        buffer: new ArrayBuffer(0),
    }]);
    // $ExpectType Promise<void>
    frame.setInputFiles("foo", { name: "file.txt", mimeType: "text/plain", buffer: new ArrayBuffer(0) }, {
        noWaitAfter: true,
        timeout: 1000,
    });

    // @ts-expect-error
    frame.waitForFunction();
    // $ExpectType Promise<JSHandle<boolean>>
    frame.waitForFunction(() => true);
    // $ExpectType Promise<JSHandle<boolean>>
    frame.waitForFunction(() => true, { polling: "raf" });
    // $ExpectType Promise<JSHandle<boolean>>
    frame.waitForFunction(() => true, { polling: "mutation" });
    // $ExpectType Promise<JSHandle<boolean>>
    frame.waitForFunction(() => true, { polling: 10000 });
    // $ExpectType Promise<JSHandle<boolean>>
    frame.waitForFunction(() => true, { timeout: 10000 });
    // $ExpectType Promise<JSHandle<boolean>>
    frame.waitForFunction((a: number) => a === 1, {}, 1);

    // $ExpectType Promise<void>
    frame.waitForLoadState();
    for (const state of ["load", "domcontentloaded", "networkidle"]) {
        // $ExpectType Promise<void>
        frame.waitForLoadState(state as any);
    }
    // $ExpectType Promise<void>
    frame.waitForLoadState("domcontentloaded", { timeout: 10000 });

    // $ExpectType Promise<Response | null>
    frame.waitForNavigation();
    // $ExpectType Promise<Response | null>
    frame.waitForNavigation({ timeout: 10000 });
    // $ExpectType Promise<Response | null>
    frame.waitForNavigation({ waitUntil: "domcontentloaded" });

    // @ts-expect-error
    frame.waitForSelector();
    // $ExpectType Promise<ElementHandle>
    frame.waitForSelector("div");
    // $ExpectType Promise<ElementHandle>
    frame.waitForSelector("div", { timeout: 10000 });
    for (const state of ["attached", "detached", "visible", "hidden"]) {
        // $ExpectType Promise<ElementHandle>
        frame.waitForSelector("div", { state: state as any });
    }

    // @ts-expect-error
    frame.waitForTimeout();
    // $ExpectType Promise<void>
    frame.waitForTimeout(10000);

    //
    // Touchscreen.tap
    //

    // @ts-expect-error
    page.touchscreen.tap();
    // $ExpectType Promise<void>
    page.touchscreen.tap(1, 2);

    //
    // Worker
    //

    const worker = page.workers()[0];

    // $ExpectType string
    worker.url();
}
