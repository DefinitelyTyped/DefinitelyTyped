// Type definitions for d3-fetch 1.0
// Project: https://d3js.org/d3-fetch/
// Definitions by: Hugues Stefanski <https://github.com/ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
import { DSVParsedArray, DSVRowString, DSVRowAny } from 'd3-dsv';

/** Fetches the binary file at the specified input URL as a Blob. If init is specified, it is passed along to the underlying call to fetch. */
export function blob<ResponseData>(url: string, init?: RequestInit): Promise<ResponseData>;
/** Fetches the binary file at the specified input URL as an ArrayBuffer. If init is specified, it is passed along to the underlying call to fetch. */
export function buffer<ResponseData>(url: string, init?: RequestInit): Promise<ResponseData>;

/** Equivalent to d3.dsv with the comma character as the delimiter. */
export function csv<ParsedRow extends DSVRowAny>(
    url: string,
    init?: RequestInit,
    row?: (d: DSVRowAny) => ParsedRow
): Promise<DSVParsedArray<ParsedRow>>;

/** Fetches the DSV file at the specified input URL. */
export function dsv<ParsedRow extends DSVRowAny>(
    delimiter: string,
    url: string,
    init?: RequestInit,
    row?: (d: DSVRowAny) => ParsedRow
): Promise<DSVParsedArray<ParsedRow>>;

/** Fetches the image at the specified input URL. If init is specified, it is passed along to the underlying call to fetch. */
export function image<ResponseData>(url: string, init?: RequestInit): Promise<ResponseData>;

/** Fetches the json file at the specified input URL. If init is specified, it is passed along to the underlying call to fetch. */
export function json<ResponseData>(url: string, init?: RequestInit): Promise<ResponseData>;

/** Fetches the text file at the specified input URL. If init is specified, it is passed along to the underlying call to fetch. */
export function text(url: string, init?: RequestInit): Promise<string>;

/** Equivalent to d3.dsv with the tab character as the delimiter. */
export function tsv<ParsedRow extends DSVRowAny>(
    url: string,
    init?: RequestInit,
    row?: (d: DSVRowAny) => ParsedRow
): Promise<DSVParsedArray<ParsedRow>>;
