declare function ToPrimitive(
	input: unknown,
	hint?: typeof String | typeof Number,
): string | number | boolean | symbol | null | undefined;
export = ToPrimitive;
