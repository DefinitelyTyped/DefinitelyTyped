import Context = require("./Context");
import Interpreter = require("./Interpreter");
import Library = require("./Library");
import { Scenario, Step } from ".";

declare class Yadda {
    constructor(libraries: Library | Library[], interpreter_context?: Context | Context.Properties);
    interpreter: Interpreter;
    run(scenario: Scenario | Scenario[], scenario_context: Context | Context.Properties, next?: (err: Error | null) => void): void;
    run(step: Step | Step[], scenario_context: Context | Context.Properties, next?: (err: Error | null) => void): void;
    run(scenario: Scenario | Scenario[], next?: (err: Error | null) => void): void;
    run(step: Step | Step[], next?: (err: Error | null) => void): void;
    yadda(scenario: Scenario | Scenario[], scenario_context: Context | Context.Properties, next?: (err: Error | null) => void): void;
    yadda(step: Step | Step[], scenario_context: Context | Context.Properties, next?: (err: Error | null) => void): void;
    yadda(scenario: Scenario | Scenario[], next?: (err: Error | null) => void): void;
    yadda(step: Step | Step[], next?: (err: Error | null) => void): void;
    toString(): string;
}

export = Yadda;
