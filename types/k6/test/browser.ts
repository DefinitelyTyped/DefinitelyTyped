import browser from 'k6/experimental/browser';

const selector = 'a[href="http://example.com"]';

//
// Create a page
//
const page = new browser.Page();

// $ExpectType void
page.bringToFront();

// @ts-expect-error
page.check();
// $ExpectType void
page.check(selector);
// $ExpectType void
page.check(selector, { force: true });
// $ExpectType void
page.check(selector, { noWaitAfter: true });
// $ExpectType void
page.check(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.check(selector, { strict: true });
// $ExpectType void
page.check(selector, { timeout: 10000 });
// $ExpectType void
page.check(selector, { trial: true });

// @ts-expect-error
page.click();
// $ExpectType Promise<void>
page.click(selector);
// $ExpectType Promise<void>
page.click(selector, { button: 'left' });
// $ExpectType Promise<void>
page.click(selector, { button: 'middle' });
// $ExpectType Promise<void>
page.click(selector, { button: 'right' });
// $ExpectType Promise<void>
page.click(selector, { clickCount: 3 });
// $ExpectType Promise<void>
page.click(selector, { delay: 1000 });
// $ExpectType Promise<void>
page.click(selector, { force: true });
// $ExpectType Promise<void>
page.click(selector, { modifiers: ['Alt', 'Control', 'Meta', 'Shift'] });
// $ExpectType Promise<void>
page.click(selector, { noWaitAfter: true });
// $ExpectType Promise<void>
page.click(selector, { position: { x: 0, y: 0 } });
// $ExpectType Promise<void>
page.click(selector, { strict: true });
// $ExpectType Promise<void>
page.click(selector, { timeout: 10000 });
// $ExpectType Promise<void>
page.click(selector, { trial: true });

// $ExpectType void
page.close();

// $ExpectType string
page.content();

// $ExpectType BrowserContext
page.context();

// @ts-expect-error
page.dblclick();
// $ExpectType void
page.dblclick(selector);
// $ExpectType void
page.dblclick(selector, { button: 'left' });
// $ExpectType void
page.dblclick(selector, { button: 'middle' });
// $ExpectType void
page.dblclick(selector, { button: 'right' });
// $ExpectType void
page.dblclick(selector, { delay: 1000 });
// $ExpectType void
page.dblclick(selector, { force: true });
// $ExpectType void
page.dblclick(selector, { modifiers: ['Alt', 'Control', 'Meta', 'Shift'] });
// $ExpectType void
page.dblclick(selector, { noWaitAfter: true });
// $ExpectType void
page.dblclick(selector, { position: { x: 0, y: 0 } });
// $ExpectType void
page.dblclick(selector, { strict: true });
// $ExpectType void
page.dblclick(selector, { timeout: 10000 });
// $ExpectType void
page.dblclick(selector, { trial: true });

// @ts-expect-error
page.dispatchEvent();
// @ts-expect-error
page.dispatchEvent(selector);
// $ExpectType void
page.dispatchEvent(selector, 'click');
// $ExpectType void
page.dispatchEvent(selector, 'click', undefined, { strict: true });
// $ExpectType void
page.dispatchEvent(selector, 'click', undefined, { timeout: 10000 });
// $ExpectType void
page.dispatchEvent(selector, 'click', { type: 'look' });
// @ts-expect-error
page.dispatchEvent(selector, 'click', 'string');

// $ExpectType void
page.emulateMedia();
// $ExpectType void
page.emulateMedia({ colorScheme: 'light' });
// $ExpectType void
page.emulateMedia({ colorScheme: 'dark' });
// $ExpectType void
page.emulateMedia({ colorScheme: 'no-preference' });
// $ExpectType void
page.emulateMedia({ media: 'screen' });
// $ExpectType void
page.emulateMedia({ media: 'print' });
// $ExpectType void
page.emulateMedia({ reducedMotion: 'no-preference' });
// $ExpectType void
page.emulateMedia({ reducedMotion: 'reduce' });

// @ts-expect-error
page.emulateVisionDeficiency();
// @ts-expect-error
page.emulateVisionDeficiency("");
// @ExpectType void
page.emulateVisionDeficiency("none");
// @ExpectType void
page.emulateVisionDeficiency("blurredVision");
// @ExpectType void
page.emulateVisionDeficiency("deuteranopia");
// @ExpectType void
page.emulateVisionDeficiency("protanopia");
// @ExpectType void
page.emulateVisionDeficiency("tritanopia");
// @ExpectType void
page.emulateVisionDeficiency("achromatopsia");

// @ts-expect-error
page.evaluate();
// @ts-expect-error
page.evaluate(1);
// @ExpectType void
page.evaluate("");
// @ExpectType void
page.evaluate(() => {});
// @ExpectType string
page.evaluate(() => { ""; });
// @ExpectType string
page.evaluate((a: string) => { a; }, "");
// @ExpectType string[]
page.evaluate((a: string[]) => a, [""]);
