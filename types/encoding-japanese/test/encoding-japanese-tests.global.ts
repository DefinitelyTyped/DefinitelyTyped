// just verify we can use exported namespace

const utf8String = "ã\u0081\u0093ã\u0082\u0093ã\u0081«ã\u0081¡ã\u0081¯";
const unicodeString = Encoding.convert(utf8String, {
    to: "UNICODE",
    from: "UTF8",
    type: "string",
});
// $ExpectType string
unicodeString; // こんにちは
