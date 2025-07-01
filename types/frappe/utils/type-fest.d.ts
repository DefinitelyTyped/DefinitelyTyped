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

// export type ConditionalKeys<Base, Condition> = (Base extends UnknownArray ? TupleToObject<Base> : Base) extends infer _Base // Remove non-numeric keys from arrays
// 	? IfNotAnyOrNever<_Base, _ConditionalKeys<_Base, Condition>, keyof _Base>
// 	: never;

// type _ConditionalKeys<Base, Condition> = keyof {
// 	[
// 	Key in (keyof Base & {}) as // `& {}` prevents homomorphism
// 	ExtendsStrict<Base[Key], Condition> extends true ? Key : never
// 	]: never
// };

// type IfNotAnyOrNever<T, IfNotAnyOrNever, IfAny = any, IfNever = never> =
// 	If<IsAny<T>, IfAny, If<IsNever<T>, IfNever, IfNotAnyOrNever>>;

// type IfNever<T, TypeIfNever = true, TypeIfNotNever = false> = (
// 	IsNever<T> extends true ? TypeIfNever : TypeIfNotNever
// );

// type IsNever<T> = [T] extends [never] ? true : false;

// type IfAny<T, TypeIfAny = true, TypeIfNotAny = false> = (
// 	IsAny<T> extends true ? TypeIfAny : TypeIfNotAny
// );

// type IsAny<T> = 0 extends 1 & NoInfer<T> ? true : false;

// type If<Type extends boolean, IfBranch, ElseBranch> =
// IsNever<Type> extends true
// 	? ElseBranch
// 	: Type extends true
// 		? IfBranch
// 		: ElseBranch;

// type UnknownArray = readonly unknown[];

// type ExtendsStrict<Left, Right> =
// 	IsAny<Left | Right> extends true
// 		? true
// 		: IsNever<Left> extends true
// 			? IsNever<Right>
// 			: [Left] extends [Right]
// 				? true
// 				: false;

// type TupleToObject<TArray extends UnknownArray> = If<IsAny<TArray>, any, {
// 	[
// 	Key in keyof TArray as Key & (`${number}` | (IsTuple<TArray> extends true ? never : number))
// 	]: TArray[Key];
// }>;

// type IsTuple<
// 	TArray extends UnknownArray,
// 	Options extends IsTupleOptions = {},
// > =
// 	_IsTuple<TArray, ApplyDefaultOptions<IsTupleOptions, DefaultIsTupleOptions, Options>>;

// type _IsTuple<
// 	TArray extends UnknownArray,
// 	Options extends Required<IsTupleOptions>,
// > =
// 	If<IsAny<TArray>, boolean, If<IsNever<TArray>, false,
// 		TArray extends unknown // For distributing `TArray`
// 			? number extends TArray['length']
// 				? Options['fixedLengthOnly'] extends false
// 					? If<IsNever<keyof TArray & `${number}`>,
// 						TArray extends readonly [...any, any] ? true : false, // To handle cases where a non-rest element follows a rest element, e.g., `[...number[], number]`
// 						true>
// 					: false
// 				: true
// 			: false
// 	>>;

// type ApplyDefaultOptions<
// 	Options extends object,
// 	Defaults extends Simplify<Omit<Required<Options>, RequiredKeysOf<Options>> & Partial<Record<RequiredKeysOf<Options>, never>>>,
// 	SpecifiedOptions extends Options,
// > =
// 	If<IsAny<SpecifiedOptions>, Defaults,
// 		If<IsNever<SpecifiedOptions>, Defaults,
// 			Simplify<Merge<Defaults, {
// 				[Key in keyof SpecifiedOptions
// 				as Key extends OptionalKeysOf<Options> ? undefined extends SpecifiedOptions[Key] ? never : Key : Key
// 				]: SpecifiedOptions[Key]
// 			}> & Required<Options>>>>