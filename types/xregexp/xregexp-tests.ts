import XRegExp = require('xregexp');

// ======================================================
// constructor
// ======================================================
let regex1: RegExp = /a/gi;
regex1 = XRegExp('/a/');
regex1 = XRegExp('/a/', 'gi');
regex1 = XRegExp(/a/gi);
regex1 = XRegExp(regex1, undefined);

// ======================================================
// XRegExp namespace
// ======================================================

//#region types

// TokenScope
let ts1: XRegExp.TokenScopeOption = 'default';
ts1 = 'class';
ts1 = 'all';

// MatchScope
let ms: XRegExp.MatchScope = 'one';
ms = 'all';

// TokenFlag
let tf: XRegExp.TokenFlag = 'A';
tf = 'a';
tf = '0';
tf = '_';
tf = '$';

// Feature
let fo: XRegExp.FeatureOptions = 'astral';
fo = 'namespacing';
fo = 'astral namespacing';
fo = 'namespacing astral';
fo = {};
fo = { astral: true };
fo = { namespacing: true };
fo = { astral: true, namespacing: true };

// Pattern
let pat: XRegExp.Pattern = '/a/';
pat = /a/gi;

// NamedGroups
let ng: XRegExp.NamedGroupsArray = {};

// MatchChainArray
const mca: XRegExp.MatchChainArray = [];
mca[0] = /a/gi;

// ReplacementValue
let rv: XRegExp.ReplacementValue = (s, args) => 'a';
rv = 'a';

// UnicodeCharacterRange
let ucr: XRegExp.UnicodeCharacterRange = { name: 'a', astral: 'a-z' };
ucr = { name: 'b', bmp: 'a-z' };
ucr = { name: 'b', inverseOf: 'a-z' };

//#endregion

//#region interfaces

// TokenOptions
const to: XRegExp.TokenOptions = {};
to.scope = ts1;
to.flag = tf;
to.optionalFlags = 'gi';
to.reparse = false;
to.leadChar = '_';

// NamedGroupsArray
ng = { name: 'string1', val: 'string2' };
const ng_str1: string = ng['name'] + ng['val'];

// MatchArray
class XRegExpMatchArrayImpl extends Array<string> implements XRegExp.MatchArray {
    constructor(...items: Array<string>) {
        super(...items);
        Object.setPrototypeOf(this, Object.create(XRegExpMatchArrayImpl.prototype));
    }
    groups?: XRegExp.NamedGroupsArray;
    input?: string;
    index?: number;
}
let ma: XRegExp.MatchArray = new XRegExpMatchArrayImpl('asdf', 'qwerty');
ma.index = 0;
ma.input = 'a';
ma.groups = ng;
ma['namedMatch'] = 'b';
const ma_str1: string | undefined = ma['namedMatch'] as string;

// ExecArray
class XRegExpExecArrayImpl extends Array<string> implements XRegExp.ExecArray {
    constructor(...items: Array<string>) {
        super(...items);
        Object.setPrototypeOf(this, Object.create(XRegExpExecArrayImpl.prototype));
    }
    groups?: XRegExp.NamedGroupsArray;
    input = '';
    index = 0;
}
const ea: XRegExp.ExecArray = new XRegExpExecArrayImpl('asdf', 'qwerty');
ea.groups = ng;
ma.index = 0;
ma.input = 'a';
ea['namedMatch'] = 'b';
const ea_str1: string | undefined = ea['namedMatch'] as string;

// ChainArrayElement
mca[1] = { regexp: /a/gi, backref: 1 };
mca[2] = { regexp: /a/gi, backref: 'asdf' };

// MatchSubString
class XRegExpMatchSubstringImpl extends String implements XRegExp.MatchSubString {
    constructor(value?: any) {
        super(value);
        Object.setPrototypeOf(this, Object.create(XRegExpMatchSubstringImpl.prototype));
    }
    groups?: XRegExp.NamedGroupsArray;
}
const mss: XRegExp.MatchSubString = new XRegExpMatchSubstringImpl('asdf');
mss.groups = ng;
mss['namedMatch'] = 'b';
const mss_str1: string | undefined = mss['namedMatch'] as string;

// ReplacementDetail
let rd: XRegExp.ReplacementDetail = [/a/gi, rv];
rd = [/a/gi, rv, null];
rd = [/a/gi, rv, ms];
rd = [/a/gi, rv, ms, 'undefined indexes will be ignored'];

// UnionOptions
const uo: XRegExp.UnionOptions = {};
uo.conjunction = null;
uo.conjunction = 'or';
uo.conjunction = 'none';

// MatchRecursiveOptions
const mro: XRegExp.MatchRecursiveOptions = {};
mro.escapeChar = null;
mro.escapeChar = '\\';
mro.valueNames = null;

// MatchRecursiveValueNames
const mrvn: XRegExp.MatchRecursiveValueNames = [null, null, null, null, 'undefined indexes will be ignored'];
mrvn[0] = 'pre';
mrvn[1] = 'left';
mrvn[2] = 'inside';
mrvn[3] = 'right';
mro.valueNames = mrvn;

// MatchRecursiveValueNameMatch
const mrvnm: XRegExp.MatchRecursiveValueNameMatch = { name: 'a', value: 'a', start: 0, end: 1 };

// UnicodeCharacterRangeBase
ucr.alias = 'asdf';
ucr.isBmpLast = true;

//#endregion

//#region constants

const version: string =  XRegExp.version;

//#endregion

//#region methods

// addToken
XRegExp.addToken(/a/gi, (m, s, f) => 'a');
XRegExp.addToken(/b/gi, (m, s, f) => 'b', to);

// addUnicodeData
XRegExp.addUnicodeData([ ucr ]);

// build
regex1 = XRegExp.build('(?x)^ {{v1}}:{{v2}} $', { v1: /a/gi, v2: regex1 });
regex1 = XRegExp.build('(?x)^ {{v1}}:{{v2}} $', { v1: /a/gi, v2: '/a/' }, 'gi');

// cache
regex1 = XRegExp.cache('/a/', 'gi');

// escape
const escape_str: string = XRegExp.escape('?<.abcde> asdf');

// exec
let ean: XRegExp.ExecArray | null = XRegExp.exec('abcdefghijklm', /a/gi);
ean = XRegExp.exec('abcdefghijklm', /a/gi, 0);
ean = XRegExp.exec('abcdefghijklm', /a/gi, 0, true);
ean = XRegExp.exec('abcdefghijklm', /a/gi, 0, 'sticky');

// forEach
XRegExp.forEach('ab_ab_ab', /ab/gi, (m, i, s, r) => { /* do action */ });

// globalize
regex1 = XRegExp.globalize(/a/gi);

// install
XRegExp.install('astral');
XRegExp.install('astral namespacing');
XRegExp.install('namespacing');
XRegExp.install('namespacing astral');
XRegExp.install({});
XRegExp.install({ astral: true });
XRegExp.install({ namespacing: true });
XRegExp.install({ astral: true, namespacing: true });

// isInstalled
let ii_bool = XRegExp.isInstalled('astral');
ii_bool = XRegExp.isInstalled('namespacing');

// isRegExp
let ire_bool: boolean = XRegExp.isRegExp(/a/gi);
ire_bool = XRegExp.isRegExp(null);
ire_bool = XRegExp.isRegExp(undefined);
ire_bool = XRegExp.isRegExp('a');
ire_bool = XRegExp.isRegExp(0);
ire_bool = XRegExp.isRegExp([]);
ire_bool = XRegExp.isRegExp({});

// match
const m_str: string|null = XRegExp.match('asdf', /a/gi, 'one');
const m_strarr: Array<string> = XRegExp.match('asdf', /a/gi, 'all');
const m_any: string|null|Array<string> = XRegExp.match('asdf', /a/gi);

// matchChain
ma = XRegExp.matchChain('asdf', mca);

// matchRecursive
let mr1: Array<string>
    = XRegExp.matchRecursive('asdf', 'a', 'f');
mr1 = XRegExp.matchRecursive('asdf', 'a', 'f', 'gi');
let mr2: Array<XRegExp.MatchRecursiveValueNameMatch>
    = XRegExp.matchRecursive('asdf', 'a', 'f', null, { valueNames: [ 'a', 'b', 'c', 'd' ] });
mr2 = XRegExp.matchRecursive('asdf', 'a', 'f', 'gi', { valueNames: [ 'a', 'b', 'c', 'd' ] });

// replace
let r_str: string = XRegExp.replace('asdf', '/a/', 'b');
r_str = XRegExp.replace('asdf', /a/gi, (s, args) => 'a', 'all');
r_str = XRegExp.replace('asdf', /a/gi, (s, args) => 'a', 'one');

// replaceEach
const re_str: string = XRegExp.replaceEach('asdf', [ rd ]);

// split
let s_strarr: Array<string> = XRegExp.split('asdf', '/a/');
s_strarr = XRegExp.split('asdf', /a/gi, 2);

// tag
let tag_re: RegExp = /a/g;
tag_re = XRegExp.tag('i')`(asdf|${tag_re}|qwerty)`;

// test
let t_bool: boolean = XRegExp.test('asdf', '/a/');
t_bool = XRegExp.test('asdf', /a/gi, 3);
t_bool = XRegExp.test('asdf', '/a/', undefined, true);
t_bool = XRegExp.test('asdf', /a/gi, 1, 'sticky');

// uninstall
XRegExp.uninstall('astral');
XRegExp.uninstall('astral namespacing');
XRegExp.uninstall('namespacing');
XRegExp.uninstall('namespacing astral');
XRegExp.uninstall({});
XRegExp.uninstall({ astral: true });
XRegExp.uninstall({ namespacing: true });
XRegExp.uninstall({ astral: true, namespacing: true });

// union
let u_re: RegExp = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ]);
u_re = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ], null);
u_re = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ], 'gi');
u_re = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ], 'gi', { });
u_re = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ], 'gi', { conjunction: null });
u_re = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ], 'gi', { conjunction: 'or' });
u_re = XRegExp.union([ '/a/', /b/gi, XRegExp(/a/gi) ], 'gi', { conjunction: 'none' });

//#endregion
