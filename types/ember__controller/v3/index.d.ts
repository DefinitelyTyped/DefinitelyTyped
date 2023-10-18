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
export interface ControllerMixin extends ActionHandler {
    replaceRoute(name: string, ...args: any[]): void;
    /**
     * @deprecated use transitionTo method of RouterService
     */
    transitionToRoute(name: string, ...args: any[]): void;
    /**
     * @deprecated use transitionTo method of RouterService
     */
    transitionToRoute(...args: any[]): void;
    model: any;
    queryParams: Array<string | Record<string, QueryParamConfig | string | undefined>>;
    target: object;
}
export const ControllerMixin: Mixin<ControllerMixin>;
export default class Controller extends EmberObject.extend(ControllerMixin) {}
export function inject(): ComputedProperty<Controller>;
export function inject<K extends keyof Registry>(name: K): ComputedProperty<Registry[K]>;
export function inject(target: object, propertyKey: string | symbol): void;

// A type registry for Ember `Controller`s. Meant to be declaration-merged
// so string lookups resolve to the correct type.
// tslint:disable-next-line no-empty-interface
export interface Registry {}
