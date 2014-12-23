/// <reference path="selenium-webdriver.d.ts" />

function TestChromeDriver() {
    var driver: chrome.Driver = new chrome.Driver();
    driver = new chrome.Driver(webdriver.Capabilities.chrome());
    driver = new chrome.Driver(webdriver.Capabilities.chrome(), new webdriver.promise.ControlFlow());

    var baseDriver: webdriver.WebDriver = driver;
}

function TestChromeOptions() {
    var options: chrome.Options = new chrome.Options();
    options = chrome.Options.fromCapabilities(webdriver.Capabilities.chrome());

    options = options.addArguments("a", "b", "c");
    options = options.addExtensions("a", "b", "c");
    options = options.detachDriver(true);
    options = options.setChromeBinaryPath("path");
    options = options.setChromeLogFile("logfile");
    options = options.setLocalState("state");
    options = options.setLoggingPrefs(new webdriver.logging.Preferences());
    options = options.setProxy({ proxyType: "proxyType" });
    options = options.setUserPreferences("preferences");
    var capabilities: webdriver.Capabilities = options.toCapabilities();
    capabilities = options.toCapabilities(webdriver.Capabilities.chrome());
    var values: chrome.IOptionsValues = options.toJSON();
}

function TestServiceBuilder() {
    var builder: chrome.ServiceBuilder = new chrome.ServiceBuilder();
    builder = new chrome.ServiceBuilder("exe");

    var anything: any = builder.build();
    builder = builder.enableVerboseLogging();
    builder = builder.loggingTo("path");
    builder = builder.setNumHttpThreads(5);
    builder = builder.setStdio("config");
    builder = builder.setStdio(["A", "B"]);
    builder = builder.setUrlBasePath("path");
    builder = builder.usingPort(8080);
    builder = builder.withEnvironment({ "A": "a", "B": "b" });
}

function TestChromeModule() {
    var service: any = chrome.getDefaultService();
    chrome.setDefaultService({});
}

function TestBinary() {
    var binary: firefox.Binary = new firefox.Binary();
    binary = new firefox.Binary("exe");

    binary.addArguments("A", "B", "C");
    var promise: webdriver.promise.Promise<void> = binary.kill();
    binary.launch("profile").then(function (result: any) { });
}

function TestFirefoxDriver() {
    var driver: firefox.Driver = new firefox.Driver();
    driver = new chrome.Driver(webdriver.Capabilities.firefox());
    driver = new chrome.Driver(webdriver.Capabilities.firefox(), new webdriver.promise.ControlFlow());

    var baseDriver: webdriver.WebDriver = driver;
}

function TestFirefoxOptions() {
    var options: firefox.Options = new firefox.Options();

    options = options.setBinary("binary");
    options = options.setBinary(new firefox.Binary());
    options = options.setLoggingPreferences(new webdriver.logging.Preferences());
    options = options.setProfile("profile");
    options = options.setProfile(new firefox.Profile());
    options = options.setProxy({ proxyType: "proxy" });
    var capabilities: webdriver.Capabilities = options.toCapabilities();
    var capabilities: webdriver.Capabilities = options.toCapabilities({});
}

function TestFirefoxProfile() {
    var profile: firefox.Profile = new firefox.Profile();
    profile = new firefox.Profile("dir");

    var bool: boolean = profile.acceptUntrustedCerts();
    profile.addExtension("ext");
    bool = profile.assumeUntrustedCertIssuer();
    profile.encode().then(function (prof: string) { });
    var num: number = profile.getPort();
    var anything: any = profile.getPreference("key");
    bool = profile.nativeEventsEnabled();
    profile.setAcceptUntrustedCerts(true);
    profile.setAssumeUntrustedCertIssuer(true);
    profile.setNativeEventsEnabled(true);
    profile.setPort(8080);
    profile.setPreference("key", "value");
    profile.setPreference("key", 5);
    profile.setPreference("key", true);
    var stringPromise: webdriver.promise.Promise<string> = profile.writeToDisk();
    stringPromise = profile.writeToDisk(true);
}

function TestExecutors() {
    var exec: webdriver.CommandExecutor = executors.createExecutor("url");
    exec = executors.createExecutor(new webdriver.promise.Promise<string>());
}

function TestBuilder() {
    var builder: webdriver.Builder = new webdriver.Builder();

    var driver: webdriver.WebDriver = builder.build();
    builder = builder.forBrowser('name');
    builder = builder.forBrowser('name', 'version');
    builder = builder.forBrowser('name', 'version', 'platform');

    var cap: webdriver.Capabilities = builder.getCapabilities();
    var str:string = builder.getServerUrl();

    builder = builder.setAlertBehavior('behavior');
    builder = builder.setChromeOptions(new chrome.Options());
    builder = builder.setControlFlow(new webdriver.promise.ControlFlow());
    builder = builder.setEnableNativeEvents(true);
    builder = builder.setFirefoxOptions(new firefox.Options());
    builder = builder.setLoggingPrefs(new webdriver.logging.Preferences());
    builder = builder.setLoggingPrefs({ "key": "value" });
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
    var element: webdriver.WebElement = new webdriver.WebElement(driver, { ELEMENT: 'id' });

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

    sequence.perform().then(function () { });
}

function TestAlert() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var alert: webdriver.Alert = driver.switchTo().alert();

    alert.accept().then(function () { });
    alert.dismiss().then(function () { });
    alert.getText().then(function (text: string) { });
    alert.sendKeys("ABC").then(function () { });
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
    capabilities = capabilities.setLoggingPrefs(new webdriver.logging.Preferences());
    capabilities = capabilities.setLoggingPrefs({ "key": "value" });
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
    var param: any = command.getParameter("param");

    var params: any = command.getParameters();

    command = command.setParameter("param", 123);
    command = command.setParameters({ param: 123 });
}

function TestCommandExecutor() {
    var c: webdriver.CommandExecutor = { execute: function (command: webdriver.Command, callback: (error: Error, obj: any) => any) { } };
    c.execute(new webdriver.Command('name'), function (error: Error, response: any) { });
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

    key = webdriver.Key.chord(webdriver.Key.NUMPAD0, webdriver.Key.NUMPAD1);
}

function TestLocator() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var locator: webdriver.Locator = webdriver.By.className('class');

    var locatorStr: string = locator.toString();

    var using: string = locator.using;
    var value: string = locator.value;

    var str: string = locator.toString();

    locator = webdriver.By.css('css');
    locator = webdriver.By.id('id');
    locator = webdriver.By.linkText('link');
    locator = webdriver.By.name('name');
    locator = webdriver.By.partialLinkText('text');
    locator = webdriver.By.tagName('tag');
    locator = webdriver.By.xpath('xpath');

    webdriver.By.js('script', 1, 2, 3)(driver).then(function (abc: number) { });
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
    var someFunc = function (error: webdriver.UnhandledAlertError) {
        var baseError: webdriver.error.Error = error;

        var alert: webdriver.Alert = error.getAlert();
        var str: string = error.getAlertText();
        str = error.toString();
    }
}

function TestWebDriverLogs() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var logs: webdriver.WebDriverLogs = new webdriver.WebDriver.Logs(driver);

    logs.get(webdriver.logging.Type.BROWSER).then(function (entries: webdriver.logging.Entry[]) { });;
    logs.getAvailableLogTypes().then(function (types: string[]) { });
}

function TestWebDriverNavigation() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var navigation: webdriver.WebDriverNavigation = new webdriver.WebDriver.Navigation(driver);

    navigation.back().then(function () { });
    navigation.forward().then(function () { });
    navigation.refresh().then(function () { });
    navigation.to('http://google.com').then(function () { });
}

function TestWebDriverOptions() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var options: webdriver.WebDriverOptions = new webdriver.WebDriver.Options(driver);
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
    options.getCookie('name').then(function (cookies: webdriver.IWebDriverOptionsCookie) { });
    options.getCookies().then(function (cookies: webdriver.IWebDriverOptionsCookie[]) { });

    var logs: webdriver.WebDriverLogs = options.logs();
    var timeouts: webdriver.WebDriverTimeouts = options.timeouts();
    var window: webdriver.WebDriverWindow = options.window();
}

function TestWebDriverTargetLocator() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var locator: webdriver.WebDriverTargetLocator = new webdriver.WebDriver.TargetLocator(driver);
    var promise: webdriver.promise.Promise<void>;

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

    var timeouts: webdriver.WebDriverTimeouts = new webdriver.WebDriver.Timeouts(driver);
    var promise: webdriver.promise.Promise<void>;

    promise = timeouts.implicitlyWait(123);
    promise = timeouts.pageLoadTimeout(123);
    promise = timeouts.setScriptTimeout(123);
}

function TestWebDriverWindow() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var window: webdriver.WebDriverWindow = new webdriver.WebDriver.Window(driver);
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
    var sessionPromise: webdriver.promise.Promise<webdriver.Session> = new webdriver.promise.Promise<webdriver.Session>();
    var executor: webdriver.CommandExecutor = executors.createExecutor("http://someserver");
    var flow: webdriver.promise.ControlFlow = new webdriver.promise.ControlFlow();
    var driver: webdriver.WebDriver = new webdriver.WebDriver(session, executor);
    driver = new webdriver.WebDriver(session, executor, flow);
    driver = new webdriver.WebDriver(sessionPromise, executor);
    driver = new webdriver.WebDriver(sessionPromise, executor, flow);

    var voidPromise: webdriver.promise.Promise<void>;
    var stringPromise: webdriver.promise.Promise<string>;
    var booleanPromise: webdriver.promise.Promise<boolean>;

    var actions: webdriver.ActionSequence = driver.actions();

    // call
    stringPromise = driver.call<string>(function(){});
    stringPromise = driver.call<string>(function(){ var d: any = this;}, driver);
    stringPromise = driver.call<string>(function(a: number){}, driver, 1);

    voidPromise = driver.close();
    flow = driver.controlFlow();

    // executeAsyncScript
    stringPromise = driver.executeAsyncScript<string>('function(){}');
    stringPromise = driver.executeAsyncScript<string>('function(){}', 1, 2, 3);
    stringPromise = driver.executeAsyncScript<string>(function(){});
    stringPromise = driver.executeAsyncScript<string>(function(a: number){}, 1);

    // executeScript
    stringPromise = driver.executeScript<string>('function(){}');
    stringPromise = driver.executeScript<string>('function(){}', 1, 2, 3);
    stringPromise = driver.executeScript<string>(function(){});
    stringPromise = driver.executeScript<string>(function(a: number){}, 1);

    // findElement
    var element: webdriver.WebElement;
    element = driver.findElement(webdriver.By.id('ABC'));
    element = driver.findElement({id: 'ABC'});
    element = driver.findElement(webdriver.By.js('function(){}'), 1, 2, 3);
    element = driver.findElement({js: 'function(){}'}, 1, 2, 3);

    // findElements
    driver.findElements(webdriver.By.className('ABC')).then(function (elements: webdriver.WebElement[]) { });
    driver.findElements({ className: 'ABC' }).then(function (elements: webdriver.WebElement[]) { });
    driver.findElements(webdriver.By.js('function(){}'), 1, 2, 3).then(function (elements: webdriver.WebElement[]) { });
    driver.findElements({ js: 'function(){}' }, 1, 2, 3).then(function (elements: webdriver.WebElement[]) { });

    voidPromise = driver.get('http://www.google.com');
    driver.getAllWindowHandles().then(function (handles: string[]) { });
    driver.getCapabilities().then(function (caps: webdriver.Capabilities) { });
    stringPromise = driver.getCurrentUrl();
    stringPromise = driver.getPageSource()
    driver.getSession().then(function (session: webdriver.Session) { });;
    stringPromise = driver.getTitle();
    stringPromise = driver.getWindowHandle();

    booleanPromise = driver.isElementPresent(webdriver.By.className('ABC'));
    booleanPromise = driver.isElementPresent({className: 'ABC'});
    booleanPromise = driver.isElementPresent(webdriver.By.js('function(){}'), 1, 2, 3);
    booleanPromise = driver.isElementPresent({js: 'function(){}'}, 1, 2, 3);

    var options: webdriver.WebDriverOptions = driver.manage();
    var navigation: webdriver.WebDriverNavigation = driver.navigate();
    var locator: webdriver.WebDriverTargetLocator = driver.switchTo();

    voidPromise = driver.quit();
    voidPromise = driver.schedule<void>(new webdriver.Command(webdriver.CommandName.CLICK), 'ABC');
    voidPromise = driver.sleep(123);
    stringPromise = driver.takeScreenshot();

    booleanPromise = driver.wait(function() { return true; }, 123);
    booleanPromise = driver.wait(function() { return true; }, 123, 'Message');

    driver = webdriver.WebDriver.attachToSession(executor, 'ABC');
    driver = webdriver.WebDriver.createSession(executor, webdriver.Capabilities.android());
}

function TestWebElement() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var element: webdriver.WebElement;

    element = new webdriver.WebElement(driver, { ELEMENT: 'ID' });
    element = new webdriver.WebElement(driver, new webdriver.promise.Promise<webdriver.IWebElementId>());

    var voidPromise: webdriver.promise.Promise<void>;
    var stringPromise: webdriver.promise.Promise<string>;
    var booleanPromise: webdriver.promise.Promise<boolean>;

    voidPromise = element.clear();
    voidPromise = element.click();

    element = element.findElement(webdriver.By.id('ABC'));
    element = element.findElement({id: 'ABC'});

    element.findElements(webdriver.By.className('ABC')).then(function (elements: webdriver.WebElement[]) { });
    element.findElements({ className: 'ABC' }).then(function (elements: webdriver.WebElement[]) { });

    booleanPromise = element.isElementPresent(webdriver.By.className('ABC'));
    booleanPromise = element.isElementPresent({className: 'ABC'});

    stringPromise = element.getAttribute('class');
    stringPromise = element.getCssValue('display');
    driver = element.getDriver();
    stringPromise = element.getInnerHtml();
    element.getLocation().then(function (location: webdriver.ILocation) { });
    stringPromise = element.getOuterHtml();
    element.getSize().then(function (size: webdriver.ISize) { });
    stringPromise = element.getTagName();
    stringPromise = element.getText();
    booleanPromise = element.isDisplayed();
    booleanPromise = element.isEnabled();
    booleanPromise = element.isSelected();
    voidPromise = element.sendKeys('A', 'B', 'C');
    voidPromise = element.submit();
    element.getId().then(function (id: webdriver.IWebElementId) { });

    booleanPromise = webdriver.WebElement.equals(element, new webdriver.WebElement(driver, { ELEMENT: 'ID2' }));

    var key: string = webdriver.WebElement.ELEMENT_KEY;
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
    elementPromise.then(function (element: webdriver.WebElement) { });
    elementPromise.then(function (element: webdriver.WebElement) { }, function (error: any) { });
    elementPromise.then(function (element: webdriver.WebElement) { return "foo"; }, function (error: any) { }).then(function (result: string) { });

    elementPromise.thenCatch(function (error: any) { }).then(function (value: any) { });

    elementPromise.thenFinally(function () { });
}

function TestLogging() {
    var preferences: webdriver.logging.Preferences = new webdriver.logging.Preferences();
    preferences.setLevel(webdriver.logging.Type.BROWSER, webdriver.logging.Level.ALL);
    var prefs: any = preferences.toJSON();

    var level: webdriver.logging.ILevel = webdriver.logging.getLevel('OFF');
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

    entry = webdriver.logging.Entry.fromClosureLogRecord({});
    entry = webdriver.logging.Entry.fromClosureLogRecord({}, webdriver.logging.Type.DRIVER);
}

function TestPromiseModule() {
    var cancellationError: webdriver.promise.CancellationError = new webdriver.promise.CancellationError();
    cancellationError = new webdriver.promise.CancellationError("message");
    var str: string = cancellationError.message;
    str = cancellationError.name;

    var stringPromise: webdriver.promise.Promise<string> = new webdriver.promise.Promise<string>();
    var numberPromise: webdriver.promise.Promise<number>;
    var booleanPromise: webdriver.promise.Promise<boolean>;
    var voidPromise: webdriver.promise.Promise<void>;

    webdriver.promise.all([new webdriver.promise.Promise<string>()]).then(function (values: string[]) { });

    webdriver.promise.asap('abc', function(value: any){ return true; });
    webdriver.promise.asap('abc', function(value: any){}, function(err: any) { return 'ABC'; });

    stringPromise = webdriver.promise.checkedNodeCall<string>(function(err: any, value: any) { return 'abc'; });

    webdriver.promise.consume(function () {
        return 5;
    }).then(function (value: number) { });
    webdriver.promise.consume(function () {
        return 5;
    }, this).then(function (value: number) { });
    webdriver.promise.consume(function (a: number, b: number, c: number) {
        return 5;
    }, this, 1, 2, 3).then(function (value: number) { });

    var numbersPromise: webdriver.promise.Promise<number[]> = webdriver.promise.filter([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = webdriver.promise.filter([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    }, this);
    numbersPromise = webdriver.promise.filter(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = webdriver.promise.filter(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    }, this);

    numbersPromise = webdriver.promise.map([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = webdriver.promise.map([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    }, this);
    numbersPromise = webdriver.promise.map(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = webdriver.promise.map(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    }, this);

    var flow: webdriver.promise.ControlFlow = webdriver.promise.controlFlow();

    stringPromise = webdriver.promise.createFlow<string>(function(newFlow: webdriver.promise.ControlFlow) { return 'ABC' });

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

    var bool: boolean = webdriver.promise.isGenerator(function () { });
    var isPromise: boolean = webdriver.promise.isPromise('ABC');

    voidPromise = webdriver.promise.rejected({a: 123});

    webdriver.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    numberPromise = webdriver.promise.when('abc', function(value: any) { return 123; }, function(err: Error) { return 123; });
}

function TestStacktraceModule() {
    var bool: boolean = webdriver.stacktrace.BROWSER_SUPPORTED;

    var frame: webdriver.stacktrace.Frame = new webdriver.stacktrace.Frame();
    var baseFrame: webdriver.stacktrace.Frame = frame;

    var snapshot: webdriver.stacktrace.Snapshot = new webdriver.stacktrace.Snapshot();
    var baseSnapshot: webdriver.stacktrace.Snapshot = snapshot;

    var err: Error = webdriver.stacktrace.format(new Error("Error"));
    var frames: webdriver.stacktrace.Frame[] = webdriver.stacktrace.get();
}

function TestUntilModule() {
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    var conditionB: webdriver.until.Condition<boolean> = new webdriver.until.Condition<boolean>('message', function (driver: webdriver.WebDriver) { return true; });
    var conditionBBase: webdriver.until.Condition<boolean> = conditionB;
    var conditionWebElement: webdriver.until.Condition<webdriver.IWebElement>;
    var conditionWebElements: webdriver.until.Condition<webdriver.IWebElement[]>;

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
    flow = new webdriver.promise.ControlFlow({clearInterval: function(a: number) {},
                                            clearTimeout: function(a: number) {},
                                            setInterval: function(a: () => void, b: number) { return 2; },
                                            setTimeout: function(a: () => void, b: number) { return 2; }});

    var emitter: webdriver.EventEmitter = flow;

    var eventType: string;

    eventType = webdriver.promise.ControlFlow.EventType.IDLE;
    eventType = webdriver.promise.ControlFlow.EventType.RESET;
    eventType = webdriver.promise.ControlFlow.EventType.SCHEDULE_TASK;
    eventType = webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION;

    var e: any = flow.annotateError(new Error('Error'));

    var stringPromise: webdriver.promise.Promise<string>;

    stringPromise = flow.await(stringPromise);

    flow.clearHistory();

    stringPromise = flow.execute(function() { return stringPromise; });
    stringPromise = flow.execute(function() { return stringPromise; }, 'Description');

    var history: string[] = flow.getHistory();

    var schedule: string = flow.getSchedule();

    flow.reset();

    var voidPromise: webdriver.promise.Promise<void> = flow.timeout(123);
    voidPromise = flow.timeout(123, 'Description');

    voidPromise = flow.wait(function() { return true; }, 123);
    voidPromise = flow.wait(function() { return true; }, 123, 'Timeout Message');
    voidPromise = flow.wait(function() { return stringPromise; }, 123, 'Timeout Message');

    var timer: webdriver.promise.IControlFlowTimer = flow.timer;

    timer = webdriver.promise.ControlFlow.defaultTimer;
    var loopFrequency: number = webdriver.promise.ControlFlow.EVENT_LOOP_FREQUENCY;
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
    var promise: webdriver.promise.Promise<string> = new webdriver.promise.Promise<string>();

    promise.cancel('Abort');

    var isPending: boolean = promise.isPending();

    promise = promise.then();
    promise = promise.then(function( a: string ) { return 'cde'; });
    promise = promise.then(function( a: string ) { return 'cde'; }, function( e: any) {});
    promise = promise.then(function( a: string ) { return 'cde'; }, function (e: any) { return 123; });

    promise = promise.thenCatch(function (error: any) { });

    promise.thenFinally(function () { });
}

function TestThenableClass() {
    var thenable: webdriver.promise.Thenable<string> = new webdriver.promise.Thenable<string>();

    thenable.cancel('Abort');

    var isPending: boolean = thenable.isPending();

    thenable = thenable.then();
    thenable = thenable.then(function (a: string) { return 'cde'; });
    thenable = thenable.then(function (a: string) { return 'cde'; }, function (e: any) { });
    thenable = thenable.then(function (a: string) { return 'cde'; }, function (e: any) { return 123; });

    thenable = thenable.thenCatch(function (error: any) { });

    thenable.thenFinally(function () { });
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

function TestTestingModule() {
    testing.before(function () {
    });

    testing.beforeEach(function () {
    });

    testing.describe("My test suite", function () {
        testing.it("My test", function () {
        });

        testing.iit("My exclusive test.", function () {
        });

    });

    testing.xdescribe("My disabled suite", function () {
        testing.xit("My disabled test.", function () {
        });
    });

    testing.after(function () {
    });

    testing.afterEach(function () {
    });
}
