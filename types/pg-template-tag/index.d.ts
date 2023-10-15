// Type definitions for pg-template-tag 0.1
// Project: https://github.com/xecycle/pg-template-tag
// Definitions by: Johan Levin <https://github.com/johan13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SqlLiteral {
    text: string;
    values: unknown[];
}

export default function SQLTag(parts: TemplateStringsArray, ...values: ReadonlyArray<unknown>): SqlLiteral;

export function sqlLiteral(value: string): SqlLiteral;

export function join(array: ReadonlyArray<unknown>, separator?: string): SqlLiteral;
