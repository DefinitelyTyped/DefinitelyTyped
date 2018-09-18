import Observable from '@ember/object/observable';
import MutableArray from '@ember/array/mutable';
import { Ember } from 'ember';

export interface ArrayPrototypeExtensions<T> extends MutableArray<T>, Observable, Ember.Copyable {}
