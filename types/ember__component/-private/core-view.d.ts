import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';
import ActionHandler from '@ember/object/-private/action-handler';

/**
 * Ember.CoreView is an abstract class that exists to give view-like behavior to both Ember's main
 * view class Ember.Component and other classes that don't need the full functionality of Ember.Component.
 *
 * Unless you have specific needs for CoreView, you will use Ember.Component in your applications.
 */
export default class CoreView extends EmberObject.extend(Evented, ActionHandler) {}
