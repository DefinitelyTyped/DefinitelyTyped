export class ArgumentParser extends ArgumentGroup {
    constructor(options?: ArgumentParserOptions);
    add_subparsers(options?: SubparserOptions): SubParser;
    parse_args(args?: string[], ns?: Namespace | object): any;
    parse_intermixed_args(args?: string[], ns?: Namespace | object): any;
    print_usage(): void;
    print_help(): void;
    format_usage(): string;
    format_help(): string;
    parse_known_args(args?: string[], ns?: Namespace | object): any[];
    parse_known_intermixed_args(args?: string[], ns?: Namespace | object): any[];
    convert_arg_line_to_args(argLine: string): string[];
    exit(status: number, message: string): void;
    error(err: string | Error): void;
}

// tslint:disable-next-line:no-unnecessary-class
export class Namespace {
    constructor(options: object);
    [key: string]: any;
}

export class SubParser {
    add_parser(name: string, options?: SubArgumentParserOptions): ArgumentParser;
}

type StrOrOptions = string | ArgumentOptions;

export class ArgumentGroup {
    /**
     * One argument
     */
    add_argument(name: string, options?: ArgumentOptions): void;

    /**
     * Arguments array
     */
    add_argument(args: string[], options?: ArgumentOptions): void;

    /** 2-9 arguments with options */
    add_argument(arg1: string, arg2: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, arg4: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string, options: ArgumentOptions): void;
    add_argument(arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: string, arg8: string, arg9: string, options: ArgumentOptions): void;

    /**
     * More than one argument without options
     */
    add_argument(...args: string[]): void;

    /** More than 9 arguments with options (not recommended) */
    add_argument(...args_and_options: StrOrOptions[]): void;

    add_argument_group(options?: ArgumentGroupOptions): ArgumentGroup;
    add_mutually_exclusive_group(options?: { required: boolean }): ArgumentGroup;
    set_defaults(options?: {}): void;
    get_default(dest: string): any;
}

export interface SubparserOptions {
    title?: string | undefined;
    description?: string | undefined;
    prog?: string | undefined;
    parser_class?: { new(): any } | undefined;
    action?: string | undefined;
    dest?: string | undefined;
    help?: string | undefined;
    metavar?: string | undefined;
    required?: boolean | undefined;
}

export interface SubArgumentParserOptions extends ArgumentParserOptions {
    aliases?: string[] | undefined;
    help?: string | undefined;
}

export interface ArgumentParserOptions {
    description?: string | undefined;
    epilog?: string | undefined;
    add_help?: boolean | undefined;
    argument_default?: any;
    parents?: ArgumentParser[] | undefined;
    prefix_chars?: string | undefined;
    fromfile_prefix_chars?: string | undefined;
    formatter_class?: {
        new(): HelpFormatter | ArgumentDefaultsHelpFormatter | RawDescriptionHelpFormatter | RawTextHelpFormatter;
    } | undefined;
    prog?: string | undefined;
    usage?: string | undefined;
    exit_on_error?: boolean | undefined;
}

export interface ArgumentGroupOptions {
    prefix_chars?: string | undefined;
    argument_default?: any;
    title?: string | undefined;
    description?: string | undefined;
}

export abstract class Action {
    protected dest: string;
    constructor(options: ActionConstructorOptions);
    abstract call(
        parser: ArgumentParser,
        namespace: Namespace,
        values: string | string[],
        optionString: string | null,
    ): void;
}

// Can be used in conjunction with the exit_on_error flag to save the error message
// and use it in a fashion other than printing to stdout.
export class ArgumentError extends Error {
    constructor(argument: Action, message: string);
    str(): string;
}

// An error from trying to convert a command line string to a type.
export class ArgumentTypeError extends Error {
    constructor(message: string);
}

// Passed to the Action constructor.  Subclasses are just expected to relay this to
// the super() constructor, so using an "opaque type" pattern is probably fine.
// Someone may want to fill this out in the future.
export type ActionConstructorOptions = number & { _: "ActionConstructorOptions" };

export class HelpFormatter {}
export class ArgumentDefaultsHelpFormatter {}
export class RawDescriptionHelpFormatter {}
export class RawTextHelpFormatter {}

export interface ArgumentOptions {
    action?: string | { new(options: ActionConstructorOptions): Action } | undefined;
    option_strings?: string[] | undefined;
    dest?: string | undefined;
    nargs?: string | number | undefined;
    const?: any;
    default?: any;
    // type may be a string (primitive) or a Function (constructor)
    type?: string | Function | undefined; // eslint-disable-line @typescript-eslint/no-unsafe-function-type
    choices?: string | string[] | undefined;
    required?: boolean | undefined;
    help?: string | undefined;
    metavar?: string | string[] | undefined;
    version?: string | undefined;
}

export class BooleanOptionalAction extends Action {
    call(parser: ArgumentParser, namespace: Namespace, values: string | string[], optionString: string | null): void;
}

export const SUPPRESS: string;
export const OPTIONAL: string;
export const ZERO_OR_MORE: string;
export const ONE_OR_MORE: string;
export const REMAINDER: string;
export const PARSER: string;
