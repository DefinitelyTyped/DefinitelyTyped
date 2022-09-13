import express = require('express');
import useragent = require('express-useragent');

function serializeDetails(details: useragent.Details): string {
    const accessed: { [key: string]: any } = {
        browser: details.browser,
        geoIp: details.geoIp,
        isAmaya: details.isAmaya,
        isAndroid: details.isAndroid,
        isAndroidTablet: details.isAndroidTablet,
        isBada: details.isBada,
        isBlackberry: details.isBlackberry,
        isBot: details.isBot,
        isCaptive: details.isCaptive,
        isChrome: details.isChrome,
        isChromeOS: details.isChromeOS,
        isCurl: details.isCurl,
        isDesktop: details.isDesktop,
        isEdge: details.isEdge,
        isEpiphany: details.isEpiphany,
        isFirefox: details.isFirefox,
        isFlock: details.isFlock,
        isIE: details.isIE,
        isIECompatibilityMode: details.isIECompatibilityMode,
        isiPad: details.isiPad,
        isiPhone: details.isiPhone,
        isiPod: details.isiPod,
        isKindleFire: details.isKindleFire,
        isKonqueror: details.isKonqueror,
        isLinux: details.isLinux,
        isLinux64: details.isLinux64,
        isMac: details.isMac,
        isMobile: details.isMobile,
        isMobileNative: details.isMobile,
        isOmniWeb: details.isOmniWeb,
        isOpera: details.isOpera,
        isRaspberry: details.isRaspberry,
        isSafari: details.isSafari,
        isSamsung: details.isSamsung,
        isSeaMonkey: details.isSeaMonkey,
        isSilk: details.isSilk,
        isSmartTV: details.isSmartTV,
        isTablet: details.isTablet,
        isWebkit: details.isWebkit,
        isWindows: details.isWindows,
        isWindowsPhone: details.isWindowsPhone,
        isWinJs: details.isWinJs,
        os: details.os,
        platform: details.platform,
        silkAccelerated: details.silkAccelerated,
        source: details.source,
        version: details.version,
    };

    const keys = Object.keys(accessed);
    return keys.map(key => `${key}:${accessed[key]}`).join(',');
}

function testMethods(userAgent: useragent.UserAgent): void {
    userAgent.reset();

    userAgent.testAndroidTablet();
    userAgent.testBot();
    userAgent.testCaptiveNetwork();
    userAgent.testKindleFire();
    userAgent.testMobile();
    userAgent.testNginxGeoIP();
    userAgent.testSilk();
    userAgent.testSmartTV();
    userAgent.testTablet();
    userAgent.testWebkit();
    userAgent.testCompatibilityMode();

    const agent = userAgent.Agent;
    const defaultAgent = userAgent.DefaultAgent;
    serializeDetails(agent);
    serializeDetails(defaultAgent);
    const version = userAgent.version;

    const browser = userAgent.getBrowser('Chrome/76.0.3809.100');
    const browserVersion = userAgent.getBrowserVersion('Chrome/76.0.3809.100');
    const os = userAgent.getOS('os x');
    const platform = userAgent.getPlatform('macintosh');
    const parsed = userAgent.parse('browser:chrome');
}

// Server tests
testMethods(useragent);

const app = express();
app.use(useragent.express());
app.get('/', (req, res) => {
    const userAgentString = serializeDetails(req.useragent);
    res.end(userAgentString);
});
app.get('/parse', (req, res) => {
    const source = req.headers['user-agent'];
    const ua = useragent.parse(source);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(ua));
});

// Browser tests
const browserUserAgent = new useragent.UserAgent();
testMethods(browserUserAgent);
