import * as url from "@wordpress/url";

url.addQueryArgs("https://google.com", { q: "test" }); // https://google.com/?q=test
url.addQueryArgs(undefined, {
    foo: "foo",
    bar: 24,
    baz: { foo: "foo" },
    quux: [1, 2, 3]
});

url.filterURLForDisplay("https://www.wordpress.org/gutenberg/"); // wordpress.org/gutenberg

url.getAuthority("https://wordpress.org/help/"); // 'wordpress.org'
url.getAuthority("https://localhost:8080/test/"); // 'localhost:8080'

url.getFragment("http://localhost:8080/this/is/a/test?query=true#fragment"); // '#fragment'
url.getFragment("https://wordpress.org#another-fragment?query=true"); // '#another-fragment'

url.getPath("http://localhost:8080/this/is/a/test?query=true"); // 'this/is/a/test'
url.getPath("https://wordpress.org/help/faq/"); // 'help/faq'

url.getProtocol("tel:012345678"); // 'tel:'
url.getProtocol("https://wordpress.org"); // 'https:'

url.getQueryArg("https://wordpress.org?foo=bar&bar=baz", "foo"); // bar

url.getQueryString("http://localhost:8080/this/is/a/test?query=true#fragment"); // 'query=true'
url.getQueryString("https://wordpress.org#fragment?query=false&search=hello"); // 'query=false&search=hello'

url.hasQueryArg("https://wordpress.org?foo=bar&bar=baz", "bar"); // true

url.isURL("https://wordpress.org"); // true

url.isValidAuthority("wordpress.org"); // true
url.isValidAuthority("wordpress#org"); // false

url.isValidFragment("#valid-fragment"); // true
url.isValidFragment("#invalid-#fragment"); // false

url.isValidPath("test/path/"); // true
url.isValidPath("/invalid?test/path/"); // false

url.isValidProtocol("https:"); // true
url.isValidProtocol("https :"); // false

url.isValidQueryString("query=true&another=false"); // true
url.isValidQueryString("query=true?another=false"); // false

url.prependHTTP("wordpress.org"); // http://wordpress.org

url.removeQueryArgs(
    "https://wordpress.org?foo=bar&bar=baz&baz=foobar",
    "foo",
    "bar"
); // https://wordpress.org?baz=foobar

url.safeDecodeURI("%z"); // does not throw an Error, simply returns '%z'
