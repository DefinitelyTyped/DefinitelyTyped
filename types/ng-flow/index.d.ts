// Type definitions for ng-flow
// Project: https://github.com/flowjs/ng-flow
// Definitions by: Ryan McNamara <https://github.com/ryan10132>
//                 Martin Nuc <https://github.com/martinnuc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="flowjs" />

import * as angular from 'angular';

declare module 'angular' {
    namespace flow {
        interface FlowFactory {
            create(options?: flowjs.FlowOptions): flowjs.Flow;
        }
    }
}
