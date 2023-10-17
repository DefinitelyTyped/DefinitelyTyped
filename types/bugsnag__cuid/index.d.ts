// Type definitions for @bugsnag/cuid 3.0
// Project: https://github.com/bugsnag/cuid#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function cuid(): string;

declare namespace cuid {
    function fingerprint(): string;
}

export = cuid;
