export class Hooks {
    // Can't find a way to type this more specifically
    // without conflicting with the types of add and run
    [name: string]: any;

    add(name: string | string[], callback: (env: Record<string, any>) => void, first?: boolean): void;
    run(name: string, env?: { context?: Record<string, any> }): void;
}

declare const hooks: Hooks;

export default hooks;
