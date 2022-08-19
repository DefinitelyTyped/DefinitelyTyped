import { ExtendDescribeThis } from "nightwatch";

// TODO: uncomment after fixing async/await issue
// describe('capture browser exceptions', function () {
//     it('does', async function () {
//         await browser.captureBrowserExceptions(event => {
//             console.log('>>> Exception:', event);
//         });

//         await browser.navigateTo('https://duckduckgo.com/');
//         const aboutLink = await browser.findElement('#logo_homepage_link');

//         await browser.executeScript(
//             function (aboutLink) {
//                 aboutLink.setAttribute('onclick', 'throw new Error("Hello world!")');
//             },
//             [aboutLink],
//         );

//         await browser.click(aboutLink);
//     });
// });

describe('Ecosia', () => {
    before(browser => browser.url('https://www.ecosia.org/'));

    it('Demo test ecosia.org', () => {
        // Setting network conditions before the actual test
        browser.setNetworkConditions({
            offline: false,
            latency: 5, // Additional latency (ms).
            download_throughput: 500 * 1024, // Maximal aggregated download throughput.
            upload_throughput: 500 * 1024, // Maximal aggregated upload throughput.
        });

        browser
            .waitForElementVisible('body')
            .assert.titleContains('Ecosia')
            .assert.titleContains('Ecosia')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]');
    });

    xit('this test will be skipped', (browser) => {
        browser.waitForElementVisible('body');
    });

    after(browser => browser.end());
});

xdescribe('whole describle block will be skipped', () => {
    test('ecosia', () => {
        browser.url('https://ecosia.org').end();
    });
});

//
// test custom this
//

interface CustomThis {
    bodySelector: string;
}

describe('Async Ecosia with custom this', function(this: ExtendDescribeThis<CustomThis>) {
    this.tags = 'ecosia';
    this.desiredCapabilities = {
        browserName: "chrome"
    };
    this.retries(2);

    before(function(this: ExtendDescribeThis<CustomThis>, browser, done) {
        browser.url('https://www.ecosia.org/');
        this.bodySelector = 'body';
        done();
    });

    it('Demo test ecosia.org', async (browser) => {
        browser.waitForElementVisible(this.bodySelector!);
    });

    after(browser => browser.end());
});
