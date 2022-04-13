import { EventDispatcherEvents } from '@ember/application/types';

/**
 * `Ember.EventDispatcher` handles delegating browser events to their
 * corresponding `Ember.Views.` For example, when you click on a view,
 * `Ember.EventDispatcher` ensures that that view's `mouseDown` method gets
 * called.
 */
export default class EventDispatcher extends Object {
    /**
     * The set of events names (and associated handler function names) to be setup
     * and dispatched by the `EventDispatcher`. Modifications to this list can be done
     * at setup time, generally via the `Ember.Application.customEvents` hash.
     */
    events: EventDispatcherEvents;
}
