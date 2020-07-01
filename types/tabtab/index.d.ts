// Type definitions for tabtab 3.0
// Project: https://github.com/mklabs/node-tabtab
// Definitions by: Vojtěch Habarta <https://github.com/vojtechhabarta>
//                 Kamontat Chantrachirathumrong <https://github.com/kamontat>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export interface InstallOptions {
    /** The program to complete. */
    readonly name: string;

    /** The program that does the completion (can be the same program). */
    readonly completer: string;
}

export interface UninstallOptions {
    /** The program to remove completions for. */
    readonly name: string;
}

/**
 * Tabtab auto-completion environment data.
 */
export interface TabtabEnv {
    /**
     * A Boolean indicating whether we act in "plumbing mode" or not
     */
    complete: boolean;

    /**
     * The Number of words in the completed line
     */
    words: number;

    /**
     * A Number indicating cursor position
     */
    point: number;

    /**
     * The String input line
     */
    line: string;

    /**
     * The String part of line preceding cursor position
     */
    partial: string;

    /**
     * The last String word of the line
     */
    last: string;

    /**
     * The last word String of partial
     */
    lastPartial: string;

    /**
     * The String word preceding last
     */
    prev: string;
}

/**
 * A name/description pair for tab auto-complete.
 */
export interface CompletionItem {
    /**
     * The sub-command or option name.
     */
    name: string;

    /**
     * The optional description of the completion.
     */
    description?: string;
}

// Legacy aliases:
export {
    /** @deprecated */
    CompletionItem as CompleteItem,
    /** @deprecated */
    InstallOptions as InstallOption,
    /** @deprecated */
    UninstallOptions as UninstallOption,
};
/** @deprecated */
export type CompleteItemOrString = string | CompletionItem;

/**
 * Install and enable completion on user system.
 *
 * @param options install options
 */
export function install(options: InstallOptions): Promise<void>;

/**
 * Uninstall and remove completion on user system.
 *
 * @param options uninstall options
 */
export function uninstall(options: UninstallOptions): Promise<void>;

/**
 * Public: Main utility to extract information from command line arguments
 * and Environment variables, namely COMP args in "plumbing" mode.
 *
 * @param env environment (usually will be process.env)
 * @returns Tabtab completion information
 *
 * @example
 * ```js
 * const env = tabtab.parseEnv(process.env);
 * ```
 */
export function parseEnv(env: NodeJS.ProcessEnv): TabtabEnv;

/**
 * Helper to normalize strings and objects when displaying auto-completion possibilities.
 *
 * @example
 * ```js
 * completionItem("foo: bar");
 * // => { name: "foo", description: "bar" };
 *
 * completionItem({ name: "foo" });
 * // => { name: "foo" };
 * ```
 */
export function completionItem(item: string | CompletionItem): CompletionItem;

/**
 * Main logging utility to pass completion items.
 * This is simply an helper to log to stdout with each item separated by a new line.
 *
 * Bash needs in addition to filter out the args for the completion to work
 * (zsh, fish don't need this).
 *
 * @param args strings or objects with name and description property.
 */
export function log(args: Array<string | Readonly<CompletionItem>>): void;
