import { DatasetCore } from "@rdfjs/types";
import { Query } from "./index.js";
import { ResultRow } from "./ResultParser.js";
import SimpleClient from "./SimpleClient.js";

interface ParsingQuery<D extends DatasetCore = DatasetCore> extends Query<boolean, D, ResultRow[], void> {}

// tslint:disable-next-line no-unnecessary-class
declare class ParsingQuery<D extends DatasetCore = DatasetCore> {
    constructor(options: { client: SimpleClient });
}

export default ParsingQuery;
