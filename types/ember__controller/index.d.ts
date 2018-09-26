// Type definitions for @ember/controller 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Fcontroller
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import ActionHandler from '@ember/object/-private/action-handler';
import Mixin from '@ember/object/mixin';
import EmberObject from '@ember/object';
import ComputedProperty from '@ember/object/computed';

// tslint:disable-next-line strict-export-declare-modifiers
type QueryParamTypes = 'boolean' | 'number' | 'array' | 'string';
// tslint:disable-next-line strict-export-declare-modifiers
type QueryParamScopeTypes = 'controller' | 'model';

/**
 * Additional methods for the Controller.
 */
export interface ControllerMixin extends ActionHandler {
    replaceRoute(name: string, ...args: any[]): void;
    transitionToRoute(name: string, ...args: any[]): void;
    model: any;
    queryParams: string | string[] | Array<{ [key: string]: {
        type?: QueryParamTypes,
        scope?: QueryParamScopeTypes,
        as?: string
    }}>;
    target: object;
}
export const ControllerMixin: Mixin<ControllerMixin>;
// tslint:disable-next-line:no-empty-interface
export default class Controller extends EmberObject.extend(ControllerMixin) {}
export function inject<K extends keyof Registry>(
    name: K
): ComputedProperty<Registry[K]>;

// A type registry for Ember `Controller`s. Meant to be declaration-merged
// so string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface
export interface Registry {}
