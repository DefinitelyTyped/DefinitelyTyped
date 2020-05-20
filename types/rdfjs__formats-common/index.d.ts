// Type definitions for @rdfjs/formats-common 2.0
// Project: https://github.com/rdfjs-base/formats-common
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { SinkMap } from '@rdfjs/sink-map';
import { Stream } from 'rdf-js';
import { EventEmitter } from 'events';

declare const formats: {
    parsers: SinkMap<EventEmitter, Stream>;
    serializers: SinkMap<Stream, EventEmitter>;
};

export = formats;
