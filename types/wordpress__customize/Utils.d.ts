import {Class} from './Class';
import {Control} from './Control';
import {Panel} from './Panel';
import {Section} from './Section';

export interface HighlightButton_Options {
	delay?: number;
	focusTarget?: JQuery;
}

export interface Utils {
	parseQueryString(queryString: string): Record<string, string>;
	bubbleChildValueChanges(instance: Class, properties: Array<any>): void; // TODO
	prioritySort(a: Panel|Section|Control, b: Panel|Section|Control): number;
	isKeydownButNotEnterEvent(event: JQuery.Event): boolean;
	areElementListsEqual(listA: Array<JQuery>, listB: Array<JQuery>): boolean;
	highlightButton(button: JQuery, options?: HighlightButton_Options): () => void;
	getCurrentTimestamp(): number;
	getRemainingTime(datetime: string|number|Date): number;
}
