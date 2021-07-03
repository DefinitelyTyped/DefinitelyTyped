import { CommandEvent, CompositeDisposable, Disposable } from '../index';

export interface CommandRegistryTargetMap extends HTMLElementTagNameMap {
    [key: string]: EventTarget;
}

export type CommandRegistryListener<TargetType extends EventTarget> =
    | {
          didDispatch(event: CommandEvent<TargetType>): void | Promise<void>;
          displayName?: string;
          description?: string;
          hiddenInCommandPalette?: boolean;
      }
    | ((event: CommandEvent<TargetType>) => void | Promise<void>);

/**
 *  Associates listener functions with commands in a context-sensitive way
 *  using CSS selectors.
 */
export interface CommandRegistry {
    /** Register a single command. */
    add<T extends keyof CommandRegistryTargetMap>(
        target: T,
        commandName: string,
        listener: CommandRegistryListener<CommandRegistryTargetMap[T]>,
    ): Disposable;
    /** Register a single command. */
    add<T extends Node>(target: T, commandName: string, listener: CommandRegistryListener<T>): Disposable;

    /** Register multiple commands. */
    add<T extends keyof CommandRegistryTargetMap>(
        target: T,
        commands: {
            [key: string]: CommandRegistryListener<CommandRegistryTargetMap[T]>;
        },
    ): CompositeDisposable;
    /** Register multiple commands. */
    add<T extends Node>(
        target: T,
        commands: {
            [key: string]: CommandRegistryListener<T>;
        },
    ): CompositeDisposable;

    /** Find all registered commands matching a query. */
    findCommands(params: {
        target: string | Node;
    }): Array<{
        name: string;
        displayName: string;
        description?: string;
        tags?: string[];
    }>;

    /**
     *  Simulate the dispatch of a command on a DOM node.
     *  @return Either a Promise that resolves after all handlers complete or null if
     *  no handlers were matched.
     */
    dispatch(target: Node, commandName: string): Promise<void> | null;

    /** Invoke the given callback before dispatching a command event. */
    onWillDispatch(callback: (event: CommandEvent) => void): Disposable;

    /** Invoke the given callback after dispatching a command event. */
    onDidDispatch(callback: (event: CommandEvent) => void): Disposable;
}
