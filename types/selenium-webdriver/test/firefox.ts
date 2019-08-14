import * as firefox from 'selenium-webdriver/firefox';
import * as remote from 'selenium-webdriver/remote';
import * as webdriver from 'selenium-webdriver';
import * as http from 'selenium-webdriver/http';

function TestFirefoxDriver() {
    let driver: firefox.Driver = firefox.Driver.createSession();
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox());
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox(), new http.Executor(new http.HttpClient('http://someurl')));
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox(), new remote.DriverService('/dev/null', {}));

    let baseDriver: webdriver.WebDriver = driver;
}

function TestFirefoxOptions() {
    let options: firefox.Options = new firefox.Options();

    options = options.setBinary('binary');
    options = options.setProfile('profile');
    options = options.setProxy({ proxyType: 'proxy' });
}

function TestServiceBuilder() {
    let builder: firefox.ServiceBuilder = new firefox.ServiceBuilder();
    builder = new firefox.ServiceBuilder('exe');

    let anything: any = builder.build();
    builder = builder.setPort(8080);
    builder = builder.enableVerboseLogging();
    builder = builder.enableVerboseLogging(true);
    builder = builder.setFirefoxBinary('exe');
    builder = builder.setPath('path');
    builder = builder.setStdio('config');
    builder = builder.setStdio(['A', 'B']);
    builder = builder.setEnvironment({ A: 'a', B: 'b' });
}
