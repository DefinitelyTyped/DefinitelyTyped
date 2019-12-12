// Type definitions for rdf-ext 1.3
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Sink } from 'rdf-js';
import DataFactory = require('./lib/DataFactory');
import EventEmitter = require('events');

type SinkMap = {
  find(mediaType: string): Sink;
  import(mediaType: string, input: any, options: any): any;
  list(): string[];
} & {
  [mediaType: string]: Sink;
};

declare class DataFactoryExt extends DataFactory {
  static asEvent: (p: any) => EventEmitter;
  static waitFor: (event: any) => Promise<any>;
  static Parsers: SinkMap;
  static Serializers: SinkMap;
}

export = DataFactoryExt;
