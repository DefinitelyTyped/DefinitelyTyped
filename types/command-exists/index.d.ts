// Type definitions for command-exists 1.2
// Project: https://github.com/mathisonian/command-exists
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = commandExists;

declare function commandExists(commandName: string): Promise<string>;
declare function commandExists(
    commandName: string,
    cb: (error: null, exists: boolean) => void
): void;

declare namespace commandExists {
    function sync(commandName: string): boolean;
}
