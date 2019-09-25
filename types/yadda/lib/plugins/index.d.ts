import ScenarioLevelPlugin = require("./mocha/ScenarioLevelPlugin");
import StepLevelPlugin = require("./mocha/StepLevelPlugin");

export import casper = require("./CasperPlugin");

export interface MochaPlugin {
    ScenarioLevelPlugin: typeof ScenarioLevelPlugin;
    StepLevelPlugin: typeof StepLevelPlugin;
}

export const mocha: MochaPlugin;
export const jasmine: MochaPlugin;
