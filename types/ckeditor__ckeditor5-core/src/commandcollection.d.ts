import Command from './command';

// tslint:disable-next-line:no-empty-interface
export interface Commands {}

/**
 * Collection of commands. Its instance is available in {@link module:core/editor/editor~Editor#commands `editor.commands`}.
 */
export default class CommandCollection implements Iterable<[string, Command]> {
    /**
     * Registers a new command.
     */
    add(commandName: string, command: Command): void;

    /**
     * Retrieves a command from the collection.
     */
    get<T extends keyof Commands>(key: T): Commands[T] | undefined;
    get(key: string): Command | undefined;

    /**
     * Executes a command.
     */
    execute<C extends keyof Commands>(
        commandName: C,
        ...args: Parameters<Commands[C]['execute']>
    ): ReturnType<Commands[C]['execute']>;

    /**
     * Returns iterator of command names.
     */
    names(): Generator<string, void, undefined>;

    /**
     * Returns iterator of command instances.
     */
    commands(): Generator<Command, void, undefined>;

    /**
     * Iterable interface.
     *
     * Returns `[ commandName, commandInstance ]` pairs.
     */
    [Symbol.iterator](): IterableIterator<[string, Command]>;

    /**
     * Destroys all collection commands.
     */
    destroy(): void;
}
