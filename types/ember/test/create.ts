import Ember from 'ember';
import { assertType } from './lib/assert';

const obj = Ember.Object.create({ a: 1 }, { b: 2 }, { c: 3 });
assertType<number>(obj.a);
assertType<number>(obj.b);
assertType<number>(obj.c);
