export interface Builder {
    (classname?: string, modifiers?: { [index: string]: any }): string;
}

export function createBuilder(...classnames: string[]): Builder;
export function create(...classnames: string[]): Builder;
export function isBuilder(target: any): target is Builder;
