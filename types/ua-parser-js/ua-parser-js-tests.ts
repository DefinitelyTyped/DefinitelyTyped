import { UAParser } from 'ua-parser-js';

function test_parser() {
    var ua = 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6';
    var parser = new UAParser(ua);
    var result = parser.getResult();

    parser.getUA()
    parser.setUA("foo")

    result.ua

    // browser
    result.browser.name
    result.browser.version
    parser.getBrowser().name
    parser.getBrowser().version

    // device
    result.device.model
    result.device.type
    result.device.vendor

    parser.getDevice().model
    parser.getDevice().type
    parser.getDevice().vendor

    // Engine
    result.engine.name
    result.engine.version
    parser.getEngine().name
    parser.getEngine().version

    // OS
    result.os.name
    result.os.version
    parser.getOS().name
    parser.getOS().version

    // CPU
    result.cpu.architecture
    parser.getCPU().architecture

    // Extensions
    var uaString = 'ownbrowser/1.3';
    var ownBrowser = [[/(ownbrowser)\/([\w\.]+)/i], [UAParser.BROWSER.NAME, UAParser.BROWSER.VERSION]];
    var parser = new UAParser(uaString, { browser: ownBrowser });

}
