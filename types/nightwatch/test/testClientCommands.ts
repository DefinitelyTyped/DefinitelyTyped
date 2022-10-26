import { NightwatchAPI, Cookie, NightwatchLogEntry, NightwatchCallbackResult } from "nightwatch";

function isNightwatchAPI(v: NightwatchAPI) {}
function isNightwatchCallbackResult<T>(result: NightwatchCallbackResult<T>): T | void {
    if (result.status === 0) {
        return result.value;
    }
}
function isType<T>(v: T): T { return v; }

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
      isNightwatchCallbackResult<null>(result);
      // @ts-expect-error
      this.navigateTo();
    });
  });

  test('demoTestAsync', async function(browser) {
    const result = await browser.navigateTo('https://nightwatchjs.org');
    isType<null>(result);
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
      isNightwatchCallbackResult<null>(result);
    });

  // open a new window
    browser.openNewWindow('window', function(result) {
      isNightwatchAPI(this);
      isNightwatchCallbackResult<null>(result);
    });
  });

  test('async demo test', async function(browser) {
      const result = await browser.openNewWindow('window');
      isType<null>(result);
  });
});

//
// .closeWindow
//
describe('closeWindow demo', function() {
  test('demo test', function(browser) {
    browser.closeWindow(function(result) {
        isNightwatchAPI(this);
        isNightwatchCallbackResult<null>(result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.closeWindow();
    isType<null>(result);
  });
});

//
// .fullscreenWindow
//
describe('fullscreenWindow demo', function() {
  test('demo test', function(browser) {
    browser.fullscreenWindow(function(result) {
        isNightwatchAPI(this);
        isNightwatchCallbackResult<null>(result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.fullscreenWindow();
    isType<null>(result);
  });
});

//
// .minimizeWindow
//
describe('minimizeWindow demo', function() {
  test('demo test', function(browser) {
    browser.minimizeWindow(function(result) {
        isNightwatchAPI(this);
        isNightwatchCallbackResult<null>(result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.minimizeWindow();
    isType<null>(result);
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
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.deleteCookie('test_cookie');
        isType<null>(result);
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
            isNightwatchCallbackResult<null>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.deleteCookies();
        isType<null>(result);
    });
});

//
// .end
//
describe('end command demo', function() {
    test('demo test', function(browser) {
        browser.end(function(result) {
            isNightwatchAPI(this);
            isNightwatchCallbackResult<null>(result);
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
            isNightwatchCallbackResult<Cookie>(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getCookie('test_cookie');
        isType<Cookie>(result);
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
            isNightwatchCallbackResult<null>(result);
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
        isType<null>(result);
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
                isType<NightwatchLogEntry[]>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getLog('browser');
        isType<NightwatchLogEntry[]>(result);
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
                isNightwatchCallbackResult<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.navigateTo('https://www.nightwatchjs.org').getCurrentUrl();
        isType<string>(result);
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
                isType<string>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.navigateTo('https://www.ecosia.org').getTitle();
        isType<string>(result);
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
                isType<boolean>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isLogAvailable('browser');
        isType<boolean>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.resizeWindow(1000, 800);
        isType<null>(result);
    });
});

//
// .saveScreenshot
//
describe('saveScreenshot command demo', function() {
    test('async demo test', async function(browser) {
        const result = await browser.saveScreenshot('bcd.jpg');
        isType<string>(result);
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
                isNightwatchCallbackResult<null>(result);
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
        isType<null>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setWindowPosition(0, 0);
        isType<null>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });
    test('async demo test', async function(browser) {
        const result = await browser.setWindowRect({x: 0, y: 0, width: 500, height: 500});
        isType<null>(result);
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
                isNightwatchCallbackResult<null>(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setWindowSize(500, 500);
        isType<null>(result);
    });
});

//
// switchWindow
//
describe('switchWindow command demo', function() {
    test('async demo test', async function(browser) {
        const handle = await browser.windowHandle();
        const result = await browser.switchWindow(handle);
        isType<null>(result);
    });
});

//
// switchToWindow
//
describe('switchToWindow command demo', function() {
    test('async demo test', async function(browser) {
        const handle = await browser.windowHandle();
        const result = await browser.switchToWindow(handle);
        isType<null>(result);
    });
});

//
// .init
//
describe('init command demo', function() {
  test('demo test', function() {
      browser.init('https://www.google.com', function(result) {
          isNightwatchAPI(this);
          isNightwatchCallbackResult<null>(result);
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
            isNightwatchCallbackResult<null>(result);
        });
    });
    test('async demo test', async function(browser) {
        const result = await browser.waitUntil(async function() {
            return true;
        });
        isType<null>(result);
    });
    after(browser => browser.end());
});

//
// .axeInject
//
describe('axeInject test', function() {
    test('async demo test', async function(browser) {
        const result = await browser.axeInject();
        isType<null>(result);
    });
    after(browser => browser.end());
});
