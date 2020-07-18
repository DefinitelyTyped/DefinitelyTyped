import Remarkable = require(".");

export = Ruler;

/**
 * Ruler is a helper class for building responsibility chains from
 * parse rules. It allows:
 *
 *   - easy stack rules chains
 *   - getting main chain and named chains content (as arrays of functions)
 */
declare class Ruler<RULE> {
  /**
   * Replace the rule `ruleName` with a new rule.
   */
  at(ruleName: string, fn: RULE, options: Remarkable.Options): void;

  /**
   * Add a rule to the chain before given the `ruleName`.
   */
  before(beforeName: string, ruleName: string, fn: RULE, options: Remarkable.Options): void;

  /**
   * Add a rule to the chain after the given `ruleName`.
   */
  after(afterName: string, ruleName: string, fn: RULE, options: Remarkable.Options): void;

  /**
   * Add a rule to the end of chain.
   */
  push(ruleName: string, fn: RULE, options: Remarkable.Options): void;

  /**
   * Enable a rule or list of rules.
   *
   * @param list Name or array of rule names to enable.
   * @param strict If `true`, all non listed rules will be disabled.
   */
  enable(list: string | string[], strict?: boolean): void;

  /**
   * Disable a rule or list of rules.
   *
   * @param list Name or array of rule names to disable.
   */
  disable(list: string | string[]): void;

  /**
   * Get a rules list as an array of functions.
   */
  getRules(chainName: string): Remarkable.Rule[];
}
