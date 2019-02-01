// Type definitions for cli-truncate 1.1
// Project: https://github.com/sindresorhus/cli-truncate
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cliTruncate;

declare function cliTruncate(
  input: string,
  columns: number,
  options?: {position?: 'start' | 'middle' | 'end'},
): string;
