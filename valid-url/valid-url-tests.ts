import validUrl = require('valid-url');

function testIsUri() {
    validUrl.isUri("http://github.com/");
}

function testIsHttpUri() {
    validUrl.isHttpUri("http://github.com/");
}

function testIsHttpsUri() {
    validUrl.isHttpsUri("https://github.com/");
}

function testIsWebUri() {
    validUrl.isWebUri("https://github.com/");
}

testIsUri();
testIsHttpUri();
testIsHttpsUri();
testIsWebUri();
