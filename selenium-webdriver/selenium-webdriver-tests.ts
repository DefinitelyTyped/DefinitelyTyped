/// <reference path="selenium-webdriver.d.ts" />

function TestAbstractBuilder() {
    var builder: webdriver.AbstractBuilder = new webdriver.AbstractBuilder();
    var driver: webdriver.WebDriver = builder.build();
    var capabilities: webdriver.Capabilities = builder.getCapabilities();
    url = builder.getServerUrl();
    var otherBuilder: webdriver.AbstractBuilder = builder.usingServer(url);
    otherBuilder = builder.withCapabilities(webdriver.Capabilities.android());
    var objCapabilities: { [index: string]: string; } = {};
    objCapabilities[webdriver.Capability.BROWSER_NAME] = webdriver.Browser.PHANTOM_JS;
    otherBuilder = builder.withCapabilities(objCapabilities);
    var url: string = webdriver.AbstractBuilder.DEFAULT_SERVER_URL;
    var env: string = webdriver.AbstractBuilder.SERVER_URL_ENV;
}

function TestBuilder() {
    var builder: webdriver.Builder = new webdriver.Builder();
    var abstractBuilder: webdriver.AbstractBuilder = builder;

    var driver: webdriver.WebDriver = builder.build();
    var session: string = builder.getSession();
    abstractBuilder = builder.usingSession("ID");

    var env: string = webdriver.Builder.SESSION_ID_ENV;
}

function TestActionSequence() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var sequence: webdriver.ActionSequence = new webdriver.ActionSequence(driver);
    var element: webdriver.WebElement = new webdriver.WebElement(driver, 'id');

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
    sequence = sequence.dragAndDrop(element, {x: 1, y: 2});

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
    sequence = sequence.mouseMove({x: 1, y: 1});
    sequence = sequence.mouseMove(element, {x: 1, y: 2});

    // MouseUp
    sequence = sequence.mouseUp();
    sequence = sequence.mouseUp(webdriver.Button.LEFT);
    sequence = sequence.mouseUp(element);
    sequence = sequence.mouseUp(element, webdriver.Button.LEFT);

    // SendKeys
    sequence = sequence.sendKeys("A", "B", "C");
    sequence = sequence.sendKeys(["A", "B", "C"]);

    var promise: webdriver.promise.Promise = sequence.perform();
}

function TestAlert() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    var promise: webdriver.promise.Promise = new webdriver.promise.Promise();

    var alert: webdriver.Alert = new webdriver.Alert(driver, 'ABC');
    alert = new webdriver.Alert(driver, promise);
    var deferred: webdriver.promise.Deferred = alert;

    promise = alert.accept();
    promise = alert.dismiss();
    promise = alert.getText();
    promise = alert.sendKeys("ABC");
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
    var button: number;

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
    capability = webdriver.Capability.HANDLES_ALERTS;
    capability = webdriver.Capability.LOGGING_PREFS;
    capability = webdriver.Capability.PLATFORM;
    capability = webdriver.Capability.PROXY;
    capability = webdriver.Capability.ROTATABLE;
    capability = webdriver.Capability.SECURE_SSL;
    capability = webdriver.Capability.SUPPORTS_APPLICATION_CACHE;
    capability = webdriver.Capability.SUPPORTS_BROWSER_CONNECTION;
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
    var param: any = command.getParameter("param");

    var params: any = command.getParameters();

    command = command.setParameter("param", 123);
    command = command.setParameters({ param: 123 });
}

function TestCommandExecutor() {
    var c: webdriver.CommandExecutor = { execute: function(command: webdriver.Command, callback: (error: Error, obj: any) => any) {} };
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

    var callback = function (a: number, b: number, c: number) {};

    emitter = emitter.addListener('ABC', callback);

    emitter.emit('ABC', 1, 2, 3);

    var listeners = emitter.listeners('ABC');
    var length: number = listeners.length;
    var listenerInfo = listeners[0];
    if (listenerInfo.oneshot) {
        listenerInfo.fn.apply(listenerInfo.scope, [1, 2, 3]);
    }

    emitter = emitter.on('ABC', callback);

    emitter = emitter.once('ABC', callback);

    emitter = emitter.removeListener('ABC', callback);

    emitter.removeAllListeners('ABC');
    emitter.removeAllListeners();
}

function TestFirefoxDomExecutor() {
    if (webdriver.FirefoxDomExecutor.isAvailable()) {
        var executor: webdriver.CommandExecutor = new webdriver.FirefoxDomExecutor();
        var callback = function(error: Error, responseObject: any) {};
        executor.execute(new webdriver.Command(webdriver.CommandName.CLICK), callback);
    }
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

    key = webdriver.Key.chord(webdriver.Key.NUMPAD0, webdriver.Key.NUMPAD1);
}

function TestLocator() {
    var locator: webdriver.Locator = new webdriver.Locator('id', 'ABC');

    var locatorStr: string = locator.toString();

    var using: string = locator.using;
    var value: string = locator.value;

    locator = webdriver.Locator.checkLocator(webdriver.Locator.Strategy.id('ABC'));
    locator = webdriver.Locator.checkLocator({id: 'ABC'});

    locator = webdriver.Locator.createFromObj({id: 'ABC'});

    locator = webdriver.Locator.Strategy.id('ABC');

    locator = webdriver.By.id('ABC');
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
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    var promise: webdriver.promise.Promise = new webdriver.promise.Promise();

    var alert: webdriver.Alert = new webdriver.Alert(driver, 'ABC');
    var error = new webdriver.UnhandledAlertError('An error', alert);
    var baseError: webdriver.error.Error = error;

    alert = error.getAlert();
}

function TestWebDriverLogs() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var logs: webdriver.WebDriverLogs = webdriver.WebDriver.Logs;
    var promise: webdriver.promise.Promise;

    promise = logs.get(webdriver.logging.Type.BROWSER);
    promise = logs.getAvailableLogTypes();
}

function TestWebDriverNavigation() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var navigation: webdriver.WebDriverNavigation = webdriver.WebDriver.Navigation;
    var promise: webdriver.promise.Promise;

    promise = navigation.back();
    promise = navigation.forward();
    promise = navigation.refresh();
    promise = navigation.to('http://google.com');
}

function TestWebDriverOptions() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var options: webdriver.WebDriverOptions = webdriver.WebDriver.Options;
    var promise: webdriver.promise.Promise;

    // Add Cookie
    promise = options.addCookie('name', 'value');
    promise = options.addCookie('name', 'value', 'path');
    promise = options.addCookie('name', 'value', 'path', 'domain');
    promise = options.addCookie('name', 'value', 'path', 'domain', true);
    promise = options.addCookie('name', 'value', 'path', 'domain', true, 123);
    promise = options.addCookie('name', 'value', 'path', 'domain', true, Date.now());

    promise = options.deleteAllCookies();
    promise = options.deleteCookie('name');
    promise = options.getCookie('name');
    promise = options.getCookies();

    var logs: webdriver.WebDriverLogs = options.logs();
    var timeouts: webdriver.WebDriverTimeouts = options.timeouts();
    var window: webdriver.WebDriverWindow = options.window();
}

function TestWebDriverTargetLocator() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var locator: webdriver.WebDriverTargetLocator = webdriver.WebDriver.TargetLocator;
    var promise: webdriver.promise.Promise;

    var element: webdriver.WebElement = locator.activeElement();
    var alert: webdriver.Alert = locator.alert();
    promise = locator.defaultContent();
    promise = locator.frame('name');
    promise = locator.frame(1);
    promise = locator.window('nameOrHandle');
}

function TestWebDriverTimeouts() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var timeouts: webdriver.WebDriverTimeouts = webdriver.WebDriver.Timeouts;
    var promise: webdriver.promise.Promise;

    promise = timeouts.implicitlyWait(123);
    promise = timeouts.pageLoadTimeout(123);
    promise = timeouts.setScriptTimeout(123);
}

function TestWebDriverWindow() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var window: webdriver.WebDriverWindow = webdriver.WebDriver.Window;
    var promise: webdriver.promise.Promise;

    promise = window.getPosition();
    promise = window.getSize();
    promise = window.maximize();
    promise = window.setPosition(12, 34);
    promise = window.setSize(12, 34);
}

function TestWebDriver() {
    var session: webdriver.Session = new webdriver.Session('ABC', webdriver.Capabilities.android());
    var promise: webdriver.promise.Promise = new webdriver.promise.Promise();
    var executor: webdriver.CommandExecutor = new webdriver.FirefoxDomExecutor();
    var flow: webdriver.promise.ControlFlow = new webdriver.promise.ControlFlow();
    var driver: webdriver.WebDriver = new webdriver.WebDriver(session, executor);
    driver = new webdriver.WebDriver(session, executor, flow);
    driver = new webdriver.WebDriver(promise, executor);
    driver = new webdriver.WebDriver(promise, executor, flow);

    // Call
    var actions: webdriver.ActionSequence = driver.actions();
    promise = driver.call(function(){});
    promise = driver.call(function(){ var d: any = this;}, driver);
    promise = driver.call(function(a: number){}, driver, 1);

    promise = driver.close();
    flow = driver.controlFlow();

    // ExecuteAsyncScript
    promise = driver.executeAsyncScript('function(){}');
    promise = driver.executeAsyncScript('function(){}', 1, 2, 3);
    promise = driver.executeAsyncScript(function(){});
    promise = driver.executeAsyncScript(function(a: number){}, 1);

    // ExecuteScript
    promise = driver.executeScript('function(){}');
    promise = driver.executeScript('function(){}', 1, 2, 3);
    promise = driver.executeScript(function(){});
    promise = driver.executeScript(function(a: number){}, 1);

    var element: webdriver.WebElement;
    element = driver.findElement(webdriver.By.id('ABC'));
    element = driver.findElement({id: 'ABC'});
    element = driver.findElement(webdriver.By.js('function(){}'), 1, 2, 3);
    element = driver.findElement({js: 'function(){}'}, 1, 2, 3);

    promise = driver.findElements(webdriver.By.className('ABC'));
    promise = driver.findElements({className: 'ABC'});
    promise = driver.findElements(webdriver.By.js('function(){}'), 1, 2, 3);
    promise = driver.findElements({js: 'function(){}'}, 1, 2, 3);

    promise = driver.get('http://www.google.com');
    promise = driver.getAllWindowHandles();
    promise = driver.getCapabilities();
    promise = driver.getCurrentUrl();
    promise = driver.getPageSource()
    promise = driver.getSession();
    promise = driver.getTitle();
    promise = driver.getWindowHandle();

    promise = driver.isElementPresent(webdriver.By.className('ABC'));
    promise = driver.isElementPresent({className: 'ABC'});
    promise = driver.isElementPresent(webdriver.By.js('function(){}'), 1, 2, 3);
    promise = driver.isElementPresent({js: 'function(){}'}, 1, 2, 3);

    var options: webdriver.WebDriverOptions = driver.manage();
    var navigation: webdriver.WebDriverNavigation = driver.navigate();
    var locator: webdriver.WebDriverTargetLocator = driver.switchTo();

    promise = driver.quit();
    promise = driver.schedule(new webdriver.Command(webdriver.CommandName.CLICK), 'ABC');
    promise = driver.sleep(123);
    promise = driver.takeScreenshot();

    promise = driver.wait(function() { return true; }, 123);
    promise = driver.wait(function() { return true; }, 123, 'Message');
    promise = driver.wait(function() { return promise; }, 123);
    promise = driver.wait(function() { return promise; }, 123, 'Message');

    driver = webdriver.WebDriver.attachToSession(executor, 'ABC');
    driver = webdriver.WebDriver.createSession(executor, webdriver.Capabilities.android());
}

function TestWebElement() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var element: webdriver.WebElement;
    var promise: webdriver.promise.Promise = new webdriver.promise.Promise();

    element = new webdriver.WebElement(driver, 'ID');
    element = new webdriver.WebElement(driver, promise);

    var deferred: webdriver.promise.Deferred = element;

    promise = element.clear();
    promise = element.click();

    element = element.findElement(webdriver.By.id('ABC'));
    element = element.findElement({id: 'ABC'});
    element = element.findElement(webdriver.By.js('function(){}'), 1, 2, 3);
    element = element.findElement({js: 'function(){}'}, 1, 2, 3);

    promise = element.findElements(webdriver.By.className('ABC'));
    promise = element.findElements({className: 'ABC'});
    promise = element.findElements(webdriver.By.js('function(){}'), 1, 2, 3);
    promise = element.findElements({js: 'function(){}'}, 1, 2, 3);

    promise = element.isElementPresent(webdriver.By.className('ABC'));
    promise = element.isElementPresent({className: 'ABC'});
    promise = element.isElementPresent(webdriver.By.js('function(){}'), 1, 2, 3);
    promise = element.isElementPresent({js: 'function(){}'}, 1, 2, 3);

    promise = element.getAttribute('class');
    promise = element.getCssValue('display');
    driver = element.getDriver();
    promise = element.getInnerHtml();
    promise = element.getLocation();
    promise = element.getOuterHtml();
    promise = element.getSize();
    promise = element.getTagName();
    promise = element.getText();
    promise = element.isDisplayed();
    promise = element.isEnabled();
    promise = element.isSelected();
    promise = element.sendKeys('A', 'B', 'C');
    promise = element.submit();
    promise = element.toWireValue();

    promise = webdriver.WebElement.equals(element, new webdriver.WebElement(driver, 'ID2'));

    var key: string = webdriver.WebElement.ELEMENT_KEY;
}

function TestLogging() {
    webdriver.logging.Preferences['name'] = 'ABC';
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

    name = webdriver.logging.LevelName.ALL;
    name = webdriver.logging.LevelName.DEBUG;
    name = webdriver.logging.LevelName.INFO;
    name = webdriver.logging.LevelName.OFF;
    name = webdriver.logging.LevelName.SEVERE;
    name = webdriver.logging.LevelName.WARNING;

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

    entry = webdriver.logging.Entry.fromClosureLogRecord({});
    entry = webdriver.logging.Entry.fromClosureLogRecord({}, webdriver.logging.Type.DRIVER);
}

function TestProcess() {
    var isNative: boolean = webdriver.process.isNative();
    var value: string;

    value = webdriver.process.getEnv('name');
    value = webdriver.process.getEnv('name', 'default');

    webdriver.process.setEnv('name', 'value');
    webdriver.process.setEnv('name', 123);
}

function TestPromise() {
    var promise: webdriver.promise.Promise = new webdriver.promise.Promise();

    webdriver.promise.asap(promise, function(value: any){ return true; });
    webdriver.promise.asap(promise, function(value: any){}, function(err: any) { return 'ABC'; });

    promise = webdriver.promise.checkedNodeCall(function(err: any, value: any) { return 123; });

    var flow: webdriver.promise.ControlFlow = webdriver.promise.controlFlow();

    promise = webdriver.promise.createFlow(function(newFlow: webdriver.promise.ControlFlow) { });

    var deferred: webdriver.promise.Deferred;
    deferred = webdriver.promise.defer(function() {});
    deferred = webdriver.promise.defer(function(reason?: any) {});

    promise = webdriver.promise.delayed(123);

    promise = webdriver.promise.fulfilled();
    promise = webdriver.promise.fulfilled({a: 123});

    promise = webdriver.promise.fullyResolved({a: 123});

    var isPromise: boolean = webdriver.promise.isPromise('ABC');

    promise = webdriver.promise.rejected({a: 123});

    webdriver.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    promise = webdriver.promise.when(promise, function(value: any) { return 123; }, function(err: Error) { return 123; });
}

function TestControlFlow() {
    var flow: webdriver.promise.ControlFlow;
    flow = new webdriver.promise.ControlFlow();
    flow = new webdriver.promise.ControlFlow({clearInterval: function(a: number) {},
                                            clearTimeout: function(a: number) {},
                                            setInterval: function(a: () => void, b: number) { return 2; },
                                            setTimeout: function(a: () => void, b: number) { return 2; }});

    var emitter: webdriver.EventEmitter = flow;

    var eventType: string;

    eventType = webdriver.promise.ControlFlow.EventType.IDLE;
    eventType = webdriver.promise.ControlFlow.EventType.SCHEDULE_TASK;
    eventType = webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION;

    var e: any = flow.annotateError(new Error('Error'));

    var promise: webdriver.promise.Promise;

    promise = flow.await(promise);

    flow.clearHistory();

    promise = flow.execute(function() { return promise; });
    promise = flow.execute(function() { return promise; }, 'Description');

    var history: string[] = flow.getHistory();

    var schedule: string = flow.getSchedule();

    flow.reset();

    promise = flow.timeout(123);
    promise = flow.timeout(123, 'Description');

    promise = flow.wait(function() { return true; }, 123);
    promise = flow.wait(function() { return true; }, 123, 'Timeout Message');
    promise = flow.wait(function() { return promise; }, 123, 'Timeout Message');

    var timer: webdriver.promise.IControlFlowTimer = flow.timer;

    timer = webdriver.promise.ControlFlow.defaultTimer;
    var loopFrequency: number = webdriver.promise.ControlFlow.EVENT_LOOP_FREQUENCY;
}

function TestDeferred() {
    var deferred: webdriver.promise.Deferred;

    deferred = new webdriver.promise.Deferred();
    deferred = new webdriver.promise.Deferred(function() {});
    deferred = new webdriver.promise.Deferred(function(reason: any) { });
    deferred = new webdriver.promise.Deferred(function() {}, new webdriver.promise.ControlFlow());

    var promise: webdriver.promise.Promise = deferred;

    deferred.errback(new Error('Error'));
    deferred.errback('Error');
    deferred.fulfill(123);
    deferred.reject(new Error('Error'));
    deferred.reject('Error');
    deferred.removeAll();

    promise = deferred.promise;
}

function TestPromiseClass() {
    var promise: webdriver.promise.Promise = new webdriver.promise.Promise();

    var obj = {
        a: 5
    }

    promise = promise.addBoth(function( a: any ) { });
    promise = promise.addBoth(function( a: any ) { return 123; });
    promise = promise.addBoth(function( a: any ) { }, obj);

    promise = promise.addCallback(function( a: any ) { });
    promise = promise.addCallback(function( a: any ) { return 123; });
    promise = promise.addCallback(function( a: any ) { }, obj);

    promise = promise.addErrback(function( e: any ) { });
    promise = promise.addErrback(function( e: any ) { return 123; });
    promise = promise.addErrback(function( e: any ) { }, obj);

    promise.cancel(obj);

    var isPending: boolean = promise.isPending();

    promise = promise.then();
    promise = promise.then(function( a: any ) { });
    promise = promise.then(function( a: any ) { return 123; });
    promise = promise.then(function( a: any ) {}, function( e: any) {});
    promise = promise.then(function( a: any ) {}, function( e: any) { return 123; });
}

function TestErrorCode() {
    var errorCode: number;

    errorCode = webdriver.error.ErrorCode.ELEMENT_NOT_SELECTABLE;
    errorCode = webdriver.error.ErrorCode.ELEMENT_NOT_VISIBLE;
    errorCode = webdriver.error.ErrorCode.IME_ENGINE_ACTIVATION_FAILED;
    errorCode = webdriver.error.ErrorCode.IME_NOT_AVAILABLE;
    errorCode = webdriver.error.ErrorCode.INVALID_COOKIE_DOMAIN;
    errorCode = webdriver.error.ErrorCode.INVALID_ELEMENT_COORDINATES;
    errorCode = webdriver.error.ErrorCode.INVALID_ELEMENT_STATE;
    errorCode = webdriver.error.ErrorCode.INVALID_SELECTOR_ERROR;
    errorCode = webdriver.error.ErrorCode.INVALID_XPATH_SELECTOR;
    errorCode = webdriver.error.ErrorCode.INVALID_XPATH_SELECTOR_RETURN_TYPE;
    errorCode = webdriver.error.ErrorCode.JAVASCRIPT_ERROR;
    errorCode = webdriver.error.ErrorCode.METHOD_NOT_ALLOWED;
    errorCode = webdriver.error.ErrorCode.MODAL_DIALOG_OPENED;
    errorCode = webdriver.error.ErrorCode.MOVE_TARGET_OUT_OF_BOUNDS;
    errorCode = webdriver.error.ErrorCode.NO_MODAL_DIALOG_OPEN;
    errorCode = webdriver.error.ErrorCode.NO_SUCH_ELEMENT;
    errorCode = webdriver.error.ErrorCode.NO_SUCH_FRAME;
    errorCode = webdriver.error.ErrorCode.NO_SUCH_WINDOW;
    errorCode = webdriver.error.ErrorCode.SCRIPT_TIMEOUT;
    errorCode = webdriver.error.ErrorCode.SESSION_NOT_CREATED;
    errorCode = webdriver.error.ErrorCode.SQL_DATABASE_ERROR;
    errorCode = webdriver.error.ErrorCode.STALE_ELEMENT_REFERENCE;
    errorCode = webdriver.error.ErrorCode.SUCCESS;
    errorCode = webdriver.error.ErrorCode.TIMEOUT;
    errorCode = webdriver.error.ErrorCode.UNABLE_TO_SET_COOKIE;
    errorCode = webdriver.error.ErrorCode.UNKNOWN_COMMAND;
    errorCode = webdriver.error.ErrorCode.UNKNOWN_ERROR;
    errorCode = webdriver.error.ErrorCode.UNSUPPORTED_OPERATION;
    errorCode = webdriver.error.ErrorCode.XPATH_LOOKUP_ERROR;
}

function TestError() {
    var error: webdriver.error.Error;

    error = new webdriver.error.Error(webdriver.error.ErrorCode.ELEMENT_NOT_SELECTABLE);
    error = new webdriver.error.Error(webdriver.error.ErrorCode.ELEMENT_NOT_SELECTABLE, 'Message');

    var code: number = error.code;
    var state: string = error.state;
    var message: string = error.message;
    var name: string = error.name;
    var stack: string = error.stack;
    var isAutomationError: boolean = error.isAutomationError;
    var errorStr: string = error.toString();

    state = webdriver.error.Error.State.ELEMENT_NOT_SELECTABLE
    state = webdriver.error.Error.State.ELEMENT_NOT_VISIBLE;
    state = webdriver.error.Error.State.IME_ENGINE_ACTIVATION_FAILED;
    state = webdriver.error.Error.State.IME_NOT_AVAILABLE;
    state = webdriver.error.Error.State.INVALID_COOKIE_DOMAIN;
    state = webdriver.error.Error.State.INVALID_ELEMENT_COORDINATES;
    state = webdriver.error.Error.State.INVALID_ELEMENT_STATE;
    state = webdriver.error.Error.State.INVALID_SELECTOR;
    state = webdriver.error.Error.State.JAVASCRIPT_ERROR;
    state = webdriver.error.Error.State.MOVE_TARGET_OUT_OF_BOUNDS;
    state = webdriver.error.Error.State.NO_SUCH_ALERT;
    state = webdriver.error.Error.State.NO_SUCH_DOM
    state = webdriver.error.Error.State.NO_SUCH_ELEMENT;
    state = webdriver.error.Error.State.NO_SUCH_FRAME;
    state = webdriver.error.Error.State.NO_SUCH_WINDOW;
    state = webdriver.error.Error.State.SCRIPT_TIMEOUT;
    state = webdriver.error.Error.State.SESSION_NOT_CREATED;
    state = webdriver.error.Error.State.STALE_ELEMENT_REFERENCE;
    state = webdriver.error.Error.State.SUCCESS;
    state = webdriver.error.Error.State.TIMEOUT;
    state = webdriver.error.Error.State.UNABLE_TO_SET_COOKIE;
    state = webdriver.error.Error.State.UNEXPECTED_ALERT_OPEN
    state = webdriver.error.Error.State.UNKNOWN_COMMAND;
    state = webdriver.error.Error.State.UNKNOWN_ERROR;
    state = webdriver.error.Error.State.UNSUPPORTED_OPERATION;
}