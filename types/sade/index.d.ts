// Type definitions for sade 1.6
// Project: https://github.com/lukeed/sade#readme
// Definitions by: Epimodev <https://github.com/Epimodev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as mri from 'mri';

type Handler = (...args: any[]) => void;

declare namespace sade {
    interface CommandOptions {
        default?: boolean;
    }

    interface ParseOptions extends mri.Options {
        lazy?: boolean;
    }

    interface Sade {
        command(str: string, desc?: string, opts?: Readonly<CommandOptions>): Sade;
        describe(str: string | ReadonlyArray<string>): Sade;
        option(str: string, desc: string, val?: string | number): Sade;
        action(handler: Handler): Sade;
        example(str: string): Sade;
        version(str: string): Sade;
        parse(arr: string[], opts?: Readonly<ParseOptions>): { args: string[]; name: string; handler: Handler } | void;
        help(str: string): void;
    }
}

declare function sade(str: string, isOne?: boolean): sade.Sade;

export = sade;
