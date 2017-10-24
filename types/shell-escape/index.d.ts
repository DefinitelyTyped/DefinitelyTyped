// Type definitions for shell-escape 0.2
// Project: https://github.com/xxorax/node-shell-escape
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ShellEscape = (a: string[]) => string;

declare const shellEscape: ShellEscape;

export = shellEscape;
