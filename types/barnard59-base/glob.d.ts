import * as G from "glob";
import { Readable } from "readable-stream";

interface Options extends G.IOptions {
    pattern: string;
}

export default function glob(arg: Options): Readable;
export {};
