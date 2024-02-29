// import Ember from 'ember';
import Observable from "@ember/object/observable";
// eslint-disable-next-line @definitelytyped/no-self-import
import MutableArray from "@ember/array/mutable";

export default interface ArrayPrototypeExtensions<T> extends MutableArray<T>, Observable {}
