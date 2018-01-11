import isMobile from 'ismobilejs';

const MOZILLA_ANDROID_UA  = 'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0';
const MOZILLA_IPHONE_UA   = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4';

const CHROME_ANDROID_UA   = 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.66 Mobile Safari/537.36';
const CHROME_IPHONE_UA    = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';

// $ExpectType boolean
isMobile(MOZILLA_ANDROID_UA).android.phone;
// $ExpectType boolean
isMobile(MOZILLA_IPHONE_UA).apple.phone;

// $ExpectType boolean
isMobile(CHROME_ANDROID_UA).android.phone;
// $ExpectType boolean
isMobile(CHROME_IPHONE_UA).apple.phone;

console.log(isMobile.apple);
