// Type definitions for get-folder-size 2.0
// Project: https://github.com/alessioalex/get-folder-size
// Definitions by: Mariusz Szczepańczyk <https://github.com/mszczepanczyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = getFolderSize;

declare function getFolderSize(folder: string, callback: (err: Error | null, size: number) => void): void;
declare function getFolderSize(folder: string, regexIgnorePattern: RegExp, callback: (err: Error | null, size: number) => void): void;
