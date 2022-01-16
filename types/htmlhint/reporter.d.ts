import { Hint, Rule, Ruleset, ReportType } from './types';

export default class Reporter {
    html: string;
    lines: string[];
    brLen: number;
    ruleset: Ruleset;
    messages: Hint[];

    constructor(html: string, ruleset: Ruleset);

    info(message: string, line: number, col: number, rule: Rule, raw: string): void;
    warn(message: string, line: number, col: number, rule: Rule, raw: string): void;
    error(message: string, line: number, col: number, rule: Rule, raw: string): void;
    private report(type: ReportType, message: string, line: number, col: number, rule: Rule, raw: string): void;
}
