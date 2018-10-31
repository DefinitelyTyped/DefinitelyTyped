import * as puppeteer from "puppeteer";
import { TimeoutError } from "puppeteer/Errors";

// Basic nagivation
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com", {
    referer: 'http://google.com',
  });
  await page.screenshot({ path: "example.png" });

  browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://news.ycombinator.com", { waitUntil: "networkidle0" });
  await page.pdf({ path: "hn.pdf", format: "A4" });

  const frame = page.frames()[0];
  await frame.goto('/');

  browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      // tslint:disable-next-line no-unnecessary-type-assertion
      width: document.documentElement!.clientWidth,
      // tslint:disable-next-line no-unnecessary-type-assertion
      height: document.documentElement!.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log("Dimensions:", dimensions);

  browser.close();
})();

// The following examples are taken from the docs itself
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  page.on("console", (...args: any[]) => {
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

  await page.setRequestInterception(true);
  page.on("request", interceptedRequest => {
    if (
      interceptedRequest.url().endsWith(".png") ||
      interceptedRequest.url().endsWith(".jpg")
    )
      interceptedRequest.abort();
    else interceptedRequest.continue();
  });

  page.keyboard.type("Hello"); // Types instantly
  page.keyboard.type("World", { delay: 100 }); // Types slower, like a user

  const watchDog = page.waitForFunction("window.innerWidth < 100");
  page.setViewport({ width: 50, height: 50 });
  await watchDog;

  let currentURL: string;

  page
    .waitForSelector("img", { visible: true })
    .then(() => console.log("First URL with image by selector: " + currentURL));

  page
    .waitForXPath("//img", { visible: true })
    .then(() => console.log("First URL with image by xpath: " + currentURL));

  for (currentURL of [
    "https://example.com",
    "https://google.com",
    "https://bbc.com"
  ]) {
    await page.goto(currentURL);
  }

  page.keyboard.type("Hello World!");
  page.keyboard.press("ArrowLeft");

  page.keyboard.down("Shift");
  // tslint:disable-next-line prefer-for-of
  for (let i = 0; i < " World".length; i++) {
    page.keyboard.press("ArrowLeft");
  }
  page.keyboard.up("Shift");
  page.keyboard.press("Backspace");
  page.keyboard.sendCharacter("嗨");

  await page.tracing.start({ path: "trace.json" });
  await page.goto("https://www.google.com");
  await page.tracing.stop();

  page.on("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
    browser.close();
  });

  const inputElement = (await page.$("input[type=submit]"))!;
  await inputElement.click();
});

// Example with launch options
(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    defaultViewport: { width: 800, height: 600 },
    handleSIGINT: true,
    handleSIGHUP: true,
    handleSIGTERM: true,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.screenshot({ path: "example.png" });

  browser.close();
})();

// Test v0.12 features
(async () => {
  const browser = await puppeteer.launch({
    devtools: true,
    env: {
      JEST_TEST: true
    }
  });
  const page = await browser.newPage();
  const button = (await page.$("#myButton"))!;
  const div = (await page.$("#myDiv"))!;
  const input = (await page.$("#myInput"))!;

  if (!button)
    throw new Error('Unable to select myButton');

  if (!input)
    throw new Error('Unable to select myInput');

  await page.addStyleTag({
    url: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  });

  console.log(page.url());

  page.type("#myInput", "Hello World!");

  page.on("console", (event: puppeteer.ConsoleMessage, ...args: any[]) => {
    console.log(event.text, event.type);
    for (let i = 0; i < args.length; ++i) console.log(`${i}: ${args[i]}`);
  });

  await button.focus();
  await button.press("Enter");
  await button.screenshot({
    type: "jpeg",
    omitBackground: true,
    clip: {
      x: 0,
      y: 0,
      width: 200,
      height: 100
    }
  });
  console.log(button.toString());
  input.type("Hello World", { delay: 10 });

  const buttonText = await (await button.getProperty('textContent')).jsonValue();

  await page.deleteCookie(...await page.cookies());

  const metrics = await page.metrics();
  console.log(metrics.Documents, metrics.Frames, metrics.JSEventListeners);

  const navResponse = await page.waitForNavigation({
    timeout: 1000
  });
  console.log(navResponse.ok, navResponse.status, navResponse.url, navResponse.headers);

  // evaluate example
  const bodyHandle = (await page.$('body'))!;
  const html = await page.evaluate(body => body.innerHTML, bodyHandle);
  await bodyHandle.dispose();

  // getProperties example
  const handle = await page.evaluateHandle(() => ({ window, document }));
  const properties = await handle.getProperties();
  const windowHandle = properties.get('window');
  const documentHandle = properties.get('document');
  await handle.dispose();

  // queryObjects example
  // Create a Map object
  await page.evaluate(() => (window as any).map = new Map());
  // Get a handle to the Map object prototype
  const mapPrototype = await page.evaluateHandle(() => Map.prototype);
  // Query all map instances into an array
  const mapInstances = await page.queryObjects(mapPrototype);
  // Count amount of map objects in heap
  const count = await page.evaluate(maps => maps.length, mapInstances);
  await mapInstances.dispose();
  await mapPrototype.dispose();

  // evaluateHandle example
  const aHandle = await page.evaluateHandle(() => document.body);
  const resultHandle = await page.evaluateHandle(body => body.innerHTML, aHandle);
  console.log(await resultHandle.jsonValue());
  await resultHandle.dispose();

  browser.close();
})();

// test $eval and $$eval
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const elementText = await page.$eval(
    '#someElement',
    (
      element,  // $ExpectType Element
    ) => {
      element.innerHTML; // $ExpectType string
      return element.innerHTML;
    }
  );
  elementText; // $ExpectType string

  // If one returns a DOM reference, puppeteer will wrap an ElementHandle instead
  const someElement = await page.$$eval(
    '.someClassName',
    (
      elements, // $ExpectType Element[]
    ) => {
      console.log(elements.length);
      console.log(elements[0].outerHTML);
      return elements[3] as HTMLDivElement;
    }
  );
  someElement; // $ExpectType ElementHandle<HTMLDivElement>

  // If one passes an ElementHandle, puppeteer will unwrap its DOM reference instead
  await page.$eval('.hello-world', (e, x1) => (x1 as any).noWrap, someElement);

  browser.close();
})();

// Test request API
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const handler = (r: puppeteer.Request) => {
    const failure = r.failure();

    const response = r.response();
    if (!response) {
      return;
    }
    const text: string = response.statusText();
    const ip: string = response.remoteAddress().ip;

    if (failure == null) {
      console.error("Request completed successfully");
      return;
    }

    console.log("Request failed", failure.errorText.toUpperCase());
  };
  page.on('requestfinished', handler);
  page.on('requestfailed', handler);
})();

// Test 1.0 features
(async () => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: true,
  });
  const page = await browser.newPage();
  const args: string[] = puppeteer.defaultArgs();

  await page.pdf({
    headerTemplate: 'header',
    footerTemplate: 'footer',
  });

  await page.coverage.startCSSCoverage();
  await page.coverage.startJSCoverage();
  let cov = await page.coverage.stopCSSCoverage();
  cov = await page.coverage.stopJSCoverage();
  const text: string = cov[0].text;
  const url: string = cov[0].url;
  const firstRange: number = cov[0].ranges[0].end - cov[0].ranges[0].start;

  let [handle]: puppeteer.ElementHandle[] = await page.$x('expression');
  ([handle] = await page.mainFrame().$x('expression'));
  ([handle] = await handle.$x('expression'));

  const target = page.target();
  const session = await target.createCDPSession();
  await session.send('methodname', { option: 42 });
  await session.detach();

  await page.tracing.start({ path: "trace.json", categories: ["one", "two"] });
});

// 1.5: From the BrowserContext example
(async () => {
  const browser = await puppeteer.launch();
  // Create a new incognito browser context
  const context = await browser.createIncognitoBrowserContext();
  // Create a new page inside context.
  const page = await context.newPage();
  // ... do stuff with page ...
  await page.goto('https://example.com');
  // Dispose context once it's no longer needed.
  await context.close();
});

// 1.5: From the Worker example
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('workercreated', worker => console.log('Worker created: ' + worker.url()));
  page.on('workerdestroyed', worker => console.log('Worker destroyed: ' + worker.url()));

  console.log('Current workers:');
  for (const worker of page.workers())
    console.log('  ' + worker.url());
});

// Test conditional types
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const eh = await page.$('tr.something') as puppeteer.ElementHandle<HTMLTableRowElement>;
  const index = await page.$eval(
    '.demo',
    (
      e, // $ExpectType Element
      x1, // $ExpectType HTMLTableRowElement
    ) => x1.rowIndex,
    eh,
  );
  index; // $ExpectType number
});

// Test screenshot with an encoding option
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const base64string: string = await page.screenshot({ encoding: "base64" });
  const buffer: Buffer = await page.screenshot({ encoding: "binary" });
  const screenshotOptions: puppeteer.ScreenshotOptions = {
    fullPage: true,
  };
  const stringOrBuffer: string | Buffer = await page.screenshot(screenshotOptions);

  browser.close();
})();

// Test waitFor
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.waitFor(1000);
  await page.waitFor('selector');
  await page.waitFor('selector', {
      timeout: 123,
  });
  await page.waitFor(() => !!document.querySelector('.foo'), {
      hidden: true,
  });
  await page.waitFor((stuff: string) => !!document.querySelector(stuff), {
    hidden: true,
  }, 'asd');

  const frame: puppeteer.Frame = page.frames()[0];
  await frame.waitFor((stuff: string) => !!document.querySelector(stuff), {
    hidden: true,
  }, 'asd');
})();

// Permission tests
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const ctx = browser.defaultBrowserContext();
  await ctx.overridePermissions('https://example.com', ['accelerometer']);
  await ctx.clearPermissionOverrides();
});

// Geoloc
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setGeolocation({
    accuracy: 10,
    latitude: 0,
    longitude: 0,
  });
});

// Errors
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
    try {
        await page.waitFor('test');
    } catch (err) {
        console.log(err instanceof TimeoutError);
    }
});
