// Type definitions for truncate-middle 1.0
// Project: https://github.com/kahwee/truncate-middle#readme
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function truncateMiddle(text: string | null, frontLength?: number, backLength?: number, ellipsis?: string): string;

export = truncateMiddle;
