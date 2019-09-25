// Type definitions for json-rules-engine 4.0
// Project: https://github.com/cachecontrol/json-rules-engine
// Definitions by: Scott Jones <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Event = {
    type: string;
    params: {
        message: string;
    };
}

export type Rule = {
    fact: string;
    operator: string;
    value: number;
};

type RuleEngine = {
    conditions: {
        any: Array<{ all: Array<Rule> }>;
    };
    event: Event;
};

type EngineResult<T> = {
    events: Array<Event>;
    almanac: Almanac<T>;
};

type Almanac<U> = {
    factMap: Map<string, U>;
    factResultCache: Map<number, Promise<void>>;
    allowUndefinedFacts: boolean;
};

export namespace Engine {
    function addRule(rules: RuleEngine): void;
    function run<T>(facts: T): Promise<EngineResult<T>>;
}
