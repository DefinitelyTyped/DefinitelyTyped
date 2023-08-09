import UAParser = require("ua-parser-js");
// tslint:disable-next-line:no-duplicate-imports testing imports
import { UAParser as UAParserAlias } from "ua-parser-js";
// tslint:disable-next-line:no-duplicate-imports testing imports
import { IBrowser, ICPU, IDevice, IEngine, IOS, IResult, BROWSER, CPU, DEVICE, ENGINE, OS } from "ua-parser-js";

const ua = "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6";
new UAParser(); // $ExpectType UAParserInstance
const parser = new UAParser(ua); // $ExpectType UAParserInstance
const result = parser.getResult(); // $ExpectType IResult

// create via call instead of new
UAParser(); // $ExpectType IResult
UAParser(ua); // $ExpectType IResult

parser.getUA(); // $ExpectType string
parser.setUA("foo"); // $ExpectType UAParserInstance

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
const uaString = "ownbrowser/1.3";
const ownBrowser = [[/(ownbrowser)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]];
new UAParser({ browser: ownBrowser }); // $ExpectType UAParserInstance
new UAParser(uaString, { browser: ownBrowser }); // $ExpectType UAParserInstance
UAParser({ browser: ownBrowser }); // $ExpectType IResult
UAParser(uaString, { browser: ownBrowser }); // $ExpectType IResult

// alias
new UAParserAlias(uaString, { browser: ownBrowser }); // $ExpectType UAParserInstance
UAParserAlias(uaString, { browser: ownBrowser }); // $ExpectType IResult

// static fields
UAParser.VERSION; // $ExpectType string
UAParser.BROWSER; // $ExpectType BROWSER
UAParser.CPU; // $ExpectType CPU
UAParser.DEVICE; // $ExpectType DEVICE
UAParser.ENGINE; // $ExpectType ENGINE
UAParser.OS; // $ExpectType OS

// test UAParser interface export
interface Foo extends UAParser {
    a: string;
}

const method: Foo["getBrowser"] = parser.getBrowser;

// test new API v2.0

parser.getCPU().is('ia32'); // $ExpectType boolean
parser.getCPU().toString(); // $ExpectType string
parser.getCPU().withClientHints(); // $ExpectType IData | PromiseLike<IData>
parser.getCPU().withFeatureCheck(); // $ExpectType IData

const extensions = {
    browser : ownBrowser
};
const headers = {
    'user-agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'sec-ch-ua-mobile' : '?1',
    'sec-ch-ua-model' : 'Galaxy S3 Marketing',
    'sec-ch-ua-platform' : 'Android'
};

UAParser(); // $ExpectType IResult
UAParser(uaString); // $ExpectType IResult
UAParser(extensions); // $ExpectType IResult
UAParser(headers); // $ExpectType IResult
UAParser(uaString, extensions); // $ExpectType IResult
UAParser(uaString, headers); // $ExpectType IResult
UAParser(extensions, headers); // $ExpectType IResult
UAParser(uaString, extensions, headers); // $ExpectType IResult
