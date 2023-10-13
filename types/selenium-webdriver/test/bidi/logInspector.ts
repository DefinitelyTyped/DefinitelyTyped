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
    await checkForLog(testText, 1000);
    await logInspector.close();
    await driver.close();
    
    async function checkForLog(expectedText: string, timeout: number) {
        const findLog = new Promise((resolve) => {
            logInspector.onLog(({ text }) => {
                if (text === expectedText) {
                    resolve();
                }
            });
        });
        const timeOut = new Promise((_, reject) => {
            setTimeout(() => { reject(new Error("Search timed out")); }, timeout);
        });
        return Promise.race([findLog, timeOut]);
    }
}
