import { NightwatchAPI } from "nightwatch";

function isNull(v: null) {}
function isNightwatchAPI(v: NightwatchAPI) {}

//
// .navigateTo
//
describe('Navigation commands demo', function() {
  test('demoTest', function(browser) {
    // navigate to new url:
    browser.navigateTo('https://nightwatchjs.org');
    // with callback
    browser.navigateTo('https://nightwatchjs.org', function(result) {
      isNightwatchAPI(this);
      // @ts-expect-error
      this.navigateTo();
      console.log(result.value);
    });
    // Retrieve to url with callback:
    browser.getCurrentUrl(function(result) {
      console.log(result.value);
    });
  });

  test('demoTestAsync', async function(browser) {
    const result = await browser.navigateTo('https://nightwatchjs.org');
    isNull(result);
  });
});
