import {Container_Arguments, Container} from './Container';

export class Panel extends Container {
	embed(): void;
	attachEvents(): void;
	sections(): Array<Section>;
	isContextuallyActive(): boolean;
	onChangeExpanded(expanded: boolean, args: Container_Arguments): void;
	renderContent(): void;
}
