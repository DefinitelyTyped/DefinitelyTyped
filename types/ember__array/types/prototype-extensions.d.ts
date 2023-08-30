// import Ember from 'ember';
import MutableArray from "@ember/array/mutable";
import Observable from "@ember/object/observable";

export default interface ArrayPrototypeExtensions<T> extends MutableArray<T>, Observable {}
