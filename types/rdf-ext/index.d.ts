// Type definitions for rdf-ext 1.3
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Sink } from 'rdf-js';
import DataFactory = require('./lib/DataFactory');
import { EventEmitter } from 'events';
import { Stream } from 'stream';

type SinkMap<InputStream extends EventEmitter, OutputStream extends EventEmitter> = {
  find(mediaType: string): Sink<InputStream, OutputStream>;
  import(mediaType: string, input: any, options: any): any;
  list(): string[];
} & {
  [mediaType: string]: Sink<InputStream, OutputStream>;
};

declare class DataFactoryExt extends DataFactory {
  static asEvent: (p: any) => EventEmitter;
  static waitFor: (event: any) => Promise<any>;
  static Parsers: SinkMap<EventEmitter, Stream>;
  static Serializers: SinkMap<Stream, EventEmitter>;
}

export = DataFactoryExt;
