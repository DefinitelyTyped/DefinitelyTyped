import HTMLParser from "./htmlparser";
import Reporter from "./reporter";
import * as HTMLRules from "./rules";
import { Hint, Rule, Ruleset } from "./types";

export as namespace HTMLHint;

export interface FormatOptions {
    colors?: boolean;
    indent?: number;
}

declare class HTMLHintCore {
    rules: { [id: string]: Rule };
    readonly defaultRuleset: Ruleset;

    addRule(rule: Rule): void;
    verify(html: string, ruleset?: Ruleset): Hint[];
    format(arrMessages: Hint[], options?: FormatOptions): string[];
}

export const HTMLHint: HTMLHintCore;

export { HTMLParser, HTMLRules, Reporter };
