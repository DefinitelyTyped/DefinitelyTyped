import UAParser = require('ua-parser-js');
// tslint:disable-next-line:no-duplicate-imports testing imports
import { UAParser as UAParserAlias } from 'ua-parser-js';
// tslint:disable-next-line:no-duplicate-imports testing imports
import { IBrowser, ICPU, IDevice, IEngine, IOS, IResult, BROWSER, CPU, DEVICE, ENGINE, OS } from 'ua-parser-js';

const ua = 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6';
let parser = new UAParser(ua); // $ExpectType UAParser
const result = parser.getResult(); // $ExpectType IResult

parser.getUA(); // $ExpectType string
parser.setUA('foo'); // $ExpectType UAParser

result.ua; // $ExpectType string

// browser
result.browser.name; // $ExpectType string | undefined
result.browser.version; // $ExpectType string | undefined
parser.getBrowser().name; // $ExpectType string | undefined
parser.getBrowser().version; // $ExpectType string | undefined

// device
result.device.model; // $ExpectType string | undefined
result.device.type; // $ExpectType string | undefined
result.device.vendor; // $ExpectType string | undefined

parser.getDevice().model; // $ExpectType string | undefined
parser.getDevice().type; // $ExpectType string | undefined
parser.getDevice().vendor; // $ExpectType string | undefined

// Engine
result.engine.name; // $ExpectType string | undefined
result.engine.version; // $ExpectType string | undefined
parser.getEngine().name; // $ExpectType string | undefined
parser.getEngine().version; // $ExpectType string | undefined

// OS
result.os.name; // $ExpectType string | undefined
result.os.version; // $ExpectType string | undefined
parser.getOS().name; // $ExpectType string | undefined
parser.getOS().version; // $ExpectType string | undefined

// CPU
result.cpu.architecture; // $ExpectType string | undefined
parser.getCPU().architecture; // $ExpectType string | undefined

// Extensions
const uaString = 'ownbrowser/1.3';
const ownBrowser = [[/(ownbrowser)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]];
parser = new UAParser(uaString, { browser: ownBrowser }); // $ExpectType UAParser

// alias
parser = new UAParserAlias(uaString, { browser: ownBrowser }); // $ExpectType UAParser
