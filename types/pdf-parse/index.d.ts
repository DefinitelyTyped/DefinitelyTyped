// Type definitions for pdf-parse 1.1
// Project: https://gitlab.com/autokent/pdf-parse
// Definitions by: Philipp Katz <https://github.com/qqilihq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PdfParse;

declare function PdfParse(dataBuffer: Buffer, options?: PdfParse.Options): Promise<PdfParse.Result>;

declare namespace PdfParse {
    type Version = 'default' | 'v1.9.426' | 'v1.10.100' | 'v1.10.88' | 'v2.0.550';
    interface Result {
        numpages: number;
        numrender: number;
        info: any;
        metadata: any;
        version: Version;
        text: string;
    }
    interface Options {
        pagerender?: (pageData: any) => string;
        max?: number;
        version?: Version;
    }
}
