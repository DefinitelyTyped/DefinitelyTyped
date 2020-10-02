import * as Linkify from 'linkifyjs';

Linkify.find(); // $ExpectError
Linkify.find(1); // $ExpectError
Linkify.find('my string', 1); // $ExpectError
Linkify.find('my string'); // $ExpectType FindResultHash[]
Linkify.find('my string', 'email'); // $ExpectType FindResultHash[]
Linkify.find('my string', 'hashtag'); // $ExpectType FindResultHash[]
Linkify.find('my string', 'my type'); // $ExpectError

Linkify.test(); // $ExpectError
Linkify.test(1); // $ExpectError
Linkify.test('my string', 1); // $ExpectError
Linkify.test('my string'); // $ExpectType boolean
Linkify.test('my string', 'email'); // $ExpectType boolean
Linkify.test('my string', 'hashtag'); // $ExpectType boolean
Linkify.test('my string', 'my type'); // $ExpectError

Linkify.tokenize(); // $ExpectError
Linkify.tokenize(1); // $ExpectError
Linkify.tokenize('my string'); // $ExpectType { v: { v: string; }[]; }[]

let options: Linkify.Options;

options = {}; // $ExpectType {}
options = { attributes: null }; // $ExpectType { attributes: null; }
options = { attributes: 'hello-world' }; // $ExpectError
options = { attributes: { attr: 'hello-world' } }; // $ExpectType { attributes: { attr: string; }; }
options = { attributes: href => ({}) }; // $ExpectType { attributes: (href: string) => {}; }

options = { className: null }; // $ExpectError
options = { className: 'new-link--url' }; // $ExpectType { className: string; }
options = { className: (href, type) => `new-link-${type}` }; // $ExpectType { className: (href: string, type: LinkEntityType) => string; }
options = { className: { sunshine: v => v } }; // $ExpectError
options = { className: { email: () => 'new-link--email' } }; // $ExpectType { className: { email: () => string; }; }

options = { defaultProtocol: null }; // $ExpectError
options = { defaultProtocol: 1 }; // $ExpectError
options = { defaultProtocol: 'http' }; // $ExpectType { defaultProtocol: string; }
options = { defaultProtocol: 'ftp' }; // $ExpectType { defaultProtocol: string; }

options = { format: null }; // $ExpectType { format: null; }
options = { format: value => value }; // $ExpectType { format: (value: string) => string; }
options = { format: { sunshine: v => v } }; // $ExpectError
options = { format: { email: () => 'sunshine' } }; // $ExpectType { format: { email: () => string; }; }

options = { formatHref: null }; // $ExpectType { formatHref: null; }
options = { formatHref: href => href }; // $ExpectType { formatHref: (href: string) => string; }
options = { formatHref: { sunshine: v => v } }; // $ExpectError
options = { formatHref: { email: () => 'sunshine' } }; // $ExpectType { formatHref: { email: () => string; }; }

options = { nl2br: 1 }; // $ExpectError
options = { nl2br: true }; // $ExpectType { nl2br: true; }

options = { tagName: null }; // $ExpectError
options = { tagName: 'span' }; // $ExpectType { tagName: string; }

options = { target: null }; // $ExpectError
options = { target: '_parent' }; // $ExpectType { target: string; }

options = { validate: null }; // $ExpectType { validate: null; }
