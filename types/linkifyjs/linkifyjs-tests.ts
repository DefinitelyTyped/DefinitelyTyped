import * as Linkify from 'linkifyjs';

// @ts-expect-error
Linkify.find();
// @ts-expect-error
Linkify.find(1);
// @ts-expect-error
Linkify.find('my string', 1);
Linkify.find('my string'); // $ExpectType FindResultHash[]
Linkify.find('my string', 'email'); // $ExpectType FindResultHash[]
Linkify.find('my string', 'hashtag'); // $ExpectType FindResultHash[]
// @ts-expect-error
Linkify.find('my string', 'my type');

// @ts-expect-error
Linkify.test();
// @ts-expect-error
Linkify.test(1);
// @ts-expect-error
Linkify.test('my string', 1);
Linkify.test('my string'); // $ExpectType boolean
Linkify.test('my string', 'email'); // $ExpectType boolean
Linkify.test('my string', 'hashtag'); // $ExpectType boolean
// @ts-expect-error
Linkify.test('my string', 'my type');

// @ts-expect-error
Linkify.tokenize();
// @ts-expect-error
Linkify.tokenize(1);
Linkify.tokenize('my string'); // $ExpectType { v: { v: string; }[]; }[]

let options: Linkify.Options;

options = {}; // $ExpectType {}
options = { attributes: null }; // $ExpectType { attributes: null; }
// @ts-expect-error
options = { attributes: 'hello-world' };
options = { attributes: { attr: 'hello-world' } }; // $ExpectType { attributes: { attr: string; }; }
options = { attributes: href => ({}) }; // $ExpectType { attributes: (href: string) => {}; }

// @ts-expect-error
options = { className: null };
options = { className: 'new-link--url' }; // $ExpectType { className: string; }
// tslint:disable-next-line:no-unnecessary-type-assertion
options = { className: (href, type) => (`new-link-${type}` as string) }; // $ExpectType { className: (href: string, type: LinkEntityType) => string; }
// @ts-expect-error
options = { className: { sunshine: v => v } };
options = { className: { email: () => 'new-link--email' } }; // $ExpectType { className: { email: () => string; }; }

// @ts-expect-error
options = { defaultProtocol: null };
// @ts-expect-error
options = { defaultProtocol: 1 };
options = { defaultProtocol: 'http' }; // $ExpectType { defaultProtocol: string; }
options = { defaultProtocol: 'ftp' }; // $ExpectType { defaultProtocol: string; }

options = { format: null }; // $ExpectType { format: null; }
options = { format: value => value }; // $ExpectType { format: (value: string) => string; }
// @ts-expect-error
options = { format: { sunshine: v => v } };
options = { format: { email: () => 'sunshine' } }; // $ExpectType { format: { email: () => string; }; }

options = { formatHref: null }; // $ExpectType { formatHref: null; }
options = { formatHref: href => href }; // $ExpectType { formatHref: (href: string) => string; }
// @ts-expect-error
options = { formatHref: { sunshine: v => v } };
options = { formatHref: { email: () => 'sunshine' } }; // $ExpectType { formatHref: { email: () => string; }; }

// @ts-expect-error
options = { nl2br: 1 };
options = { nl2br: true }; // $ExpectType { nl2br: true; }

// @ts-expect-error
options = { tagName: null };
options = { tagName: 'span' }; // $ExpectType { tagName: string; }

// @ts-expect-error
options = { target: null };
options = { target: '_parent' }; // $ExpectType { target: string; }

options = { validate: null }; // $ExpectType { validate: null; }
