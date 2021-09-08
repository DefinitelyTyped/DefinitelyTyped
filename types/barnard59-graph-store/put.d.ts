import { Writable } from 'readable-stream';
import { StreamClientOptions } from 'sparql-http-client';

type Options = Pick<StreamClientOptions, 'user' | 'password'> & {
    endpoint: string;
    maxQuadsPerRequest?: number
};

export default function put(arg: Options): Writable;
export {};
