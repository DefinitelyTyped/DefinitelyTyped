// Type definitions for rdf-ext 1.3
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { BaseQuad, Sink } from 'rdf-js';
import DataFactory = require('./lib/DataFactory');
import EventEmitter = require('events');
import QuadExt = require('./lib/Quad');

type SinkMap<Q extends BaseQuad = QuadExt> = {
  find(mediaType: string): Sink<Q>;
  import(mediaType: string, input: any, options: any): any;
  list(): string[];
} & {
  [mediaType: string]: Sink<Q>;
};

declare class DataFactoryExt<Q extends BaseQuad = QuadExt> extends DataFactory<Q> {
  static asEvent: (p: any) => EventEmitter;
  static waitFor: (event: any) => Promise<any>;
  static Parsers: SinkMap;
  static Serializers: SinkMap;
}

export = DataFactoryExt;
