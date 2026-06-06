import { Class } from "./Class";
import { Control } from "./Control";
import { Panel } from "./Panel";
import { Section } from "./Section";

export interface HighlightButton_Options {
    delay?: number | undefined;
    focusTarget?: JQuery | undefined;
}

export interface Utils {
    parseQueryString(queryString: string): Record<string, string>;
    bubbleChildValueChanges(instance: Class, properties: readonly any[]): void; // TODO
    prioritySort(a: Panel | Section | Control, b: Panel | Section | Control): number;
    isKeydownButNotEnterEvent(event: JQuery.Event): boolean;
    areElementListsEqual(listA: readonly JQuery[], listB: readonly JQuery[]): boolean;
    highlightButton(button: JQuery, options?: HighlightButton_Options): () => void;
    getCurrentTimestamp(): number;
    getRemainingTime(datetime: string | number | Date): number;
}
