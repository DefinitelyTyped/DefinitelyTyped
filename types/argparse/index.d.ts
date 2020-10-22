// Type definitions for argparse 2.0
// Project: https://github.com/nodeca/argparse
// Definitions by: Andrew Schurman <https://github.com/arcticwaters>
//                 Tomasz Łaziuk <https://github.com/tlaziuk>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Kannan Goundan <https://github.com/cakoose>
//                 Halvor Holsten Strand <https://github.com/ondkloss>
//                 Dieter Oberkofler <https://github.com/doberkofler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export class ArgumentParser extends ArgumentGroup {
    constructor(options?: ArgumentParserOptions);
    add_subparsers(options?: SubparserOptions): SubParser;
    parse_args(args?: string[], ns?: Namespace | object): any;
    print_usage(): void;
    print_help(): void;
    format_usage(): string;
    format_help(): string;
    parse_known_args(args?: string[], ns?: Namespace | object): any[];
    convert_arg_line_to_arg(argLine: string): string[];
    exit(status: number, message: string): void;
    error(err: string | Error): void;
}

// tslint:disable-next-line:no-unnecessary-class
export class Namespace {
    constructor(options: object);
}

export class SubParser {
    add_parser(name: string, options?: SubArgumentParserOptions): ArgumentParser;
}

export class ArgumentGroup {
    add_argument(arg: string, options?: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, options?: ArgumentOptions): void;
    add_argument_group(options?: ArgumentGroupOptions): ArgumentGroup;
    add_mutually_exclusive_group(options?: { required: boolean }): ArgumentGroup;
    set_defaults(options?: {}): void;
    get_default(dest: string): any;
}

export interface SubparserOptions {
    title?: string;
    description?: string;
    prog?: string;
    parser_class?: { new (): any };
    action?: string;
    dest?: string;
    help?: string;
    metavar?: string;
}

export interface SubArgumentParserOptions extends ArgumentParserOptions {
    aliases?: string[];
    help?: string;
}

export interface ArgumentParserOptions {
    description?: string;
    epilog?: string;
    add_help?: boolean;
    argument_default?: any;
    parents?: ArgumentParser[];
    prefix_chars?: string;
    formatter_class?: { new (): HelpFormatter | ArgumentDefaultsHelpFormatter | RawDescriptionHelpFormatter | RawTextHelpFormatter };
    prog?: string;
    usage?: string;
}

export interface ArgumentGroupOptions {
    prefix_chars?: string;
    argument_default?: any;
    title?: string;
    description?: string;
}

export abstract class Action {
    protected dest: string;
    constructor(options: ActionConstructorOptions);
    abstract call(parser: ArgumentParser, namespace: Namespace, values: string | string[], optionString: string | null): void;
}

// Passed to the Action constructor.  Subclasses are just expected to relay this to
// the super() constructor, so using an "opaque type" pattern is probably fine.
// Someone may want to fill this out in the future.
export type ActionConstructorOptions = number & {_: 'ActionConstructorOptions'};

export class HelpFormatter { }
export class ArgumentDefaultsHelpFormatter { }
export class RawDescriptionHelpFormatter { }
export class RawTextHelpFormatter { }

export interface ArgumentOptions {
    action?: string | { new(options: ActionConstructorOptions): Action };
    option_strings?: string[];
    dest?: string;
    nargs?: string | number;
    const?: any;
    default?: any;
    // type may be a string (primitive) or a Function (constructor)
    type?: string | Function; // tslint:disable-line:ban-types
    choices?: string | string[];
    required?: boolean;
    help?: string;
    metavar?: string | string[];
    version?: string;
}

export const SUPPRESS: string;
export const OPTIONAL: string;
export const ZERO_OR_MORE: string;
export const ONE_OR_MORE: string;
export const REMAINDER: string;
export const PARSER: string;
