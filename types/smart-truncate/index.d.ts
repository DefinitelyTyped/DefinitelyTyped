// Type definitions for smart-truncate 1.0
// Project: https://github.com/millerized/smart-truncate
// Definitions by: Omer Yalhi <https://github.com/oyalhi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function smartTruncate(
    text: string,
    length: number,
    options?: { position?: number | undefined; mark?: string | undefined },
): string;
export = smartTruncate;
