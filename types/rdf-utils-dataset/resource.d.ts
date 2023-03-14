import { DatasetCore, BaseQuad, Term } from '@rdfjs/types';

export default function resource<D extends DatasetCore<BaseQuad, BaseQuad>>(input: D, subject: Term): D;
