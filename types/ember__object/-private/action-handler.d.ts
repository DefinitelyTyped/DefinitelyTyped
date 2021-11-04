import Mixin from '@ember/object/mixin';

interface ActionsHash {
    [index: string]: (...params: any[]) => any;
}

/**
 * Ember.ActionHandler is available on some familiar classes including Ember.Route,
 * Ember.Component, and Ember.Controller. (Internally the mixin is used by Ember.CoreView,
 * Ember.ControllerMixin, and Ember.Route and available to the above classes through inheritance.)
 */
interface ActionHandler {
    /**
     * Triggers a named action on the ActionHandler. Any parameters supplied after the actionName
     * string will be passed as arguments to the action target function.
     *
     * If the ActionHandler has its target property set, actions may bubble to the target.
     * Bubbling happens when an actionName can not be found in the ActionHandler's actions
     * hash or if the action target function returns true.
     */
    send(actionName: string, ...args: any[]): void;
    /**
     * The collection of functions, keyed by name, available on this ActionHandler as action targets.
     */
    actions: ActionsHash;
}
declare const ActionHandler: Mixin<ActionHandler>;
export default ActionHandler;
