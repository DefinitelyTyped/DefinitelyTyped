import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as edge from 'selenium-webdriver/edge';
import * as firefox from 'selenium-webdriver/firefox';
import * as http from 'selenium-webdriver/http';
import * as remote from 'selenium-webdriver/remote';
import * as safari from 'selenium-webdriver/safari';
import * as testing from 'selenium-webdriver/testing';

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
    builder = builder.setChromeService(new chrome.ServiceBuilder());
    builder = builder.setControlFlow(new webdriver.promise.ControlFlow());
    builder = builder.setEdgeOptions(new edge.Options());
    builder = builder.setEdgeService(new edge.ServiceBuilder());
    builder = builder.setEnableNativeEvents(true);
    builder = builder.setFirefoxOptions(new firefox.Options());
    builder = builder.setFirefoxService(new firefox.ServiceBuilder());
    builder = builder.setLoggingPrefs(new webdriver.logging.Preferences());
    builder = builder.setLoggingPrefs({ key: 'value' });
    builder = builder.setProxy({ proxyType: 'type' });
    builder = builder.setSafariOptions(new safari.Options());
    builder = builder.setScrollBehavior(1);
    builder = builder.usingServer('http://someserver');
    builder = builder.withCapabilities(new webdriver.Capabilities());
    builder = builder.withCapabilities({ something: true });

    const chromeOptions: chrome.Options = builder.getChromeOptions();
    const firefoxOptions: firefox.Options = builder.getFirefoxOptions();
    const safariOptions: safari.Options = builder.getSafariOptions();
}

declare const promise: webdriver.promise.Promise<string>;

function TestActionSequence() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let sequence: webdriver.ActionSequence = new webdriver.ActionSequence(driver);
    let element: webdriver.WebElement = new webdriver.WebElement(driver, 'elementId');
    element = new webdriver.WebElement(driver, promise);

    // Click
    sequence = sequence.click();
    sequence = sequence.click(webdriver.Button.LEFT);
    sequence = sequence.click(element);
    sequence = sequence.click(element, webdriver.Button.LEFT);

    // DoubleClick
    sequence = sequence.doubleClick();
    sequence = sequence.doubleClick(webdriver.Button.LEFT);
    sequence = sequence.doubleClick(element);
    sequence = sequence.doubleClick(element, webdriver.Button.LEFT);

    // DragAndDrop
    sequence = sequence.dragAndDrop(element, element);
    sequence = sequence.dragAndDrop(element, { x: 1, y: 2 });

    // KeyDown
    sequence = sequence.keyDown(webdriver.Key.ADD);

    // KeyUp
    sequence = sequence.keyUp(webdriver.Key.ADD);

    // MouseDown
    sequence = sequence.mouseDown();
    sequence = sequence.mouseDown(webdriver.Button.LEFT);
    sequence = sequence.mouseDown(element);
    sequence = sequence.mouseDown(element, webdriver.Button.LEFT);

    // MouseMove
    sequence = sequence.mouseMove(element);
    sequence = sequence.mouseMove({ x: 1, y: 1 });
    sequence = sequence.mouseMove(element, { x: 1, y: 2 });

    // MouseUp
    sequence = sequence.mouseUp();
    sequence = sequence.mouseUp(webdriver.Button.LEFT);
    sequence = sequence.mouseUp(element);
    sequence = sequence.mouseUp(element, webdriver.Button.LEFT);

    // SendKeys
    sequence = sequence.sendKeys('A', 'B', 'C');
    sequence = sequence.sendKeys('A', webdriver.Key.NULL);

    sequence.perform().then(() => {});
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

function TestButton() {
    let button: string;

    button = webdriver.Button.LEFT;
    button = webdriver.Button.MIDDLE;
    button = webdriver.Button.RIGHT;
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

function TestCommand() {
    let command: webdriver.Command = new webdriver.Command(webdriver.CommandName.ADD_COOKIE);

    let name: string = command.getName();
    let param: any = command.getParameter('param');

    let params: any = command.getParameters();

    command = command.setParameter('param', 123);
    command = command.setParameters({ param: 123 });
}

function TestCommandName() {
    let command: string;

    command = webdriver.CommandName.ACCEPT_ALERT;
    command = webdriver.CommandName.ADD_COOKIE;
    command = webdriver.CommandName.CLEAR_APP_CACHE;
    command = webdriver.CommandName.CLEAR_ELEMENT;
    command = webdriver.CommandName.CLEAR_LOCAL_STORAGE;
    command = webdriver.CommandName.CLEAR_SESSION_STORAGE;
    command = webdriver.CommandName.CLICK;
    command = webdriver.CommandName.CLICK_ELEMENT;
    command = webdriver.CommandName.CLOSE;
    command = webdriver.CommandName.DELETE_ALL_COOKIES;
    command = webdriver.CommandName.DELETE_COOKIE;
    command = webdriver.CommandName.DESCRIBE_SESSION;
    command = webdriver.CommandName.DISMISS_ALERT;
    command = webdriver.CommandName.DOUBLE_CLICK;
    command = webdriver.CommandName.ELEMENT_EQUALS;
    command = webdriver.CommandName.EXECUTE_ASYNC_SCRIPT;
    command = webdriver.CommandName.EXECUTE_SCRIPT;
    command = webdriver.CommandName.EXECUTE_SQL;
    command = webdriver.CommandName.FIND_CHILD_ELEMENT;
    command = webdriver.CommandName.FIND_CHILD_ELEMENTS;
    command = webdriver.CommandName.FIND_ELEMENT;
    command = webdriver.CommandName.FIND_ELEMENTS;
    command = webdriver.CommandName.GET;
    command = webdriver.CommandName.GET_ACTIVE_ELEMENT;
    command = webdriver.CommandName.GET_ALERT_TEXT;
    command = webdriver.CommandName.GET_ALL_COOKIES;
    command = webdriver.CommandName.GET_APP_CACHE;
    command = webdriver.CommandName.GET_APP_CACHE_STATUS;
    command = webdriver.CommandName.GET_AVAILABLE_LOG_TYPES;
    command = webdriver.CommandName.GET_COOKIE;
    command = webdriver.CommandName.GET_CURRENT_URL;
    command = webdriver.CommandName.GET_CURRENT_WINDOW_HANDLE;
    command = webdriver.CommandName.GET_ELEMENT_ATTRIBUTE;
    command = webdriver.CommandName.GET_ELEMENT_LOCATION;
    command = webdriver.CommandName.GET_ELEMENT_LOCATION_IN_VIEW;
    command = webdriver.CommandName.GET_ELEMENT_SIZE;
    command = webdriver.CommandName.GET_ELEMENT_TAG_NAME;
    command = webdriver.CommandName.GET_ELEMENT_TEXT;
    command = webdriver.CommandName.GET_ELEMENT_VALUE_OF_CSS_PROPERTY;
    command = webdriver.CommandName.GET_LOCAL_STORAGE_ITEM;
    command = webdriver.CommandName.GET_LOCAL_STORAGE_KEYS;
    command = webdriver.CommandName.GET_LOCAL_STORAGE_SIZE;
    command = webdriver.CommandName.GET_LOCATION;
    command = webdriver.CommandName.GET_LOG;
    command = webdriver.CommandName.GET_PAGE_SOURCE;
    command = webdriver.CommandName.GET_SCREEN_ORIENTATION;
    command = webdriver.CommandName.GET_SERVER_STATUS;
    command = webdriver.CommandName.GET_SESSION_LOGS;
    command = webdriver.CommandName.GET_SESSION_STORAGE_ITEM;
    command = webdriver.CommandName.GET_SESSION_STORAGE_KEYS;
    command = webdriver.CommandName.GET_SESSION_STORAGE_SIZE;
    command = webdriver.CommandName.GET_SESSIONS;
    command = webdriver.CommandName.GET_TITLE;
    command = webdriver.CommandName.GET_WINDOW_HANDLES;
    command = webdriver.CommandName.GET_WINDOW_POSITION;
    command = webdriver.CommandName.GET_WINDOW_SIZE;
    command = webdriver.CommandName.GO_BACK;
    command = webdriver.CommandName.GO_FORWARD;
    command = webdriver.CommandName.IMPLICITLY_WAIT;
    command = webdriver.CommandName.IS_BROWSER_ONLINE;
    command = webdriver.CommandName.IS_ELEMENT_DISPLAYED;
    command = webdriver.CommandName.IS_ELEMENT_ENABLED;
    command = webdriver.CommandName.IS_ELEMENT_SELECTED;
    command = webdriver.CommandName.MAXIMIZE_WINDOW;
    command = webdriver.CommandName.MOUSE_DOWN;
    command = webdriver.CommandName.MOUSE_UP;
    command = webdriver.CommandName.MOVE_TO;
    command = webdriver.CommandName.NEW_SESSION;
    command = webdriver.CommandName.QUIT;
    command = webdriver.CommandName.REFRESH;
    command = webdriver.CommandName.REMOVE_LOCAL_STORAGE_ITEM;
    command = webdriver.CommandName.REMOVE_SESSION_STORAGE_ITEM;
    command = webdriver.CommandName.SCREENSHOT;
    command = webdriver.CommandName.SEND_KEYS_TO_ACTIVE_ELEMENT;
    command = webdriver.CommandName.SEND_KEYS_TO_ELEMENT;
    command = webdriver.CommandName.SET_ALERT_TEXT;
    command = webdriver.CommandName.SET_BROWSER_ONLINE;
    command = webdriver.CommandName.SET_LOCAL_STORAGE_ITEM;
    command = webdriver.CommandName.SET_LOCATION;
    command = webdriver.CommandName.SET_SCREEN_ORIENTATION;
    command = webdriver.CommandName.SET_SCRIPT_TIMEOUT;
    command = webdriver.CommandName.SET_SESSION_STORAGE_ITEM;
    command = webdriver.CommandName.SET_TIMEOUT;
    command = webdriver.CommandName.SET_WINDOW_POSITION;
    command = webdriver.CommandName.SET_WINDOW_SIZE;
    command = webdriver.CommandName.SUBMIT_ELEMENT;
    command = webdriver.CommandName.SWITCH_TO_FRAME;
    command = webdriver.CommandName.SWITCH_TO_WINDOW;
    command = webdriver.CommandName.TOUCH_DOUBLE_TAP;
    command = webdriver.CommandName.TOUCH_DOWN;
    command = webdriver.CommandName.TOUCH_FLICK;
    command = webdriver.CommandName.TOUCH_LONG_PRESS;
    command = webdriver.CommandName.TOUCH_MOVE;
    command = webdriver.CommandName.TOUCH_SCROLL;
    command = webdriver.CommandName.TOUCH_SINGLE_TAP;
    command = webdriver.CommandName.TOUCH_UP;
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
    let promise: webdriver.promise.Promise<void>;

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
    let timeouts: webdriver.Timeouts = options.timeouts();
    let window: webdriver.Window = options.window();
}

function TestWebDriverTargetLocator() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let locator: webdriver.TargetLocator = new webdriver.TargetLocator(driver);
    let promise: webdriver.promise.Promise<void>;

    let element: webdriver.WebElement = locator.activeElement();
    let alert: webdriver.Alert = locator.alert();
    promise = locator.defaultContent();
    promise = locator.frame(1);
    promise = locator.window('nameOrHandle');
}

function TestWebDriverTimeouts() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let timeouts: webdriver.Timeouts = new webdriver.Timeouts(driver);
    let promise: webdriver.promise.Promise<void>;

    promise = timeouts.implicitlyWait(123);
    promise = timeouts.pageLoadTimeout(123);
    promise = timeouts.setScriptTimeout(123);
}

function TestWebDriverWindow() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let window: webdriver.Window = new webdriver.Window(driver);
    let locationPromise: webdriver.promise.Promise<webdriver.ILocation>;
    let sizePromise: webdriver.promise.Promise<webdriver.ISize>;
    let voidPromise: webdriver.promise.Promise<void>;

    locationPromise = window.getPosition();
    sizePromise = window.getSize();
    voidPromise = window.maximize();
    voidPromise = window.setPosition(12, 34);
    voidPromise = window.setSize(12, 34);
}

declare const sessionPromise: webdriver.promise.Promise<webdriver.Session>;
declare let booleanPromise: webdriver.promise.Promise<boolean>;
declare const booleanCondition: webdriver.Condition<boolean>;
declare const webElementCondition: webdriver.WebElementCondition;

function TestWebDriver() {
    let session: webdriver.Session = new webdriver.Session('ABC', webdriver.Capabilities.android());
    let httpClient: http.HttpClient = new http.HttpClient('http://someserver');
    let executor: http.Executor = new http.Executor(httpClient);
    let flow: webdriver.promise.ControlFlow = new webdriver.promise.ControlFlow();
    let driver: webdriver.WebDriver = new webdriver.WebDriver(session, executor);
    driver = new webdriver.WebDriver(session, executor, flow);
    driver = new webdriver.WebDriver(sessionPromise, executor);
    driver = new webdriver.WebDriver(sessionPromise, executor, flow);

    let voidPromise: webdriver.promise.Promise<void>;
    let stringPromise: webdriver.promise.Promise<string>;
    let webElementPromise: webdriver.WebElementPromise;

    let actions: webdriver.ActionSequence = driver.actions();
    let touchActions: webdriver.TouchSequence = driver.touchActions();

    // call
    stringPromise = driver.call<string>(() => 'value');
    stringPromise = driver.call<string>(() => stringPromise);
    stringPromise = driver.call<string>(() => 'value', driver);
    stringPromise = driver.call<string>((a: number) => 'value', driver, 1);

    voidPromise = driver.close();
    flow = driver.controlFlow();

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
    voidPromise = driver.schedule<void>(new webdriver.Command(webdriver.CommandName.CLICK), 'ABC');
    voidPromise = driver.sleep(123);
    stringPromise = driver.takeScreenshot();

    booleanPromise = driver.wait(booleanPromise);
    booleanPromise = driver.wait(booleanCondition);
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => true);
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => Promise.resolve(true));
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => webdriver.promise.Promise.resolve(true));
    booleanPromise = driver.wait(booleanPromise, 123);
    booleanPromise = driver.wait(booleanPromise, 123, 'Message');
    webElementPromise = driver.wait(webElementCondition);
    voidPromise = driver.wait(webElementCondition).click();

    driver = webdriver.WebDriver.attachToSession(executor, 'ABC');
    driver = webdriver.WebDriver.createSession(executor, webdriver.Capabilities.android());
}

declare const serializable: webdriver.Serializable<string>;

function TestSerializable() {
    let serial: string | webdriver.promise.IThenable<string> = serializable.serialize();
}

function TestWebElement() {
    let driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    let element: webdriver.WebElement;

    element = new webdriver.WebElement(driver, 'elementId');
    element = new webdriver.WebElement(driver, promise);

    let voidPromise: webdriver.promise.Promise<void>;
    let stringPromise: webdriver.promise.Promise<string>;
    let booleanPromise: webdriver.promise.Promise<boolean>;

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
    elementPromise.then((element: webdriver.WebElement) => 'foo', (error: any) => 'bar').then((result: string) => {});
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

declare let stringPromise: webdriver.promise.Promise<string>;

function TestPromiseModule() {
    let cancellationError: webdriver.promise.CancellationError = new webdriver.promise.CancellationError();
    cancellationError = new webdriver.promise.CancellationError('message');
    let str: string = cancellationError.message;
    str = cancellationError.name;

    let numberPromise: webdriver.promise.Promise<number>;
    let booleanPromise: webdriver.promise.Promise<boolean>;
    let voidPromise: webdriver.promise.Promise<void>;

    webdriver.promise.all([stringPromise]).then((values: string[]) => {});

    webdriver.promise.asap('abc', (value: any) => true);
    webdriver.promise.asap('abc', (value: any) => {}, (err: any) => 'ABC');

    stringPromise = webdriver.promise.checkedNodeCall<string>((err: any, value: any) => 'abc');

    webdriver.promise.consume(() => {
        return 5;
    }).then((value: number) => {});
    webdriver.promise.consume(() => {
        return 5;
    }, this).then((value: number) => {});
    webdriver.promise.consume((a: number, b: number, c: number) => 5, this, 1, 2, 3)
        .then((value: number) => {});

    let numbersPromise: webdriver.promise.Promise<number[]> = webdriver.promise.filter([1, 2, 3], (element: number, type: any, index: number, arr: number[]) => {
        return true;
    });
    numbersPromise = webdriver.promise.filter([1, 2, 3], (element: number, type: any, index: number, arr: number[]) => {
        return true;
    }, this);
    numbersPromise = webdriver.promise.filter(numbersPromise, (element: number, type: any, index: number, arr: number[]) => {
        return true;
    });
    numbersPromise = webdriver.promise.filter(numbersPromise, (element: number, type: any, index: number, arr: number[]) => {
        return true;
    }, this);

    numbersPromise = webdriver.promise.map([1, 2, 3], (el: number, type: any, index: number, arr: number[]) => {
        return true;
    });
    numbersPromise = webdriver.promise.map([1, 2, 3], (el: number, type: any, index: number, arr: number[]) => {
        return true;
    }, this);
    numbersPromise = webdriver.promise.map(numbersPromise, (el: number, type: any, index: number, arr: number[]) => {
        return true;
    });
    numbersPromise = webdriver.promise.map(numbersPromise, (el: number, type: any, index: number, arr: number[]) => {
        return true;
    }, this);

    let flow: webdriver.promise.ControlFlow = webdriver.promise.controlFlow();

    stringPromise = webdriver.promise.createFlow<string>((newFlow: webdriver.promise.ControlFlow) => 'ABC');

    let deferred: webdriver.promise.Deferred<string>;
    deferred = webdriver.promise.defer<string>();
    deferred = webdriver.promise.defer<string>();

    stringPromise = deferred.promise;

    deferred.fulfill('ABC');
    deferred.reject('error');

    voidPromise = webdriver.promise.delayed(123);

    voidPromise = webdriver.promise.fulfilled<void>();
    stringPromise = webdriver.promise.fulfilled('abc');

    stringPromise = webdriver.promise.fullyResolved<string>('abc');

    let bool: boolean = webdriver.promise.isGenerator(() => {});
    let isPromise: boolean = webdriver.promise.isPromise('ABC');

    stringPromise = webdriver.promise.rejected<string>('{a: 123}');

    webdriver.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    numberPromise = webdriver.promise.when('abc', (value: any) => 123, (err: Error) => 123);
}

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

function TestControlFlow() {
    let flow: webdriver.promise.ControlFlow;
    flow = new webdriver.promise.ControlFlow();

    let emitter: webdriver.EventEmitter = flow;

    let eventType: string;

    eventType = webdriver.promise.ControlFlow.EventType.IDLE;
    eventType = webdriver.promise.ControlFlow.EventType.RESET;
    eventType = webdriver.promise.ControlFlow.EventType.SCHEDULE_TASK;
    eventType = webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION;

    let stringPromise: webdriver.promise.Promise<string>;
    stringPromise = flow.execute(() => 'value');
    stringPromise = flow.execute(() => stringPromise);
    stringPromise = flow.execute(() => stringPromise, 'Description');

    let schedule: string;
    schedule = flow.toString();
    schedule = flow.getSchedule();
    schedule = flow.getSchedule(true);

    flow.reset();

    let voidPromise: webdriver.promise.Promise<void> = flow.timeout(123);
    voidPromise = flow.timeout(123, 'Description');

    stringPromise = flow.wait(stringPromise);

    voidPromise = flow.wait<void>(() => true);
    voidPromise = flow.wait<void>(() => true, 123);
    voidPromise = flow.wait<void>(() => stringPromise, 123, 'Timeout Message');
}

function TestDeferred() {
    let deferred: webdriver.promise.Deferred<string>;

    deferred = new webdriver.promise.Deferred<string>();
    deferred = new webdriver.promise.Deferred<string>(new webdriver.promise.ControlFlow());

    let promise: webdriver.promise.Promise<string> = deferred.promise;

    deferred.errback(new Error('Error'));
    deferred.errback('Error');
    deferred.fulfill('abc');
    deferred.reject(new Error('Error'));
    deferred.reject('Error');
    deferred.removeAll();
}

declare const controlFlow: webdriver.promise.ControlFlow;

function TestPromiseClass() {
    let promise: webdriver.promise.Promise<string>;
    promise = new webdriver.promise.Promise<string>((resolve, reject) => {
        resolve("");
        resolve(Promise.resolve(""));
        reject(new Error());
    }, controlFlow);

    promise = promise.then<string>();
    promise = promise.then((a: string) => 'cde');
    // tslint:disable-next-line void-return (need `--strictNullChecks` to change `void` to `undefined`)
    const promiseOrVoid: webdriver.promise.Promise<string | void> = promise.then((a: string) => 'cde', (e: any) => {});
    const promiseOrNumber: webdriver.promise.Promise<string | number> = promise.then((a: string) => 'cde', (e: any) => 123);
}

function TestThenableClass() {
    // TODO: this doesn't test the Thenable class, it uses a Promise!
    let thenable: webdriver.promise.Promise<string> = new webdriver.promise.Promise<string>((resolve, reject) => {
        resolve('a');
    });

    thenable = thenable.then((a: string) => 'cde');
    // tslint:disable-next-line void-return (need `--strictNullChecks` to change `void` to `undefined`)
    const thenableOrVoid: webdriver.promise.Promise<string | void> = thenable.then((a: string) => 'cde', (e: any) => {});
    const thenableOrNumber: webdriver.promise.Promise<string | number> = thenable.then((a: string) => 'cde', (e: any) => 123);
}

async function TestAsyncAwaitable() {
    let thenable: webdriver.promise.Promise<string> = new webdriver.promise.Promise<string>((resolve, reject) => resolve('foo'));
    let str: string = await thenable;
}

function TestPromiseManagerFlag() {
    webdriver.promise.USE_PROMISE_MANAGER = false;
}
