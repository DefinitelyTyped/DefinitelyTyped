// Type definitions for HTMLHint 1.1
// Project: https://github.com/yaniswang/HTMLHint
// Definitions by: Alan Agius <https://github.com/alan-agius4/>
//                 Martin Badin <https://github.com/martin-badin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import HTMLParser from './htmlparser';
import Reporter from './reporter';
import * as HTMLRules from './rules';
import { Hint, Rule, Ruleset } from './types';

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

export { HTMLRules, Reporter, HTMLParser };
