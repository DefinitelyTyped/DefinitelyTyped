import * as webdriver from "selenium-webdriver";
import LogInspector from "selenium-webdriver/bidi/logInspector";

function TestLogInspector() {
    const driver: webdriver.WebDriver = new webdriver.Builder().build();
    const logInspector = LogInspector(driver);
    let lastLog;
    logInspector.onLog(log => {
        lastLog = log;
    })
    driver.executeScript("console.log('hello!')");
    if (lastLog.text !== 'hello!') {
        throw new Error(`Expected log text: ${lastLog.text} to equal 'hello!'`)
    }
}
