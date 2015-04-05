/// <reference path="angular-protractor.d.ts" />

function TestWebDriverExports() {
    var button: number = protractor.Button.LEFT;

    var key: string = protractor.Key.ADD;
    var chord: string = protractor.Key.chord(protractor.Key.NUMPAD0, protractor.Key.NUMPAD1);

    var driver: protractor.WebDriver = new protractor.Builder().
        withCapabilities(protractor.Capabilities.chrome()).
        build();
    var baseDriver: webdriver.WebDriver = driver;

    var action: protractor.ActionSequence = new protractor.ActionSequence(driver);
    var baseAction: webdriver.ActionSequence = action;

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

    var webElement: protractor.WebElement = new protractor.WebElement(driver, new protractor.promise.Promise());
    var baseWebElement: webdriver.WebElement = webElement;

    var locator: webdriver.Locator = by.id('abc');

    var session: protractor.Session = new protractor.Session('ABC', webdriver.Capabilities.android());
    var baseSession: webdriver.Session = session;

    locator = protractor.By.name('name');

    var driver: protractor.WebDriver = new protractor.WebDriver(session, <webdriver.CommandExecutor><any>{});
    driver = new protractor.WebDriver(session, <webdriver.CommandExecutor><any>{}, new webdriver.promise.ControlFlow());
    var baseDriver: webdriver.WebDriver = driver;

    var webElement: protractor.WebElement = new protractor.WebElement(driver, { ELEMENT: 'abc' });
    var baseWebElement: webdriver.WebElement = webElement;

    var webElementPromise: protractor.WebElementPromise = new protractor.WebElementPromise(driver, { ELEMENT: 'abc' });
    var baseWebElementPromise: webdriver.WebElementPromise = webElementPromise;
}

function TestWebDriverErrorModule() {
    var errorCode: number = protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE;
    var error: protractor.error.Error = new protractor.error.Error(protractor.error.ErrorCode.ELEMENT_NOT_VISIBLE);
    var baseError: webdriver.error.Error = error;
}

function TestWebDriverLoggingModule() {
    var levelName: string = protractor.logging.Level.ALL.name;
    var loggingType: string = protractor.logging.Type.CLIENT;

    var level: webdriver.logging.ILevel = protractor.logging.Level.ALL;

    var entry: protractor.logging.Entry = new protractor.logging.Entry(protractor.logging.Level.ALL, 'Message');
    var baseEntry: webdriver.logging.Entry = entry;

    level = protractor.logging.getLevel('DEBUG');

    var prefs: protractor.logging.Preferences = new protractor.logging.Preferences();
}

function TestWebDriverPromiseModule() {
    var cancelError: protractor.promise.CancellationError = new protractor.promise.CancellationError();
    cancelError = new protractor.promise.CancellationError('message');
    var baseCancelError: webdriver.promise.CancellationError = cancelError;

    var thenable: protractor.promise.Thenable<any> = new protractor.promise.Thenable();
    var baseThenable: webdriver.promise.Thenable<any> = thenable;

    var promise: protractor.promise.Promise<any> = new protractor.promise.Promise();
    var basePromise: webdriver.promise.Promise<any> = promise;

    var deferred: protractor.promise.Deferred<any> = new protractor.promise.Deferred();
    var baseDeferred: webdriver.promise.Deferred<any> = deferred;

    var flow: protractor.promise.ControlFlow = new protractor.promise.ControlFlow();
    var baseFlow: webdriver.promise.ControlFlow = flow;

    var arrayPromise: protractor.promise.Promise<any[]> = protractor.promise.all([new protractor.promise.Promise<number>(), new protractor.promise.Promise<string>()]);

    protractor.promise.asap(promise, function (value: any) { return true; });
    protractor.promise.asap(promise, function (value: any) { }, function (err: any) { return 'ABC'; });

    promise = protractor.promise.checkedNodeCall(function (err: any, value: any) { return 123; });

    promise = protractor.promise.consume(function () {
        return 5;
    });
    promise = protractor.promise.consume(function () {
        return 5;
    }, this);
    promise = protractor.promise.consume(function () {
        return 5;
    }, this, 1, 2, 3);

    flow = protractor.promise.controlFlow();

    promise = protractor.promise.createFlow(function (newFlow: webdriver.promise.ControlFlow) { });

    deferred = protractor.promise.defer();

    promise = protractor.promise.delayed(123);

    var numbersPromise: protractor.promise.Promise<number[]> = protractor.promise.filter([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = protractor.promise.filter([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    }, this);
    numbersPromise = protractor.promise.filter(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = protractor.promise.filter(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    }, this);

    numbersPromise = protractor.promise.map([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = protractor.promise.map([1, 2, 3], function (el: number, index: number, arr: number[]) {
        return true;
    }, this);
    numbersPromise = protractor.promise.map(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    });
    numbersPromise = protractor.promise.map(numbersPromise, function (el: number, index: number, arr: number[]) {
        return true;
    }, this);

    promise = protractor.promise.fulfilled();
    promise = protractor.promise.fulfilled({ a: 123 });

    promise = protractor.promise.fullyResolved({ a: 123 });

    var bool: boolean = protractor.promise.isGenerator(function () { });
    var bool: boolean = protractor.promise.isPromise('ABC');

    promise = protractor.promise.rejected({ a: 123 });

    protractor.promise.setDefaultFlow(new webdriver.promise.ControlFlow());

    promise = protractor.promise.when(promise, function (value: any) { return 123; }, function (err: Error) { return 123; });
}

function TestWebDriverStacktraceModule() {
    var bool: boolean = protractor.stacktrace.BROWSER_SUPPORTED;

    var frame: protractor.stacktrace.Frame = new protractor.stacktrace.Frame();
    var baseFrame: webdriver.stacktrace.Frame = frame;

    var snapshot: protractor.stacktrace.Snapshot = new protractor.stacktrace.Snapshot();
    var baseSnapshot: webdriver.stacktrace.Snapshot = snapshot;

    var err: Error = protractor.stacktrace.format(new Error("Error"));
    var frames: protractor.stacktrace.Frame[] = protractor.stacktrace.get();
}

function TestWebDriverUntilModule() {
    var conditionB: protractor.until.Condition<boolean> = new protractor.until.Condition<boolean>('message', function (driver: webdriver.WebDriver) { return true; });
    var conditionBBase: webdriver.until.Condition<boolean> = conditionB;
    var conditionWebElement: protractor.until.Condition<webdriver.IWebElement>;
    var conditionWebElements: protractor.until.Condition<webdriver.IWebElement[]>;

    conditionB = protractor.until.ableToSwitchToFrame(5);
    var conditionAlert: protractor.until.Condition<webdriver.Alert> = protractor.until.alertIsPresent();
    var el: protractor.ElementFinder = element(by.id('id'));
    conditionB = protractor.until.elementIsDisabled(el);
    conditionB = protractor.until.elementIsEnabled(el);
    conditionB = protractor.until.elementIsNotSelected(el);
    conditionB = protractor.until.elementIsNotVisible(el);
    conditionB = protractor.until.elementIsSelected(el);
    conditionB = protractor.until.elementIsVisible(el);
    conditionB = protractor.until.elementTextContains(el, 'text');
    conditionB = protractor.until.elementTextIs(el, 'text');
    conditionB = protractor.until.elementTextMatches(el, /text/);
    conditionB = protractor.until.stalenessOf(el);
    conditionB = protractor.until.titleContains('text');
    conditionB = protractor.until.titleIs('text');
    conditionB = protractor.until.titleMatches(/text/);

    conditionWebElement = protractor.until.elementLocated(by.id('id'));
    conditionWebElements = protractor.until.elementsLocated(by.className('class'));
}

function TestProtractor() {
    var ptor: protractor.Protractor;
    var driver: webdriver.WebDriver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    ptor = protractor.wrapDriver(driver);
    ptor = protractor.wrapDriver(driver, 'baseUrl');
    ptor = protractor.wrapDriver(driver, 'baseUrl', 'rootElement');

    ptor = browser;

    var actions: protractor.ActionSequence = ptor.actions();

    var promise: protractor.promise.Promise<any> = ptor.call(function () { });
    var promise: protractor.promise.Promise<any> = ptor.call(function () { }, this);
    var promise: protractor.promise.Promise<any> = ptor.call(function (a: number, b: number, c:number) { }, this, 1, 2,3);

    promise = ptor.executeAsyncScript('SomeScript');
    promise = ptor.executeAsyncScript('SomeScript', 1, 2, 3);
    promise = ptor.executeAsyncScript(function () { });
    promise = ptor.executeAsyncScript(function (a: number, b: number, c: number) { }, 1, 2, 3);

    promise = ptor.executeScript('SomeScript');
    promise = ptor.executeScript('SomeScript', 1, 2, 3);
    promise = ptor.executeScript(function () { });
    promise = ptor.executeScript(function (a: number, b: number, c: number) { }, 1, 2, 3);

    ptor = browser.forkNewDriverInstance();
    ptor = browser.forkNewDriverInstance(true);
    ptor = browser.forkNewDriverInstance(true, false);

    driver = ptor.driver;
    var baseUrl: string = ptor.baseUrl;
    var rootEl: string = ptor.rootEl;
    var ignoreSynchronization: boolean = ptor.ignoreSynchronization;
    var params: any = ptor.params;
    ptor.resetUrl = "url";

    ptor.debugger();
    ptor.close();
    var controlFlow: protractor.promise.ControlFlow = ptor.controlFlow();

    var webElement: protractor.WebElement = ptor.findElement(by.css('.class'));
    ptor.findElements(by.css('.class')).then(function (elements: webdriver.WebElement[]) { });
    ptor.isElementPresent(by.css('.class')).then(function (present: boolean) { });
    ptor.isElementPresent(webElement).then(function (present: boolean) { });

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

    var locationAbsUrl: webdriver.promise.Promise<string> = ptor.getLocationAbsUrl();
    ptor.setLocation('webaddress.com');

    var voidPromise: webdriver.promise.Promise<void> = ptor.get('webaddress.com');
    voidPromise = ptor.get('webdaddress.com', 45);
    voidPromise = ptor.quit();
    voidPromise = ptor.sleep(5000);

    ptor.refresh();
    ptor.refresh(45);
    var navigation: webdriver.WebDriverNavigation = ptor.navigate();
    ptor.pause();
    ptor.pause(8080);

    ptor.getAllWindowHandles().then(function (handles: string[]) { });

    var capabilities: protractor.promise.Promise<protractor.Capabilities> = ptor.getCapabilities();

    var stringPromise: webdriver.promise.Promise<string>;
    stringPromise = ptor.getCurrentUrl();
    stringPromise = ptor.getPageSource();
    stringPromise = ptor.getTitle();
    stringPromise = ptor.getWindowHandle();
    stringPromise = ptor.takeScreenshot();

    ptor.getPageTimeout = 5000;

    var session: protractor.promise.Promise<protractor.Session> = ptor.getSession();

    var options: webdriver.WebDriverOptions = ptor.manage();

    promise = ptor.schedule(new protractor.Command(protractor.CommandName.ACCEPT_ALERT), 'asdf');

    var targetLocator: webdriver.WebDriverTargetLocator = ptor.switchTo();

    ptor.wait(protractor.until.elementLocated(by.id('id')), 5000).then(function (el: webdriver.IWebElement) { });;
    ptor.wait(protractor.until.elementLocated(by.id('id')), 5000, 'message').then(function (el: webdriver.IWebElement) { });;
}

function TestElement() {
    var elementFinder: protractor.ElementFinder = element(by.id('id'));
    var elementArrayFinder: protractor.ElementArrayFinder = element.all(by.className('class'));
}

function TestElementFinder() {
    var elementFinder: protractor.ElementFinder = element(by.id('id'));
    var voidPromise: webdriver.promise.Promise<void>;
    var stringPromise: webdriver.promise.Promise<string>;
    var booleanPromise: webdriver.promise.Promise<boolean>;

    elementFinder.getId().then(function (id: webdriver.IWebElementId) { });
    voidPromise = elementFinder.click();
    elementFinder = elementFinder.allowAnimations('string');
    voidPromise = elementFinder.sendKeys(protractor.Key.UP, protractor.Key.DOWN);
    stringPromise = elementFinder.getTagName();
    stringPromise = elementFinder.getCssValue('display');
    stringPromise = elementFinder.getAttribute('atribute');
    stringPromise = elementFinder.getText();
    elementFinder.getSize().then(function (size: webdriver.ISize) { });
    elementFinder.getLocation().then(function (location: webdriver.ILocation) { });
    booleanPromise = elementFinder.isEnabled();
    booleanPromise = elementFinder.isSelected();
    voidPromise = elementFinder.submit();
    voidPromise = elementFinder.clear();
    booleanPromise = elementFinder.isDisplayed();
    stringPromise = elementFinder.getOuterHtml();
    stringPromise = elementFinder.getInnerHtml();
    booleanPromise = elementFinder.isElementPresent(by.id('id'));
    elementFinder = elementFinder.$('.class');
    var finders: protractor.ElementArrayFinder = elementFinder.$$('.class');
    elementFinder = elementFinder.evaluate('expression');
    booleanPromise = elementFinder.isPresent();

    var webElement: webdriver.WebElement = elementFinder.getWebElement();
    finders = elementFinder.all(by.className('class'));
    elementFinder = elementFinder.allowAnimations('abc');
    elementFinder = elementFinder.clone();
    elementFinder = elementFinder.element(by.id('id'));

    var b: boolean = elementFinder.isPending();
    var locator: webdriver.Locator = elementFinder.locator();
}

function TestElementArrayFinder() {
    var elementArrayFinder: protractor.ElementArrayFinder = element.all(by.id('id'));

    var voidPromise: webdriver.promise.Promise<void>;
    var stringPromise: webdriver.promise.Promise<string[]>;
    var booleanPromise: webdriver.promise.Promise<boolean[]>;

    elementArrayFinder.getId().then(function (id: webdriver.IWebElementId[]) { });
    voidPromise = elementArrayFinder.click();
    elementArrayFinder = elementArrayFinder.allowAnimations(true);
    voidPromise = elementArrayFinder.sendKeys(protractor.Key.UP, protractor.Key.DOWN);
    stringPromise = elementArrayFinder.getTagName();
    stringPromise = elementArrayFinder.getCssValue('display');
    stringPromise = elementArrayFinder.getAttribute('atribute');
    stringPromise = elementArrayFinder.getText();
    elementArrayFinder.getSize().then(function (size: webdriver.ISize[]) { });
    elementArrayFinder.getLocation().then(function (location: webdriver.ILocation[]) { });
    booleanPromise = elementArrayFinder.isEnabled();
    booleanPromise = elementArrayFinder.isSelected();
    voidPromise = elementArrayFinder.submit();
    voidPromise = elementArrayFinder.clear();
    booleanPromise = elementArrayFinder.isDisplayed();
    stringPromise = elementArrayFinder.getOuterHtml();
    stringPromise = elementArrayFinder.getInnerHtml();
    var finders: protractor.ElementArrayFinder = elementArrayFinder.$$('.class');
    elementArrayFinder = elementArrayFinder.evaluate('expression');

    finders = elementArrayFinder.all(by.className('class'));
    elementArrayFinder = elementArrayFinder.clone();

    var b: boolean = elementArrayFinder.isPending();
    var locator: webdriver.Locator = elementArrayFinder.locator();

    var findersArray: protractor.ElementFinder[] = elementArrayFinder.asElementFinders_();

    var driverElementArray: webdriver.WebElement[] = elementArrayFinder.getWebElements();
    var elementFinder: protractor.ElementFinder = elementArrayFinder.get(42);
    elementFinder = elementArrayFinder.first();
    elementFinder = elementArrayFinder.last();
    elementFinder = elementArrayFinder.toElementFinder_()
    var numberPromise: protractor.promise.Promise<number> = elementArrayFinder.count();
    elementArrayFinder.each(function(element: protractor.ElementFinder){
        // nothing
    });
    stringPromise = elementArrayFinder.map(function(element: protractor.ElementFinder, index: number){
        return 'abc';
    })
    elementArrayFinder = elementArrayFinder.filter(function(element: protractor.ElementFinder, index: number){
        return element.getText().then((text: string) => {
            return text === "foo";
        });
    });
    elementArrayFinder.reduce(function (accumulator: string, element: protractor.ElementFinder) {
        return element.getText().then((text: string) => {
            return accumulator + ',' + text;
        });
    }, '').then(function (result: string) { });
    elementArrayFinder.reduce(function(accumulator: string, element: protractor.ElementFinder, index: number, array: protractor.ElementFinder[]){
        return element.getText().then((text: string) => {
            return accumulator + ',' + text;
        });
    }, '').then(function (result: string) { });
    elementArrayFinder.then(function(underlyingElementFinders: protractor.ElementFinder[]){
        //nothing
    });
}

// This function tests the locator strategies.
function TestLocatorStrategies() {
    var ptor: protractor.Protractor = browser;
    var webElement: webdriver.WebElement;

    protractor.By.addLocator('customLocator', 'script');
    protractor.By.addLocator('customLocator2', function(){
        // nothing
    });

    // Angular specific locators.
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
    // One standard locator for good measure.
    webElement = ptor.findElement(protractor.By.id('id'));

    var el: protractor.ElementFinder;

    // Angular specific locators.
    el = element(by.binding('binding'));
    el = element(by.exactBinding('exactBinding'));
    el = element(by.model('model'));
    el = element(by.repeater('repeater'));
    el = element(by.repeater('repeater').column(0));
    el = element(by.repeater('repeater').row(0));
    el = element(by.repeater('repeater').row(0).column(0));
    el = element(by.buttonText('buttonText'));
    el = element(by.partialButtonText('partialButtonText'));
    el = element(by.cssContainingText('cssSelector', 'search text'));
    el = element(by.options('options'));
    // One standard locator for good measure.
    el = element(by.id('id'));
}
