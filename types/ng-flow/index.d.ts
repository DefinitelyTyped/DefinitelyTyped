// Type definitions for ng-flow
// Project: https://github.com/flowjs/ng-flow
// Definitions by: Ryan McNamara <https://github.com/ryan10132>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="flowjs" />
/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
	export namespace flow {
		interface IFlowFactory {
			create(options?: flowjs.IFlowOptions): flowjs.IFlow;
		}
	}
}
