/// <reference types="node" />

declare module "@turbodocx/html-to-docx" {
    namespace HtmlToDocx {
        interface Margins {
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
            header?: number;
            footer?: number;
            gutter?: number;
        }

        interface PageSize {
            width?: number;
            height?: number;
        }

        interface Row {
            cantSplit?: boolean;
        }

        interface Table {
            row?: Row;
            borderOptions?: {
                size?: number;
                stroke?: string;
                color?: string;
            };
            addSpacingAfter?: boolean;
        }

        interface LineNumberOptions {
            start: number;
            countBy: number;
            restart: "continuous" | "newPage" | "newSection";
        }

        interface DocumentOptions {
            orientation?: "portrait" | "landscape";
            pageSize?: PageSize;
            margins?: Margins;
            title?: string;
            subject?: string;
            creator?: string;
            keywords?: string[];
            description?: string;
            lastModifiedBy?: string;
            revision?: number;
            createdAt?: Date;
            modifiedAt?: Date;
            headerType?: "default" | "first" | "even";
            header?: boolean;
            footerType?: "default" | "first" | "even";
            footer?: boolean;
            font?: string;
            fontSize?: number;
            complexScriptFontSize?: number;
            table?: Table;
            pageNumber?: boolean;
            skipFirstHeaderFooter?: boolean;
            lineNumber?: boolean;
            lineNumberOptions?: LineNumberOptions;
            numbering?: {
                defaultOrderedListStyleType?: string;
            };
            decodeUnicode?: boolean;
            lang?: string;
            preprocessing?: {
                skipHTMLMinify?: boolean;
            };
        }
    }

    function HtmlToDocx(
        htmlString: string,
        headerHTMLstring?: string | null,
        documentOptions?: HtmlToDocx.DocumentOptions,
        footerHtmlString?: string | null,
    ): Promise<ArrayBuffer> | Promise<Blob>;

    export = HtmlToDocx;
}
