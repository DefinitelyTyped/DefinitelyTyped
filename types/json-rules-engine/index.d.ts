// Type definitions for json-rules-engine 4.0
// Project: https://github.com/cachecontrol/json-rules-engine
// Definitions by: Scott Jones <https://github.com/scottdj92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Event {
    type: string;
    params: {
        message: string;
    };
}

export interface Rule {
    fact: string;
    operator: string;
    value: number;
}

export interface RuleEngine {
    conditions: {
        any: AnyRule[];
    };
    event: Event;
}

export interface AnyRule {
    all: Rule[];
}

export interface EngineResult<T> {
    events: Event[];
    almanac: Almanac<T>;
}

export interface Almanac<U> {
    factMap: Map<string | "success-events", U>;
    factResultCache: Map<number, Promise<U>>;
    allowUndefinedFacts: boolean;
}

export class Engine {
    addRule(rules: RuleEngine): void;
    run<T>(facts: T): Promise<EngineResult<T>>;
}
