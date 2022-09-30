// Type definitions for @emmetio/implicit-tag 1.0
// Project: https://github.com/emmetio/implicit-tag#readme
// Definitions by: Robbert Verbruggen <https://github.com/rfverbruggen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns best child node name for given parent node name
 * @param  {String} parentName Name of parent node
 * @return {String}
 */
export function resolveImplicitName(parentName: string): string;
