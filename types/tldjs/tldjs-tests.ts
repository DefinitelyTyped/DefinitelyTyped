import * as tld from 'tldjs';

tld.tldExists('google.com'); // returns `true`
tld.tldExists('google.local'); // returns `false` (not an explicit registered TLD)
tld.tldExists('com'); // returns `true`
tld.tldExists('uk'); // returns `true`
tld.tldExists('co.uk'); // returns `true` (because `uk` is a valid TLD)
tld.tldExists('amazon.fancy.uk'); // returns `true` (still because `uk` is a valid TLD)
tld.tldExists('amazon.co.uk'); // returns `true` (still because `uk` is a valid TLD)
tld.tldExists('https://user:password@example.co.uk:8080/some/path?and&query#hash'); // returns `true`

tld.getDomain('google.com'); // returns `google.com`
tld.getDomain('fr.google.com'); // returns `google.com`
tld.getDomain('fr.google.google'); // returns `google.google`
tld.getDomain('foo.google.co.uk'); // returns `google.co.uk`
tld.getDomain('t.co'); // returns `t.co`
tld.getDomain('fr.t.co'); // returns `t.co`
tld.getDomain('https://user:password@example.co.uk:8080/some/path?and&query#hash'); // returns `example.co.uk`

tld.getSubdomain('google.com'); // returns ``
tld.getSubdomain('fr.google.com'); // returns `fr`
tld.getSubdomain('google.co.uk'); // returns ``
tld.getSubdomain('foo.google.co.uk'); // returns `foo`
tld.getSubdomain('moar.foo.google.co.uk'); // returns `moar.foo`
tld.getSubdomain('t.co'); // returns ``
tld.getSubdomain('fr.t.co'); // returns `fr`
tld.getSubdomain('https://user:password@example.co.uk:8080/some/path?and&query#hash'); // returns ``

tld.getPublicSuffix('google.com'); // returns `com`
tld.getPublicSuffix('fr.google.com'); // returns `com`
tld.getPublicSuffix('google.co.uk'); // returns `co.uk`
tld.getPublicSuffix('s3.amazonaws.com'); // returns `s3.amazonaws.com`

tld.isValid('google.com'); // returns `true`
tld.isValid('.google.com'); // returns `false`
tld.isValid('my.fake.domain'); // returns `true`
tld.isValid('localhost'); // returns `false`
tld.isValid('https://user:password@example.co.uk:8080/some/path?and&query#hash'); // returns `true`

// You'll need to use this import syntax to set valid hosts
import tld2 = require('tldjs');

tld2.getDomain('localhost');           // returns null
tld2.getSubdomain('vhost.localhost');  // returns null

tld2.validHosts = ['localhost'];

tld2.getDomain('localhost');           // returns 'localhost'
tld2.getSubdomain('vhost.localhost');  // returns 'vhost'
