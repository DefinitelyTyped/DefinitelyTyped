import * as webdriver from "selenium-webdriver";
import * as chromium from "selenium-webdriver/chromium";

async function TestChromoiumDriver() {
    let driver: chromium.ChromiumWebDriver = chromium.ChromiumWebDriver.createSession();

    let baseDriver: webdriver.WebDriver = driver;
    await driver.setDownloadPath("/path/to/dir");
    await driver.sendDevToolsCommand("command", {});
    let response = await driver.sendAndGetDevToolsCommand("command", []);
    let networkConditions = await driver.getNetworkConditions();
    await driver.setNetworkConditions({
        offline: true,
        latency: 0,
        download_throughput: 0,
        upload_throughput: 0,
    });
    await driver.deleteNetworkConditions();
    await driver.launchApp("appId");
    await driver.setPermission("javaScriptEnabled", "granted");
    await driver.startDesktopMirroring("deviceName");
    await driver.startCastTabMirroring("deviceName");
    await driver.getCastIssueMessage();
    await driver.getCastSinks();
    await driver.setCastSinkToUse("deviceName");
    await driver.stopCasting("deviceName");

    driver.quit();
}

function TestChromiumOptions() {
    let options: chromium.Options = new chromium.Options(webdriver.Capabilities.chrome());

    options = options.addArguments("path");
    options = options.debuggerAddress("localhost:9222");
    options = options.windowSize({ width: 500, height: 800 });
    options = options.excludeSwitches();
    options = options.addExtensions("/path-to-dir");
    options = options.addExtensions("/path-to-dir", "/path-to-dir");
    options = options.addExtensions("/path-to-dir", Buffer.from("abc"));
    options = options.setBinaryPath("/path-to-dir");
    options = options.detachDriver(true);
    options = options.setUserPreferences({ prefs: "preferences" });
    options = options.setPerfLoggingPrefs({
        enableNetwork: true,
        enablePage: true,
        enableTimeline: true,
        traceCategories: "category",
        bufferUsageReportingInterval: 1000,
    });
    options = options.setLocalState({ state: "state" });
    options = options.androidActivity("com.example.Activity");
    options = options.androidDeviceSerial("emulator-5554");
    options = options.androidPackage("com.android.edge");
    options = options.androidProcess("com.android.edge");
    options = options.androidUseRunningApp(true);
    options = options.setBrowserLogFile("/path-to-dir");
    options = options.setBrowserMinidumpPath("/path-to-dir");
    options = options.setMobileEmulation({ deviceName: "Google Nexus 5" });
    options = options.windowTypes("/path-to-dir");
    options.enableBidi();
}

function TestServiceBuilder() {
    let builder: chromium.ServiceBuilder = new chromium.ServiceBuilder("/path/to/dir");

    builder = builder.setAdbPort(5553);
    builder = builder.loggingTo("/path-to-dir");
    builder = builder.enableChromeLogging();
    builder = builder.enableVerboseLogging();
    builder = builder.setNumHttpThreads(2);
    builder = builder.setPath("/path-to-dir");
}

function TestExtension() {
    let extension: chromium.Extensions = new chromium.Extensions();
    let length: number = extension.length;
    extension.add("/path-to-extension", "/path-to-extension");
}
