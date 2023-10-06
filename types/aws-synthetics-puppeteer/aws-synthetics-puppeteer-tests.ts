import * as synthetics from "Synthetics";

export const handler = async () => {
    const page = synthetics.getPage();
    await page.goto("https://example.com");
    await page.screenshot({ path: "/tmp/example.png" });
};

export const runTestStep = <
    NextPage,
>(
    stepName: string,
    runTestsAndReturnNextPage: () => Promise<NextPage>,
): Promise<NextPage> => {
    return synthetics.executeStep(stepName, async () => {
        const nextPage = await runTestsAndReturnNextPage();
        return nextPage;
    });
};
