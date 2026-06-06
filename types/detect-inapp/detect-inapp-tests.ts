import InApp = require("detect-inapp");

const inApp = new InApp("useragent");

// @ts-expect-error
new InApp(3);

// $ExpectType string
inApp.browser;

// $ExpectType boolean
inApp.isInApp;

// $ExpectType boolean
inApp.isMobile;

// $ExpectType boolean
inApp.isDesktop;
