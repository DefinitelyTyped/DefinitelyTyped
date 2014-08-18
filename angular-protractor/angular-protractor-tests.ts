/// <reference path="angular-protractor.d.ts" />

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

    var webElement: protractor.WebElement = ptor.findElement(by.css('.class'));
    var promise: webdriver.promise.Promise;
    promise = ptor.findElements(by.css('.class'));
    promise = ptor.isElementPresent(by.css('.class'));
    promise = ptor.isElementPresent(webElement);

    ptor.clearMockModules();
    ptor.addMockModule('name', 'script');
    ptor.addMockModule('name', function() {});
    ptor.removeMockModule('name');
    ptor.waitForAngular();

    var elementFinder: protractor.ElementFinder;
    var elementArrayFinder: protractor.ElementArrayFinder;

    elementFinder = ptor.element(by.id('ABC'));
    elementFinder = ptor.$('.class');

    elementArrayFinder = ptor.$$('.class');

    var locationAbsUrl: webdriver.promise.Promise = ptor.getLocationAbsUrl();
    ptor.setLocation('webaddress.com');

    promise = ptor.get('webaddress.com');
    promise = ptor.get('webdaddress.com', 45);
    ptor.refresh();
    ptor.refresh(45);
    var navigation: webdriver.WebDriverNavigation = ptor.navigate();
    ptor.pause();
    ptor.pause(8080);
}

function TestElement() {
    var elementFinder: protractor.ElementFinder = element(by.id('id'));
    var elementArrayFinder: protractor.ElementArrayFinder = element.all(by.className('class'));
}

function TestElementFinder() {
    var elementFinder: protractor.ElementFinder = element(by.id('id'));
    var promise: webdriver.promise.Promise;

    promise = elementFinder.click();
    promise = elementFinder.allowAnimations('string');
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
    promise = elementFinder.$('.class');
    promise = elementFinder.$$('.class');
    promise = elementFinder.evaluate('expression');
    promise = elementFinder.isPresent();

    var webElement: webdriver.WebElement;
}

function TestElementArrayFinder() {
    var elementArrayFinder: protractor.ElementArrayFinder = element.all(by.id('id'));
    var promise: webdriver.promise.Promise;
    var elementFinder: protractor.ElementFinder;

    var driverElementArray: webdriver.WebElement[] = elementArrayFinder.getWebElements();
    elementFinder = elementArrayFinder.get(42);
    elementFinder = elementArrayFinder.first();
    elementFinder = elementArrayFinder.last();
    promise = elementArrayFinder.count();
    promise = elementArrayFinder.asElementFinders_();
    elementArrayFinder.each(function(element: protractor.ElementFinder){
        // nothing
    });
    elementArrayFinder.map(function(element: protractor.ElementFinder, index: number){
        // nothing
    });
    elementArrayFinder.filter(function(element: protractor.ElementFinder, index: number){
        return element.getText().then((text: string) => {
            return text === "foo";
        });
    });
    elementArrayFinder.reduce(function(accumulator: string, element: protractor.ElementFinder){
        return element.getText().then((text: string) => {
            return accumulator + ',' + text;
        });
    }, '');
    elementArrayFinder.reduce(function(accumulator: string, element: protractor.ElementFinder, index: number, array: protractor.ElementFinder[]){
        return element.getText().then((text: string) => {
            return accumulator + ',' + text;
        });
    }, '');
    elementArrayFinder.then(function(underlyingElementFinders: protractor.ElementFinder[]){
        //nothing
    });
}

// This function tests the angular specific locator strategies.
function TestLocatorStrategies() {
    var ptor: protractor.Protractor = protractor.getInstance();
    var webElement: webdriver.WebElement;

    // Protractor Specific Locators
    protractor.By.addLocator('customLocator', 'script');
    protractor.By.addLocator('customLocator2', function(){
        // nothing
    });
    webElement = ptor.findElement(protractor.By.binding('binding'));
    webElement = ptor.findElement(protractor.By.exactBinding('exactBinding'));
    webElement = ptor.findElement(protractor.By.model('model'));
    webElement = ptor.findElement(protractor.By.repeater('repeater'));
    webElement = ptor.findElement(protractor.By.repeater('repeater').column(0));
    webElement = ptor.findElement(protractor.By.repeater('repeater').row(0));
    webElement = ptor.findElement(protractor.By.repeater('repeater').row(0).column(0));
    webElement = ptor.findElement(protractor.By.buttonText('buttonText'));
    webElement = ptor.findElement(protractor.By.partialButtonText('partialButtonText'));
    webElement = ptor.findElement(protractor.By.cssContainingText('cssSelector', 'search text'));
    webElement = ptor.findElement(protractor.By.options('options'));
}
