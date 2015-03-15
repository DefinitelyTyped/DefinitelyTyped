/// <reference path="ua-parser.d.ts" />
import UAParser = require("ua-parser");

function testParsingUA() {
    var userAgent = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36";
    var uaParser: UAParser = new UAParser(userAgent);
    console.log(uaParser.getResult());
}
