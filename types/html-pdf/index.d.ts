// Type definitions for html-pdf v3.0.1
// Project: https://github.com/marcbachmann/node-html-pdf
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'html-pdf' {

  import * as fs from 'fs';

  export interface CreateOptions {

    // Export options
    directory?: string | undefined;

    // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
    height?: string | undefined;
    width?: string | undefined;
    format?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid' | undefined;
    orientation?: 'portrait' | 'landscape' | undefined;

    // Page options
    border?: string | {
      top?: string | undefined;
      right?: string | undefined;
      bottom?: string | undefined;
      left?: string | undefined;
    } | undefined;

    paginationOffset?: number | undefined;

    header?: {
      height?: string | undefined;
      contents?: string | undefined;
    } | undefined;
    footer?: {
      height?: string | undefined;
      contents?: {
        first?: string | undefined;
        [page: number]: string;
        default?: string | undefined;
        last?: string | undefined;
      } | undefined;
    } | undefined;

    // Rendering options
    base?: string | undefined;

    // Zooming option, can be used to scale images if `options.type` is not pdf
    zoomFactor?: string | undefined;

    // File options
    type?: 'png' | 'jpeg' | 'pdf' | undefined;
    quality?: string | undefined;

    // Script options
    phantomPath?: string | undefined;
    phantomArgs?: string[] | undefined;

    // Prevent local file:// access by passing '--local-url-access=false' to phantomjs
    // For security reasons you should keep the default value if you render
    // arbitrary html/js.
    // The default is `false`
    localUrlAccess?: boolean | undefined;

    script?: string | undefined;
    timeout?: number | undefined;

    // Time we should wait after window load
    renderDelay?: 'manual' | number | undefined;

    // HTTP Headers that are used for requests
    httpHeaders?: {
      [header: string]: string;
    } | undefined;

    // To run Node application as Windows service
    childProcessOptions?: {
      detached?: boolean | undefined;
    } | undefined;

    // HTTP Cookies that are used for requests
    httpCookies?: Array<{
      name: string;
      value: string;
      domain?: string | undefined;
      path: string;
      httponly?: boolean | undefined;
      secure?: boolean | undefined;
      expires?: number | undefined;
    }> | undefined;
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
