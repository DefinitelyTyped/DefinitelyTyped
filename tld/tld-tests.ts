/// <reference path="tld.d.ts" />

tldjs.tldExists('google.com'); // returns `true`
tldjs.getDomain('google.com'); // returns `google.com`
tldjs.getSubdomain('google.com'); // returns ``
tldjs.getPublicSuffix('google.com'); // returns `com`
tldjs.isValid('google.com'); // returns `true`