import { GraphPointer } from 'clownface';
import { DatasetCore, NamedNode } from '@rdfjs/types';

export default function findPipeline(dataset: DatasetCore, iri?: NamedNode | string): GraphPointer;
