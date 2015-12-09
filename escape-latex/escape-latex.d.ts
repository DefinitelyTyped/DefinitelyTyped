// Type definitions for escape-latex 0.1.2
// Project: https://github.com/dangmai/escape-latex
// Definitions by: Oliver Schneider <https://github.com/olsio>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'escape-latex' {
    function lescape(texString: string): string;
    export = lescape;
}