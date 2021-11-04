import * as ie from 'selenium-webdriver/ie';
import * as remote from 'selenium-webdriver/remote';
import * as webdriver from 'selenium-webdriver';

function TestIeDriver() {
    let driver: ie.Driver;
    driver = ie.Driver.createSession();
    driver = ie.Driver.createSession(webdriver.Capabilities.ie());
    driver = ie.Driver.createSession(new ie.Options());
    driver = ie.Driver.createSession(new ie.Options(), new remote.DriverService('/dev/null', {}));
    driver.setFileDetector();

    let baseDriver: webdriver.WebDriver = driver;
}

function TestIeOptions() {
    let options: ie.Options = new ie.Options();

    options = options.introduceFlakinessByIgnoringProtectedModeSettings(true);
    options = options.ignoreZoomSetting(true);
    options = options.initialBrowserUrl('url');
    options = options.enablePersistentHover(true);
    options = options.enableElementCacheCleanup(true);
    options = options.requireWindowFocus(true);
    options = options.browserAttachTimeout(10);
    options = options.forceCreateProcessApi(true);
    options = options.addArguments('a', 'b');
    options = options.usePerProcessProxy(true);
    options = options.ensureCleanSession(true);
    options = options.setLogFile('path');
    options = options.setLogLevel('FATAL');
    options = options.setHost('hostname');
    options = options.setExtractPath('path');
    options = options.silent(true);
}

function TestIeServiceBuilder() {
    let builder: ie.ServiceBuilder = new ie.ServiceBuilder();
    builder = new ie.ServiceBuilder('exe');

    let service: remote.DriverService = builder.build();
}
