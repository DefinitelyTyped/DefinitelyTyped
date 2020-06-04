// Type definitions for sade 1.7
// Project: https://github.com/lukeed/sade#readme
// Definitions by: Epimodev <https://github.com/Epimodev>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as mri from 'mri';

type Handler = (...args: any[]) => void;

/**
 * Sade is a small but powerful tool for building command-line interface (CLI) applications for Node.js that are fast, responsive, and helpful!
 * It enables default commands, git-like subcommands, option flags with aliases, default option values with type-casting,
 * required-vs-optional argument handling, command validation, and automated help text generation!
 */
declare namespace sade {
    interface CommandOptions {
        /**
         * Optionally define one or more aliases for the current Command.
         * When declared, the `opts.alias` value is passed directly to the [`prog.alias`](#progaliasnames) method.
         */
        alias?: string | string[];
        default?: boolean;
    }

    interface ParseOptions extends mri.Options {
        lazy?: boolean;
    }

    interface Sade {
        /**
         * Define one or more aliases for the current Command.
         */
        alias(...names: string[]): Sade;
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
