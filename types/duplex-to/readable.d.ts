import * as readableStream from "readable-stream";
import * as nodeStream from "stream";

declare function readable(duplex: readableStream.Stream): readableStream.Readable;
declare function readable(duplex: nodeStream.Stream): nodeStream.Readable;

export = readable;
