// Type definitions for csp-hash-generator 0.0
// Project: https://github.com/miguel-a-calles-mba/csp-hash-generator
// Definitions by: Bob <https://github.com/bobcode99>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare function cspHashGenerator(
    inlineScriptOrStyle: string,
    options?: {
        algorithm: string;
    },
): string;
export = cspHashGenerator;
