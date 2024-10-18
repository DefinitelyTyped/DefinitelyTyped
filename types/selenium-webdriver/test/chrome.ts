import * as webdriver from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";

async function TestChromeDriver() {
    let driver: chrome.Driver = chrome.Driver.createSession();
    driver = chrome.Driver.createSession(webdriver.Capabilities.chrome());

    let baseDriver: webdriver.WebDriver = driver;
    await driver.setDownloadPath("/path/to/dir");
    await driver.sendDevToolsCommand("command", {});
    let response = await driver.sendAndGetDevToolsCommand("command", []);
    let networkConditions = await driver.getNetworkConditions();
    await driver.setNetworkConditions(networkConditions);
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

function TestChromeOptions() {
    let options: chrome.Options = new chrome.Options(webdriver.Capabilities.chrome());

    options = options.setChromeBinaryPath("path");
    options = options.setChromeLogFile("logfile");
    options = options.androidChrome();
    options = options.setChromeMinidumpPath("/path/to/dir");
}

function TestServiceBuilder() {
    let builder: chrome.ServiceBuilder = new chrome.ServiceBuilder();
    builder = new chrome.ServiceBuilder("exe");
}

function TestChromeModule() {
    let service: any = chrome.Driver.getDefaultService();
}
