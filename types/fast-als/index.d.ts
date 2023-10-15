// Type definitions for fast-als 1.0
// Project: https://github.com/thorough-developer/fast-als
// Definitions by: Elias Fauser <https://github.com/elias-fauser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export {};

interface Context {
    [key: string]: any;
}

type CallbackFunction = () => void | PromiseLike<void>;
type ReturnValue = string | number | boolean | symbol | object;

/**
 * The start of creating an asynchronous local storage context. Once this method is called, a new context is created
 * where get and set calls will set and return values as expected.
 *
 * @param defaults - Sets the default values. A convenience so that you don't have to check to see if a value is there and set it to something else.
 * @param callback - This is the code to be executed first within the new context that is created
 *
 * @example
 * const fastAls = require('fast-als');
 *
 * function firstCallInScope() {
 *   // override user
 *   fastAls.set('user', { id: 'overwrittenUser'});
 * }
 *
 * function secondCallInScope() {
 *  // will print the user set in firstCallInScope
 *  console.log(fastAls.get('user'));
 * }
 *
 * fastAls.runWith({ user: { id: 'someUser' } }, () => {
 *   firstCallInScope();
 *   secondCallInScope();
 * });
 */
export function runWith(defaults: Context, callback: CallbackFunction): void;

/**
 * Sets a variable for a given key within running context (started by runWith).
 * If this is called outside of a running context, it will not store the value.
 * @param key - the key to store the variable by
 * @param value - the value to store under the key for lookup later on.
 *
 * @example
 *
 * const fastAls = require('fast-als');
 *
 * function callInScope() {
 *   // override user
 *   fastAls.set('user', { id: 'overwrittenUser'});
 * }
 *
 * fastAls.runWith({ user: { id: 'someUser' } }, () => {
 *   callInScope();
 * });
 *
 * @example
 *
 * const fastAls = require('fast-als');
 *
 * function callOutOfScope() {
 *   // this never gets set
 *   fastAls.set('user', { id: 'overwrittenUser'});
 * }
 *
 * // calling this won't store the variable under the key
 * callOutOfScope();
 */

export function set<Payload extends Context, Key extends keyof Payload>(key: Key, value: Payload[Key]): void;
export function set<Payload extends Context>(key: keyof Payload, value: Payload[typeof key]): void;
export function set(key: string, value: any): void;

/**
 * Gets a variable previously set within a running context (started by runWith).
 * If this is called outside of a running context, it will not retrieve the value.
 *
 * @param key - the key to retrieve the stored value
 *
 * @example
 *
 * const fastAls = require('fast-als');
 *
 * function callInScope() {
 *   // prints default user
 *   console.log(fastAls.get('user'));
 * }
 *
 * fastAls.runWith({ user: { id: 'someUser' } }, () => {
 *   callInScope();
 * });
 *
 * @example
 *
 * const fastAls = require('fast-als');
 *
 * function callInScope() {
 *   // prints default user
 *   console.log(fastAls.get('user'));
 * }
 *
 * fastAls.runWith({ user: { id: 'someUser' } }, () => {
 *   callInScope();
 * });
 *
 * // calling this will return undefined
 * callInScope();
 */
export function get<Payload extends Context, Key extends keyof Payload>(key: Key): Payload[Key] | undefined;
export function get<Payload extends Context>(key: keyof Payload): Payload[typeof key] | undefined;
export function get(key: string): ReturnValue | undefined;
