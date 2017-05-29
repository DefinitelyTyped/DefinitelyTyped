import * as chrome from 'selenium-webdriver/chrome';
import * as remote from 'selenium-webdriver/remote';
import * as webdriver from 'selenium-webdriver';

function TestChromeDriver() {
    let driver: chrome.Driver = chrome.Driver.createSession();
    driver = chrome.Driver.createSession(webdriver.Capabilities.chrome());
    driver = chrome.Driver.createSession(webdriver.Capabilities.chrome(),
        new remote.DriverService('executable', new chrome.Options()),
        new webdriver.promise.ControlFlow());

    let baseDriver: webdriver.WebDriver = driver;
}

function TestChromeOptions() {
    let options: chrome.Options = new chrome.Options();
    options = chrome.Options.fromCapabilities(webdriver.Capabilities.chrome());

    options = options.addArguments('a', 'b', 'c');
    options = options.addExtensions('a', 'b', 'c');
    options = options.excludeSwitches('a', 'b', 'c');
    options = options.detachDriver(true);
    options = options.setChromeBinaryPath('path');
    options = options.setChromeLogFile('logfile');
    options = options.setLocalState('state');
    options = options.androidActivity('com.example.Activity');
    options = options.androidDeviceSerial('emulator-5554');
    options = options.androidChrome();
    options = options.androidPackage('com.android.chrome');
    options = options.androidProcess('com.android.chrome');
    options = options.androidUseRunningApp(true);
    options = options.setLoggingPrefs(new webdriver.logging.Preferences());
    options = options.setPerfLoggingPrefs({
        enableNetwork: true, enablePage: true, enableTimeline: true,
        tracingCategories: 'category', bufferUsageReportingInterval: 1000 });
    options = options.setProxy({ proxyType: 'proxyType' });
    options = options.setUserPreferences('preferences');
    let capabilities: webdriver.Capabilities = options.toCapabilities();
    capabilities = options.toCapabilities(webdriver.Capabilities.chrome());
}

function TestServiceBuilder() {
    let builder: chrome.ServiceBuilder = new chrome.ServiceBuilder();
    builder = new chrome.ServiceBuilder('exe');

    let anything: any = builder.build();
    builder = builder.setPort(8080);
    builder = builder.setAdbPort(5037);
    builder = builder.loggingTo('path');
    builder = builder.enableVerboseLogging();
    builder = builder.setNumHttpThreads(5);
    builder = builder.setPath('path');
    builder = builder.setStdio('config');
    builder = builder.setStdio(['A', 'B']);
    builder = builder.setEnvironment({ A: 'a', B: 'b' });
}

function TestChromeModule() {
    let service: any = chrome.getDefaultService();
    chrome.setDefaultService(new remote.DriverService('executable', new chrome.Options()));
}
