import { BaseQuad, Quad, Stream } from "@rdfjs/types";
import { Readable } from "stream";
import { Query } from "./index.js";
import SimpleClient from "./SimpleClient.js";

interface StreamQuery<Q extends BaseQuad = Quad>
    extends Query<Promise<boolean>, Stream<Q> & Readable, Readable, Promise<void>>
{}

// tslint:disable-next-line no-unnecessary-class
declare class StreamQuery<Q extends BaseQuad = Quad> {
    constructor(options: { client: SimpleClient });
}

export default StreamQuery;
