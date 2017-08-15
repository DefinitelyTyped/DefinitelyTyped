export type ClassNamesFn = (
    ...args: Array<string | string[] | Record<string, boolean | undefined | null>>
) => string;

export function bind(styles: Record<string, string>): ClassNamesFn;
