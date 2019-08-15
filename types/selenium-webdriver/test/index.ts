import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as edge from 'selenium-webdriver/edge';
import * as firefox from 'selenium-webdriver/firefox';
import * as http from 'selenium-webdriver/http';
import { Command } from 'selenium-webdriver/lib/command';

function TestBuilder() {
    let builder: webdriver.Builder = new webdriver.Builder();

    let driver: webdriver.WebDriver = builder.build();
    builder = builder.forBrowser('name');
    builder = builder.forBrowser('name', 'version');
    builder = builder.forBrowser('name', 'version', 'platform');

    let cap: webdriver.Capabilities = builder.getCapabilities();
    let str: string = builder.getServerUrl();

    builder = builder.setAlertBehavior('behavior');
    builder = builder.setChromeOptions(new chrome.Options());
    builder = builder.setEdgeOptions(new edge.Options());
    builder = builder.setFirefoxOptions(new firefox.Options());
    builder = builder.setLoggingPrefs(new webdriver.logging.Preferences());
    builder = builder.setLoggingPrefs({ key: 'value' });
    builder = builder.setProxy({ proxyType: 'type' });
    builder = builder.usingServer('http://someserver');
    builder = builder.withCapabilities(new webdriver.Capabilities());
    builder = builder.withCapabilities({ something: true });
}

function TestTouchSequence() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    let element: webdriver.WebElement = new webdriver.WebElement(driver, 'elementId');

    let sequence: webdriver.TouchSequence = new webdriver.TouchSequence(driver);

    sequence = sequence.tap(element);
    sequence = sequence.doubleTap(element);
    sequence = sequence.longPress(element);
    sequence = sequence.tapAndHold({ x: 100, y: 100 });
    sequence = sequence.move({ x: 100, y: 100 });
    sequence = sequence.release({ x: 100, y: 100 });
    sequence = sequence.scroll({ x: 100, y: 100 });
    sequence = sequence.scrollFromElement(element, { x: 100, y: 100 });
    sequence = sequence.flick({ xspeed: 100, yspeed: 100 });
    sequence = sequence.flickElement(element, { x: 100, y: 100 }, 100);

    sequence.perform().then(() => {});
}

function TestAlert() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let alert: webdriver.Alert = driver.switchTo().alert();

    alert.accept().then(() => {});
    alert.dismiss().then(() => {});
    alert.getText().then((text: string) => {});
    alert.sendKeys('ABC').then(() => {});
}

function TestBrowser() {
    let browser: string;

    browser = webdriver.Browser.ANDROID;
    browser = webdriver.Browser.CHROME;
    browser = webdriver.Browser.FIREFOX;
    browser = webdriver.Browser.HTMLUNIT;
    browser = webdriver.Browser.INTERNET_EXPLORER;
    browser = webdriver.Browser.IPAD;
    browser = webdriver.Browser.IPHONE;
    browser = webdriver.Browser.OPERA;
    browser = webdriver.Browser.PHANTOM_JS;
    browser = webdriver.Browser.SAFARI;
}

function TestCapabilities() {
    let capabilities: webdriver.Capabilities = new webdriver.Capabilities();
    capabilities = new webdriver.Capabilities(webdriver.Capabilities.chrome());
    let objCapabilities: any = {};
    objCapabilities[webdriver.Capability.BROWSER_NAME] = webdriver.Browser.PHANTOM_JS;
    capabilities = new webdriver.Capabilities(objCapabilities);

    let anything: any = capabilities.get(webdriver.Capability.SECURE_SSL);
    let check: boolean = capabilities.has(webdriver.Capability.SECURE_SSL);
    capabilities = capabilities.merge(capabilities);
    capabilities = capabilities.merge(objCapabilities);
    capabilities = capabilities.set(webdriver.Capability.VERSION, { abc: 'def' });
    capabilities = capabilities.set(webdriver.Capability.VERSION, null);
    capabilities = capabilities.setLoggingPrefs(new webdriver.logging.Preferences());
    capabilities = capabilities.setLoggingPrefs({ key: 'value' });
    capabilities = capabilities.setProxy({ proxyType: 'Type' });
    capabilities = capabilities.setEnableNativeEvents(true);
    capabilities = capabilities.setScrollBehavior(1);
    capabilities = capabilities.setAlertBehavior('accept');

    anything = capabilities.toJSON();

    capabilities = webdriver.Capabilities.android();
    capabilities = webdriver.Capabilities.chrome();
    capabilities = webdriver.Capabilities.firefox();
    capabilities = webdriver.Capabilities.htmlunit();
    capabilities = webdriver.Capabilities.htmlunitwithjs();
    capabilities = webdriver.Capabilities.ie();
    capabilities = webdriver.Capabilities.ipad();
    capabilities = webdriver.Capabilities.iphone();
    capabilities = webdriver.Capabilities.opera();
    capabilities = webdriver.Capabilities.phantomjs();
    capabilities = webdriver.Capabilities.safari();
}

function TestCapability() {
    let capability: string;

    capability = webdriver.Capability.ACCEPT_SSL_CERTS;
    capability = webdriver.Capability.BROWSER_NAME;
    capability = webdriver.Capability.ELEMENT_SCROLL_BEHAVIOR;
    capability = webdriver.Capability.HANDLES_ALERTS;
    capability = webdriver.Capability.LOGGING_PREFS;
    capability = webdriver.Capability.NATIVE_EVENTS;
    capability = webdriver.Capability.PLATFORM;
    capability = webdriver.Capability.PROXY;
    capability = webdriver.Capability.ROTATABLE;
    capability = webdriver.Capability.SECURE_SSL;
    capability = webdriver.Capability.SUPPORTS_APPLICATION_CACHE;
    capability = webdriver.Capability.SUPPORTS_CSS_SELECTORS;
    capability = webdriver.Capability.SUPPORTS_JAVASCRIPT;
    capability = webdriver.Capability.SUPPORTS_LOCATION_CONTEXT;
    capability = webdriver.Capability.TAKES_SCREENSHOT;
    capability = webdriver.Capability.UNEXPECTED_ALERT_BEHAVIOR;
    capability = webdriver.Capability.VERSION;
}

function TestEventEmitter() {
    let emitter: webdriver.EventEmitter = new webdriver.EventEmitter();

    let callback = (a: number, b: number, c: number) => {};

    emitter = emitter.addListener('ABC', callback);
    emitter = emitter.addListener('ABC', callback, this);

    emitter.emit('ABC', 1, 2, 3);

    let listeners = emitter.listeners('ABC');
    if (listeners[0].oneshot) {
        listeners[0].fn.apply(listeners[0].scope);
    }
    let length: number = listeners.length;
    let listenerInfo = listeners[0];
    if (listenerInfo.oneshot) {
        listenerInfo.fn.apply(listenerInfo.scope, [1, 2, 3]);
    }

    emitter = emitter.on('ABC', callback);
    emitter = emitter.on('ABC', callback, this);

    emitter = emitter.once('ABC', callback);
    emitter = emitter.once('ABC', callback, this);

    emitter = emitter.removeListener('ABC', callback);

    emitter.removeAllListeners('ABC');
    emitter.removeAllListeners();
}

function TestKey() {
    let key: string;

    key = webdriver.Key.ADD;
    key = webdriver.Key.ALT;
    key = webdriver.Key.ARROW_DOWN;
    key = webdriver.Key.ARROW_LEFT;
    key = webdriver.Key.ARROW_RIGHT;
    key = webdriver.Key.ARROW_UP;
    key = webdriver.Key.BACK_SPACE;
    key = webdriver.Key.CANCEL;
    key = webdriver.Key.CLEAR;
    key = webdriver.Key.COMMAND;
    key = webdriver.Key.CONTROL;
    key = webdriver.Key.DECIMAL;
    key = webdriver.Key.DELETE;
    key = webdriver.Key.DIVIDE;
    key = webdriver.Key.DOWN;
    key = webdriver.Key.END;
    key = webdriver.Key.ENTER;
    key = webdriver.Key.EQUALS;
    key = webdriver.Key.ESCAPE;
    key = webdriver.Key.F1;
    key = webdriver.Key.F2;
    key = webdriver.Key.F3;
    key = webdriver.Key.F4;
    key = webdriver.Key.F5;
    key = webdriver.Key.F6;
    key = webdriver.Key.F7;
    key = webdriver.Key.F8;
    key = webdriver.Key.F9;
    key = webdriver.Key.F10;
    key = webdriver.Key.F11;
    key = webdriver.Key.F12;
    key = webdriver.Key.HELP;
    key = webdriver.Key.HOME;
    key = webdriver.Key.INSERT;
    key = webdriver.Key.LEFT;
    key = webdriver.Key.META;
    key = webdriver.Key.MULTIPLY;
    key = webdriver.Key.NULL;
    key = webdriver.Key.NUMPAD0;
    key = webdriver.Key.NUMPAD1;
    key = webdriver.Key.NUMPAD2;
    key = webdriver.Key.NUMPAD3;
    key = webdriver.Key.NUMPAD4;
    key = webdriver.Key.NUMPAD5;
    key = webdriver.Key.NUMPAD6;
    key = webdriver.Key.NUMPAD7;
    key = webdriver.Key.NUMPAD8;
    key = webdriver.Key.NUMPAD9;
    key = webdriver.Key.PAGE_DOWN;
    key = webdriver.Key.PAGE_UP;
    key = webdriver.Key.PAUSE;
    key = webdriver.Key.RETURN;
    key = webdriver.Key.RIGHT;
    key = webdriver.Key.SEMICOLON;
    key = webdriver.Key.SEPARATOR;
    key = webdriver.Key.SHIFT;
    key = webdriver.Key.SPACE;
    key = webdriver.Key.SUBTRACT;
    key = webdriver.Key.TAB;
    key = webdriver.Key.UP;
}

function TestBy() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let locator: webdriver.By = new webdriver.By('class name', 'class');

    let str: string = locator.toString();

    locator = webdriver.By.className('class');
    locator = webdriver.By.css('css');
    locator = webdriver.By.id('id');
    locator = webdriver.By.linkText('link');
    locator = webdriver.By.name('name');
    locator = webdriver.By.partialLinkText('text');
    locator = webdriver.By.tagName('tag');
    locator = webdriver.By.xpath('xpath');

    // Can import 'By' without import declarations
    let By = webdriver.By;

    let locatorHash: webdriver.ByHash;
    locatorHash = { className: 'class' };
    locatorHash = { css: 'css' };
    locatorHash = { id: 'id' };
    locatorHash = { linkText: 'link' };
    locatorHash = { name: 'name' };
    locatorHash = { partialLinkText: 'text' };
    locatorHash = { tagName: 'tag' };
    locatorHash = { xpath: 'xpath' };

    webdriver.By.js('script', 1, 2, 3)(driver).then((abc: number) => {});
}

function TestSession() {
    let session: webdriver.Session = new webdriver.Session('ABC', webdriver.Capabilities.android());
    let capabilitiesObj: any = {};
    capabilitiesObj[webdriver.Capability.BROWSER_NAME] = webdriver.Browser.ANDROID;
    capabilitiesObj[webdriver.Capability.PLATFORM] = 'ANDROID';
    session = new webdriver.Session('ABC', capabilitiesObj);

    let capabilities: webdriver.Capabilities = session.getCapabilities();
    let capability: any = session.getCapability(webdriver.Capability.BROWSER_NAME);
    let id: string = session.getId();
    let data: string = session.toJSON();
}

function TestWebDriverFileDetector() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let fileDetector: webdriver.FileDetector = new webdriver.FileDetector();

    fileDetector.handleFile(driver, 'path/to/file').then((path: string) => {});
}

function TestWebDriverLogs() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let logs: webdriver.Logs = new webdriver.Logs(driver);

    logs.get(webdriver.logging.Type.BROWSER).then((entries: webdriver.logging.Entry[]) => {});
    logs.getAvailableLogTypes().then((types: string[]) => {});
}

function TestWebDriverNavigation() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let navigation: webdriver.Navigation = new webdriver.Navigation(driver);

    navigation.back().then(() => {});
    navigation.forward().then(() => {});
    navigation.refresh().then(() => {});
    navigation.to('http://google.com').then(() => {});
}

function TestWebDriverOptions() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let options: webdriver.Options = new webdriver.Options(driver);
    let promise: Promise<void>;

    let name: string = 'name';
    let value: string = 'value';
    let path: string = 'path';
    let domain: string = 'domain';
    let secure: boolean = true;
    let httpOnly: boolean = true;

    // Add Cookie
    promise = options.addCookie({ name, value });
    promise = options.addCookie({ name, value, path });
    promise = options.addCookie({ name, value, path, domain });
    promise = options.addCookie({ name, value, path, domain, secure });
    promise = options.addCookie({ name, value, path, domain, secure, httpOnly });
    promise = options.addCookie({ name, value, path, domain, secure, httpOnly, expiry: 123 });
    promise = options.addCookie({ name, value, path, domain, secure, httpOnly, expiry: Date.now() });

    promise = options.deleteAllCookies();
    promise = options.deleteCookie('name');
    options.getCookie('name').then((cookie: webdriver.IWebDriverCookie) => {
        let expiry: number | undefined = cookie.expiry;
     });
    options.getCookies().then((cookies: webdriver.IWebDriverCookie[]) => { });

    let logs: webdriver.Logs = options.logs();
    let window: webdriver.Window = options.window();
}

function TestWebDriverTargetLocator() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let locator: webdriver.TargetLocator = new webdriver.TargetLocator(driver);
    let promise: Promise<void>;

    let element: webdriver.WebElement = locator.activeElement();
    let alert: webdriver.Alert = locator.alert();
    promise = locator.defaultContent();
    promise = locator.frame(1);
    promise = locator.window('nameOrHandle');
}

function TestWebDriverWindow() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let window: webdriver.Window = new webdriver.Window(driver);
    let locationPromise: Promise<webdriver.ILocation>;
    let sizePromise: Promise<webdriver.ISize>;
    let voidPromise: Promise<void>;

    locationPromise = window.getPosition();
    sizePromise = window.getSize();
    voidPromise = window.maximize();
    voidPromise = window.setPosition(12, 34);
    voidPromise = window.setSize(12, 34);
}

declare const sessionPromise: Promise<webdriver.Session>;
declare let booleanPromise: Promise<boolean>;
declare const booleanCondition: webdriver.Condition<boolean>;
declare const webElementCondition: webdriver.WebElementCondition;

function TestWebDriver() {
    let session: webdriver.Session = new webdriver.Session('ABC', webdriver.Capabilities.android());
    let httpClient: http.HttpClient = new http.HttpClient('http://someserver');
    let executor: http.Executor = new http.Executor(httpClient);
    let driver: webdriver.WebDriver = new webdriver.WebDriver(session, executor);
    driver = new webdriver.WebDriver(sessionPromise, executor);
    let cmdExecutor = driver.getExecutor();

    let voidPromise: Promise<void>;
    let stringPromise: Promise<string>;
    let webElementPromise: webdriver.WebElementPromise;

    voidPromise = driver.close();

    // executeCommand
    cmdExecutor.defineCommand('SEND_COMMAND', 'POST', `/session/${session.getId()}/chromium/send_command`);
    const cmd = new Command('SEND_COMMAND')
        .setParameter('cmd', 'Page.setDownloadBehavior')
        .setParameter('params', {behavior: 'allow', downloadPath: './'});
    voidPromise = driver.execute(cmd);

    // executeAsyncScript
    stringPromise = driver.executeAsyncScript<string>('function(){}');
    stringPromise = driver.executeAsyncScript<string>('function(){}', 1, 2, 3);
    stringPromise = driver.executeAsyncScript<string>(() => {});
    stringPromise = driver.executeAsyncScript<string>((a: number) => {}, 1);

    // executeScript
    stringPromise = driver.executeScript<string>('function(){}');
    stringPromise = driver.executeScript<string>('function(){}', 1, 2, 3);
    stringPromise = driver.executeScript<string>(() => {});
    stringPromise = driver.executeScript<string>((a: number) => {}, 1);

    // findElement
    let element: webdriver.WebElement;
    element = driver.findElement(webdriver.By.id('ABC'));
    element = driver.findElement(webdriver.By.js('function(){}'));

    // findElements
    driver.findElements(webdriver.By.className('ABC')).then((elements: webdriver.WebElement[]) => {});
    driver.findElements(webdriver.By.js('function(){}')).then((elements: webdriver.WebElement[]) => {});

    voidPromise = driver.get('http://www.google.com');
    driver.getAllWindowHandles().then((handles: string[]) => {});
    driver.getCapabilities().then((caps: webdriver.Capabilities) => {});
    stringPromise = driver.getCurrentUrl();
    stringPromise = driver.getPageSource();
    driver.getSession().then((session: webdriver.Session) => {});
    stringPromise = driver.getTitle();
    stringPromise = driver.getWindowHandle();

    let options: webdriver.Options = driver.manage();
    let navigation: webdriver.Navigation = driver.navigate();
    let locator: webdriver.TargetLocator = driver.switchTo();

    let fileDetector: webdriver.FileDetector = new webdriver.FileDetector();
    driver.setFileDetector(fileDetector);

    voidPromise = driver.quit();
    voidPromise = driver.sleep(123);
    stringPromise = driver.takeScreenshot();

    booleanPromise = driver.wait(booleanPromise);
    booleanPromise = driver.wait(booleanCondition);
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => true);
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => Promise.resolve(true));
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => Promise.resolve(true));
    booleanPromise = driver.wait(booleanPromise, 123);
    booleanPromise = driver.wait(booleanPromise, 123, 'Message');
    webElementPromise = driver.wait(webElementCondition);
    voidPromise = driver.wait(webElementCondition).click();

    driver = webdriver.WebDriver.createSession(executor, webdriver.Capabilities.android());
}

declare const serializable: webdriver.Serializable<string>;

function TestSerializable() {
    let serial: string | Promise<string> = serializable.serialize();
}

function TestWebElement() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let element: webdriver.WebElement;

    element = new webdriver.WebElement(driver, 'elementId');

    let voidPromise: Promise<void>;
    let stringPromise: Promise<string>;
    let booleanPromise: Promise<boolean>;

    voidPromise = element.clear();
    voidPromise = element.click();

    element = element.findElement(webdriver.By.id('ABC'));
    element = element.findElement({id: 'ABC'});
    element.findElements({className: 'ABC'}).then((elements: webdriver.WebElement[]) => { });

    stringPromise = element.getAttribute('class');
    stringPromise = element.getCssValue('display');
    driver = element.getDriver();
    element.getLocation().then((location: webdriver.ILocation) => {});
    element.getSize().then((size: webdriver.ISize) => {});
    stringPromise = element.getTagName();
    stringPromise = element.getText();
    booleanPromise = element.isDisplayed();
    booleanPromise = element.isEnabled();
    booleanPromise = element.isSelected();
    voidPromise = element.sendKeys('A', 'B', 'C');
    voidPromise = element.sendKeys(1, 2, 3);
    voidPromise = element.sendKeys(webdriver.Key.BACK_SPACE);
    voidPromise = element.sendKeys(stringPromise, stringPromise, stringPromise);
    voidPromise = element.sendKeys('A', 1, webdriver.Key.BACK_SPACE, stringPromise);
    voidPromise = element.submit();
    element.getId().then((id: string) => {});
    element.serialize().then((id: webdriver.IWebElementId) => {});

    booleanPromise = webdriver.WebElement.equals(element, new webdriver.WebElement(driver, 'elementId'));
}

function TestWebElementPromise() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let elementPromise: webdriver.WebElementPromise = driver.findElement(webdriver.By.id('id'));

    elementPromise.then();
    elementPromise.then((element: webdriver.WebElement) => {});
    elementPromise.then((element: webdriver.WebElement) => {}, (error: any) => {});
    elementPromise.then((element: webdriver.WebElement) => 'foo', (error: any) => {}).then((result: string) => {});
}

function TestLogging() {
    let preferences: webdriver.logging.Preferences = new webdriver.logging.Preferences();
    preferences.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.ALL);
    let prefs: any = preferences.toJSON();

    let level: webdriver.logging.Level = webdriver.logging.getLevel('OFF');
    level = webdriver.logging.getLevel(1);

    level = webdriver.logging.Level.ALL;
    level = webdriver.logging.Level.DEBUG;
    level = webdriver.logging.Level.INFO;
    level = webdriver.logging.Level.OFF;
    level = webdriver.logging.Level.SEVERE;
    level = webdriver.logging.Level.WARNING;

    let name: string = level.name;
    let value: number = level.value;

    let type: string;
    type = webdriver.logging.Type.BROWSER;
    type = webdriver.logging.Type.CLIENT;
    type = webdriver.logging.Type.DRIVER;
    type = webdriver.logging.Type.PERFORMANCE;
    type = webdriver.logging.Type.SERVER;

    let logger: webdriver.logging.Logger = webdriver.logging.getLogger();
    webdriver.logging.addConsoleHandler();
    webdriver.logging.addConsoleHandler(logger);
    webdriver.logging.removeConsoleHandler();
    webdriver.logging.removeConsoleHandler(logger);
}

function TestLoggingEntry() {
    let entry: webdriver.logging.Entry;

    entry = new webdriver.logging.Entry(webdriver.logging.Level.ALL, 'ABC');
    entry = new webdriver.logging.Entry('ALL', 'ABC');
    entry = new webdriver.logging.Entry(webdriver.logging.Level.ALL, 'ABC', 123);
    entry = new webdriver.logging.Entry('ALL', 'ABC', 123);
    entry = new webdriver.logging.Entry(webdriver.logging.Level.ALL, 'ABC', 123, webdriver.logging.Type.BROWSER);
    entry = new webdriver.logging.Entry('ALL', 'ABC', 123, webdriver.logging.Type.BROWSER);

    let entryObj: any = entry.toJSON();

    let message: string = entry.message;
    let timestamp: number = entry.timestamp;
    let type: string = entry.type;
}

declare let stringPromise: Promise<string>;

function TestUntilModule() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let conditionB: webdriver.Condition<boolean> = new webdriver.Condition<boolean>('message', (driver: webdriver.WebDriver) => true);
    let conditionBBase: webdriver.Condition<boolean> = conditionB;
    let conditionWebElement: webdriver.WebElementCondition;
    let conditionWebElements: webdriver.Condition<webdriver.WebElement[]>;

    conditionB = webdriver.until.ableToSwitchToFrame(5);
    let conditionAlert: webdriver.Condition<webdriver.Alert> = webdriver.until.alertIsPresent();
    let el: webdriver.WebElement = driver.findElement(webdriver.By.id('id'));
    conditionB = webdriver.until.stalenessOf(el);
    conditionB = webdriver.until.titleContains('text');
    conditionB = webdriver.until.titleIs('text');
    conditionB = webdriver.until.titleMatches(/text/);
    conditionB = webdriver.until.urlContains('text');
    conditionB = webdriver.until.urlIs('text');
    conditionB = webdriver.until.urlMatches(/text/);

    conditionWebElement = webdriver.until.elementIsDisabled(el);
    conditionWebElement = webdriver.until.elementIsEnabled(el);
    conditionWebElement = webdriver.until.elementIsNotSelected(el);
    conditionWebElement = webdriver.until.elementIsNotVisible(el);
    conditionWebElement = webdriver.until.elementIsSelected(el);
    conditionWebElement = webdriver.until.elementIsVisible(el);
    conditionWebElement = webdriver.until.elementLocated(webdriver.By.id('id'));
    conditionWebElement = webdriver.until.elementTextContains(el, 'text');
    conditionWebElement = webdriver.until.elementTextIs(el, 'text');
    conditionWebElement = webdriver.until.elementTextMatches(el, /text/);
    conditionWebElements = webdriver.until.elementsLocated(webdriver.By.className('class'));
}
