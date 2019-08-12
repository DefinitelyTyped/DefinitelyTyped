import { ValidationParams, Params } from './lib/validators';
import Vue, { PluginFunction } from 'vue'

/**
 * Covers beforeCreate(), beforeDestroy() and data().
 *
 * No public members.
 */
export const validationMixin: any

export interface Validation {
  readonly $anyDirty: boolean;
  readonly $anyError: boolean;
  readonly $dirty: boolean;
  readonly $error: boolean;
  readonly $invalid: boolean;
  readonly $params: { [attr: string]: Params | null };
  readonly $pending: boolean;
  $model: any;
  $touch(): never;
  $reset(): never;
  $flattenParams(): ValidationParams[];
  // then we need an extension where any ADDITIONAL property to those specified above returns
  // a Validation | boolean - I am not sure how to achieve this, so instead
  // we have to include all the other types returned above
  [attr: string]: any; // Validation | boolean;
}

interface EachValidation extends Validation {
  $iter: Validation;
}

export interface IterableValidation extends Validation {
  $each: EachValidation;
}

// vue plugin
export const Vuelidate: PluginFunction<any>
