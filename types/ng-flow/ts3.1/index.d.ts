/// <reference types="flowjs" />

import * as angular from 'angular';

declare module 'angular' {
	namespace flow {
		interface FlowFactory {
			create(options?: flowjs.FlowOptions): flowjs.Flow;
		}
	}
}
