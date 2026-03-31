import readableStream = require("readable-stream");
import nodeStream = require("stream");

declare function readable(duplex: readableStream.Stream): readableStream.Readable;
declare function readable(duplex: nodeStream.Stream): nodeStream.Readable;

export = readable;
