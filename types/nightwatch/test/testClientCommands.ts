import { NightwatchAPI, Cookie } from "nightwatch";

function isNull(v: null) {}
function isNightwatchAPI(v: NightwatchAPI) {}
function isCookie(v: Cookie) {}
function isString(v: string) {}
function isBoolean(v: boolean) {}

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
    const result = await browser.navigateTo('https://www.nightwatchjs.org');
    isNull(result);
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
      console.log(result.value);
    });

  // open a new window
    browser.openNewWindow('window', function(result) {
      isNightwatchAPI(this);
      console.log(result.value);
    });
  });

  test('async demo test', async function(browser) {
      const result = await browser.openNewWindow('window');
      isNull(result);
  });
});

//
// .closeWindow
//
describe('closeWindow demo', function() {
  test('demo test', function(browser) {
    browser.closeWindow(function(result) {
        isNightwatchAPI(this);
        console.log(result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.closeWindow();
    isNull(result);
  });
});

//
// .fullscreenWindow
//
describe('fullscreenWindow demo', function() {
  test('demo test', function(browser) {
    browser.fullscreenWindow(function(result) {
        isNightwatchAPI(this);
        console.log(result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.fullscreenWindow();
    isNull(result);
  });
});

//
// .minimizeWindow
//
describe('minimizeWindow demo', function() {
  test('demo test', function(browser) {
    browser.minimizeWindow(function(result) {
        isNightwatchAPI(this);
        console.log(result);
    });
  });

  test('async demo test', async function(browser) {
    const result = await browser.minimizeWindow();
    isNull(result);
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
            console.log(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.deleteCookie('test_cookie');
        isNull(result);
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
            console.log(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.deleteCookies();
        isNull(result);
    });
});

//
// .end
//
describe('end command demo', function() {
    test('demo test', function(browser) {
        browser.end(function(result) {
            isNightwatchAPI(this);
            console.log(result);
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
            console.log(result);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getCookie('test_cookie');
        isCookie(result);
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
        }).getCookies(function(result) {
            isNightwatchAPI(this);
            console.log(result);
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
        isNull(result);
    });
});

//
// .getLog
//
describe('getLog command demo', function() {
    test('demo test', function() {
        browser
        .getLog('browser', function(logEntriesArray) {
            isNightwatchAPI(this);
            console.log(logEntriesArray);
        });
    });

    test('async demo test', async function(browser) {
        const result = await browser.getLog('browser');
    });
});

//
// .getCurrentUrl
//
describe('getCurrentUrl command demo', function() {
    test('demo test', function() {
        browser
            .navigateTo('https://www.nightwatchjs.org')
            .getCurrentUrl(function(url) {
                isNightwatchAPI(this);
                console.log(url);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.navigateTo('https://www.nightwatchjs.org').getCurrentUrl();
        isString(result);
    });
});

//
// .getTitle
//
describe('getTitle command demo', function() {
    test('demo test', function() {
        browser
            .navigateTo('https://www.ecosia.org')
            .getTitle(function(title) {
                isNightwatchAPI(this);
                console.log(title);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.navigateTo('https://www.ecosia.org').getTitle();
        isString(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.isLogAvailable('browser');
        isBoolean(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.resizeWindow(1000, 800);
        isNull(result);
    });
});

//
// .saveScreenshot
//
describe('saveScreenshot command demo', function() {
    test('async demo test', async function(browser) {
        const result = await browser.saveScreenshot('bcd.jpg');
        isString(result);
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
                console.log(result);
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
        isNull(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setWindowPosition(0, 0);
        isNull(result);
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
                console.log(result);
            });
    });
    test('async demo test', async function(browser) {
        const result = await browser.setWindowRect({x: 0, y: 0, width: 500, height: 500});
        isNull(result);
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
                console.log(result);
            });
    });

    test('async demo test', async function(browser) {
        const result = await browser.setWindowSize(500, 500);
        isNull(result);
    });
});

//
// switchWindow
//
describe('switchToWindow command demo', function() {
    test('async demo test', async function(browser) {
        const handle = await browser.windowHandle();
        const result = await browser.switchToWindow(handle);
        isNull(result);
    });
});

//
// .init
//
describe('init command demo', function() {
  test('demo test', function() {
      browser.init('https://www.google.com', function(result) {
          isNightwatchAPI(this);
          console.log(result);
      });
  });
});
