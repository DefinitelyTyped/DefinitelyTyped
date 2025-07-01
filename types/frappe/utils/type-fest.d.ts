// Copied from https://github.com/sindresorhus/type-fest

export {} 

export type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

export type LiteralUnion<
	LiteralType,
	BaseType extends Primitive,
> = LiteralType | (BaseType & Record<never, never>);

export type LiteralStringUnion<T> = LiteralUnion<T, string>;

export type Arrayable<T> = T | T[];

export type UnknownRecord = Record<PropertyKey, unknown>;


export type ConditionalKeys<
  Base,
  Condition
> = {
  [Key in keyof Base]:
    Base[Key] extends Condition
      ? Key
      : never
}[keyof Base];
