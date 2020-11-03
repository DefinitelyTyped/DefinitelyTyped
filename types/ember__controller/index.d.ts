// Type definitions for non-npm package @ember/controller 3.16
// Project: https://emberjs.com/api/ember/3.16/modules/@ember%2Fcontroller
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import ActionHandler from '@ember/object/-private/action-handler';
import Mixin from '@ember/object/mixin';
import EmberObject from '@ember/object';
import ComputedProperty from '@ember/object/computed';

// tslint:disable-next-line strict-export-declare-modifiers
type QueryParamTypes = 'boolean' | 'number' | 'array' | 'string';
// tslint:disable-next-line strict-export-declare-modifiers
type QueryParamScopeTypes = 'controller' | 'model';

// tslint:disable-next-line strict-export-declare-modifiers
interface QueryParamConfig {
    type?: QueryParamTypes;
    scope?: QueryParamScopeTypes;
    as?: string;
}

/**
 * Additional methods for the Controller.
 */
export interface ControllerMixin extends ActionHandler {
    replaceRoute(name: string, ...args: any[]): void;
    transitionToRoute(name: string, ...args: any[]): void;
    transitionToRoute(...args: any[]): void;
    model: any;
    queryParams: Array<string | Record<string, QueryParamConfig | undefined>>;
    target: object;
}
export const ControllerMixin: Mixin<ControllerMixin>;
export default class Controller extends EmberObject.extend(ControllerMixin) {}
export function inject(): ComputedProperty<Controller>;
export function inject<K extends keyof Registry>(
    name: K
): ComputedProperty<Registry[K]>;
export function inject(target: object, propertyKey: string | symbol): void;

// A type registry for Ember `Controller`s. Meant to be declaration-merged
// so string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface
export interface Registry {}
