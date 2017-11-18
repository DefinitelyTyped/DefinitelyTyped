// Type definitions for rule-reactor 0.1
// Project: https://github.com/anywhichway/rule-reactor
// Definitions by: [Michael M�ller] <https://github.com/mad-mike>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/*~ Note that ES6 modules cannot directly export class objects.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('someLibrary');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */
export = RuleReactor;

declare class RuleReactor {
    constructor(domain?: object, boost?: boolean);

    assert(instances: RuleReactor.Instance | RuleReactor.Instance[], callback?: () => void): void;
    declare(domain: string, constructor: RuleReactor.Constructor): void;
    createRule(name: RuleReactor.RuleName, salience: RuleReactor.Salience, domain: RuleReactor.Domain,
        condition: RuleReactor.Condition | RuleReactor.Condition[], action: RuleReactor.Action): RuleReactor.Rule;

    static not(value: boolean): boolean;
    not(value: boolean): boolean;
    static exists(domain: RuleReactor.Domain, test: object | RuleReactor.Condition): boolean;
    exists(domain: RuleReactor.Domain, test: object | RuleReactor.Condition): boolean;
    static forAll(domain: RuleReactor.Domain, test: object | RuleReactor.Condition): boolean;
    forAll(domain: RuleReactor.Domain, test: object | RuleReactor.Condition): boolean;

    trace(level: RuleReactor.TraceLevel): void;
    stop(): void;
    run(max: number, loose?: boolean, callback?: () => void): void;
    reset(facts: any): void;
    retract(instances: RuleReactor.Instance | RuleReactor.Instance[], run?: boolean): void;
}

declare namespace RuleReactor {
    type RuleName = string;
    type Salience = number;

    type Domain = object;
    type Condition = (...args: any[]) => boolean;
    type Action = (...args: any[]) => void;

    type Instance = any;

    type TraceLevel = number;

    type Rule = any;

    interface Constructor {
        new(): any;
    }
}
