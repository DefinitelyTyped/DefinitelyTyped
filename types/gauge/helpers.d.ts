type Primitive = string | number | boolean | null | undefined;

type LiteralUnion<T, BaseType extends Primitive = LiteralToPrimitive<T>> =
  | T
  | (BaseType & Record<never, never>);

type LiteralToPrimitive<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends null
  ? null
  : T extends undefined
  ? undefined
  : never;
