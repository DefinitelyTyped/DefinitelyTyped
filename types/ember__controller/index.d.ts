import EmberObject from "@ember/object";
import ActionHandler from "@ember/object/-private/action-handler";
import ComputedProperty from "@ember/object/computed";
import Mixin from "@ember/object/mixin";

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
type QueryParamTypes = "boolean" | "number" | "array" | "string";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
type QueryParamScopeTypes = "controller" | "model";

// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
interface QueryParamConfig {
    type?: QueryParamTypes | undefined;
    scope?: QueryParamScopeTypes | undefined;
    as?: string | undefined;
}

/**
 * Additional methods for the Controller.
 */
interface ControllerMixin extends ActionHandler {
    /**
     * @deprecated until 5.0. Use `RouterService.reaplceWith` instead.
     */
    replaceRoute(name: string, ...args: any[]): void;
    /**
     * @deprecated until 5.0. Use `RouterService.transitionTo` instead.
     */
    transitionToRoute(name: string, ...args: any[]): void;
    /**
     * @deprecated until 5.0. Use `RouterService.transitionTo` instead.
     */
    transitionToRoute(...args: any[]): void;
    model: unknown;
    queryParams: Readonly<Array<string | Record<string, QueryParamConfig | string | undefined>>>;
    target: object;
}

export default class Controller extends EmberObject {}
// tslint:disable-next-line:no-empty-interface -- used for declaration merge
export default interface Controller extends ControllerMixin {}

export function inject(): ComputedProperty<Controller>;
export function inject<K extends keyof Registry>(name: K): ComputedProperty<Registry[K]>;
export function inject(target: object, propertyKey: string | symbol): void;

// A type registry for Ember `Controller`s. Meant to be declaration-merged
// so string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface
export interface Registry extends Record<string, Controller | undefined> {}

declare module "@ember/owner" {
    interface DIRegistry {
        controller: Registry;
    }
}

// We need to define the `ControllerMixin` type above, but it is not public API
// and should not be importable, so shut off auto-importing.
export {};
