declare function isPrimitive(value: unknown): value is string | number | bigint | boolean | symbol | undefined | null;
export = isPrimitive;
