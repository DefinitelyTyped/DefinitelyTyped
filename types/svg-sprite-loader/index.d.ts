// Type definitions for svg-sprite-loader 3.9
// Project: https://github.com/kisenka/svg-sprite-loader/releases, https://github.com/kisenka/svg-sprite-loader
// Definitions by: Ryan Clark <https://github.com/rynclark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { loader } from 'webpack';

export = SVGSpriteLoader;

declare function SVGSpriteLoader(
  this: loader.LoaderContext,
  source: string | Buffer
): string | Buffer | void | undefined;
