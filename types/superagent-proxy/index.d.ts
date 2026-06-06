import { SuperAgentStatic } from "superagent";

declare module "superagent" {
    interface Request {
        proxy(url: string): this;
    }
}

declare function superagentProxy(s: SuperAgentStatic): void;

export = superagentProxy;
