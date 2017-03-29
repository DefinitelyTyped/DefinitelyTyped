import * as firefox from 'selenium-webdriver/firefox';
import * as remote from 'selenium-webdriver/remote';
import * as webdriver from 'selenium-webdriver';
import * as http from 'selenium-webdriver/http';

function TestBinary() {
    var binary: firefox.Binary = new firefox.Binary();
    binary = new firefox.Binary('exe');

    binary.addArguments('A', 'B', 'C');
    var promise: webdriver.promise.Promise<void> = binary.kill();
    binary.launch('profile').then((result: any) => {});
}

function TestFirefoxDriver() {
    var driver: firefox.Driver = firefox.Driver.createSession();
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox());
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox(), new http.Executor(new http.HttpClient('http://someurl')));
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox(), new remote.DriverService('/dev/null', {}));
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox(), new remote.DriverService('/dev/null', {}), new webdriver.promise.ControlFlow());

    var baseDriver: webdriver.WebDriver = driver;
}

function TestFirefoxOptions() {
    var options: firefox.Options = new firefox.Options();

    options = options.setBinary('binary');
    options = options.setBinary(new firefox.Binary());
    options = options.setLoggingPreferences(new webdriver.logging.Preferences());
    options = options.setProfile('profile');
    options = options.setProfile(new firefox.Profile());
    options = options.setProxy({ proxyType: 'proxy' });
    var capabilities: webdriver.Capabilities = options.toCapabilities();
}

function TestFirefoxProfile() {
    var profile: firefox.Profile = new firefox.Profile();
    profile = new firefox.Profile('dir');

    var bool: boolean = profile.acceptUntrustedCerts();
    profile.addExtension('ext');
    bool = profile.assumeUntrustedCertIssuer();
    profile.encode().then((prof: string) => {});
    var num: number = profile.getPort();
    var anything: any = profile.getPreference('key');
    bool = profile.nativeEventsEnabled();
    profile.setAcceptUntrustedCerts(true);
    profile.setAssumeUntrustedCertIssuer(true);
    profile.setNativeEventsEnabled(true);
    profile.setPort(8080);
    profile.setPreference('key', 'value');
    profile.setPreference('key', 5);
    profile.setPreference('key', true);
    var stringPromise: webdriver.promise.Promise<string> = profile.writeToDisk();
    stringPromise = profile.writeToDisk(true);
}


function TestServiceBuilder() {
    var builder: firefox.ServiceBuilder = new firefox.ServiceBuilder();
    builder = new firefox.ServiceBuilder('exe');

    var anything: any = builder.build();
    builder = builder.setPort(8080);
    builder = builder.enableVerboseLogging();
    builder = builder.enableVerboseLogging(true);
    builder = builder.setFirefoxBinary('exe');
    builder = builder.setFirefoxBinary(new firefox.Binary());
    builder = builder.setPath('path');
    builder = builder.setStdio('config');
    builder = builder.setStdio(['A', 'B']);
    builder = builder.setEnvironment({ 'A': 'a', 'B': 'b' });
}
