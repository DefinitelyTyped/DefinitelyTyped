

var encoded1: string = OAuth.percentEncode("abcあいう");
var encoded2: string = OAuth.percentEncode(["abc", "あいう"]);
var decoded1: string = OAuth.decodePercent("abc%E3%81%82%E3%81%84%E3%81%86");

var list: OAuth.ParameterList;
list = OAuth.getParameterList([["name1", "value1"], ["name2", "value2"]]);
list = OAuth.getParameterList({ name1: "value1", name2: "value2" });
list = OAuth.getParameterList("name1=value1&name2=value2");

var map: OAuth.ParameterMap;
map = OAuth.getParameterMap([["name1", "value1"], ["name2", "value2"]]);
map = OAuth.getParameterMap({ name1: "value1", name2: "value2" });
map = OAuth.getParameterMap("name1=value1&name2=value2");

var param: string;
param = OAuth.getParameter([["name1", "value1"], ["name2", "value2"]], "name1");
param = OAuth.getParameter({ name1: "value1", name2: "value2" }, "name1");
param = OAuth.getParameter("name1=value1&name2=value2", "name1");

var formEncoded1: string = OAuth.formEncode([["name1", "value1"], ["name2", "value2"]]);
var formEncoded2: string = OAuth.formEncode({ name1: "value1", name2: "value2" });

var formDecoded1: OAuth.ParameterList = OAuth.decodeForm("name1=value1&name2=value2");

var message1: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: [] };
OAuth.setParameter(message1, "name1", "value1");
var message2: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: {} };
OAuth.setParameter(message2, "name1", "value1");

var message3: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: [] };
OAuth.setParameters(message3, [["name1", "value1"], ["name2", "value2"]]);
OAuth.setParameters(message3, { name3: "value3", name4: "value4" });
OAuth.setParameters(message3, "name5=value5&name6=value6");
var message4: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: {} };
OAuth.setParameters(message4, [["name1", "value1"], ["name2", "value2"]]);
OAuth.setParameters(message4, { name3: "value3", name4: "value4" });
OAuth.setParameters(message4, "name5=value5&name6=value6");

var accessor: OAuth.Accessor = { consumerKey: "ck", consumerSecret: "cs", token: "t", tokenSecret: "ts" };
var message5: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: [["name1", "value1"]] };
OAuth.completeRequest(message5, accessor);
var message6: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: { name1: "value1" } };
OAuth.completeRequest(message6, accessor);

var message7: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: [["name1", "value1"]] };
OAuth.setTimestampAndNonce(message7);
var message8: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: { name1: "value1" } };
OAuth.setTimestampAndNonce(message8);

var url1: string = OAuth.addToURL("http://example.org/", [["name1", "value1"]]);
var url2: string = OAuth.addToURL("http://example.org/?name1=value1", [["name1", "value1"]]);
var url3: string = OAuth.addToURL("http://example.org/", { name1: "value1" });
var url4: string = OAuth.addToURL("http://example.org/?name1=value1", { name1: "value1" });

var authorizationHeader1: string = OAuth.getAuthorizationHeader("realm", [["name1", "value1"], ["oauth_param1", "oauth_value1"]]);
var authorizationHeader2: string = OAuth.getAuthorizationHeader("realm", { name1: "value1", oauth_param1: "oauth_value1" });
var authorizationHeader3: string = OAuth.getAuthorizationHeader("realm", "name1=value1&oauth_param1=oauth_value1");

OAuth.correctTimestampFromSrc();
OAuth.correctTimestampFromSrc("timestamp_param_name");

OAuth.correctTimestamp((new Date()).getTime() / 1000);

var timeCorrectionMsec: number = OAuth.timeCorrectionMsec;

var timestamp: number = OAuth.timestamp();

var nonce: string = OAuth.nonce(16);


var message9: OAuth.Message = { method: "GET", action: "http://example.org/1", parameters: [] };
var baseString: string = OAuth.SignatureMethod.getBaseString(message9);

var normalizedUrl: string = OAuth.SignatureMethod.normalizeUrl("http://example.org:80/2");

var uri: OAuth.Uri = OAuth.SignatureMethod.parseUri("http://example.org:80/3?name1=value1&name2=value2");

var normalizedParameters1: string = OAuth.SignatureMethod.normalizeParameters([["name1", "value1"], ["name2", "value2"]]);
var normalizedParameters2: string = OAuth.SignatureMethod.normalizeParameters({ name1: "value1", name2: "value2" });

var message10: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: [["name1", "value1"]] };
OAuth.SignatureMethod.sign(message9, accessor);

var signatureMethodConstructor: { new (): OAuth.SignatureMethod; } =
        OAuth.SignatureMethod.makeSubclass(function getSignature(baseString) { return this.key });
OAuth.SignatureMethod.registerMethodClass(["PLAINTEXT"], signatureMethodConstructor);

var signatureMethod1: OAuth.SignatureMethod = OAuth.SignatureMethod.newMethod("PLAINTEXT", accessor);
var message11: OAuth.Message = { action: "http://example.org/", method: "GET", parameters: [["name1", "value1"]] };
var signature: string = signatureMethod1.sign(message11);
var signatureMethod2: OAuth.SignatureMethod = new signatureMethodConstructor();
signatureMethod2.initialize("PLAINTEXT", accessor);

