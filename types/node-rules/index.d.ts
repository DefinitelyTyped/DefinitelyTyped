// Type definitions for Drools 7.2.0
// Project: https://github.com/mithunsatheesh/node-rules
export = RuleEngine


export as namespace RuleEngine


declare namespace RuleEngine {
  interface Consequence {
    (API: API, fact?: Fact): void;

    ruleRef?: string | undefined;
  }

  interface Rule {
    id?: string;
    index?: number;
    name?: string;
    on?: boolean;
    priority?: number;
    condition: (API: API, fact?: Fact) => void;
    consequence: Consequence;
  }

  interface Fact {
    uerIP?: string,
    name?: string,
    application?: string,
    userLoggedIn?: boolean,
    transactionTotal?: number,
    cardType?: string,
  }

  interface Options {
    ignoreFactChanges?: boolean;
  }

  interface API {
    rule: () => Rule;
    when: (outcome: any) => void;
    restart: () => void;
    stop: () => void;
    next: () => void;
  }

}

declare class RuleEngine {
  constructor();

  constructor(rules?: RuleEngine.Rule | RuleEngine.Rule[], options?: RuleEngine.Options);

  rules: RuleEngine.Rule[];
  activeRules: RuleEngine.Rule[];
  private ignoreFactChanges;

  init(): void;

  register(rules: RuleEngine.Rule | RuleEngine.Rule[]): void;

  sync(): void;

  execute(fact: RuleEngine.Fact, callback: (fact: RuleEngine.Fact) => void): void;

  nextTick(callback: () => void): void;

  findRules(query?: Record<string, unknown>): RuleEngine.Rule[];

  turn(state: string, filter?: Record<string, unknown>): void;

  prioritize(priority: number, filter?: Record<string, unknown>): void;
}



