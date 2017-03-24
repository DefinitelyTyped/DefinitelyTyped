// Type definitions for Google Fonts API 1.0
// Project: https://developers.google.com/fonts/
// Definitions by: Dan Marshall <https://github.com/danmarshall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace google.fonts {
    interface WebfontList {
        kind: string;
        items: WebfontFamily[];
    }

    interface WebfontFamily {
        category?: string;
        kind: string;
        family: string;
        subsets: string[];
        variants: string[];
        version: string;
        lastModified: string;
        files: { [variant: string]: string };
    }
}
