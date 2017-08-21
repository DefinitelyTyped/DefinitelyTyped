import * as S from "js.spec";

const spec: S.Spec = S.spec.bool;
const c: symbol = spec.conform("water");
const waterProblems: S.Problem[] = spec.explain("water");
const name: string = spec.name;
const options: object = spec.options;

const isValid: boolean = S.valid(S.spec.boolean, true);

const result = S.conform(S.spec.map("dancing", {field: S.spec.string}), "not a map");

const problems: S.Problem[] = S.explainData(S.spec.int, "not a number");

const {path, via, value, predicate}: {path: string[], via: string[], value: any, predicate: S.Predicate} = problems[0];

const problemStr: string = S.explainStr(S.spec.even, 3);

// $ExpectType void
S.explain(S.spec.positive, true);

// $ExpectType void
S.assert(S.spec.string, "things");

const symbols: symbol[] = [S.symbol.count, S.symbol.invalid, S.symbol.maxCount, S.symbol.minCount, S.symbol.optional];

const orSpec: S.Spec = S.spec.or("or test", { ball: (value: any) => value === "whale", fish: S.spec.number });

const nilableSpec: S.Spec = S.spec.nilable("nilable test", (value: any) => false);

const collectionSpec: S.Spec = S.spec.collection("collection test", S.spec.positive);

const collection2Spec: S.Spec = S.spec.collection("collection test", S.spec.string, {[S.symbol.count]: 3});

const tupleSpec: S.Spec = S.spec.tuple("tuple test", S.spec.bool, S.spec.date, S.spec.array);

const mapSpec: S.Spec = S.spec.map("map test", { email: S.spec.string, [S.symbol.optional]: { name: S.spec.string } });

const oneOfSpec: S.Spec = S.spec.oneOf("oneOf test", "a", "b", "c");

// Predicates

const intPred: S.Predicate = S.spec.int;

const integerPred: S.Predicate = S.spec.integer;

const finitePred: S.Predicate = S.spec.finite;

const numberPred: S.Predicate = S.spec.number;

const oddPred: S.Predicate = S.spec.odd;

const evenPred: S.Predicate = S.spec.even;

const positivePred: S.Predicate = S.spec.positive;

const negativePred: S.Predicate = S.spec.negative;

const zeroPred: S.Predicate = S.spec.zero;

const strPred: S.Predicate = S.spec.str;

const stringPred: S.Predicate = S.spec.string;

const fnPred: S.Predicate = S.spec.fn;

const symPred: S.Predicate = S.spec.sym;

const symbolPred: S.Predicate = S.spec.symbol;

const nilPred: S.Predicate = S.spec.nil;

const boolPred: S.Predicate = S.spec.bool;

const booleanPred: S.Predicate = S.spec.boolean;

const datePred: S.Predicate = S.spec.date;

const objPred: S.Predicate = S.spec.obj;

const objectPred: S.Predicate = S.spec.object;

const arrayPred: S.Predicate = S.spec.array;

const setPred: S.Predicate = S.spec.set;

const collPred: S.Predicate = S.spec.coll;
