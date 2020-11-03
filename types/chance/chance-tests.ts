import { Chance } from 'chance';

// Instantiation
const chance = new Chance();
const createYourOwn = new Chance(Math.random);

// Basic usage
let bool: boolean = chance.bool();
bool = chance.bool({likelihood: 30});

const birthday: Date = chance.birthday();
const birthdayStr: Date | string = chance.birthday({ string: true });

let guid = chance.guid();
guid = chance.guid({ version: 4 });
guid = chance.guid({ version: 5 });

const strArr: string[] = chance.n(chance.string, 42);
const strArr2: string[] = chance.n((a) => a.value, 42, { value: 'test' });

const uniqInts: number[] = chance.unique(chance.integer, 99);
const uniqInts2: number[] = chance.unique(a => chance.integer({ min: 0, max: 999 }) + a.value, 99, { value: 1000 });

interface currencyType { name: string; code: string; }

const currencyComparator = (arr: currencyType[], value: currencyType): boolean => arr.findIndex(x => x.code === value.code && x.name === value.name) > -1;
const uniqCurrencies: currencyType[] = chance.unique(chance.currency, 2, { comparator: currencyComparator });

const currencyPair = chance.currency_pair();
const firstCurrency = currencyPair[0];
const secondCurrency = currencyPair[1];

// Mixins can be used with on-the-fly type declaration
declare namespace Chance {
    interface Chance {
        time(): string;
        mixinWithArgs(argv1: number, argv2: string): string;
    }
}

chance.mixin({
    time() {
        const h = chance.hour({ twentyfour: true });
        const m = chance.minute();
        return `${h}:${m}`;
    },
    mixinWithArgs(argv1: number, argv2: string) {
        return `${argv1} - ${argv2}`;
    }
});

const chanceConstructedWithSeed100 = new Chance(100);
const chanceCalledWithSeed100 = Chance();
const chanceConstructedWithStringSeed = new Chance("test");

// Test new added typed functions

let letter = chance.letter();
letter = chance.letter({opt: 'abc'});

let cf = chance.cf();
cf = chance.cf({opt: 'abc'});

let cpf = chance.cpf();
cpf = chance.cpf({formatted: false});

let animal = chance.animal();
animal = chance.animal({opt: 'abc'});

let avatar = chance.avatar();
avatar = chance.avatar({opt: 'abc'});

let company = chance.company();
company = chance.company();

let profession = chance.profession();
profession = chance.profession({opt: 'abc'});

let timezone = chance.timezone();
timezone = chance.timezone();

let weekday = chance.weekday({opt: 'abc'});
weekday = chance.weekday({opt: 'abc'});

let euro = chance.euro();
euro = chance.euro({opt: 'abc'});

let coin = chance.coin();
coin = chance.coin();

// Make sure date works with min and max parameters
let date: string|Date = chance.date();

let min = new Date();
let max = new Date();
date = chance.date({min, max});

min = new Date();
min.setFullYear(new Date().getFullYear() - 15);
max = new Date();
max.setFullYear(new Date().getFullYear() + 15);
date = chance.date({min, max});
date = chance.date({min});
date = chance.date({max});

const language: string = chance.locale();
const region: string = chance.locale({region: true});

const languages: string[] = chance.locales();
const regions: string[] = chance.locales({region: true});

let word: string = chance.word();
word = chance.word({});
word = chance.word({syllables: 10, capitalize: true});
word = chance.word({length: 10, capitalize: true});
word = chance.word({syllables: 10});
word = chance.word({length: 10});
word = chance.word({capitalize: true});

let randomString: string = chance.string();
randomString = chance.string({});
randomString = chance.string({ pool: 'abcdef' });
randomString = chance.string({ length: 10 });
randomString = chance.string({ casing: 'upper' });
randomString = chance.string({ alpha: true });
randomString = chance.string({ numeric: true });
randomString = chance.string({ symbols: true });
randomString = chance.string({
    pool: 'abcdef',
    length: 10,
    casing: 'lower',
    alpha: true,
    numeric: true,
    symbols: true,
});

let char: string = chance.character();
char = chance.character({});
char = chance.character({ pool: 'abcdef' });
char = chance.character({ casing: 'upper' });
char = chance.character({ alpha: true });
char = chance.character({ numeric: true });
char = chance.character({ symbols: true });
char = chance.character({ pool: 'abcdef', casing: 'lower', alpha: true, numeric: true, symbols: true });

chance.falsy(); // $ExpectType FalsyType
chance.falsy({ pool: [NaN, undefined] }); // $ExpectType FalsyType

chance.template('{AA###}-{##}'); // $ExpectType string

let url: string = chance.url();
url = chance.url({});
url = chance.url({protocol: 'http'});
url = chance.url({domain: 'www.socialradar.com'});
url = chance.url({domain_prefix: 'dev'});
url = chance.url({path: 'images'});
url = chance.url({extensions: ['gif', 'jpg', 'png']});
url = chance.url({protocol: 'http', domain: 'www.socialradar.com', domain_prefix: 'dev', path: 'images', extensions: ['gif', 'jpg', 'png']});

let integer: number = chance.integer();
integer = chance.integer({});
integer = chance.integer({min: 1});
integer = chance.integer({max: 10});
integer = chance.integer({min: 1, max: 10});

let first: string = chance.first();
first = chance.first({});
first = chance.first({gender: 'male'});
first = chance.first({nationality: 'en'});
first = chance.first({gender: 'male', nationality: 'en'});

let last: string = chance.last();
last = chance.last({nationality: 'en'});
last = chance.last({nationality: 'jp'});
last = chance.last({nationality: '*'});

let prefix: string = chance.prefix();
prefix = chance.prefix({});
prefix = chance.prefix({gender: 'male'});
prefix = chance.prefix({gender: 'female'});
prefix = chance.prefix({gender: 'all'});
prefix = chance.prefix({full: true});
prefix = chance.prefix({gender: 'male', full: true});

let suffix: string = chance.suffix();
suffix = chance.suffix({full: true});

let name: string  = chance.name();
name = chance.name({});
name = chance.name({middle: true});
name = chance.name({middle_initial: true});
name = chance.name({prefix: true});
name = chance.name({suffix: true});
name = chance.name({nationality: 'it'});
name = chance.name({gender: 'male'});
name = chance.name({full: true});
name = chance.name({middle: true, middle_initial: true, prefix: true, suffix: true, nationality: 'en', gender: 'male', full: true});

let email: string = chance.email();
email = chance.email({});
email = chance.email({domain: 'chance.com'});
email = chance.email({length: 10});
email = chance.email({domain: 'chance.com', length: 10});

let sentence: string = chance.sentence();
sentence = chance.sentence({});
sentence = chance.sentence({words: 10});
sentence = chance.sentence({punctuation: false});
sentence = chance.sentence({punctuation: '.'});
sentence = chance.sentence({punctuation: '?'});
sentence = chance.sentence({punctuation: ';'});
sentence = chance.sentence({punctuation: '!'});
sentence = chance.sentence({punctuation: ':'});
sentence = chance.sentence({words: 10, punctuation: '?'});

const postcode: string = chance.postcode();
