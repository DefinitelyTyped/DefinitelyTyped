import { ScenarioContext, Next } from 'artillery';

let scenarioContext: ScenarioContext = {vars: {}};
scenarioContext.vars = {};
scenarioContext.vars.testing = "value";
scenarioContext.vars.testing2 = 1;

let next: Next = (error: Error) => {
    // do nothing.
};

next();
next(new Error());
