import * as webdriver from "selenium-webdriver";
import * as firefox from "selenium-webdriver/firefox";
import * as http from "selenium-webdriver/http";
import * as remote from "selenium-webdriver/remote";

async function TestFirefoxDriver() {
    let driver: firefox.Driver = firefox.Driver.createSession();
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox());
    driver = firefox.Driver.createSession(
        webdriver.Capabilities.firefox(),
        new http.Executor(new http.HttpClient("http://someurl")),
    );
    driver = firefox.Driver.createSession(webdriver.Capabilities.firefox(), new remote.DriverService("/dev/null", {}));
    await driver.installAddon("addon1", true);
    await driver.uninstallAddon("addon1");
    await driver.takeFullPageScreenshot();
    await driver.setContext(firefox.Context.CONTENT);
    await driver.getContext();
    let baseDriver: webdriver.WebDriver = driver;
}

function TestFirefoxOptions() {
    let options: firefox.Options = new firefox.Options();

    options = options.setBinary("binary");
    options = options.setProfile("profile");
    options = options.addArguments("argument");
    options = options.addExtensions("/dev/null");
    options = options.setPreference("key", "value");
    options = options.windowSize({ width: 100, height: 50 });
    options = options.enableMobile("org.mozilla.firefox", "com.example.Activity", "5554");
    options.enableDebugger();
    options.enableBidi();
}

function TestServiceBuilder() {
    let builder: firefox.ServiceBuilder = new firefox.ServiceBuilder();
    builder = new firefox.ServiceBuilder("exe");

    let anything: any = builder.build();
    builder = builder.setPort(8080);
    builder = builder.enableVerboseLogging();
    builder = builder.enableVerboseLogging(true);
    builder = builder.setPath("path");
    builder = builder.setStdio("config");
    builder = builder.setStdio(["A", "B"]);
    builder = builder.setEnvironment({ A: "a", B: "b" });
}
