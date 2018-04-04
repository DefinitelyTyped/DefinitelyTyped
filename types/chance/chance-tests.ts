import { Chance } from 'chance';
// Instantiation
const chance = new Chance();
const createYourOwn = new Chance(Math.random);

// Basic usage
const randBool: boolean = chance.bool();

const birthday: Date = chance.birthday();
const birthdayStr: Date | string = chance.birthday({ string: true });

let guid = chance.guid();
guid = chance.guid({ version: 4 });
guid = chance.guid({ version: 5 });

const strArr: string[] = chance.n(chance.string, 42);

const uniqInts: number[] = chance.unique(chance.integer, 99);

const currencyPair = chance.currency_pair();
const firstCurrency = currencyPair[0];
const secondCurrency = currencyPair[1];

// Mixins can be used with on-the-fly type declaration
declare namespace Chance {
    interface Chance {
        time(): string;
    }
}

chance.mixin({
    time() {
        const h = chance.hour({ twentyfour: true });
        const m = chance.minute();
        return `${h}:${m}`;
    },
});

const chanceConstructedWithSeed100 = new Chance(100);
const chanceCalledWithSeed100 = Chance();
const chanceConstructedWithStringSeed = new Chance("test");

// Test new added typed functions

let letter = chance.letter();
letter = chance.letter({opt: 'abc'});

let cf = chance.cf();
cf = chance.cf({opt: 'abc'});

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
