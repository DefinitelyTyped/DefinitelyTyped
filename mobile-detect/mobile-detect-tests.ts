

var md: MobileDetect = new MobileDetect(window.navigator.userAgent);

var mobie: string = md.mobile()
var phone: string = md.phone()
var tablet: string = md.tablet()
var userAgent: string = md.userAgent()
var os: string = md.os()
var isPhone: boolean = md.is('iPhone')
var bot: boolean = md.is('bot')
var version: number = md.version('Webkit')
var versionStr: string = md.versionStr('Build')
var match: boolean = md.match('playstation|xbox')