// Type definitions for sbd 1.0.15
// Project: https://github.com/Tessmore/sbd
// Definitions by: Brian Cort <https://github.com/thatcort>

export as namespace sbd;

export interface Options {
  newline_boundaries?: boolean;
  html_boundaries?: boolean;
  sanitize?: boolean;
  allowed_tags?: false | string[];
  preserve_whitespace?: boolean;
  abbreviations?: string[];
}

export function sentences(text: string, options?: Options): string[];
