// Type definitions for detect-newline 2.1
// Project: https://github.com/sindresorhus/detect-newline#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = detectNewline;

declare function detectNewline(str: string): '\r\n' | '\n' | null;

declare namespace detectNewline {
    function graceful(str: string): '\r\n' | '\n';
}
