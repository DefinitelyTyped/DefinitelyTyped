// Type definitions for pascalcase 1.0
// Project: https://github.com/jonschlinkert/pascalcase
// Definitions by: IdeFFiX <https://github.com/ideffix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pascalcase;

declare function pascalcase(value?: string | number | null | { toString: () => string }): string;
