import { ValidationContext } from '../index';

/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */
export function OverlappingFieldsCanBeMerged(context: ValidationContext): any;
