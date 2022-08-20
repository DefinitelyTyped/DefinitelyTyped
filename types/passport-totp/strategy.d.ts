export = Strategy;

type DoneCallback = (...args: any[]) => void;

type SetupCallback = (user: any, done: DoneCallback) => void;

interface StrategyOptions {
    codeField?: string;
    window?: number;
}

declare function Strategy(setup: SetupCallback): void;
declare function Strategy(options: StrategyOptions, setup: SetupCallback): void;
declare class Strategy {
    constructor(setup: SetupCallback);
    constructor(options: StrategyOptions, setup: SetupCallback);
    name: string;
    /**
     * Authenticate request based on TOTP values.
     */
    authenticate(req: any, options: any): void;
}
