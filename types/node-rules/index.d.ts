declare class RuleEngine {
  constructor();

  /**
   * Registers a rule with the rule engine.
   * @param rule The rule to be registered.
   */
  register(rule: RuleEngine.Rule | RuleEngine.Rule[]): void;

  /**
   * Executes the rules on a given fact.
   * @param fact The fact to be processed.
   * @param callback The callback function to handle the result.
   */
  execute(fact: RuleEngine.Fact, callback: (data: RuleEngine.Fact & { result: any }) => void): void;
}

declare namespace RuleEngine {
  export interface Rule {
    /**
     * The condition to be evaluated for the rule.
     * @param R The rule engine instance.
     * @param fact The fact being evaluated.
     */
    condition: (R: FlowControlAPI, fact: Fact) => void;

    /**
     * The consequence to be executed if the condition is met.
     * @param R The rule engine instance.
     * @param fact The fact being evaluated.
     */
    consequence: (R: FlowControlAPI, fact: Fact) => void;

    /**
     * Optional parameter to specify the priority of the rule.
     */
    priority?: number;
  }

  export interface Fact {
    [key: string]: any;
  }

  // Flow Control API
  export interface FlowControlAPI {
    when(condition: boolean): void;

    stop(): void;

    next(): void;

    restart(): void;
  }
}

export = RuleEngine;

export as namespace RuleEngine;
