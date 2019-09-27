import { Step } from "..";

declare class StepParser {
    constructor();
    parse(text: string, next: (steps: Step[]) => void): void;
    parse(text: string): Step[];
}

export = StepParser;
