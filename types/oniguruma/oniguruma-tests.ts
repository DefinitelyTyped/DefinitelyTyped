import {
  OnigRegExp,
  OnigScanner,
  OnigString,
  CaptureIndex,
  Match
} from 'oniguruma';

// Test OnigRegExp
let aString: string;
let aBoolean: boolean;
const usPhoneNumber = new OnigRegExp(
  '(?:\\+?1[- ]?)?(?:\\([0-9]{3}\\)|[0-9]{3})[- ]?[0-9]{3}[- ]?[0-9]{4}'
);
const phoneBook = '(318) 555-1204, 18004389216, donotreply@blep.gov';
aString = usPhoneNumber.source;
let result: CaptureIndex[] | null;
result = usPhoneNumber.searchSync(phoneBook, 0);
result = usPhoneNumber.searchSync(phoneBook);
aBoolean = usPhoneNumber.testSync(phoneBook);

const searchCallback = (err: Error, match: CaptureIndex[] | null) => {
  if (match !== null) {
    console.log(match.length);
  } else if (err) {
    throw err;
  }
};
usPhoneNumber.search(phoneBook, searchCallback);
usPhoneNumber.search(phoneBook, 8, searchCallback);

const testCallback = (err: Error, match: boolean) => {
  if (match) {
    console.log('It matched! :D');
  }
};
usPhoneNumber.test(phoneBook, testCallback);

const foo = usPhoneNumber.captureIndicesForMatch(phoneBook, {
  index: 0,
  captureIndices: [
    { index: 0, start: 0, end: 15, length: 15 }
  ]
});
for (const index of foo) {
  let bar: string;
  bar = index.match;
  console.log(bar);
}

// Test OnigScanner
let aMatch: Match;
let scanner: OnigScanner;
scanner = usPhoneNumber.scanner;
scanner = new OnigScanner(['abc', 'def']);
scanner.findNextMatch('dcfedeabcedfdef', (err: Error, match: Match | null) => {
  if (match !== null) {
    aMatch = match;
  }
});
scanner.findNextMatch('dcfedeabcedfdef', 8, (err: Error, match: Match | null) => {
  if (match !== null) {
    aMatch = match;
  }
});
let rv = scanner.findNextMatchSync('dcfedeabcedfdef');
if (rv !== null) {
  aMatch = rv;
}
rv = scanner.findNextMatchSync('dcfedeabcedfdef', 8);
if (rv !== null) {
  aMatch = rv;
}

// Test OnigString
const blep = new OnigString('bar');
let blepLength: number;
blepLength = blep.length;
let blepContent: string;
blepContent = blep.content;
let blepToString: string;
blepToString = blep.toString();
let blepSubstring: string;
blepSubstring = blep.substring(0, 2);
