// Type definitions for @rdfjs/sink-map 2.0
// Project: https://github.com/rdfjs-base/sink-map
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Sink } from '@rdfjs/types';

export interface SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter> extends Map<string, Sink<InputStream, OutputStream>> {
    import(mediaType: string, input: InputStream, options?: any): OutputStream | null;
}

export class SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter> extends Map<string, Sink<InputStream, OutputStream>> implements SinkMap<InputStream, OutputStream> {
    import(mediaType: string, input: InputStream, options?: any): OutputStream | null;
}

export default SinkMap;
