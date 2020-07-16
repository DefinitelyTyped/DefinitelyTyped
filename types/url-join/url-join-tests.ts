import urljoin = require('url-join');

urljoin('http://www.google.com', 'a', '/b/cd', '?foo=123'); // $ExpectType string
urljoin(['http://www.google.com', 'a', '/b/cd', '?foo=123']); // $ExpectType string
