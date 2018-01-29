// Type definitions for d3-fetch 1.0.1
// Project: https://d3js.org/d3-fetch/
// Definitions by: Hugues Stefanski <https://github.com/ledragon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**Fetches the binary file at the specified input URL as a Blob. */
export function blob<ResponseData>(input: string): Promise<ResponseData>;
/**Fetches the binary file at the specified input URL as a Blob. Passes init along to the underlying call to fetch. */
export function blob<ResponseData>(input: string, init: RequestInit): Promise<ResponseData>;
/**Fetches the binary file at the specified input URL as an ArrayBuffer. */
export function buffer<ResponseData>(input: string): Promise<ResponseData>;
/**Fetches the binary file at the specified input URL as an ArrayBuffer. Passes init along to the underlying call to fetch. */
export function buffer<ResponseData>(input: string, init: RequestInit): Promise<ResponseData>;

/**Equivalent to d3.dsv with the comma character as the delimiter. */
export function csv<ResponseData>(input: string): Promise<ResponseData>;
/**Equivalent to d3.dsv with the comma character as the delimiter. */
export function csv<ResponseData>(input: string, init: RequestInit): Promise<ResponseData>;
/**Equivalent to d3.dsv with the comma character as the delimiter. */
export function csv<ResponseData>(input: string, init: RequestInit, row: (d: any) => any): Promise<ResponseData>;

/**Fetches the DSV file at the specified input URL. */
export function dsv<ResponseData>(delimiter: string, input: string): Promise<ResponseData>;
export function dsv<ResponseData>(delimiter: string, input: string, init: RequestInit): Promise<ResponseData>;
export function dsv<ResponseData>(delimiter: string, input: string, init: RequestInit, row: any): Promise<ResponseData>;

/**Fetches the image at the specified input URL. */
export function image<ResponseData>(input: string): Promise<ResponseData>;
/**Fetches the image at the specified input URL. Passes init along to the underlying call to fetch. */
export function image<ResponseData>(input: string, init: RequestInit): Promise<ResponseData>;

/**Fetches the json file at the specified input URL. */
export function json<ResponseData>(input: string): Promise<ResponseData>;
/**Fetches the json file at the specified input URL. Passes init along to the underlying call to fetch. */
export function json<ResponseData>(input: string, init: RequestInit): Promise<ResponseData>;

/**Fetches the text file at the specified input URL. */
export function text(input: string): Promise<string>;
/**Fetches the text file at the specified input URL. Passes init along to the underlying call to fetch. */
export function text(input: string, init: RequestInit): Promise<string>;

/**Equivalent to d3.dsv with the tab character as the delimiter. */
export function tsv<ResponseData>(input: string): Promise<ResponseData>;
/**Equivalent to d3.dsv with the tab character as the delimiter. */
export function tsv<ResponseData>(input: string, init: RequestInit): Promise<ResponseData>;
/**Equivalent to d3.dsv with the tab character as the delimiter. */
export function tsv<ResponseData>(input: string, init: RequestInit, row: (d: any) => any): Promise<ResponseData>;
