// Type definitions for buble 0.19.6
// Project: https://github.com/Rich-Harris/buble
// Definitions by: Kocal <https://github.com/Kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TransformOptions {}

interface TransformOutput {}

export function transform(content: string, options?: TransformOptions = {}): TransformOutput;

