import { Readable } from 'readable-stream';
import * as G from 'glob';

interface Options extends G.IOptions {
    pattern: string;
}

export default function glob(arg: Options): Readable;
export {};
