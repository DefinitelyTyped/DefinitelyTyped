import * as puppeteer from "puppeteer-core";

(async () => {
  const browser = await puppeteer.connect();
  const page = await browser.newPage();
  await page.goto("https://example.com", {
    referer: 'http://google.com',
  });
  await page.screenshot({ path: "example.png" });

  browser.close();
})();
