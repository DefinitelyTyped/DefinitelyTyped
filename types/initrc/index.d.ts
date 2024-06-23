export class Init {
    startAdd(fun: () => void, level: number, name: string): boolean;
    /** @async */
    startRun(): Promise<void>;
    stopAdd(fun: () => void, level: number, name: string): boolean;
    /** @async */
    stopRun(): Promise<void>;
    status(): number;
}

export const Base: typeof Init;
export const base: typeof Init;
export const init: typeof Init;
