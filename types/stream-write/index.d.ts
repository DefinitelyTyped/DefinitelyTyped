/// <reference types="node"/>
import { Writable } from "stream";

declare function streamWrite(stream: Writable, chunk: any): Promise<boolean>;

export = streamWrite;
