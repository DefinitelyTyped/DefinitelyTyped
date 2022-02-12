import { Plugin } from "@ckeditor/ckeditor5-core";
import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";

export default class ExportWord extends Plugin implements Emitter, Observable {}

export interface ExportWordConfig {
    converterOptions?: {
        margin_top?: 0 | string | undefined;
        margin_bottom?: 0 | string | undefined;
        margin_right?: 0 | string | undefined;
        margin_left?: 0 | string | undefined;
        auto_pagination?: boolean | undefined;
        format?:
            | "Letter"
            | "Legal"
            | "Tabloid"
            | "Ledger"
            | "Statement"
            | "Executive"
            | "A3"
            | "A4"
            | "A5"
            | "A6"
            | "B4"
            | "B5" | undefined;
        header?: Array<{
            html: string;
            css: string;
            type?: "default" | "even" | "odd" | "first" | undefined;
        }> | undefined;
        footer?: Array<{
            html: string;
            css: string;
            type?: "default" | "even" | "odd" | "first" | undefined;
        }> | undefined;
        timezone?: string | undefined;
        comments?: Array<
            Record<
                string,
                {
                    author: string;
                    content: string;
                    created: string;
                }
            >
        > | undefined;
        suggestions?: Record<
            string,
            {
                author: string;
                created: string;
            }
        > | undefined;
    } | undefined;
    converterUrl?: string | undefined;
    fileName?: string | undefined;
    stylesheets?: string[] | undefined;
    tokenUrl?: false | string | (() => Promise<string>) | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ExportWord: ExportWord;
    }
}
