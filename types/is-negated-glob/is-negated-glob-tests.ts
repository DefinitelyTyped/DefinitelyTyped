import * as isNegatedGlob from 'is-negated-glob';

const result = isNegatedGlob('!foo.*');
const negated: boolean = result.negated;
const original: string = result.original;
const pattern: string = result.pattern;
