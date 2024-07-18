import { Sink } from "@rdfjs/types";
import { EventEmitter } from "events";

export interface SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter>
    extends Map<string, Sink<InputStream, OutputStream>>
{
    import(mediaType: string, input: InputStream, options?: any): OutputStream | null;
}

export class SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter>
    extends Map<string, Sink<InputStream, OutputStream>>
    implements SinkMap<InputStream, OutputStream>
{
    import(mediaType: string, input: InputStream, options?: any): OutputStream | null;
}

export default SinkMap;
