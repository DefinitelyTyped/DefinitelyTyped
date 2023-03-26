// Type definitions for pagedjs-cli 0.3.4
// Project: https://www.npmjs.com/package/pagedjs-cli
// Definitions by: Valentin Schabschneider <https://github.com/valentinschabschneider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import EventEmitter from "events";
import { Browser, Page } from "puppeteer";

interface PrinterOptions {
  debug?: boolean;
  headless?: boolean;
  allowLocal?: boolean;
  allowRemote?: boolean;
  additionalScripts?: string[];
  allowedPaths?: string[];
  allowedDomains?: string[];
  ignoreHTTPSErrors?: boolean;
  browserEndpoint?: string;
  browserArgs?: string[];
  overrideDefaultBackgroundColor?: boolean;
  timeout?: number;
  closeAfter?: boolean;
  emulateMedia?: string;
  styles?: string[];
  enableWarnings?: boolean;
}

interface PDFOptions {
	outlineTags?: string[];
	width?: string | number;
	height?: string | number;
	orientation?: string;
}

export interface Printer extends EventEmitter {
	(options: PrinterOptions): Printer;
	async pdf: ((input: string | URL, options?: PDFOptions) => Uint8Array)
	async html: ((input: string | URL, stayopen?: boolean) => string)
	async preview: ((input: string | URL) => string)
}
