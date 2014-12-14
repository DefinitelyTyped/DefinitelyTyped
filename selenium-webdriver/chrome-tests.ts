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