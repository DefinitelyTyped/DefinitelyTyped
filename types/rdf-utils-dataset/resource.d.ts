import { DatasetCore, BaseQuad, Term } from 'rdf-js';

export default function resource<D extends DatasetCore<BaseQuad, BaseQuad>>(input: D, subject: Term): D;
