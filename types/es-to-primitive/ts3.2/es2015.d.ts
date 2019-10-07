declare function ToPrimitive(
	input: any,
	hint?: typeof String | typeof Number,
): string | number | bigint | boolean | symbol | null | undefined;
export = ToPrimitive;
