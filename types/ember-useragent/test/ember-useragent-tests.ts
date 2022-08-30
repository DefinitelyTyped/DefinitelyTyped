import UserAgentService from 'ember-useragent/services/user-agent';
import UserAgentHelper from 'ember-useragent/helpers/user-agent';

const service = UserAgentService.create();

service.get('browser'); // $ExpectType BrowserInfo
service.get('device'); // $ExpectType DeviceInfo
service.get('engine'); // $ExpectType EngineInfo
service.get('os'); // $ExpectType OSInfo
service.get('cpu'); // $ExpectType ICPU

// @ts-expect-error
service.get('fakeKey');

const browser = service.browser; // $ExpectType BrowserInfo
browser.info; // $ExpectType IBrowser
browser.isChrome; // $ExpectType boolean
browser.isChromeHeadless; // $ExpectType boolean
browser.isEdge; // $ExpectType boolean
browser.isFirefox; // $ExpectType boolean
browser.isIE; // $ExpectType boolean
browser.isSafari; // $ExpectType boolean

const engine = service.engine; // $ExpectType EngineInfo
engine.info; // $ExpectType IEngine
engine.isWebkit; // $ExpectType boolean

const device = service.device; // $ExpectType DeviceInfo
device.info; // $ExpectType IDevice
device.isConsole; // $ExpectType boolean
device.isDesktop; // $ExpectType boolean
device.isMobile; // $ExpectType boolean
device.isTablet; // $ExpectType boolean

const os = service.os; // $ExpectType OSInfo
os.info; // $ExpectType IOS
os.isAndroid; // $ExpectType boolean
os.isIOS; // $ExpectType boolean
os.isLinux; // $ExpectType boolean
os.isMacOS; // $ExpectType boolean
os.isWindows; // $ExpectType boolean

service.cpu; // $ExpectType ICPU
service.userAgent; // $ExpectType string

const helper = new UserAgentHelper();

helper.compute(['browser']); // $ExpectType BrowserInfo
helper.compute(['device']); // $ExpectType DeviceInfo
helper.compute(['engine']); // $ExpectType EngineInfo
helper.compute(['os']); // $ExpectType OSInfo
helper.compute(['cpu']); // $ExpectType ICPU

// @ts-expect-error
helper.compute(['fakeKey']);
// @ts-expect-error
helper.compute([]);
// @ts-expect-error
helper.compute([123]);
