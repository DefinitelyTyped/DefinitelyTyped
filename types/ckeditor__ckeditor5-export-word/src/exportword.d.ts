import { Plugin } from "@ckeditor/ckeditor5-core";
import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";

export default class ExportWord extends Plugin implements Emitter, Observable {}

export interface ExportWordConfig {
    converterOptions?: {
        margin_top?: 0 | string;
        margin_bottom?: 0 | string;
        margin_right?: 0 | string;
        margin_left?: 0 | string;
        auto_pagination?: boolean;
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
            | "B5";
        header?: Array<{
            html: string;
            css: string;
            type?: "default" | "even" | "odd" | "first";
        }>;
        footer?: Array<{
            html: string;
            css: string;
            type?: "default" | "even" | "odd" | "first";
        }>;
        timezone?: string;
        comments?: Array<
            Record<
                string,
                {
                    author: string;
                    content: string;
                    created: string;
                }
            >
        >;
        suggestions?: Record<
            string,
            {
                author: string;
                created: string;
            }
        >;
    };
    converterUrl?: string;
    fileName?: string;
    stylesheets?: string[];
    tokenUrl?: false | string | (() => Promise<string>);
}
