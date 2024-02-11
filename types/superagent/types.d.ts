import Response = require("./lib/node/response");

export interface AgentOptions {
    ca?: any;
    key?: any;
    pfx?: any;
    cert?: any;
    rejectUnauthorized?: boolean;
}

export type CBHandler = (err: any, res: Response) => void;
