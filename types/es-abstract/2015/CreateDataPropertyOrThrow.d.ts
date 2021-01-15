import type { PropertyKey } from '../index';

/**
 * @throws {TypeError} If the property can't be created.
 */
declare function CreateDataPropertyOrThrow(O: object, P: PropertyKey, V: unknown): true;
export = CreateDataPropertyOrThrow;
