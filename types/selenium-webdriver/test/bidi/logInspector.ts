import * as webdriver from "selenium-webdriver";
import LogInspector from "selenium-webdriver/bidi/logInspector";

const testText = 'hello!';

async function TestLogInspector() {
    const driver: webdriver.WebDriver = new webdriver.Builder().build();
    const logInspector = await LogInspector(driver);
    let error = '';
    let complete = false;
    const timeoutError = setTimeout(() => {
        error = `Timed out waiting for log ${testText}`
        complete = true
    }, 1000)
    logInspector.onLog(async ({text}) => {
        if (text === testText) {
            clearTimeout(timeoutError);
            complete = true
        }
    })

    await driver.executeScript(`console.log('${testText}')`);
    checkForLog();

    async function checkForLog() {
        if (!complete) {
            setTimeout(checkForLog)
        }

        await logInspector.close()
        await driver.close()

        if (error) {
            throw new Error(error)
        }
    }
}
