import belter = require('belter');

// Device.js function definitions tests
belter.getUserAgent();
belter.isDevice('userAgent');
belter.isWebView();
belter.isStandAlone();
belter.isFacebookWebView('userAgent');
belter.isFirefoxIOS('userAgent');
belter.isEdgeIOS('userAgent');
belter.isOperaMini('userAgent');
belter.isAndroid('userAgent');
belter.isIos('userAgent');
belter.isGoogleSearchApp('userAgent');
belter.isQQBrowser('userAgent');
belter.isIosWebview('userAgent');
belter.isAndroidWebview('userAgent');
belter.isIE();
belter.isIECompHeader();
belter.isElectron();
belter.isIEIntranet();
belter.isMacOsCna();
belter.supportsPopups('userAgent');
belter.isChrome('userAgent');
belter.isSafari('userAgent');

// css.js function definitions tests
belter.isPerc('42%');
belter.isPx('42px');
belter.toNum('42');
belter.toPx('42');
belter.toCSS(42);
belter.percOf(100, "42%");
belter.normalizeDimension(42, 10);
