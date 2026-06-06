import readableStream = require("readable-stream");
import nodeStream = require("stream");

declare function writable(duplex: readableStream.Stream): readableStream.Writable;
declare function writable(duplex: nodeStream.Stream): nodeStream.Writable;

export = writable;
