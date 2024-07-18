export interface SqlLiteral {
    text: string;
    values: unknown[];
}

export default function SQLTag(parts: TemplateStringsArray, ...values: readonly unknown[]): SqlLiteral;

export function sqlLiteral(value: string): SqlLiteral;

export function join(array: readonly unknown[], separator?: string): SqlLiteral;
