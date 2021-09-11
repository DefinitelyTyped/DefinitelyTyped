import { DefaultGraph, NamedNode, Stream } from 'rdf-js';

interface Options {
    user?: string;
    password?: string;
    endpoint: string;
    graph?: DefaultGraph | NamedNode | string;
}

export default function get(arg: Options): Stream;
export {};
