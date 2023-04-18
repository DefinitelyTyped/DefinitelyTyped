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
