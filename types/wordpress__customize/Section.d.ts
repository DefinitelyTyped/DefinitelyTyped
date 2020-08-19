import {Container_Arguments, Container_Params, Container} from './Container';

export interface Section_Params extends Container_Params {
	panel?: string|null;
	customizeAction?: string;
}

export class Section extends Container {
	containerParent: string;
	containerPaneParent: string;
	initialize(id?: string, options?: Section_Params): void;
	embed(): void;
	attachEvents(): void;
	isContextuallyActive(): boolean;
	controls(): Array<Control>;
	onChangeExpanded(expanded: boolean, args: Container_Arguments): void;
}
