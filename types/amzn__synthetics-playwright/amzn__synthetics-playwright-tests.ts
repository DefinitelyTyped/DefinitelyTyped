import { synthetics } from "@amzn/synthetics-playwright";
import type { Browser, BrowserContext, LaunchOptions, Page } from "@playwright/test";

export const handler = async () => {
    const launchOptions: LaunchOptions = await synthetics.getDefaultLaunchOptions();
    const browser: Browser = await synthetics.launch(launchOptions);
    const page: Page = await synthetics.newPage(browser);

    await page.goto("https://example.com");
    await page.screenshot({ path: "/tmp/example.png" });

    await synthetics.close();
};

export const runTestStep = <NextPage>(
    stepName: string,
    runTestsAndReturnNextPage: () => Promise<NextPage>,
): Promise<NextPage> => {
    return synthetics.executeStep(stepName, async () => {
        const nextPage = await runTestsAndReturnNextPage();
        return nextPage;
    });
};

export const testWithBrowserContext = async () => {
    const browser: Browser = await synthetics.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await synthetics.newPage(context);

    await page.goto("https://example.com");
    await synthetics.close();
};

export const testExecuteStepWithConfig = async () => {
    const browser: Browser = await synthetics.launch();
    const page: Page = await synthetics.newPage(browser);

    await synthetics.executeStep(
        "test step",
        async () => {
            await page.goto("https://example.com");
            return page.title();
        },
        {
            continueOnStepFailure: true,
            screenshotOnStepStart: true,
            screenshotOnStepSuccess: false,
            screenshotOnStepFailure: true,
        },
        page,
    );

    await synthetics.close();
};
