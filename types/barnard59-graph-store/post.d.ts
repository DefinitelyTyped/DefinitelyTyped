import { Writable } from 'readable-stream';
import { StreamClientOptions } from '../sparql-http-client/StreamClient';

type Options = Pick<StreamClientOptions, 'user' | 'password'> & {
    endpoint: string;
    maxQuadsPerRequest?: number
};

export default function post(arg: Options): Writable;
export {};
