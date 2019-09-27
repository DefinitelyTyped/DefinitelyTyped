// Type definitions for json-rules-engine 4.0
// Project: https://github.com/cachecontrol/json-rules-engine
// Definitions by: Scott Jones <https://github.com/scottdj92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface Event {
    type: string;
    params: {
        message: string;
        [key: string]: string;
    };
}

export interface RuleEngine {
    conditions: Conditions;
    event: Event;
    name?: any[];
    priority?: number;
    onSuccess?: (evt: Event, almanac: Almanac) => void;
}

export interface Conditions {
    any: AnyRule[];
}

export interface AnyRule {
    all: Rule[];
}

export interface EngineResult {
    events: Event[];
    almanac: Almanac;
}

export interface Almanac {
    factMap: Map<string | 'success-events', Event>;
    factResultCache: Map<number, Promise<Event>>;
    allowUndefinedFacts: boolean;
    factValue: (fact: object, params: object, path: string) => Promise<void>;
    addRuntimeFact: (factId: string, value: any) => void;
}

export interface EngineOptions {
    allowUndefinedFacts: boolean;
}

export interface RuleOptions {
    conditions: Conditions;
    events: Event[];
    priority?: number;
    name?: any[];
    onSuccess?: DefinitionFunction;
    onFailure?: DefinitionFunction;
}

export interface FactOptions {
    cache: boolean;
    priority: number;
}

export interface DefinitionFunction {
    (params: Event['params'], almanac: Almanac): void;
}

export interface OperatorEvaluateFunction {
    (factValue: string, jsonValue: JSON): void;
}

export interface EngineEventFunction {
    (event: Event, almanac: Almanac, ruleResult: object): void;
}

export class Rule {
    constructor(options: RuleOptions | JSON);
    fact: string;
    operator:
        | 'equal'
        | 'notEqual'
        | 'lessThan'
        | 'lessthanInclusive'
        | 'greaterThan'
        | 'greaterThanInclusive'
        | 'in'
        | 'notIn'
        | 'contains'
        | 'doesNotContain';
    value: number | string | string[] | number[];
    path?: string;
    setConditions?: (conditions: Conditions) => void;
    setEvent?: (event: Event) => void;
    setPriority?: (priority: number) => void;
    toJSON?: (stringify?: boolean) => void;
}

export class Engine {
    constructor(rules?: Rule[], options?: EngineOptions);
    addRule(rules: RuleEngine): void;
    removeRule(rule: Rule): void;
    addFact(id: string, definitionFunc: DefinitionFunction, options: FactOptions): void;
    removeFact(id: string): void;
    addOperator(name: string, definitionFunc: OperatorEvaluateFunction): void;
    removeOperator(id: string): void;
    stop(): Engine;
    on(eventName: 'success' | 'failure', engineEvent: EngineEventFunction): void;
    run(facts: object): Promise<EngineResult>;
}
