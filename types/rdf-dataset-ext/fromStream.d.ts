import { BaseQuad, DatasetCore } from "rdf-js";
import { EventEmitter } from "stream";

/**
 * Adds all quads from stream till the stream is finished.
 *
 * Errors emitted by the stream are forwarded as Promise rejects. Returns the given dataset.
 */
declare function fromStream<D extends DatasetCore<BaseQuad> = DatasetCore>(dataset: D, stream: EventEmitter): Promise<D>;

export = fromStream;
