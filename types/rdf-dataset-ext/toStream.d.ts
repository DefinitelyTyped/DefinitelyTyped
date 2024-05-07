import { BaseQuad, DatasetCore, Quad, Stream } from "@rdfjs/types";
import { Readable } from "readable-stream";

/**
 * Creates a `Stream` which emits all quads of the given dataset. Returns the created stream.
 */
declare function toStream<Q extends BaseQuad = Quad>(dataset: DatasetCore<Q>): Stream<Q> & Readable;

export = toStream;
