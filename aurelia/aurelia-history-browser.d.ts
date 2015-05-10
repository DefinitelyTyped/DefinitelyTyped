declare module 'aurelia-history-browser/index' {
	import { History } from 'aurelia-history';
	export class BrowserHistory extends History {
	    interval: any;
	    active: any;
	    previousFragment: any;
	    location: any;
	    history: any;
	    root: any;
	    options: any;
	    fragment: any;
	    iframe: any;
	    private _checkUrlCallback;
	    private _hasPushState;
	    private _wantsHashChange;
	    private _wantsPushState;
	    private _checkUrlInterval;
	    constructor();
	    getHash(window?: any): any;
	    getFragment(fragment?: any, forcePushState?: any): any;
	    activate(options?: any): any;
	    deactivate(): void;
	    checkUrl(): boolean;
	    loadUrl(fragmentOverride?: any): any;
	    navigate(fragment?: any, options?: any): any;
	    navigateBack(): void;
	}
	export function configure(aurelia: any): void;

}
declare module 'aurelia-history-browser' {
	export * from 'aurelia-history-browser/index';
}
