// Type definitions for sass-webpack-plugin 1.0
// Project: https://github.com/jalkoby/sass-webpack-plugin
// Definitions by: AEPKILL <https://github.com/AepKill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Options } from 'node-sass';
import { Plugin } from 'webpack';

declare namespace SassPlugin {
  type NODE_ENV = 'production' | 'development';
  type FileRule = string | string[] | { [key: string]: string };
  interface Config {
    sourceMap?: boolean;
    autoprefixer?: boolean;
    sass?: Options;
  }
}

declare class SassPlugin extends Plugin {
  constructor(
    file: SassPlugin.FileRule,
    mode?: SassPlugin.NODE_ENV | SassPlugin.Config
  );
  constructor(
    file: SassPlugin.FileRule,
    mode: SassPlugin.NODE_ENV,
    config?: SassPlugin.Config
  );
}

export = SassPlugin;
