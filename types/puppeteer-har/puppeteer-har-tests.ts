import puppeteer from "puppeteer";
import PuppeteerHar from "puppeteer-har";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const har = new PuppeteerHar(page);

    await har.start(); // Start recording
    await page.goto("https://example.com"); // Navigate to a page
    await har.stop(); // Stop recording

    // Save HAR file
    await har.save({ path: "example.har" });

    await browser.close();
})();
