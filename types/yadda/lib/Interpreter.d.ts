import Context = require("./Context");
import Library = require("./Library");
import { Scenario, Step } from ".";

declare class Interpreter {
    constructor(libraries: Library | Library[]);
    requires(libs: Library | Library[]): this;
    validate(scenario: Scenario): void;
    interpret(scenario: Scenario | Scenario[], scenario_context: Context, next?: (err: Error | null, result?: Scenario) => void): void;
    interpret_step(step: Step | Step[], scenario_context: Context, next?: (err: Error | null, result?: Step) => void): void;
}

export = Interpreter;
