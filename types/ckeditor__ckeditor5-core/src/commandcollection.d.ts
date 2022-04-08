import Command from "./command";

export default class CommandCollection implements Iterable<[string, Command]> {
    constructor();
    [Symbol.iterator](): Iterator<[string, Command]>;
    add(commandName: string, command: Command): void;
    commands(): Iterable<Command>;
    destroy(): void;
    execute(commandName: string, ...args: unknown[]): any;
    get(commandName: string): Command | undefined;
    names(): Iterable<string>;
}
