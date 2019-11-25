// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality.
// Any number of plugins can be added through `puppeteer.use()`
import puppeteer = require('puppeteer-extra');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin: any = Function.prototype; // require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

// Add plugin to anonymize the User-Agent and signal Windows as platform
const UserAgentPlugin: any = Function.prototype; //  = require('puppeteer-extra-plugin-anonymize-ua')
puppeteer.use(UserAgentPlugin({ makeWindows: true }));

// That's it, the rest is puppeteer usage as normal 😊
puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600 });

  console.log(`Testing the user agent plugin..`);
  await page.goto('https://httpbin.org/headers');
  await page.waitFor(1000);
  await page.screenshot({ path: 'headers.png', fullPage: true });

  console.log(`Testing the stealth plugin..`);
  await page.goto('https://bot.sannysoft.com');
  await page.waitFor(5000);
  await page.screenshot({ path: 'stealth.png', fullPage: true });

  console.log(`All done, check the screenshots. ✨`);
  await browser.close();
});
