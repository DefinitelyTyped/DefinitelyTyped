import * as mri from "mri";

/**
 * Sade is a small but powerful tool for building command-line interface (CLI) applications for Node.js that are fast, responsive, and helpful!
 * It enables default commands, git-like subcommands, option flags with aliases, default option values with type-casting,
 * required-vs-optional argument handling, command validation, and automated help text generation!
 */
declare namespace sade {
    type Handler = (...args: any[]) => any;

    interface CommandOptions {
        /**
         * Optionally define one or more aliases for the current Command.
         * When declared, the `opts.alias` value is passed directly to the [`prog.alias`](#progaliasnames) method.
         */
        alias?: string | string[] | undefined;
        default?: boolean | undefined;
    }

    interface ParseOptions extends mri.Options {
        lazy?: boolean | undefined;
    }

    interface LazyOutput {
        name: string;
        handler: Handler;
        args: string[];
    }

    interface Sade {
        /**
         * Define one or more aliases for the current Command.
         */
        alias(...names: string[]): Sade;
        command(str: string, desc?: string, opts?: Readonly<CommandOptions>): Sade;
        describe(str: string | ReadonlyArray<string>): Sade;
        option(str: string, desc?: string, val?: string | number | boolean): Sade;
        action(handler: Handler): Sade;
        example(str: string): Sade;
        version(str: string): Sade;
        help(str: string): void;

        parse(arr: string[], opts: { lazy: true } & ParseOptions): LazyOutput;
        parse(arr: string[], opts?: ParseOptions): void;
    }
}

declare function sade(str: string, isOne?: boolean): sade.Sade;

export = sade;
