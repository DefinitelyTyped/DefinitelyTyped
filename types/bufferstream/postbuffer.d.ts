import http = require('http');
import BufferStream = require('./index');

export = PostBuffer;
declare class PostBuffer extends BufferStream {
    /** for if you want to get all the post data from a http server request and do some db request before. */
    constructor(req: http.IncomingMessage);
    /** set a callback to get all post data from a http server request */
    onEnd(callback: (data: any) => void): void;
    /** pumps data into another stream to allow incoming streams given options will be passed to Stream.pipe */
    pipe(stream: NodeJS.WritableStream, options?: { end?: boolean }): NodeJS.ReadableStream;
}
