import * as webdriver from "selenium-webdriver";
import LogInspector = require("selenium-webdriver/bidi/logInspector");

const testText = "hello!";

async function TestLogInspector() {
    const driver: webdriver.WebDriver = new webdriver.Builder().build();
    const logInspector = await LogInspector(driver);
    await driver.executeScript(`console.log('${testText}')`);
    await checkForLog(testText, 1000);
    await logInspector.close();
    await driver.close();

    async function checkForLog(expectedText: string, timeout: number): Promise<void> {
        const findLog = new Promise<void>((resolve) => {
            logInspector.onLog(({ text }) => {
                if (text === expectedText) {
                    resolve();
                }
            });
        });
        const timeOut = new Promise<void>((_, reject) => {
            setTimeout(() => {
                reject(new Error("Search timed out"));
            }, timeout);
        });
        return Promise.race([findLog, timeOut]);
    }
}
