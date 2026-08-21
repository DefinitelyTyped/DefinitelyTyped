import { AbstractLevelDOWN, AbstractOptions } from "abstract-leveldown";

interface Level extends AbstractLevelDOWN {
    readonly location: string;
    readonly prefix: string;
    readonly version: string | number;
    destroy(location: string, cb: (err: Error | undefined) => void): void;
    destroy(location: string, prefix: string, cb: (err: Error | undefined) => void): void;
}

interface LevelOptions {
    readonly prefix?: string | undefined;
    readonly version?: string | number | undefined;
}

interface LevelConstructor {
    new(location: string, options?: LevelOptions): Level;
    (location: string, options?: LevelOptions): Level;
}

declare const Level: LevelConstructor;
export = Level;
