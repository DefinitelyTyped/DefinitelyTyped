import { Opaque } from "ember/-private/type-utils";

// In normal TypeScript, these helpers are essentially opaque tokens
// that just need to be importable. Declaring them with unique interfaces
// like this, however, gives tools like Glint (that DO have a richer
// notion of what they are) a place to install more detailed type information.
export interface ArrayHelper extends Opaque<"helper:array"> {}
export interface ConcatHelper extends Opaque<"helper:concat"> {}
export interface FnHelper extends Opaque<"helper:fn"> {}
export interface GetHelper extends Opaque<"helper:get"> {}
export interface HashHelper extends Opaque<"helper:hash"> {}

/**
 * Use the `{{array}}` helper to create an array to pass as an option to your components.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/array?anchor=array
 */
export const array: ArrayHelper;

/**
 * Concatenates the given arguments into a string.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/concat?anchor=concat
 */
export const concat: ConcatHelper;

/**
 * The `fn` helper allows you to ensure a function that you are passing off to another component, helper, or modifier
 * has access to arguments that are available in the template.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/fn?anchor=fn
 */
export const fn: FnHelper;

/**
 * Dynamically look up a property on an object.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/get?anchor=get
 */
export const get: GetHelper;

/**
 * Use the `{{hash}}` helper to create a hash to pass as an option to your components.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/hash?anchor=hash
 */
export const hash: HashHelper;
