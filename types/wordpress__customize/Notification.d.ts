import { Class } from './Class';

export interface Notification_Params {
	message: string;
	type?: string;
	setting?: string;
	template?: Function;
	templateId?: string;
	containerClasses?: string;
	dismissible?: boolean;
}

export class Notification extends Class {
	code: string;
	template: null|Function;
	templateId: string;
	containerClasses: string;
	initialize(code?: string, params?: Notification_Params): void;
	render(): JQuery;
}
