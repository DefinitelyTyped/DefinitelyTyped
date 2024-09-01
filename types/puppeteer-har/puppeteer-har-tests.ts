import PuppeteerHar from "puppeteer-har";
import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const har = new PuppeteerHar(page);
    await har.start({ path: "test.har" });
    await har.stop();
    await browser.close();
})();
