declare module 'aurelia-history/index' {
	export class History {
	    activate(): void;
	    deactivate(): void;
	    navigate(): void;
	    navigateBack(): void;
	}

}
declare module 'aurelia-history' {
	export * from 'aurelia-history/index';
}
