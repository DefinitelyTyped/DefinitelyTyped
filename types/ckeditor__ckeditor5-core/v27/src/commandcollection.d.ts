import Command, { CommandInterface } from './command';

// tslint:disable-next-line:no-empty-interface
export interface Commands {}

export default class CommandCollection implements Iterable<[string, Command]> {
    constructor();
    [Symbol.iterator](): Iterator<[string, Command]>;
    add(commandName: string, command: Command): void;
    commands(): Iterable<Command>;
    destroy(): void;
    execute(commandName: string, ...args: unknown[]): any;
    get<T extends Command>(key: CommandInterface<T>): T | undefined;
    get<T extends keyof Commands>(key: T): Commands[T] | undefined;
    get(key: string): Command | undefined;
    names(): Iterable<string>;
}
