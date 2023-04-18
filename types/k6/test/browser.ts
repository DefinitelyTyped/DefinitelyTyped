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
