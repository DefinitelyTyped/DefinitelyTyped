import mm = require('minimatch');

// test type exports
type Opts = mm.IOptions;
type IMinimatchStatic = mm.IMinimatchStatic; // $ExpectType typeof Minimatch
type IMinimatch = mm.IMinimatch; // $ExpectType Minimatch
type Minimatch = mm.Minimatch;

declare const pattern: string;
declare const options: mm.IOptions;
declare const files: readonly string[];

mm.Minimatch.defaults(options); // $ExpectType typeof Minimatch

const mmInst = new mm.Minimatch('**/*.ts', { debug: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { nobrace: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { noglobstar: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { dot: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { noext: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { nocase: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { nonull: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { matchBase: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { nocomment: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { nonegate: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { flipNegate: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { partial: true }); // $ExpectType Minimatch
new mm.Minimatch('**/*.ts', { windowsPathsNoEscape: true }); // $ExpectType Minimatch

mmInst.pattern; // $ExpectType string
mmInst.options; // $ExpectType IOptions
mmInst.set; // $ExpectType (string | RegExp)[][]
const re: RegExp | false | null = mmInst.regexp;
// @ts-expect-error
const re1: RegExp = mmInst.regexp;
// @ts-expect-error
const re2: false = mmInst.regexp;
// @ts-expect-error
const re3: null = mmInst.regexp;
mmInst.negate; // $ExpectType boolean
mmInst.comment; // $ExpectType boolean
mmInst.empty; // $ExpectType boolean
mmInst.windowsPathsNoEscape; // $ExpectType boolean
mmInst.partial; // $ExpectType boolean

const res: RegExp | false = mmInst.makeRe();
// @ts-expect-error
const res1: RegExp = mmInst.makeRe();
// @ts-expect-error
const res2: false = mmInst.makeRe();
mmInst.match(pattern); // $ExpectType boolean
mmInst.match(pattern, true); // $ExpectType boolean
mmInst.matchOne([pattern], files, true); // $ExpectType boolean
mmInst.matchOne([pattern], [/a/], true); // $ExpectType boolean
mmInst.debug(); // $ExpectType void
mmInst.make(); // $ExpectType void
mmInst.parseNegate(); // $ExpectType void
mmInst.braceExpand(); // $ExpectType string[]
mmInst.parse(pattern, true);
const parseRes: string | false | [string, boolean] | RegExp | typeof mm.GLOBSTAR = mmInst.parse(pattern);
// @ts-expect-error
const parseRes1: string = mmInst.parse(pattern);
// @ts-expect-error
const parseRes2: false = mmInst.parse(pattern);
// @ts-expect-error
const parseRes3: [string, boolean] = mmInst.parse(pattern);
// @ts-expect-error
const parseRes4: RegExp = mmInst.parse(pattern);
// @ts-expect-error
const parseRes5: typeof mm.GLOBSTAR = mmInst.parse(pattern);

mm(pattern, pattern); // $ExpectType boolean
mm(pattern, pattern, options); // $ExpectType boolean

mm.match(files, pattern); // $ExpectType string[]
mm.match(files, pattern, options); // $ExpectType string[]

files.filter(mm.filter(pattern));
files.filter(mm.filter(pattern, options));

mm.sep; // $ExpectType string
mm.GLOBSTAR; // $ExpectType typeof GLOBSTAR
mm.defaults(options); // $ExpectType typeof minimatch
mm.braceExpand(pattern); // $ExpectType string[]
mm.braceExpand(pattern, options); // $ExpectType string[]
