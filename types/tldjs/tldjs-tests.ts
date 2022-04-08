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

tld.isValidHostname('google.com'); // returns `true`
tld.isValidHostname('.google.com'); // returns `false`
tld.isValidHostname('my.fake.domain'); // returns `true`
tld.isValidHostname('localhost'); // returns `false`
tld.isValidHostname('https://user:password@example.co.uk:8080/some/path?and&query#hash'); // returns `true`

tld.extractHostname('https://www.npmjs.com/package/tldjs') // returns 'www.npmjs.com'

tld.parse('https://spark-public.s3.amazonaws.com/dataanalysis/loansData.csv');
// { hostname: 'spark-public.s3.amazonaws.com',
//   isValid: true,
//   isIp: false,
//   tldExists: true,
//   publicSuffix: 's3.amazonaws.com',
//   domain: 'spark-public.s3.amazonaws.com',
//   subdomain: ''
// }

tld.parse('gopher://domain.unknown/');
// { hostname: 'domain.unknown',
//   isValid: true,
//   isIp: false,
//   tldExists: false,
//   publicSuffix: 'unknown',
//   domain: 'domain.unknown',
//   subdomain: ''
// }

tld.parse('https://192.168.0.0')
// { hostname: '192.168.0.0',
//   isValid: true,
//   isIp: true,
//   tldExists: false,
//   publicSuffix: null,
//   domain: null,
//   subdomain: null
// }

tld.getDomain('localhost');           // returns null
tld.getSubdomain('vhost.localhost');  // returns null

const tld2 = tld.fromUserSettings({ validHosts: ['localhost'] });

tld2.getDomain('localhost');           // returns 'localhost'
tld2.getSubdomain('vhost.localhost');  // returns 'vhost'
