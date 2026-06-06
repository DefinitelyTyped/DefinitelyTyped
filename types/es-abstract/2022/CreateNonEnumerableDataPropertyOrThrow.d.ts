import type { PropertyKey } from "..";

declare function CreateNonEnumerableDataPropertyOrThrow(O: object, P: PropertyKey, V: unknown): void;
export = CreateNonEnumerableDataPropertyOrThrow;
