import type { PropertyKey } from '../index';

declare function CreateDataProperty(O: object, P: PropertyKey, V: unknown): boolean;
export = CreateDataProperty;
