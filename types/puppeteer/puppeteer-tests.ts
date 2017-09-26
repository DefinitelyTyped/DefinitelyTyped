import * as puppeteer from "puppeteer";

// Examples taken from README
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com", { waitUntil: "networkidle" });
  await page.pdf({ path: "hn.pdf", format: "A4" });

  browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log("Dimensions:", dimensions);

  browser.close();
})();

// The following examples are taken from the docs itself
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  page.on("console", (...args) => {
    for (let i = 0; i < args.length; ++i) console.log(`${i}: ${args[i]}`);
  });
  page.evaluate(() => console.log(5, "hello", { foo: "bar" }));

  const result = await page.evaluate(() => {
    return Promise.resolve(8 * 7);
  });
  console.log(await page.evaluate("1 + 2"));

  const bodyHandle = await page.$("body");

  // Typings for this are really difficult since they depend on internal state
  // of the page class.
  const html = await page.evaluate(
    (body: HTMLElement) => body.innerHTML,
    bodyHandle
  );
});

import * as crypto from "crypto";
import * as fs from "fs";

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  page.on("console", console.log);
  await page.exposeFunction("md5", (text: string) =>
    crypto
      .createHash("md5")
      .update(text)
      .digest("hex")
  );
  await page.evaluate(async () => {
    // use window.md5 to compute hashes
    const myString = "PUPPETEER";
    const myHash = await (window as any).md5(myString);
    console.log(`md5 of ${myString} is ${myHash}`);
  });
  browser.close();

  page.on("console", console.log);
  await page.exposeFunction("readfile", async (filePath: string) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, text) => {
        if (err) reject(err);
        else resolve(text);
      });
    });
  });
  await page.evaluate(async () => {
    // use window.readfile to read contents of a file
    const content = await (window as any).readfile("/etc/hosts");
    console.log(content);
  });

  await page.emulateMedia("screen");
  await page.pdf({ path: "page.pdf" });

  await page.setRequestInterceptionEnabled(true);
  page.on("request", interceptedRequest => {
    if (
      interceptedRequest.url.endsWith(".png") ||
      interceptedRequest.url.endsWith(".jpg")
    )
      interceptedRequest.abort();
    else interceptedRequest.continue();
  });

  page.type("Hello"); // Types instantly
  page.type("World", { delay: 100 }); // Types slower, like a user

  const watchDog = page.waitForFunction("window.innerWidth < 100");
  page.setViewport({ width: 50, height: 50 });
  await watchDog;

  let currentURL: string;
  page
    .waitForSelector("img")
    .then(() => console.log("First URL with image: " + currentURL));
  for (currentURL of [
    "https://example.com",
    "https://google.com",
    "https://bbc.com"
  ]) {
    await page.goto(currentURL);
  }

  page.type("Hello World!");
  page.press("ArrowLeft");

  page.keyboard.down("Shift");
  // tslint:disable-next-line prefer-for-of
  for (let i = 0; i < " World".length; i++) {
    page.press("ArrowLeft");
  }
  page.keyboard.up("Shift");
  page.press("Backspace");
  page.keyboard.sendCharacter("嗨");

  await page.tracing.start({ path: "trace.json" });
  await page.goto("https://www.google.com");
  await page.tracing.stop();

  page.on("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
    browser.close();
  });

  const inputElement = await page.$("input[type=submit]");
  await inputElement.click();
});

// Example with launch options
(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ]
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  browser.close();
})();
