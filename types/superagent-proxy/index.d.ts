import * as superagent from "superagent";

declare module "superagent" {
    interface Request {
        proxy(url: string): this;
    }
}

declare function superagentProxy(s: superagent.SuperAgentStatic): void;

export = superagentProxy;
