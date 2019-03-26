import MarkdownIt = require(".");
import State = require("./rules_core/state_core");

export = Ruler;

declare class Ruler<S extends State = State> {
    after(afterName: string, ruleName: string, rule: MarkdownIt.Rule<S>, options?: any): void;
    at(name: string, rule: MarkdownIt.Rule<S>, options?: any): void;
    before(beforeName: string, ruleName: string, rule: MarkdownIt.Rule<S>, options?: any): void;
    disable(rules: string | string[], ignoreInvalid?: boolean): string[];
    enable(rules: string | string[], ignoreInvalid?: boolean): string[];
    enableOnly(rule: string, ignoreInvalid?: boolean): void;
    getRules(chain: string): MarkdownIt.Rule<S>[];
    push(ruleName: string, rule: MarkdownIt.Rule<S>, options?: any): void;
}
