// Type definitions for html-pdf v2.1.0
// Project: https://github.com/marcbachmann/node-html-pdf
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'html-pdf' {

  import * as fs from 'fs';

  export interface CreateOptions {

    // Export options
    directory?: string;

    // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
    height?: string;
    width?: string;
    format?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid';
    orientation?: 'portrait' | 'landscape';

    // Page options
    border?: string | {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };

    header?: {
      height?: string;
      contents?: string;
    };
    footer?: {
      height?: string;
      contents?: {
        first?: string;
        [page: number]: string;
        default?: string;
        last?: string;
      };
    };

    // Rendering options
    base?: string;

    // Zooming option, can be used to scale images if `options.type` is not pdf
    zoomFactor?: string;

    // File options
    type?: 'png' | 'jpeg' | 'pdf';
    quality?: string;

    // Script options
    phantomPath?: string;
    phantomArgs?: string[];
    script?: string;
    timeout?: number;

    // HTTP Headers that are used for requests
    httpHeaders?: {
      [header: string]: string;
    };

  }

  export interface FileInfo {
    filename: string;
  }

  export interface CreateResult {
    toBuffer(callback: (err: Error, buffer: Buffer) => void): void;
    toFile(callback: (err: Error, res: FileInfo) => void): void;
    toFile(filename?: string, callback?: (err: Error, res: FileInfo) => void): void;
    toStream(callback: (err: Error, stream: fs.ReadStream) => void): void;
  }

  export function create(html: string, options?: CreateOptions): CreateResult;
}
