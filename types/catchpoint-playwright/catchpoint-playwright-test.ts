// eslint-disable-next-line no-restricted-imports
import { test, expect, type Browser, BrowserContext } from '@playwright/test'

// $ExpectType Promise<string | null>
Catchpoint.username('testUsername')

// $ExpectType Promise<string | null>
Catchpoint.password('testPassword');

// $ExpectType Promise<void>
Catchpoint.startStep('Test Step');

// $ExpectType Promise<void>
Catchpoint.startStep('Test Step', [false]);

// $ExpectType Promise<void>
Catchpoint.storeGlobalVariable('testValue', 'testName');

// $ExpectType Promise<void>
Catchpoint.setTracepoint('insightToken', 'insightValue');

// $ExpectType Promise<void>
Catchpoint.setIndicator('insightToken', 'insightValue');

// $ExpectType void
test('unsupported methods', async({ page, browser }) => {

    // eslint-disable-next-line no-restricted-properties
    page.addInitScript('console.log("Test Init Script")');

    // eslint-disable-next-line no-restricted-properties
    page.close();

    // eslint-disable-next-line no-restricted-properties
    page.pdf();

    // eslint-disable-next-line no-restricted-properties
    page.routeFromHAR('path/to/har/file.har', { update: true });

    // eslint-disable-next-line no-restricted-properties
    page.screenshot();

    // eslint-disable-next-line no-restricted-properties
    page.setDefaultNavigationTimeout(10000);

    // eslint-disable-next-line no-restricted-properties
    page.setDefaultTimeout(30000);

    // eslint-disable-next-line no-restricted-properties
    page.video();

    // eslint-disable-next-line no-restricted-properties
    page.workers();

    // eslint-disable-next-line no-restricted-properties
    page.context();

    // eslint-disable-next-line no-restricted-properties
    browser.newContext();

    // eslint-disable-next-line no-restricted-properties
    expect(page.context() as BrowserContext).toBeDefined();

    // eslint-disable-next-line no-restricted-properties
    expect(page.context().browser() as Browser).toBeDefined();
});
