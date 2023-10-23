export interface SqlLiteral {
    text: string;
    values: unknown[];
}

export default function SQLTag(parts: TemplateStringsArray, ...values: ReadonlyArray<unknown>): SqlLiteral;

export function sqlLiteral(value: string): SqlLiteral;

export function join(array: ReadonlyArray<unknown>, separator?: string): SqlLiteral;
