// Instantiation
let globalInstance: Chance.Chance = chance;
let createYourOwn = new Chance(Math.random);

// Basic usage
let randBool: boolean = chance.bool();

let birthday: Date = chance.birthday();
let birthdayStr: Date | string = chance.birthday({ string: true });

let guid = chance.guid();
guid = chance.guid({ version: 4 });
guid = chance.guid({ version: 5 });

let strArr: string[] = chance.n(chance.string, 42);

let uniqInts: number[] = chance.unique(chance.integer, 99);

let currencyPair = chance.currency_pair();
let firstCurrency = currencyPair[0];
let secondCurrency = currencyPair[1];

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

let timeString: string = chance.time();

let chanceConstructedWithSeed100 = new Chance(100);
let chanceCalledWithSeed100 = Chance();
let chanceConstructedWithStringSeed = new Chance("test");
