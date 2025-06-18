import * as readableStream from "readable-stream";
import * as nodeStream from "stream";

declare function writable(duplex: readableStream.Stream): readableStream.Writable;
declare function writable(duplex: nodeStream.Stream): nodeStream.Writable;

export = writable;
