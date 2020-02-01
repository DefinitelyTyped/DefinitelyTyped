import xmlFlow from 'xml-flow';

import { Readable } from 'stream';
import { EventEmitter } from 'events';

const readable = Readable.from(['<hello>world</hello>']);

xmlFlow(readable); // $ExpectType EventEmitter
xmlFlow.toXml({ hello: "world" }); // $ExpectType string
