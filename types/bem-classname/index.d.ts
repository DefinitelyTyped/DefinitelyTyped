// Type definitions for bem-classname 0.1
// Project: https://github.com/Sunify/bem-classname
// Definitions by: pvcresin <https://github.com/pvcresin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
