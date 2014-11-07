/// <reference path="angular-protractor-0.17.0.d.ts" />

function TestWebDriverExports() {
    var abstractBuilder: protractor.AbstractBuilder = new protractor.AbstractBuilder();
    var baseAbstractBuilder: webdriver.AbstractBuilder = abstractBuilder;

    var button: protractor.Button = new protractor.Button();
    var baseButton: webdriver.Button = button;

    var key: string = protractor.Key.ADD;
    var chord: string = protractor.Key.chord(protractor.Key.NUMPAD0, protractor.Key.NUMPAD1);

    var driver: protractor.WebDriver = new protractor.Builder().
        withCapabilities(protractor.Capabilities.chrome()).
        build();
    var baseDriver: webdriver.WebDriver = driver;

    var action: protractor.ActionSequence = new protractor.ActionSequence(driver);
    var baseAction: webdriver.ActionSequence = action;

    var alert: protractor.Alert = new protractor.Alert(driver, 'Message');
    var baseAlert: webdriver.Alert = alert;

    var unhandledAlertError: protractor.UnhandledAlertError = new protractor.UnhandledAlertError('Message', alert);
    var baseUnhandledAlertError: webdriver.UnhandledAlertError = unhandledAlertError;

    var browser: string = protractor.Browser.ANDROID;

    var builder: protractor.Builder = new protractor.Builder();
    var baseBuilder: webdriver.Builder = builder;

    var capability: string = protractor.Capability.BROWSER_NAME;

    var capabilities: protractor.Capabilities = protractor.Capabilities.chrome();
    var baseCapabilities: webdriver.Capabilities = capabilities;

    var commandName: string = protractor.CommandName.CLICK_ELEMENT;

    var command: protractor.Command = new protractor.Command(protractor.CommandName.CLICK);
    var baseCommand: webdriver.Command = command;

    var eventEmitter: protractor.EventEmitter = new protractor.EventEmitter();
    var baseEventEmitter: webdriver.EventEmitter = eventEmitter;

    var firefoxDomExecutor: protractor.FirefoxDomExecutor = new protractor.FirefoxDomExecutor();
    var baseFirefoxDomExecutor: webdriver.FirefoxDomExecutor = firefoxDomExecutor;

    var webElement: protractor.WebElement = new protractor.WebElement(driver, new protractor.promise.Promise());
    var baseWebElement: webdriver.WebElement = webElement;

    var locator: protractor.Locator = new protractor.Locator('id', 'ABC');
    var baseLocator: webdriver.Locator = locator;

    var session: protractor.Session = new protractor.Session('ABC', webdriver.Capabilities.android());
    var baseSession: webdriver.Session = session;

    locator = protractor.By.name('name');

    // logging module

    var levelName: string = protractor.logging.LevelName.ALL;
    var loggingType: string = protractor.logging.Type.CLIENT;

    var level: webdriver.logging.Level = protractor.logging.Level.ALL;

    var entry: protractor.logging.Entry = new protractor.logging.Entry(protractor.logging.Level.ALL, 'Message');
    var baseEntry: webdriver.logging.Entry = entry;

    level = protractor.logging.getLevel('DEBUG');

    protractor.logging.Preferences = { a: 123 };

    // promise module

    var promise: protractor.promise.Promise = new protractor.promise.Promise();
    var basePromise: webdriver.promise.Promise = promise;

    var deferred: protractor.promise.Deferred = new protractor.promise.Deferred();
    var baseDeferred: webdriver.promise.Deferred = deferred;

    var flow: protractor.promise.ControlFlow = new protractor.promise.ControlFlow();
    var baseFlow: webdriver.promise.ControlFlow = flow;

    protractor.promise.asap(promise, function(value: any){ return true; });
    protractor.promise.asap(promise, function(value: any){}, function(err: any) { return 'ABC'; });

    promise = protractor.promise.checkedNodeCall(function(err: any, value: any) { return 123; });

    flow = protractor.promise.controlFlow();

    promise = protractor.promise.createFlow(function(newFlow: webdriver.promise.ControlFlow) { });

    deferred = protractor.promise.defer(function() {});
    deferred = protractor.promise.defer(function(reason?: any) {});

    promise = protractor.promise.delayed(123);

    promise = protractor.promise.fulfilled();
    promise = protractor.promise.fulfilled({a: 123});

    promise = protractor.promise.fullyResolved({a: 123});

    var isPromise: boolean = protractor.promise.isPromise('ABC');

    promise = protractor.promise.rejected({a: 123});

    protractor.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    promise = protractor.promise.when(promise, function(value: any) { return 123; }, function(err: Error) { return 123; });

    // error module

    var errorCode: number = protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE;
    var error: protractor.error.Error = new protractor.error.Error(protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE);
    var baseError: webdriver.error.Error = error;

    // process module

    var isNative: boolean = protractor.process.isNative();
    var value: string;

    value = protractor.process.getEnv('name');
    value = protractor.process.getEnv('name', 'default');

    protractor.process.setEnv('name', 'value');
    protractor.process.setEnv('name', 123);

}

function TestProtractor() {
    var ptor: protractor.Protractor;
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    ptor = new protractor.Protractor(driver);
    ptor = new protractor.Protractor(driver, 'baseUrl');
    ptor = new protractor.Protractor(driver, 'baseUrl', 'rootElement');
    ptor = protractor.getInstance();
    protractor.setInstance(ptor);

    ptor = protractor.wrapDriver(driver);
    ptor = protractor.wrapDriver(driver, 'baseUrl');
    ptor = protractor.wrapDriver(driver, 'baseUrl', 'rootElement');

    ptor = browser;

    driver = ptor.driver;
    var baseUrl: string = ptor.baseUrl;
    var rootEl: string = ptor.rootEl;
    var ignoreSynchronization: boolean = ptor.ignoreSynchronization;
    var params: any = ptor.params;

    ptor.debugger();

    ptor.clearMockModules();
    ptor.addMockModule('name', 'script');
    ptor.addMockModule('name', function() {});
    ptor.waitForAngular();

    var elementFinder: protractor.ElementFinder;

    elementFinder = ptor.element(by.id('ABC'));
    elementFinder = ptor.$('.class');

    var elementArrayFinder: protractor.ElementArrayFinder = ptor.$$('.class');

    var webElement: webdriver.WebElement = ptor.wrapWebElement(new webdriver.WebElement(driver, 'id'));

    var locationAbsUrl: webdriver.promise.Promise = ptor.getLocationAbsUrl();
}

function TestElement() {
    var elementFinder: protractor.ElementFinder = element(by.id('id'));
    var elementArrayFinder: protractor.ElementArrayFinder = element.all(by.className('class'));
}

function TestElementFinder() {
    var elementFinder: protractor.ElementFinder = element(by.id('id'));
    var promise: webdriver.promise.Promise;

    promise = elementFinder.click();
    promise = elementFinder.sendKeys(protractor.Key.UP, protractor.Key.DOWN);
    promise = elementFinder.getTagName();
    promise = elementFinder.getCssValue('display');
    promise = elementFinder.getAttribute('atribute');
    promise = elementFinder.getText();
    promise = elementFinder.getSize();
    promise = elementFinder.getLocation();
    promise = elementFinder.isEnabled();
    promise = elementFinder.isSelected();
    promise = elementFinder.submit();
    promise = elementFinder.clear();
    promise = elementFinder.isDisplayed();
    promise = elementFinder.getOuterHtml();
    promise = elementFinder.getInnerHtml();
    promise = elementFinder.isElementPresent(by.id('id'));
    promise = elementFinder.isElementPresent(by.js('function(a, b, c) {}'), 1, 2, 3);
    promise = elementFinder.findElements(by.className('class'));
    promise = elementFinder.findElements(by.js('function(a, b, c) {}'), 1, 2, 3);
    promise = elementFinder.$$('.class');
    promise = elementFinder.evaluate('expression');
    promise = elementFinder.isPresent();

    var webElement: webdriver.WebElement;

    webElement = elementFinder.$('.class');
    webElement = elementFinder.findElement(by.id('id'));
    webElement = elementFinder.findElement(by.js('function(a, b, c) {}'), 1, 2, 3);
    webElement = elementFinder.find();
}

// This function tests the angular specific locator strategies.
function TestLocatorStrategies() {
    var ptor: protractor.Protractor = protractor.getInstance();
    var webElement: webdriver.WebElement;

    // Protractor Specific Locators
    webElement = ptor.findElement(protractor.By.binding('binding'));
    webElement = ptor.findElement(protractor.By.select('select'));
    webElement = ptor.findElement(protractor.By.selectedOption('selectedOptions'));
    webElement = ptor.findElement(protractor.By.input('input'));
    webElement = ptor.findElement(protractor.By.model('model'));
    webElement = ptor.findElement(protractor.By.textarea('textarea'));
    webElement = ptor.findElement(protractor.By.repeater('repeater'));
    webElement = ptor.findElement(protractor.By.buttonText('buttonText'));
    webElement = ptor.findElement(protractor.By.partialButtonText('partialButtonText'));
}

// This function tests the methods that were added to the base WebElement class
function TestWebElements() {
    var ptor: protractor.Protractor = protractor.getInstance();

    var webElement: protractor.WebElement;
    var promise: webdriver.promise.Promise;

    webElement = ptor.findElement(by.id('id')).$('.class');
    promise = ptor.findElement(by.id('id')).$$('.class');
    promise = ptor.findElement(by.id('id')).evaluate('something');

    webElement = webElement.findElement(by.id('id')).$('.class');
    promise = webElement.findElement(by.id('id')).$$('.class');
    promise = webElement.findElement(by.id('id')).evaluate('something');
}
