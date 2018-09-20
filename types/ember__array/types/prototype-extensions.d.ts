import Ember from 'ember';
import Observable from '@ember/object/observable';

export interface ArrayPrototypeExtensions<T> extends Ember.MutableArray<T>, Observable, Ember.Copyable {}
