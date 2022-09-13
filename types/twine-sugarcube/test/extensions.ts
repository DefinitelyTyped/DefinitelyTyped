const ar1 = [1, 2, 3];
ar1.concatUnique([3, 4, 5], [6, 7, 8]);
ar1.concatUnique([3, 4, 5], ['a', 'b', 'c']);

let n: number = ar1.count(1);

declare const arNum: number[] | readonly number[];

n = arNum.count(1, 1);
// @ts-expect-error
n = arNum.count('a', 1);

declare function countPredicate(fruit: string, index: number, array: string[]): boolean;
declare const fruits: string[] | readonly string[];

fruits.countWith(countPredicate);
const fakeThis = {
    propA: "string"
};

fruits.countWith(function(value: string) {
    this.propA = "s";
    return value === "Oranges";
}, fakeThis);

ar1.delete(1, 2);
// @ts-expect-error
ar1.delete(1, 'a');

ar1.deleteAt(1, 2);
// @ts-expect-error
ar1.deleteAt('a', 2);

ar1.deleteWith((v: number, i: number, ar: number[]) => true);

// @ts-expect-error
n = arNum.first();
let nu: number | undefined = arNum.first();

let b: boolean = arNum.includesAll(1, 2, 3);
b = arNum.includesAll([1, 2, 3]);

b = arNum.includesAny(1, 2, 3);
b = arNum.includesAny([1, 2, 3]);

// @ts-expect-error
n = arNum.last();
nu = arNum.last();

// @ts-expect-error
n = ar1.pluck();
nu = ar1.pluck();

let ar2: typeof ar1 = ar1.pluckMany();
ar2 = ar1.pluckMany(2);

ar1.pushUnique(1, 2);

// @ts-expect-error
n = arNum.random();
nu = arNum.random();

ar2 = arNum.randomMany();
ar2 = arNum.randomMany(2);

ar2 = ar1.shuffle();

ar1.unshiftUnique(1, 2, 3);
// @ts-expect-error
ar1.unshiftUnique(1, 2, 'a');

JSON.reviveWrapper('new Character($ReviveData$)', {});

n = Math.clamp(23, 0, 20);
n = Math.clamp('23', 0, 20);

n = Math.trunc(1.23);

n = n.clamp(1, 20);

const s = "str1";

s.count('test');
s.count('test', 1);

let s2: string = s.first();
s2 = s.last();
s2 = s.toLocaleUpperFirst();
s2 = s.toUpperFirst();

s2 = String.format("{0}, {1}", 1, true);

RegExp.escape(s);

$(s).wiki(s);
$.wiki(s);

export {};
