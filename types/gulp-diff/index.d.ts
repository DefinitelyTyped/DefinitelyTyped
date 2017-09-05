// Type definitions for gulp-diff 1.0
// Project: https://github.com/creativelive/gulp-diff
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

/**
 * Gulp task to diff files in the stream against a destination.
 * @param dest target directory to diff against, defaults to diff against original source file
 */
declare function gulp_diff(dest?: string): stream.Transform;

declare namespace gulp_diff {
  const diff: typeof gulp_diff;

  function reporter(opts?: ReporterOptions): stream.Transform;
  interface ReporterOptions {
    /**
     * do not show diff information, defaults to `false`
     */
    quiet?: boolean;
    /**
     * emit an error on finding diffs, defaults to `false`
     */
    fail?: boolean;
  }
}

export = gulp_diff;
