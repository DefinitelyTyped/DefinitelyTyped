// Type definitions for angularjs-dragula 2.0
// Project: https://github.com/bevacqua/angularjs-dragula
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import angular = require('angular');
import d = require('dragula');

declare module 'angular' {
    namespace dragula {
        /**
         * This service exposes a few different methods with which you can interact with `dragula` in the Angular way.
         */
        interface DragulaService {
            /**
             * Creates a `bag` scoped under `scope` and identified by `name`. You should provide the entire `drake` instance.
             * Typically, the directive takes care of this step.
             */
            add(scope: IScope, name: string, drake: d.Drake): Bag;
            /**
             * Returns the `bag` for a s`drake` instance
             */
            find(scope: IScope, name: string): Readonly<Bag> | undefined;
            /**
             * Sets the `options` used to instantiate a `drake`.
             * Refer to the documentation for `dragula` to learn more about the options themselves.
             */
            options(scope: IScope, name: string, options?: d.DragulaOptions): void;
            /**
             * Destroys a `drake` instance named `name` scoped under `scope`.
             */
            destroy(scope: IScope, name: string): void;
            /**
             * models to sync with
             */
            handleModels(scope: IScope, drake: d.Drake): void;
        }

        /**
         * Grouping of containers is called a bag.
         */
        interface Bag {
            name: string;
            drake: d.Drake;
        }
    }
}

declare function angularDragula(angular: angular.IAngularStatic): 'dragula';

export as namespace angularDragula;
export = angularDragula;
