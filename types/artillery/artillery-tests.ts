import { ScenarioContext, RequestResponse, ResponseRequest, Next } from 'artillery';

function test(scenarioContext: ScenarioContext, req: RequestResponse, rep: ResponseRequest, next: Next) {
    scenarioContext.vars = {};
    scenarioContext.vars.testing = "value";
    scenarioContext.vars.testing2 = 1;

    next();
    next(new Error());
}
