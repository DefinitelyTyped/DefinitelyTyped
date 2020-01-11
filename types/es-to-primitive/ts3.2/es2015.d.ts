declare function ToPrimitive(
	input: unknown,
	hint?: typeof String | typeof Number,
): string | number | bigint | boolean | symbol | null | undefined;
export = ToPrimitive;
