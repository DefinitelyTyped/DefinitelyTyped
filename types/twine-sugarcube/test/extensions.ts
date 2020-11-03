const ar1 = [1, 2, 3];
ar1.concatUnique([3, 4, 5], [6, 7, 8]);
ar1.concatUnique([3, 4, 5], ['a', 'b', 'c']);

let n: number = ar1.count(1);
n = ar1.count(1, 1);
// @ts-expect-error
n = ar1.count('a', 1);

ar1.delete(1, 2);
// @ts-expect-error
ar1.delete(1, 'a');

ar1.deleteAt(1, 2);
// @ts-expect-error
ar1.deleteAt('a', 2);

ar1.deleteWith((v: number, i: number, ar: number[]) => true);

// @ts-expect-error
n = ar1.first();
let nu: number | undefined = ar1.first();

let b: boolean = ar1.includesAll(1, 2, 3);
b = ar1.includesAll([1, 2, 3]);

b = ar1.includesAny(1, 2, 3);
b = ar1.includesAny([1, 2, 3]);

// @ts-expect-error
n = ar1.last();
nu = ar1.last();

// @ts-expect-error
n = ar1.pluck();
nu = ar1.pluck();

let ar2: typeof ar1 = ar1.pluckMany();
ar2 = ar1.pluckMany(2);

ar1.pushUnique(1, 2);

// @ts-expect-error
n = ar1.random();
nu = ar1.random();

ar2 = ar1.randomMany();
ar2 = ar1.randomMany(2);

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
