import { DatasetCore, NamedNode } from "@rdfjs/types";
import { GraphPointer } from "clownface";

export default function findPipeline(dataset: DatasetCore, iri?: NamedNode | string): GraphPointer;
