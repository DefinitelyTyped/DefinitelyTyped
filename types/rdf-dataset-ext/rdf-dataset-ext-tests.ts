import { Readable, EventEmitter } from 'stream';
import { BaseQuad, DatasetCore, Quad, Stream, Term } from 'rdf-js';
import grouped = require('rdf-dataset-ext');
import addAll = require('rdf-dataset-ext/addAll');
import deleteMatch = require('rdf-dataset-ext/deleteMatch');
import equals = require('rdf-dataset-ext/equals');
import fromStream = require('rdf-dataset-ext/fromStream');
import toCanonical = require('rdf-dataset-ext/toCanonical');
import toStream = require('rdf-dataset-ext/toStream');

const dataset1: DatasetCore = {} as any;
const dataset2: DatasetCore<BaseQuad> = {} as any;
const iterable1: Iterable<Quad> = [] as any;
const iterable2: Iterable<BaseQuad> = [] as any;
const term: Term = undefined as any;
const eventEmitter: EventEmitter = {} as any;

// addAll

const dataset1addAll1: DatasetCore = addAll(dataset1, iterable1);
const dataset1addAll2: DatasetCore = grouped.addAll(dataset1, iterable1);

const dataset2addAll1: DatasetCore<BaseQuad> = addAll(dataset2, iterable2);
const dataset2addAll2: DatasetCore<BaseQuad> = addAll<BaseQuad, DatasetCore<BaseQuad>>(dataset2, iterable2);
const dataset2addAll3: DatasetCore<BaseQuad> = grouped.addAll(dataset2, iterable2);
const dataset2addAll4: DatasetCore<BaseQuad> = grouped.addAll<BaseQuad, DatasetCore<BaseQuad>>(dataset2, iterable2);

// deleteMatch

const dataset1deleteMatch1: DatasetCore = deleteMatch(dataset1);
const dataset1deleteMatch2: DatasetCore = deleteMatch(dataset1, term);
const dataset1deleteMatch3: DatasetCore = deleteMatch(dataset1, term, term);
const dataset1deleteMatch4: DatasetCore = deleteMatch(dataset1, term, term, term);
const dataset1deleteMatch5: DatasetCore = deleteMatch(dataset1, term, term, term, term);
const dataset1deleteMatch6: DatasetCore = grouped.deleteMatch(dataset1);
const dataset1deleteMatch7: DatasetCore = grouped.deleteMatch(dataset1, term);
const dataset1deleteMatch8: DatasetCore = grouped.deleteMatch(dataset1, term, term);
const dataset1deleteMatch9: DatasetCore = grouped.deleteMatch(dataset1, term, term, term);
const dataset1deleteMatch10: DatasetCore = grouped.deleteMatch(dataset1, term, term, term, term);

const dataset2deleteMatch1: DatasetCore<BaseQuad> = deleteMatch(dataset2);
const dataset2deleteMatch2: DatasetCore<BaseQuad> = deleteMatch<DatasetCore<BaseQuad>>(dataset2);
const dataset2deleteMatch3: DatasetCore<BaseQuad> = deleteMatch(dataset2, term);
const dataset2deleteMatch4: DatasetCore<BaseQuad> = deleteMatch(dataset2, term, term);
const dataset2deleteMatch5: DatasetCore<BaseQuad> = deleteMatch(dataset2, term, term, term);
const dataset2deleteMatch6: DatasetCore<BaseQuad> = deleteMatch(dataset2, term, term, term, term);
const dataset2deleteMatch7: DatasetCore<BaseQuad> = grouped.deleteMatch(dataset2);
const dataset2deleteMatch8: DatasetCore<BaseQuad> = grouped.deleteMatch<DatasetCore<BaseQuad>>(dataset2);
const dataset2deleteMatch9: DatasetCore<BaseQuad> = grouped.deleteMatch(dataset2, term);
const dataset2deleteMatch10: DatasetCore<BaseQuad> = grouped.deleteMatch(dataset2, term, term);
const dataset2deleteMatch11: DatasetCore<BaseQuad> = grouped.deleteMatch(dataset2, term, term, term);
const dataset2deleteMatch12: DatasetCore<BaseQuad> = grouped.deleteMatch(dataset2, term, term, term, term);

// equals

const equals1: boolean = equals(dataset1, dataset1);
const equals2: boolean = equals(dataset1, dataset2);
const equals3: boolean = equals(dataset2, dataset1);
const equals4: boolean = grouped.equals(dataset1, dataset1);
const equals5: boolean = grouped.equals(dataset1, dataset2);
const equals6: boolean = grouped.equals(dataset2, dataset1);

// fromStream

const fromStream1: Promise<DatasetCore> = fromStream(dataset1, eventEmitter);
const fromStream2: Promise<DatasetCore<BaseQuad>> = fromStream(dataset2, eventEmitter);
const fromStream3: Promise<DatasetCore<BaseQuad>> = fromStream<DatasetCore<BaseQuad>>(dataset2, eventEmitter);
const fromStream4: Promise<DatasetCore> = grouped.fromStream(dataset1, eventEmitter);
const fromStream5: Promise<DatasetCore<BaseQuad>> = grouped.fromStream(dataset2, eventEmitter);
const fromStream6: Promise<DatasetCore<BaseQuad>> = grouped.fromStream<DatasetCore<BaseQuad>>(dataset2, eventEmitter);

// toCanonical

const toCanonical1: string = toCanonical(dataset1);
const toCanonical2: string = toCanonical(dataset2);
const toCanonical3: string = grouped.toCanonical(dataset1);
const toCanonical4: string = grouped.toCanonical(dataset2);

// toStream

const toStream1: Readable & Stream = toStream(dataset1);
const toStream2: Readable & Stream<BaseQuad> = toStream(dataset2);
const toStream3: Readable & Stream<BaseQuad> = toStream<BaseQuad>(dataset2);
const toStream4: Readable & Stream = grouped.toStream(dataset1);
const toStream5: Readable & Stream<BaseQuad> = grouped.toStream(dataset2);
const toStream6: Readable & Stream<BaseQuad> = grouped.toStream<BaseQuad>(dataset2);
