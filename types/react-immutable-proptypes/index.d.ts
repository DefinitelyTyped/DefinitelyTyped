// Type definitions for react-immutable-proptypes 2.1
// Project: https://github.com/HurricaneJames/react-immutable-proptypes
// Definitions by: Joris van der Wel <https://github.com/Joris-van-der-Wel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Validator, Requireable, ValidationMap } from 'prop-types';
import * as Immutable from 'immutable';

export function listOf<V>(type: Validator<V>): Requireable<Immutable.List<V>>;
export function mapOf<V, K = any>(valueType: Validator<V>, keyType?: Validator<K>): Requireable<Immutable.Map<K, V>>;
export function orderedMapOf<V, K = any>(valueType: Validator<V>, keyType?: Validator<K>): Requireable<Immutable.OrderedMap<K, V>>;
export function setOf<V>(type: Validator<V>): Requireable<Immutable.Set<V>>;
export function orderedSetOf<V>(type: Validator<V>): Requireable<Immutable.OrderedSet<V>>;
export function stackOf<V>(type: Validator<V>): Requireable<Immutable.Stack<V>>;
export function iterableOf<V>(type: Validator<V>): Requireable<Immutable.Iterable<any, V>>;
// todo: recordOf can be made more useful when immutable v4 releases, because it has much better typescript
//   support (for example by setting the return type to RecordOf<InferProps<P>>)
export function recordOf(type: ValidationMap<any>): Requireable<Immutable.Map<string, any>>;
export function shape(type: ValidationMap<any>): Requireable<Immutable.Iterable<any, any>>;
export function contains(type: ValidationMap<any>): Requireable<Immutable.Iterable<any, any>>;
export function mapContains(type: ValidationMap<any>): Requireable<Immutable.Map<any, any>>;
export const list: Requireable<Immutable.List<any>>;
export const map: Requireable<Immutable.Map<any, any>>;
export const orderedMap: Requireable<Immutable.OrderedMap<any, any>>;
export const set: Requireable<Immutable.Set<any>>;
export const orderedSet: Requireable<Immutable.OrderedSet<any>>;
export const stack: Requireable<Immutable.Stack<any>>;
export const seq: Requireable<Immutable.Seq<any, any>>;
export const record: Requireable<Immutable.Map<string, any>>;
export const iterable: Requireable<Immutable.Iterable<any, any>>;
