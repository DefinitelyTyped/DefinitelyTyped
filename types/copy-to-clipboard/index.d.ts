// Type definitions for copy-to-clipboard 3.0
// Project: https://github.com/sudodoki/copy-to-clipboard
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
  debug?: boolean
  message?: string
}

declare function copy(text: string, options?: Options): void;
declare namespace copy {}
export = copy;
