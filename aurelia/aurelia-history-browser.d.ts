/// <reference path="aurelia-history" />


declare module 'aurelia-history-browser' {
  //import core from 'core-js';
  import { History }  from 'aurelia-history';
  export class BrowserHistory extends History {
    constructor();
    getHash(window?: Window): string;
    getFragment(fragment: string, forcePushState?: boolean): string;
    activate(options?: Object): boolean;
    deactivate(): void;
    checkUrl(): boolean;
    loadUrl(fragmentOverride: string): boolean;
    navigate(fragment?: string, options?: Object): boolean;
    navigateBack(): void;
  }
  export function configure(aurelia: Object): void;
}
