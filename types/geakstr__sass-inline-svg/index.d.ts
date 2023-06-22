// Type definitions for @geakstr/sass-inline-svg 1.0
// Project: https://github.com/geakstr/sass-inline-svg
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function inliner(
    svgPath: string,
    options?: {
        encodingFormat?: 'base64' | 'uri';
        optimize?: boolean;
    },
): (path: string, selectors: string) => string;

export = inliner;
