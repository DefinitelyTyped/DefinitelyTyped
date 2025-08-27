import { Sink } from "@rdfjs/types";
import { Duplexify } from "duplexify";
import { DuplexOptions } from "stream";

declare function sinkToDuplex(sink: Sink<any, any>, options?: DuplexOptions): Duplexify;

export = sinkToDuplex;
