/* tslint:disable */
import * as webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import * as remote from 'selenium-webdriver/remote';
import * as executors from 'selenium-webdriver/executors';
import * as testing from 'selenium-webdriver/testing';

function TestExecutors() {
    var exec: webdriver.Executor = executors.createExecutor('url');
    var promise: webdriver.promise.Promise<string>;
    exec = executors.createExecutor(promise);
}

function TestBuilder() {
    var builder: webdriver.Builder = new webdriver.Builder();

    var driver: webdriver.WebDriver = builder.build();
    builder = builder.forBrowser('name');
    builder = builder.forBrowser('name', 'version');
    builder = builder.forBrowser('name', 'version', 'platform');

    var cap: webdriver.Capabilities = builder.getCapabilities();
    var str: string = builder.getServerUrl();

    builder = builder.setAlertBehavior('behavior');
    builder = builder.setChromeOptions(new chrome.Options());
    builder = builder.setControlFlow(new webdriver.promise.ControlFlow());
    builder = builder.setEnableNativeEvents(true);
    builder = builder.setFirefoxOptions(new firefox.Options());
    builder = builder.setLoggingPrefs(new webdriver.logging.Preferences());
    builder = builder.setLoggingPrefs({ key: 'value' });
    builder = builder.setProxy({ proxyType: 'type' });
    builder = builder.setScrollBehavior(1);
    builder = builder.usingServer('http://someserver');
    builder = builder.withCapabilities(new webdriver.Capabilities());
    builder = builder.withCapabilities({ something: true });
}

function TestActionSequence() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var sequence: webdriver.ActionSequence = new webdriver.ActionSequence(driver);
    var element: webdriver.WebElement = new webdriver.WebElement(driver, 'elementId');
    var promise: webdriver.promise.Promise<string>;
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
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    var element: webdriver.WebElement = new webdriver.WebElement(driver, 'elementId');

    var sequence: webdriver.TouchSequence = new webdriver.TouchSequence(driver);

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
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var alert: webdriver.Alert = driver.switchTo().alert();

    alert.accept().then(() => {});
    alert.dismiss().then(() => {});
    alert.getText().then((text: string) => {});
    alert.sendKeys('ABC').then(() => {});
}

function TestBrowser() {
    var browser: string;

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
    var button: string;

    button = webdriver.Button.LEFT;
    button = webdriver.Button.MIDDLE;
    button = webdriver.Button.RIGHT;
}

function TestCapabilities() {
    var capabilities: webdriver.Capabilities = new webdriver.Capabilities();
    capabilities = new webdriver.Capabilities(webdriver.Capabilities.chrome());
    var objCapabilities: any = {};
    objCapabilities[webdriver.Capability.BROWSER_NAME] = webdriver.Browser.PHANTOM_JS;
    capabilities = new webdriver.Capabilities(objCapabilities);

    var anything: any = capabilities.get(webdriver.Capability.SECURE_SSL);
    var check: boolean = capabilities.has(webdriver.Capability.SECURE_SSL);
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
    var capability: string;

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
    var command: webdriver.Command = new webdriver.Command(webdriver.CommandName.ADD_COOKIE);

    var name: string = command.getName();
    var param: any = command.getParameter('param');

    var params: any = command.getParameters();

    command = command.setParameter('param', 123);
    command = command.setParameters({ param: 123 });
}

function TestDeferredExecutor() {
    var promise: webdriver.promise.Promise<webdriver.Executor>;
    var executor: webdriver.DeferredExecutor = new webdriver.DeferredExecutor(promise);
}

function TestCommandName() {
    var command: string;

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
    var emitter: webdriver.EventEmitter = new webdriver.EventEmitter();

    var callback = (a: number, b: number, c: number) => {};

    emitter = emitter.addListener('ABC', callback);
    emitter = emitter.addListener('ABC', callback, this);

    emitter.emit('ABC', 1, 2, 3);

    var listeners = emitter.listeners('ABC');
    if (listeners[0].oneshot) {
        listeners[0].fn.apply(listeners[0].scope);
    }
    var length: number = listeners.length;
    var listenerInfo = listeners[0];
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
    var key: string;

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
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var locator: webdriver.By = new webdriver.By('class name', 'class');

    var str: string = locator.toString();

    locator = webdriver.By.className('class');
    locator = webdriver.By.css('css');
    locator = webdriver.By.id('id');
    locator = webdriver.By.linkText('link');
    locator = webdriver.By.name('name');
    locator = webdriver.By.partialLinkText('text');
    locator = webdriver.By.tagName('tag');
    locator = webdriver.By.xpath('xpath');

    // Can import 'By' without import declarations
    var By = webdriver.By;

    var locatorHash: webdriver.ByHash;
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
    var session: webdriver.Session = new webdriver.Session('ABC', webdriver.Capabilities.android());
    var capabilitiesObj: any = {};
    capabilitiesObj[webdriver.Capability.BROWSER_NAME] = webdriver.Browser.ANDROID;
    capabilitiesObj[webdriver.Capability.PLATFORM] = 'ANDROID';
    session = new webdriver.Session('ABC', capabilitiesObj);

    var capabilities: webdriver.Capabilities = session.getCapabilities();
    var capability: any = session.getCapability(webdriver.Capability.BROWSER_NAME);
    var id: string = session.getId();
    var data: string = session.toJSON();
}

function TestUnhandledAlertError() {
    var someFunc = (error: webdriver.UnhandledAlertError) => {
        var baseError: Error = error;
        var str: string = error.getAlertText();
        str = error.toString();
    };
}

function TestWebDriverFileDetector() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var fileDetector: webdriver.FileDetector = new webdriver.FileDetector();

    fileDetector.handleFile(driver, 'path/to/file').then((path: string) => {});
}

function TestWebDriverLogs() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var logs: webdriver.Logs = new webdriver.Logs(driver);

    logs.get(webdriver.logging.Type.BROWSER).then((entries: webdriver.logging.Entry[]) => {});
    logs.getAvailableLogTypes().then((types: string[]) => {});
}

function TestWebDriverNavigation() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var navigation: webdriver.Navigation = new webdriver.Navigation(driver);

    navigation.back().then(() => {});
    navigation.forward().then(() => {});
    navigation.refresh().then(() => {});
    navigation.to('http://google.com').then(() => {});
}

function TestWebDriverOptions() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var options: webdriver.Options = new webdriver.Options(driver);
    var promise: webdriver.promise.Promise<void>;

    // Add Cookie
    promise = options.addCookie('name', 'value');
    promise = options.addCookie('name', 'value', 'path');
    promise = options.addCookie('name', 'value', 'path', 'domain');
    promise = options.addCookie('name', 'value', 'path', 'domain', true);
    promise = options.addCookie('name', 'value', 'path', 'domain', true, 123);
    promise = options.addCookie('name', 'value', 'path', 'domain', true, Date.now());

    promise = options.deleteAllCookies();
    promise = options.deleteCookie('name');
    options.getCookie('name').then((cookies: webdriver.IWebDriverOptionsCookie) => {});
    options.getCookies().then((cookies: webdriver.IWebDriverOptionsCookie[]) => {});

    var logs: webdriver.Logs = options.logs();
    var timeouts: webdriver.Timeouts = options.timeouts();
    var window: webdriver.Window = options.window();
}

function TestWebDriverTargetLocator() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var locator: webdriver.TargetLocator = new webdriver.TargetLocator(driver);
    var promise: webdriver.promise.Promise<void>;

    var element: webdriver.WebElement = locator.activeElement();
    var alert: webdriver.Alert = locator.alert();
    promise = locator.defaultContent();
    promise = locator.frame(1);
    promise = locator.window('nameOrHandle');
}

function TestWebDriverTimeouts() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var timeouts: webdriver.Timeouts = new webdriver.Timeouts(driver);
    var promise: webdriver.promise.Promise<void>;

    promise = timeouts.implicitlyWait(123);
    promise = timeouts.pageLoadTimeout(123);
    promise = timeouts.setScriptTimeout(123);
}

function TestWebDriverWindow() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var window: webdriver.Window = new webdriver.Window(driver);
    var locationPromise: webdriver.promise.Promise<webdriver.ILocation>;
    var sizePromise: webdriver.promise.Promise<webdriver.ISize>;
    var voidPromise: webdriver.promise.Promise<void>;

    locationPromise = window.getPosition();
    sizePromise = window.getSize();
    voidPromise = window.maximize();
    voidPromise = window.setPosition(12, 34);
    voidPromise = window.setSize(12, 34);
}

function TestWebDriver() {
    var session: webdriver.Session = new webdriver.Session('ABC', webdriver.Capabilities.android());
    var sessionPromise: webdriver.promise.Promise<webdriver.Session>;
    var executor: webdriver.Executor = executors.createExecutor('http://someserver');
    var flow: webdriver.promise.ControlFlow = new webdriver.promise.ControlFlow();
    var driver: webdriver.WebDriver = new webdriver.WebDriver(session, executor);
    driver = new webdriver.WebDriver(session, executor, flow);
    driver = new webdriver.WebDriver(sessionPromise, executor);
    driver = new webdriver.WebDriver(sessionPromise, executor, flow);

    var voidPromise: webdriver.promise.Promise<void>;
    var stringPromise: webdriver.promise.Promise<string>;
    var booleanPromise: webdriver.promise.Promise<boolean>;

    var actions: webdriver.ActionSequence = driver.actions();
    var touchActions: webdriver.TouchSequence = driver.touchActions();

    // call
    stringPromise = driver.call<string>(() => 'value');
    stringPromise = driver.call<string>(() => stringPromise);
    stringPromise = driver.call<string>(() => { var d: any = this; return 'value'; }, driver);
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
    var element: webdriver.WebElement;
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

    booleanPromise = driver.isElementPresent(webdriver.By.className('ABC'));
    booleanPromise = driver.isElementPresent(webdriver.By.js('function(){}'));

    var options: webdriver.Options = driver.manage();
    var navigation: webdriver.Navigation = driver.navigate();
    var locator: webdriver.TargetLocator = driver.switchTo();

    var fileDetector: webdriver.FileDetector = new webdriver.FileDetector();
    driver.setFileDetector(fileDetector);

    voidPromise = driver.quit();
    voidPromise = driver.schedule<void>(new webdriver.Command(webdriver.CommandName.CLICK), 'ABC');
    voidPromise = driver.sleep(123);
    stringPromise = driver.takeScreenshot();

    var booleanCondition: webdriver.until.Condition<boolean>;
    booleanPromise = driver.wait(booleanPromise);
    booleanPromise = driver.wait(booleanCondition);
    booleanPromise = driver.wait((driver: webdriver.WebDriver) => true);
    let conditionFunction: Function; // tslint:disable-line:prefer-const
    booleanPromise = driver.wait(conditionFunction);
    booleanPromise = driver.wait(booleanPromise, 123);
    booleanPromise = driver.wait(booleanPromise, 123, 'Message');

    driver = webdriver.WebDriver.attachToSession(executor, 'ABC');
    driver = webdriver.WebDriver.createSession(executor, webdriver.Capabilities.android());
}

function TestSerializable() {
    var serializable: webdriver.Serializable<string>;
    var serial: string | webdriver.promise.IThenable<string> = serializable.serialize();
}

function TestWebElement() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var promise: webdriver.promise.Promise<string>;
    var element: webdriver.WebElement;

    element = new webdriver.WebElement(driver, 'elementId');
    element = new webdriver.WebElement(driver, promise);

    var voidPromise: webdriver.promise.Promise<void>;
    var stringPromise: webdriver.promise.Promise<string>;
    var booleanPromise: webdriver.promise.Promise<boolean>;

    voidPromise = element.clear();
    voidPromise = element.click();

    element = element.findElement(webdriver.By.id('ABC'));
    element.findElements(webdriver.By.className('ABC')).then((elements: webdriver.WebElement[]) => {});
    booleanPromise = element.isElementPresent(webdriver.By.className('ABC'));

    stringPromise = element.getAttribute('class');
    stringPromise = element.getCssValue('display');
    driver = element.getDriver();
    stringPromise = element.getInnerHtml();
    element.getLocation().then((location: webdriver.ILocation) => {});
    stringPromise = element.getOuterHtml();
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
    element.getRawId().then((id: string) => {});
    element.serialize().then((id: webdriver.IWebElementId) => {});

    booleanPromise = webdriver.WebElement.equals(element, new webdriver.WebElement(driver, 'elementId'));
}

function TestWebElementPromise() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var elementPromise: webdriver.WebElementPromise = driver.findElement(webdriver.By.id('id'));

    elementPromise.cancel();
    elementPromise.cancel('reason');

    var bool: boolean = elementPromise.isPending();

    elementPromise.then();
    elementPromise.then((element: webdriver.WebElement) => {});
    elementPromise.then((element: webdriver.WebElement) => {}, (error: any) => {});
    elementPromise.then((element: webdriver.WebElement) => 'foo', (error: any) => {}).then((result: string) => {});

    elementPromise.thenCatch((error: any) => {}).then((value: any) => {});

    elementPromise.thenFinally(() => {});
}

function TestLogging() {
    var preferences: webdriver.logging.Preferences = new webdriver.logging.Preferences();
    preferences.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.ALL);
    var prefs: any = preferences.toJSON();

    var level: webdriver.logging.Level = webdriver.logging.getLevel('OFF');
    level = webdriver.logging.getLevel(1);

    level = webdriver.logging.Level.ALL;
    level = webdriver.logging.Level.DEBUG;
    level = webdriver.logging.Level.INFO;
    level = webdriver.logging.Level.OFF;
    level = webdriver.logging.Level.SEVERE;
    level = webdriver.logging.Level.WARNING;

    var name: string = level.name;
    var value: number = level.value;

    var type: string;
    type = webdriver.logging.Type.BROWSER;
    type = webdriver.logging.Type.CLIENT;
    type = webdriver.logging.Type.DRIVER;
    type = webdriver.logging.Type.PERFORMANCE;
    type = webdriver.logging.Type.SERVER;
}

function TestLoggingEntry() {
    var entry: webdriver.logging.Entry;

    entry = new webdriver.logging.Entry(webdriver.logging.Level.ALL, 'ABC');
    entry = new webdriver.logging.Entry('ALL', 'ABC');
    entry = new webdriver.logging.Entry(webdriver.logging.Level.ALL, 'ABC', 123);
    entry = new webdriver.logging.Entry('ALL', 'ABC', 123);
    entry = new webdriver.logging.Entry(webdriver.logging.Level.ALL, 'ABC', 123, webdriver.logging.Type.BROWSER);
    entry = new webdriver.logging.Entry('ALL', 'ABC', 123, webdriver.logging.Type.BROWSER);

    var entryObj: any = entry.toJSON();

    var message: string = entry.message;
    var timestamp: number = entry.timestamp;
    var type: string = entry.type;
}

function TestPromiseModule() {
    var cancellationError: webdriver.promise.CancellationError = new webdriver.promise.CancellationError();
    cancellationError = new webdriver.promise.CancellationError('message');
    var str: string = cancellationError.message;
    str = cancellationError.name;

    var stringPromise: webdriver.promise.Promise<string>;
    var numberPromise: webdriver.promise.Promise<number>;
    var booleanPromise: webdriver.promise.Promise<boolean>;
    var voidPromise: webdriver.promise.Promise<void>;

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

    var numbersPromise: webdriver.promise.Promise<number[]> = webdriver.promise.filter([1, 2, 3], (element: number, type: any, index: number, arr: number[]) => {
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

    var flow: webdriver.promise.ControlFlow = webdriver.promise.controlFlow();

    stringPromise = webdriver.promise.createFlow<string>((newFlow: webdriver.promise.ControlFlow) => 'ABC');

    var deferred: webdriver.promise.Deferred<string>;
    deferred = webdriver.promise.defer();
    deferred = webdriver.promise.defer();

    stringPromise = deferred.promise;

    deferred.fulfill('ABC');
    deferred.reject('error');

    voidPromise = webdriver.promise.delayed(123);

    voidPromise = webdriver.promise.fulfilled<void>();
    stringPromise = webdriver.promise.fulfilled('abc');

    stringPromise = webdriver.promise.fullyResolved('abc');

    var bool: boolean = webdriver.promise.isGenerator(() => {});
    var isPromise: boolean = webdriver.promise.isPromise('ABC');

    stringPromise = webdriver.promise.rejected('{a: 123}');

    webdriver.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    numberPromise = webdriver.promise.when('abc', (value: any) => 123, (err: Error) => 123);
}

function TestUntilModule() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var conditionB: webdriver.until.Condition<boolean> = new webdriver.until.Condition<boolean>('message', (driver: webdriver.WebDriver) => true);
    var conditionBBase: webdriver.until.Condition<boolean> = conditionB;
    var conditionWebElement: webdriver.until.Condition<webdriver.WebElement>;
    var conditionWebElements: webdriver.until.Condition<webdriver.WebElement[]>;

    conditionB = webdriver.until.ableToSwitchToFrame(5);
    var conditionAlert: webdriver.until.Condition<webdriver.Alert> = webdriver.until.alertIsPresent();
    var el: webdriver.WebElement = driver.findElement(webdriver.By.id('id'));
    conditionB = webdriver.until.elementIsDisabled(el);
    conditionB = webdriver.until.elementIsEnabled(el);
    conditionB = webdriver.until.elementIsNotSelected(el);
    conditionB = webdriver.until.elementIsNotVisible(el);
    conditionB = webdriver.until.elementIsSelected(el);
    conditionB = webdriver.until.elementIsVisible(el);
    conditionB = webdriver.until.elementTextContains(el, 'text');
    conditionB = webdriver.until.elementTextIs(el, 'text');
    conditionB = webdriver.until.elementTextMatches(el, /text/);
    conditionB = webdriver.until.stalenessOf(el);
    conditionB = webdriver.until.titleContains('text');
    conditionB = webdriver.until.titleIs('text');
    conditionB = webdriver.until.titleMatches(/text/);

    conditionWebElement = webdriver.until.elementLocated(webdriver.By.id('id'));
    conditionWebElements = webdriver.until.elementsLocated(webdriver.By.className('class'));
}

function TestControlFlow() {
    var flow: webdriver.promise.ControlFlow;
    flow = new webdriver.promise.ControlFlow();

    var emitter: webdriver.EventEmitter = flow;

    var eventType: string;

    eventType = webdriver.promise.ControlFlow.EventType.IDLE;
    eventType = webdriver.promise.ControlFlow.EventType.RESET;
    eventType = webdriver.promise.ControlFlow.EventType.SCHEDULE_TASK;
    eventType = webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION;

    var stringPromise: webdriver.promise.Promise<string>;
    stringPromise = flow.execute(() => 'value');
    stringPromise = flow.execute(() => stringPromise);
    stringPromise = flow.execute(() => stringPromise, 'Description');

    var schedule: string;
    schedule = flow.toString();
    schedule = flow.getSchedule();
    schedule = flow.getSchedule(true);

    flow.reset();

    var voidPromise: webdriver.promise.Promise<void> = flow.timeout(123);
    voidPromise = flow.timeout(123, 'Description');

    stringPromise = flow.wait(stringPromise);

    voidPromise = flow.wait<void>(() => true);
    voidPromise = flow.wait<void>(() => true, 123);
    voidPromise = flow.wait<void>(() => stringPromise, 123, 'Timeout Message');
}

function TestDeferred() {
    var deferred: webdriver.promise.Deferred<string>;

    deferred = new webdriver.promise.Deferred<string>();
    deferred = new webdriver.promise.Deferred<string>(new webdriver.promise.ControlFlow());

    var promise: webdriver.promise.Promise<string> = deferred.promise;

    deferred.errback(new Error('Error'));
    deferred.errback('Error');
    deferred.fulfill('abc');
    deferred.reject(new Error('Error'));
    deferred.reject('Error');
    deferred.removeAll();
}

function TestPromiseClass() {
    var controlFlow: webdriver.promise.ControlFlow;
    var promise: webdriver.promise.Promise<string>;
    promise = new webdriver.promise.Promise<string>((resolve: (value: string) => void, reject: () => void) => {});
    promise = new webdriver.promise.Promise<string>((resolve: (value: webdriver.promise.Promise<string>) => void, reject: () => void) => {});
    promise = new webdriver.promise.Promise<string>((resolve: (value: string) => void, reject: () => void) => {}, controlFlow);

    promise.cancel('Abort');

    var isPending: boolean = promise.isPending();

    promise = promise.then();
    promise = promise.then((a: string) => 'cde');
    promise = promise.then((a: string) => 'cde', (e: any) => {});
    promise = promise.then((a: string) => 'cde', (e: any) => 123);

    promise = promise.thenCatch((error: any) => {});

    promise.thenFinally(() => {});
}

function TestThenableClass() {
    var thenable: webdriver.promise.Promise<string> = new webdriver.promise.Promise<string>((resolve, reject) => {
        resolve('a');
    });

    thenable.cancel('Abort');

    var isPending: boolean = thenable.isPending();

    thenable = thenable.then((a: string) => 'cde');
    thenable = thenable.then((a: string) => 'cde', (e: any) => {});
    thenable = thenable.then((a: string) => 'cde', (e: any) => 123);

    thenable = thenable.thenCatch((error: any) => {});

    thenable.thenFinally(() => {});
}

function TestErrorCode() {
    var errorCode: number;

    errorCode = new webdriver.error.ElementNotSelectableError().code();
    errorCode = new webdriver.error.ElementNotVisibleError().code();
    errorCode = new webdriver.error.InvalidArgumentError().code();
    errorCode = new webdriver.error.InvalidCookieDomainError().code();
    errorCode = new webdriver.error.InvalidElementCoordinatesError().code();
    errorCode = new webdriver.error.InvalidElementStateError().code();
    errorCode = new webdriver.error.InvalidSelectorError().code();
    errorCode = new webdriver.error.NoSuchSessionError().code();
    errorCode = new webdriver.error.JavascriptError().code();
    errorCode = new webdriver.error.MoveTargetOutOfBoundsError().code();
    errorCode = new webdriver.error.NoSuchAlertError().code();
    errorCode = new webdriver.error.NoSuchElementError().code();
    errorCode = new webdriver.error.NoSuchFrameError().code();
    errorCode = new webdriver.error.NoSuchWindowError().code();
    errorCode = new webdriver.error.ScriptTimeoutError().code();
    errorCode = new webdriver.error.SessionNotCreatedError().code();
    errorCode = new webdriver.error.StaleElementReferenceError().code();
    errorCode = new webdriver.error.TimeoutError().code();
    errorCode = new webdriver.error.UnableToSetCookieError().code();
    errorCode = new webdriver.error.UnableToCaptureScreenError().code();
    errorCode = new webdriver.error.UnexpectedAlertOpenError().code();
    errorCode = new webdriver.error.UnknownCommandError().code();
    errorCode = new webdriver.error.UnknownMethodError().code();
    errorCode = new webdriver.error.UnsupportedOperationError().code();
}

async function TestAsyncAwaitable() {
    var thenable: webdriver.promise.Promise<string> = new webdriver.promise.Promise<string>((resolve, reject) => resolve('foo'));
    var str: string = await thenable;
}

function TestTestingModule() {
    testing.before(() => {
    });

    testing.beforeEach(() => {
    });

    testing.describe('My test suite', () => {
        testing.it('My test', () => {
        });

        testing.iit('My exclusive test.', () => {
        });

    });

    testing.xdescribe('My disabled suite', () => {
        testing.xit('My disabled test.', () => {
        });
    });

    testing.after(() => {
    });

    testing.afterEach(() => {
    });
}
