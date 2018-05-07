// Type definitions for ui-select 0.13.2
// Project: https://github.com/angular-ui/ui-select
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped 
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
	export namespace ui.select {
	    interface ISelectConfig {
	        appendToBody: boolean;
	        resetSearchInput: boolean;
	        theme: string;
	    }
	}
}
