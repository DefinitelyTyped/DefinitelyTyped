// import Ember from 'ember';
import Observable from '@ember/object/observable';
import MutableArray from '@ember/array/mutable';
import Copyable from '@ember/object/-private/copyable';

export default interface ArrayPrototypeExtensions<T> extends MutableArray<T>, Observable, Copyable {}
