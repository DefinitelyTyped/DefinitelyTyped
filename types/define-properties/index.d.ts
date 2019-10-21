// Type definitions for define-properties 1.1
// Project: https://github.com/ljharb/define-properties#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace defineProperties {
	/**
	 * Whether the current environment correctly supports property descriptors.
	 */
	const supportsDescriptors: boolean;
}

/**
 * Defines new properties in `map` as non-enumerable if they don't already
 * exist on `object`.
 *
 * @param object The object to define non-enumerable properties on.
 * @param map The map of newly defined properties.
 * @param predicates The optional predicates map, return `true` to override existing properties on `object`.
 */
declare function defineProperties<K extends keyof any>(
	object: object,
	map: Record<K, any> & ThisType<any>,
	predicates?: Partial<Record<K, () => boolean>>,
): void;
export = defineProperties;
