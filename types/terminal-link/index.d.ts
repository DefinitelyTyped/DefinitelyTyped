// Type definitions for terminal-link 1.1
// Project: https://github.com/sindresorhus/terminal-link#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = terminalLink;

declare function terminalLink(text: string, url: string, options?: terminalLink.Options): string;

declare namespace terminalLink {
    function isSupported(): boolean;

    interface Options {
        fallback?: (text: string, url: string) => string;
    }
}
