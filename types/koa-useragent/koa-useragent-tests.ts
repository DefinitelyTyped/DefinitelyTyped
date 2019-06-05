import Koa = require('koa');
import userAgent = require('koa-useragent');

const app = new Koa();

app.use(userAgent);

app.use((ctx: Koa.Context, next) => {
    ctx.userAgent.isAuthoritative; // $ExpectType boolean
    ctx.userAgent.isMobile; // $ExpectType boolean
    ctx.userAgent.isTablet; // $ExpectType boolean
    ctx.userAgent.isiPad; // $ExpectType boolean
    ctx.userAgent.isiPod; // $ExpectType boolean
    ctx.userAgent.isiPhone; // $ExpectType boolean
    ctx.userAgent.isAndroid; // $ExpectType boolean
    ctx.userAgent.isBlackberry; // $ExpectType boolean
    ctx.userAgent.isOpera; // $ExpectType boolean
    ctx.userAgent.isIE; // $ExpectType boolean
    ctx.userAgent.isEdge; // $ExpectType boolean
    ctx.userAgent.isIECompatibilityMode; // $ExpectType boolean
    ctx.userAgent.isSafari; // $ExpectType boolean
    ctx.userAgent.isFirefox; // $ExpectType boolean
    ctx.userAgent.isWebkit; // $ExpectType boolean
    ctx.userAgent.isChrome; // $ExpectType boolean
    ctx.userAgent.isKonqueror; // $ExpectType boolean
    ctx.userAgent.isOmniWeb; // $ExpectType boolean
    ctx.userAgent.isSeaMonkey; // $ExpectType boolean
    ctx.userAgent.isFlock; // $ExpectType boolean
    ctx.userAgent.isAmaya; // $ExpectType boolean
    ctx.userAgent.isPhantomJS; // $ExpectType boolean
    ctx.userAgent.isEpiphany; // $ExpectType boolean
    ctx.userAgent.isDesktop; // $ExpectType boolean
    ctx.userAgent.isWindows; // $ExpectType boolean
    ctx.userAgent.isLinux; // $ExpectType boolean
    ctx.userAgent.isLinux64; // $ExpectType boolean
    ctx.userAgent.isMac; // $ExpectType boolean
    ctx.userAgent.isChromeOS; // $ExpectType boolean
    ctx.userAgent.isBada; // $ExpectType boolean
    ctx.userAgent.isSamsung; // $ExpectType boolean
    ctx.userAgent.isRaspberry; // $ExpectType boolean
    ctx.userAgent.isBot; // $ExpectType boolean
    ctx.userAgent.isCurl; // $ExpectType boolean
    ctx.userAgent.isAndroidTablet; // $ExpectType boolean
    ctx.userAgent.isWinJs; // $ExpectType boolean
    ctx.userAgent.isKindleFire; // $ExpectType boolean
    ctx.userAgent.isSilk; // $ExpectType boolean
    ctx.userAgent.isCaptive; // $ExpectType boolean
    ctx.userAgent.isSmartTV; // $ExpectType boolean
    ctx.userAgent.isUC; // $ExpectType boolean
    ctx.userAgent.isElectron; // $ExpectType boolean
    ctx.userAgent.isFacebook; // $ExpectType boolean
    ctx.userAgent.isAlamoFire; // $ExpectType boolean
    ctx.userAgent.silkAccelerated; // $ExpectType boolean
    ctx.userAgent.browser; // $ExpectType string
    ctx.userAgent.version; // $ExpectType string
    ctx.userAgent.os; // $ExpectType string
    ctx.userAgent.platform; // $ExpectType string
    ctx.userAgent.geoIp; // $ExpectType object
    ctx.userAgent.electronVersion; // $ExpectType string
    ctx.userAgent.source; // $ExpectType string

    return next();
});

app.listen(3000);
