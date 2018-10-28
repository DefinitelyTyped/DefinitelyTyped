class TestObject {
    text: string;
    value: number;

    constructor (text: string, value: number) {
        this.text = text;
        this.value = value;
    }
}

class CookieOptions implements JQueryCookieOptions {
    expires: number;
    path: string;
    domain: string;
    secure: boolean;
}

$.cookie("the_cookie", "the_value");

console.log($.cookie("the_cookie"));

var testObject = new TestObject("Hello World", 5);

var cookieOptions = new CookieOptions();
cookieOptions.path = "/";
cookieOptions.domain = "jquery.com";

$.cookie.json = true;

$.cookie("test", testObject, cookieOptions);

var result = <TestObject>$.cookie("test");

console.log(result.text);

$.cookie.defaults = cookieOptions;
