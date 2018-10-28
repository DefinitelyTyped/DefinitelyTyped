import { ScenarioContext, Next } from 'artillery';

const scenarioContext: ScenarioContext = {vars: {}};
scenarioContext.vars = {};
scenarioContext.vars.testing = "value";
scenarioContext.vars.testing2 = 1;

const next: Next = (error?: Error) => {
    // do nothing.
};

next();
next(new Error());
