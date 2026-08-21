type Block = string;
type Element = string;
type Modifier = string;
type Modifiers = unknown[] | Record<string, unknown>;

declare function bemClassName(
    block: Block,
    elementOrModifiers?: Element | Modifiers,
    modifier?: Modifier | Modifiers,
): string;

export = bemClassName;
