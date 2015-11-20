/// <reference path="tld.d.ts" />

tld.tldExists('google.com'); // returns `true`
tld.getDomain('google.com'); // returns `google.com`
tld.getSubdomain('google.com'); // returns ``
tld.getPublicSuffix('google.com'); // returns `com`
tld.isValid('google.com'); // returns `true`