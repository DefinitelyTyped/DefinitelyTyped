import * as S from "js.spec";

const spec: S.Spec = S.spec.predicate("test spec", S.spec.bool);
const c: symbol = spec.conform("water");
const waterProblems: S.Problem[] = spec.explain(["data"], ["spec"], "water");
const toString: string = spec.toString();
const name: string = spec.name;
const options: object = spec.options;

const isValid: boolean = S.valid(S.spec.boolean, true);
S.valid((value) => true, "a value");

const result = S.conform(S.spec.map("dancing", {field: S.spec.string}), "not a map");
S.conform((value) => true, "a value");

const problems: S.Problem[] = S.explainData(S.spec.int, "not a number");
S.explainData((value) => true, "a value");

const {path, via, value, predicate}: {path: string[], via: string[], value: any, predicate: S.PredFn} = problems[0];

const problemStr: string = S.problemStr(problems[0]);

const explainStr: string = S.explainStr(S.spec.even, 3);
S.explainStr((value) => true, "a value");

// $ExpectType void
S.explain(S.spec.positive, true);
// $ExpectType void
S.explain((value) => true, "a value");

// $ExpectType void
S.assert(S.spec.string, "things");
// $ExpectType void
S.assert((value) => true, "a value");

const symbols: symbol[] = [S.symbol.count, S.symbol.invalid, S.symbol.maxCount, S.symbol.minCount, S.symbol.optional];

const orSpec: S.Spec = S.spec.or("or test", { ball: (value: any) => value === "whale", fish: S.spec.number });

const nilableSpec: S.Spec = S.spec.nilable("nilable test", (value: any) => false);

const collectionSpec: S.Spec = S.spec.collection("collection test", S.spec.positive);

const collection2Spec: S.Spec = S.spec.collection("collection test", S.spec.string, {[S.symbol.count]: 3});

const tupleSpec: S.Spec = S.spec.tuple("tuple test", S.spec.bool, S.spec.date, S.spec.array);

const mapSpec: S.Spec = S.spec.map("map test", { email: S.spec.string, [S.symbol.optional]: { name: S.spec.string } });

const oneOfSpec: S.Spec = S.spec.oneOf("oneOf test", "a", "b", "c");

const predicateSpec: S.Spec = S.spec.predicate("predicate test", (value) => true);

// Predicates

const intPred: S.PredFn = S.spec.int;

const integerPred: S.PredFn = S.spec.integer;

const finitePred: S.PredFn = S.spec.finite;

const numberPred: S.PredFn = S.spec.number;

const oddPred: S.PredFn = S.spec.odd;

const evenPred: S.PredFn = S.spec.even;

const positivePred: S.PredFn = S.spec.positive;

const negativePred: S.PredFn = S.spec.negative;

const zeroPred: S.PredFn = S.spec.zero;

const strPred: S.PredFn = S.spec.str;

const stringPred: S.PredFn = S.spec.string;

const fnPred: S.PredFn = S.spec.fn;

const symPred: S.PredFn = S.spec.sym;

const symbolPred: S.PredFn = S.spec.symbol;

const nilPred: S.PredFn = S.spec.nil;

const boolPred: S.PredFn = S.spec.bool;

const booleanPred: S.PredFn = S.spec.boolean;

const datePred: S.PredFn = S.spec.date;

const objPred: S.PredFn = S.spec.obj;

const objectPred: S.PredFn = S.spec.object;

const arrayPred: S.PredFn = S.spec.array;

const setPred: S.PredFn = S.spec.set;

const collPred: S.PredFn = S.spec.coll;
