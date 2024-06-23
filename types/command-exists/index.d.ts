export = commandExists;

declare function commandExists(commandName: string): Promise<string>;
declare function commandExists(
    commandName: string,
    cb: (error: null, exists: boolean) => void,
): void;

declare namespace commandExists {
    function sync(commandName: string): boolean;
}
