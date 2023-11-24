import superagent = require('superagent');
import stAgent = require('./lib/agent');
import STest = require('./lib/test');
import { App, AgentOptions as STAgentOptions } from "./types";

declare function supertest(app: App, options?: STAgentOptions): stAgent;

declare namespace supertest {
    type Response = superagent.Response;

    type Request = superagent.SuperAgentRequest;

    type CallbackHandler = superagent.CallbackHandler;

    const agent: typeof stAgent;

    type Test = typeof STest;

    interface Options {
        http2?: boolean;
    }

    type AgentOptions = STAgentOptions;

    type SuperTest<Req extends STest = STest> = superagent.SuperAgent<Req>;

    type SuperAgentTest = SuperTest<STest>;
}

export = supertest;
