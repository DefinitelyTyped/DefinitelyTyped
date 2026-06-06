import Environment from "@rdfjs/environment/Environment.js";
import TraverserFactory from "@rdfjs/traverser/Factory";
import Traverser from "@rdfjs/traverser/Traverser";
import { DatasetCore, NamedNode, Quad } from "@rdfjs/types";
import { GraphPointer } from "clownface";
import { DatasetExt } from "rdf-ext/lib/Dataset";

function filter(arg: { dataset: DatasetCore; quad: Quad; level: number }): boolean {
    return true;
}

const env = new Environment([TraverserFactory]);
let traverser = env.traverser(filter);

traverser = new Traverser(filter);

const pointer: GraphPointer<NamedNode, DatasetExt> = <any> {};
interface Reduced {
    foo: number;
    bar: number;
}
const reduced = traverser.reduce(pointer, (context, result: Reduced) => result, { foo: 0, bar: 0 });
const reducedOptional = traverser.reduce(pointer, (context, result: Reduced | undefined) => result);

traverser.forEach(pointer, ({ level, dataset, quad }) => {});

const matched: DatasetCore = traverser.match(pointer);
