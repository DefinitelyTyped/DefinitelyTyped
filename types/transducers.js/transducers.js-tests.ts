import * as t from "transducers.js";

const stringAppendFn: t.Reducer<string, number> = (acc, x) => acc + x;
const stringAppendTransformer = t.transformer(stringAppendFn);
const stringAppendThenLengthTransformer: t.CompletingTransformer<
    string,
    number,
    number
> = {
    ["@@transducer/init"]: () => "",
    ["@@transducer/result"]: (s: string) => s.length,
    ["@@transducer/step"]: stringAppendFn,
};
const toNumberTransducer: t.Transducer<string, number> = t.map(s => +s);
const transducedString1: string = t.transduce(
    ["1", "2"],
    toNumberTransducer,
    stringAppendFn,
    "",
);
const transducedString2: string = t.transduce(
    ["1", "2"],
    toNumberTransducer,
    stringAppendTransformer,
);

const mapcatted: number[] = t.into([], t.mapcat((s: string) => [1, 2, 3, 4]), [
    "a",
    "b",
]);

const partitionedIter: Iterator<number[]> = t.toIter(
    [1, 2, 3, 4, 5],
    t.partition<number>(2),
);

const reduced: t.Reduced<string> = new t.Reduced("a");
