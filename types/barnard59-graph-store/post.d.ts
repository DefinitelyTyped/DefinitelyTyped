import { Writable } from 'readable-stream';

interface Options {
    user?: string;
    password?: string;
    endpoint: string;
    maxQuadsPerRequest?: number;
}

export default function post(arg: Options): Writable;
export {};
