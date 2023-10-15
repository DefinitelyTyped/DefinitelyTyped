import extractDomain = require("extract-domain");

const urls = [
    "https://www.npmjs.com/package/extract-domain",
    "http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument",
    "https://npmjs.com/package/extract-domain",
    "http://example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument",
    "http://www.so.many.sub.domains.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument",
    "http://user:password@example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument",
    "ftp://example.org/resource.txt",
    "http://www.npmjs.com",
    "http://www.npmjs.com?query=test",
    "http://www.npmjs.com#fragment",
    "this.is.my@email.com",
    "test@something.com",
];

// $ExpectType string
const domain = extractDomain(urls[0]);
// $ExpectType string[]
const domains = extractDomain(urls);
extractDomain(urls, {}); // $ExpectType string[]
extractDomain(urls, { tld: true }); // $ExpectType string[]
