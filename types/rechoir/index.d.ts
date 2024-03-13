import { Extensions } from "interpret";

export function prepare(
    config: Extensions,
    filepath: string,
    requireFrom?: string,
): true | Attempt[];

export interface Attempt {
    moduleName: string;
    module: any;
    error: Error | null;
}
