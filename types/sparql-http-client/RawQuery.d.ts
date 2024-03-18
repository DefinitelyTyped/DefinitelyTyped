import { Query } from "./index.js";
import SimpleClient from "./SimpleClient.js";

interface RawQuery extends Query<Response, Response, Response, Response> {
}

declare class RawQuery {
    constructor(options: { client: SimpleClient });
}

export default RawQuery;
