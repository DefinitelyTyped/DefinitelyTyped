import type { PropertyKey } from "..";

declare function isPropertyKey(argument: unknown): argument is PropertyKey;
export = isPropertyKey;
