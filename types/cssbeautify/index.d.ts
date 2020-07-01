// Type definitions for CSS Beautify v0.3.1
// Project: https://github.com/senchalabs/cssbeautify
// Definitions by: rictic <https://github.com/rictic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
  /**
   * A string used for the indentation of the declaration (default is 4
   * spaces).
   */
  indent?: string;
  /**
   * Defines the placement of open curly brace, either end-of-line (default)
   * or separate-line
   */
  openbrace?: 'end-of-line'|'separate-line';

  /**
   * Always inserts a semicolon after the last ruleset(default is false)
   */
  autosemicolon?: boolean;
}
declare function beautify(cssText: string, options?: Options): string;

export = beautify;
