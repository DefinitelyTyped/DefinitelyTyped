

import * as Combinatorics from "js-combinatorics";

const p:number = Combinatorics.P(1, 2);
const c:number = Combinatorics.C(1, 2);
const factorial:number = Combinatorics.factorial(5);
const factoradic:number[] = Combinatorics.factoradic(5);

const power = Combinatorics.power(["a", "b", "c"]);
const nextPower:string[] = power.next();
power.forEach((i:string[]) => console.log(i));
const powersLengths:number[] = power.map((i:string[]) => i.length);
const filteredPowers:string[][] = power.filter((i:string[]) => i.length > 0);
const allPowers:string[][] = power.toArray();
const powersCount = power.length;
const nthPower:string[] = power.nth(3);

const limitedCombination = Combinatorics.combination(["a", "b", "c"], 2);
const combination = Combinatorics.combination(["a", "b", "c"]);
const nextCombination:string[] = combination.next();
combination.forEach((i:string[]) => console.log(i));
const combinationsLengths:number[] = combination.map((i:string[]) => i.length);
const filteredCombinations:string[][] = combination.filter((i:string[]) => i.length > 0);
const allCombinations:string[][] = combination.toArray();
const combinationsCount = combination.length;

const limitedBigCombination = Combinatorics.bigCombination(["a", "b", "c"], 2);
const bigCombination = Combinatorics.bigCombination(["a", "b", "c"]);
const nextBigCombination:string[] = bigCombination.next();
bigCombination.forEach((i:string[]) => console.log(i));
const bigCombinationsLengths:number[] = bigCombination.map((i:string[]) => i.length);
const filteredBigCombinations:string[][] = bigCombination.filter((i:string[]) => i.length > 0);
const allBigCombinations:string[][] = bigCombination.toArray();
const bigCombinationsCount = bigCombination.length;

const limitedPermutation = Combinatorics.permutation(["a", "b", "c"], 2);
const permutation = Combinatorics.permutation(["a", "b", "c"]);
const nextPermutation:string[] = permutation.next();
permutation.forEach((i:string[]) => console.log(i));
const permutationsLengths:number[] = permutation.map((i:string[]) => i.length);
const filteredPermutations:string[][] = permutation.filter((i:string[]) => i.length > 0);
const allPermutations:string[][] = permutation.toArray();
const permutationsCount = permutation.length;

const permutationCombination = Combinatorics.permutationCombination(["a", "b", "c"]);
const nextPermutationCombinations:string[] = permutationCombination.next();
permutationCombination.forEach((i:string[]) => console.log(i));
const permutationCombinationsLengths:number[] = permutationCombination.map((i:string[]) => i.length);
const filteredPermutationCombinationss:string[][] = permutationCombination.filter((i:string[]) => i.length > 0);
const allPermutationCombinationss:string[][] = permutationCombination.toArray();
const permutationCombinationsCount = permutationCombination.length;

const limitedBaseN = Combinatorics.baseN(["a", "b", "c"], 2);
const baseN = Combinatorics.baseN(["a", "b", "c"]);
const nextbaseN:string[] = baseN.next();
baseN.forEach((i:string[]) => console.log(i));
const baseNsLengths:number[] = baseN.map((i:string[]) => i.length);
const filteredbaseNs:string[][] = baseN.filter((i:string[]) => i.length > 0);
const allbaseNs:string[][] = baseN.toArray();
const baseNsCount = baseN.length;
const nthbaseN:string[] = baseN.nth(3);

const cartesianProduct1 = Combinatorics.cartesianProduct(["a", "b", "c"]);
const nextCartesianProduct1:[string] = cartesianProduct1.next();
cartesianProduct1.forEach((i:[string]) => console.log(i));
const cartesianProduct1sLengths:number[] = cartesianProduct1.map((i:[string]) => i.length);
const filteredCartesianProduct1s:[string][] = cartesianProduct1.filter((i:[string]) => i.length > 0);
const allCartesianProduct1s:[string][] = cartesianProduct1.toArray();
const cartesianProduct1sCount = cartesianProduct1.length;
const nthCartesianProduct1:[string] = cartesianProduct1.nth(3);
const cartesianProduct1ByCoords:[string] = cartesianProduct1.get(1);

const cartesianProduct2 = Combinatorics.cartesianProduct(["a", "b", "c"], [1, 2, 3]);
const nextCartesianProduct2:[string, number] = cartesianProduct2.next();
cartesianProduct2.forEach((i:[string, number]) => console.log(i));
const cartesianProduct2sLengths:number[] = cartesianProduct2.map((i:[string, number]) => i.length);
const filteredCartesianProduct2s:[string, number][] = cartesianProduct2.filter((i:[string, number]) => i.length > 0);
const allCartesianProduct2s:[string, number][] = cartesianProduct2.toArray();
const cartesianProduct2sCount = cartesianProduct2.length;
const nthCartesianProduct2:[string, number] = cartesianProduct2.nth(3);
const cartesianProduct2ByCoords:[string, number] = cartesianProduct2.get(1, 1);

const cartesianProduct3 = Combinatorics.cartesianProduct(["a", "b", "c"], [1, 2, 3], [true, false]);
const nextCartesianProduct3:[string, number, boolean] = cartesianProduct3.next();
cartesianProduct3.forEach((i:[string, number, boolean]) => console.log(i));
const cartesianProduct3sLengths:number[] = cartesianProduct3.map((i:[string, number, boolean]) => i.length);
const filteredCartesianProduct3s:[string, number, boolean][] = cartesianProduct3.filter((i:[string, number, boolean]) => i.length > 0);
const allCartesianProduct3s:[string, number, boolean][] = cartesianProduct3.toArray();
const cartesianProduct3sCount = cartesianProduct3.length;
const nthCartesianProduct3:[string, number, boolean] = cartesianProduct3.nth(3);
const cartesianProduct3ByCoords:[string, number, boolean] = cartesianProduct3.get(1, 1);

const cartesianProductAny = Combinatorics.cartesianProduct(["a", 1, true], [false, 2, "b"]);
const nextCartesianProductAny:any[] = cartesianProductAny.next();
cartesianProductAny.forEach((i:any[]) => console.log(i));
const cartesianProductAnysLengths:number[] = cartesianProductAny.map((i:any[]) => i.length);
const filteredCartesianProductAnys:any[][] = cartesianProductAny.filter((i:any[]) => i.length > 0);
const allCartesianProductAnys:any[][] = cartesianProductAny.toArray();
const cartesianProductAnysCount = cartesianProductAny.length;
const nthCartesianProductAny:any[] = cartesianProductAny.nth(3);
const cartesianProductAnyByCoords:any[] = cartesianProductAny.get(1, 1);

const version:string = Combinatorics.VERSION;
