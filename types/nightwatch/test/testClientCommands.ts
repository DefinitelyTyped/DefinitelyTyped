import { NightwatchAPI, Cookie, NightwatchLogEntry, NightwatchCallbackResult } from "nightwatch";

function isNightwatchAPI(v: NightwatchAPI) {}
function isNightwatchCallbackResult<T>(v1: NightwatchCallbackResult<T>, v2: NightwatchCallbackResult<T>) {}
function isResultType<T>(v1: T, v2: T) {}

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
      isNightwatchCallbackResult<null>(result, result);
      // @ts-expect-error
      this.navigateTo();
    });
  });

  test('demoTestAsync', async function(browser) {
    const result = await browser.navigateTo('https://nightwatchjs.org');
    isResultType<null>(result, result);
  });
});

//
// .openNewWindow
//
describe('openNewWindow demo', function() {
  test('demo test', function(browser) {
    // open a new window tab (default)
    browser.openNewWindow('tab', function(result) {
      isNightwatchAPI(this);
      isNightwatchCallbackResult<null>(result, result);
    });

  // open a new window
    browser.openNewWindow('window', function(result) {
      isNightwatchAPI(this);
      isNightwatchCallbackResult<null>(result, result);
    });
  });

  test('async demo test', async function(browser) {
      const result = await browser.openNewWindow('window');
      isResultType<null>(result, result);
  });
});

//
// .closeWindow
//
describe('closeWindow demo', function() {
  test('demo test', function(browser) {
    browser.closeWindow(function(result) {
        isNightwatchAPI(this);
        isNightwatchCallbackResult<null>(result, result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.closeWindow();
    isResultType<null>(result, result);
  });
});

//
// .fullscreenWindow
//
describe('fullscreenWindow demo', function() {
  test('demo test', function(browser) {
    browser.fullscreenWindow(function(result) {
        isNightwatchAPI(this);
        isNightwatchCallbackResult<null>(result, result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.fullscreenWindow();
    isResultType<null>(result, result);
  });
});

//
// .minimizeWindow
//
describe('minimizeWindow demo', function() {
  test('demo test', function(browser) {
    browser.minimizeWindow(function(result) {
        isNightwatchAPI(this);
        isNightwatchCallbackResult<null>(result, result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.minimizeWindow();
    isResultType<null>(result, result);
  });
});

//
// .deleteCookie
//
describe('deleteCookie demo', function() {
    test('demo test', function(browser) {
        browser
        .navigateTo('https://www.google.com')
        .setCookie({
            name: "test_cookie",
            value: "test_value",
            path: undefined,
            domain: undefined,
            secure: undefined,
            expiry: undefined,
            httpOnly: undefined
        })
        .deleteCookie('test_cookie', function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result, result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.deleteCookie('test_cookie');
        isResultType<null>(result, result);
    });
});

//
// .deleteCookies
//
describe('deleteCookies demo', function() {
    test('demo test', function(browser) {
        browser
        .navigateTo('https://www.google.com')
        .setCookie({
            name: "test_cookie",
            value: "test_value",
            path: undefined,
            domain: undefined,
            secure: undefined,
            expiry: undefined,
            httpOnly: undefined
        })
        .deleteCookies(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result, result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.deleteCookies();
        isResultType<null>(result, result);
    });
});

//
// .end
//
describe('end command demo', function() {
    test('demo test', function(browser) {
        browser.end(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result, result);
        });
    });
});

//
// .getCookie
//
describe('getCookie command demo', function() {
    test('demo test', function(browser) {
        browser
        .navigateTo('https://www.google.com')
        .setCookie({
            name: "test_cookie",
            value: "test_value",
            path: undefined,
            domain: undefined,
            secure: undefined,
            expiry: undefined,
            httpOnly: undefined
        }).getCookie('test_cookie', function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<Cookie>(result, result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getCookie('test_cookie');
        isResultType<Cookie>(result, result);
    });
});

//
// .setCookie
//
describe('setCookie command demo', function() {
    test('demo test', function(browser) {
        browser
        .navigateTo('https://www.google.com')
        .setCookie({
            name: "test_cookie",
            value: "test_value",
            path: undefined,
            domain: undefined,
            secure: undefined,
            expiry: undefined,
            httpOnly: undefined
        }, function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result, result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setCookie({
          name: "test_cookie",
          value: "test_value",
          path: undefined,
          domain: undefined,
          secure: undefined,
          expiry: undefined,
          httpOnly: undefined
        });
        isResultType<null>(result, result);
    });
});

//
// .getLog
//
describe('getLog command demo', function() {
    test('demo test', function() {
        browser
            .getLog('browser', function(result) {
                isNightwatchAPI(this);
                isResultType<NightwatchLogEntry[]>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getLog('browser');
        isResultType<NightwatchLogEntry[]>(result, result);
    });
});

//
// .getCurrentUrl
//
describe('getCurrentUrl command demo', function() {
    test('demo test', function() {
        browser
            .navigateTo('https://www.nightwatchjs.org')
            .getCurrentUrl(function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.navigateTo('https://www.nightwatchjs.org').getCurrentUrl();
        isResultType<string>(result, result);
    });
});

//
// .getTitle
//
describe('getTitle command demo', function() {
    test('demo test', function() {
        browser
            .navigateTo('https://www.ecosia.org')
            .getTitle(function(result) {
                isNightwatchAPI(this);
                isResultType<string>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.navigateTo('https://www.ecosia.org').getTitle();
        isResultType<string>(result, result);
    });
});

//
// .isLogAvailable
//
describe('isLogAvailable command demo', function() {
    test('demo test', function() {
        browser
            .isLogAvailable('browser', function(result) {
                isNightwatchAPI(this);
                isResultType<boolean>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isLogAvailable('browser');
        isResultType<boolean>(result, result);
    });
});

//
// .resizeWindow
//
describe('resizeWindow command demo', function() {
    test('demo test', function() {
        browser
            .navigateTo('https://www.ecosia.org')
            .resizeWindow(1000, 500, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.resizeWindow(1000, 800);
        isResultType<null>(result, result);
    });
});

//
// .saveScreenshot
//
describe('saveScreenshot command demo', function() {
    test('async demo test', async function(browser) {
        const result = await browser.saveScreenshot('bcd.jpg');
        isResultType<string>(result, result);
    });
});

//
// .setCookie
//
describe('setCookie command demo', function() {
    test('demo test', function() {
        return browser
            .navigateTo('https://www.ecosia.org')
            .setCookie({
                name: 'testCookie',
                value: "",
                path: undefined,
                domain: undefined,
                secure: undefined,
                expiry: undefined,
                httpOnly: undefined
            }, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setCookie({
          name: 'testCookie',
          value: "",
          path: undefined,
          domain: undefined,
          secure: undefined,
          expiry: undefined,
          httpOnly: undefined
        });
        isResultType<null>(result, result);
    });
});

//
// .setWindowPosition
//
describe('setWindowPosition command demo', function() {
    test('demo test', function() {
        browser
            .setWindowPosition(0, 0, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setWindowPosition(0, 0);
        isResultType<null>(result, result);
    });
});

//
// .setWindowRect
//
describe('setWindowRect command demo', function() {
    test('demo test', function() {
        browser
            .setWindowRect({x: 0, y: 0, width: 500, height: 500}, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });
    test('async demo test', async function(browser) {
        const result = await browser.setWindowRect({x: 0, y: 0, width: 500, height: 500});
        isResultType<null>(result, result);
    });
});

//
// .setWindowSize
//
describe('setWindowSize command demo', function() {
    test('demo test', function() {
        browser
            .setWindowSize(500, 500, function(result) {
                isNightwatchAPI(this);
                isNightwatchCallbackResult<null>(result, result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setWindowSize(500, 500);
        isResultType<null>(result, result);
    });
});

//
// switchWindow
//
describe('switchToWindow command demo', function() {
    test('async demo test', async function(browser) {
        const handle = await browser.windowHandle();
        const result = await browser.switchToWindow(handle);
        isResultType<null>(result, result);
    });
});

//
// .init
//
describe('init command demo', function() {
  test('demo test', function() {
      browser.init('https://www.google.com', function(result) {
          isNightwatchAPI(this);
          isNightwatchCallbackResult<null>(result, result);
      });
  });
});

//
// .waitUntil
//
describe('waitUntil command demo', function() {
    before(browser => browser.url('https://www.google.com/'));

    test('demo test', function() {
        browser.waitUntil(async function() {
            return true;
        }, 5000, 5000, function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result, result);
        });
    });
    test('async demo test', async function(browser) {
        const result = await browser.waitUntil(async function() {
            return true;
        });
        isResultType<null>(result, result);
    });
    after(browser => browser.end());
});
