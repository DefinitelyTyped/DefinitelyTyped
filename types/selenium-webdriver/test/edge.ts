import * as edge from 'selenium-webdriver/edge';
import * as remote from 'selenium-webdriver/remote';
import * as webdriver from 'selenium-webdriver';

function TestEdgeDriver() {
    let driver: edge.Driver = edge.Driver.createSession();
    driver = edge.Driver.createSession(webdriver.Capabilities.edge());

    let baseDriver: webdriver.WebDriver = driver;
}

function TestEdgeOptions() {
    let options: edge.Options = new edge.Options();
    options = edge.Options.fromCapabilities(webdriver.Capabilities.edge());

    options = options.addArguments('a', 'b', 'c');
    options = options.addExtensions('a', 'b', 'c');
    options = options.excludeSwitches('a', 'b', 'c');
    options = options.detachDriver(true);
    options = options.setChromeBinaryPath('path');
    options = options.setEdgeChromiumBinaryPath('path');
    options = options.setEdgeLogFile('logfile');
    options = options.setLocalState('state');
    options = options.androidActivity('com.example.Activity');
    options = options.headless();
    options = options.androidDeviceSerial('emulator-5554');
    options = options.androidEdge();
    options = options.androidPackage('com.android.edge');
    options = options.androidProcess('com.android.edge');
    options = options.androidUseRunningApp(true);
    options = options.setPerfLoggingPrefs({
        enableNetwork: true,
        enablePage: true,
        traceCategories: 'category',
        bufferUsageReportingInterval: 1000,
    });
    options = options.setUserPreferences('preferences');
}

function TestServiceBuilder() {
    let builder: edge.ServiceBuilder = new edge.ServiceBuilder();
    builder = new edge.ServiceBuilder('exe');

    let anything: any = builder.build();
    builder = builder.setPort(8080);
    builder = builder.setPath('path');
    builder = builder.setStdio('config');
    builder = builder.setStdio(['A', 'B']);
    builder = builder.setEnvironment({ A: 'a', B: 'b' });
}

function TestEdgeModule() {
    let service: any = edge.getDefaultService();
    edge.setDefaultService(new remote.DriverService('executable', new edge.Options()));
}
