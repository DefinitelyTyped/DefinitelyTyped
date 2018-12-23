import EmberObject from "@ember/object";

// tslint:disable-next-line:strict-export-declare-modifiers
interface TriggerActionOptions {
    action?: string;
    target?: EmberObject;
    actionContext?: EmberObject;
}

/**
 * Ember.TargetActionSupport is a mixin that can be included in a class to add a triggerAction method
 * with semantics similar to the Handlebars {{action}} helper. In normal Ember usage, the {{action}}
 * helper is usually the best choice. This mixin is most often useful when you are doing more
 * complex event handling in Components.
 */
export default interface TargetActionSupport {
    triggerAction(opts: TriggerActionOptions): boolean;
}
