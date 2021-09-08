import { DefaultGraph, NamedNode, Stream } from 'rdf-js';
import { StreamClientOptions } from 'sparql-http-client';

type Options = Pick<StreamClientOptions, 'user' | 'password'> & {
    endpoint: string;
    graph?: DefaultGraph | NamedNode | string
};

export default function get(arg: Options): Stream;
export {};
