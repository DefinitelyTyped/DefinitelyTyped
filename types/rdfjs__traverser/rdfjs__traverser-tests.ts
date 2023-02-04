import Traverser from '@rdfjs/traverser/Traverser';
import { Quad, DatasetCore, NamedNode } from "rdf-js";
import { GraphPointer } from 'clownface';
import { DatasetExt } from 'rdf-ext/lib/dataset';

function filter(arg: { dataset: DatasetCore; quad: Quad; level: number }): boolean {
    return true;
}

const traverser = new Traverser(filter);

const pointer: GraphPointer<NamedNode, DatasetExt> = <any> {};
interface Reduced {
    foo: number;
    bar: number;
}
const reduced = traverser.reduce(pointer, (context, result: Reduced) => result, { foo: 0, bar: 0 });
const reducedOptional = traverser.reduce(pointer, (context, result: Reduced | undefined) => result);

traverser.forEach(pointer, ({ level, dataset, quad }) => {});

const matched: DatasetCore = traverser.match(pointer);
