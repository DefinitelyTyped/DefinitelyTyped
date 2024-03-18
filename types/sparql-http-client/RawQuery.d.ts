import { Query } from "./index.js";
import SimpleClient from "./SimpleClient.js";

interface RawQuery extends Query<Promise<Response>, Promise<Response>, Promise<Response>, Promise<Response>> {
}

declare class RawQuery {
    constructor(options: { client: SimpleClient });
}

export default RawQuery;
