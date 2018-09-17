import Ember from 'ember';

export interface ArrayPrototypeExtensions<T> extends Ember.MutableArray<T>, Ember.Observable, Ember.Copyable {}
