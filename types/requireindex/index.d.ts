// Type definitions for requireindex 1.2
// Project: https://github.com/stephenhandley/requireindex
// Definitions by: Brad Zacher <https://github.com/bradzacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function requireindex(
    path: string,
    basenames?: ReadonlyArray<string>,
): {[filename: string]: any};

export = requireindex;
