// Type definitions for @rdfjs/sink-map 1.0
// Project: https://github.com/rdfjs-base/sink-map
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink } from 'rdf-js';

declare namespace SinkMap {
    interface SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter> extends Map<string, Sink<InputStream, OutputStream>> {
        import(mediaType: string, input: InputStream, options?: any): OutputStream | null;
    }
}

declare class SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter> extends Map<string, Sink<InputStream, OutputStream>> implements SinkMap<InputStream, OutputStream> {
    import(mediaType: string, input: InputStream, options?: any): OutputStream | null;
}

export = SinkMap;
