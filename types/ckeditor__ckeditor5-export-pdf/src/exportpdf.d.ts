import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import { Emitter } from "@ckeditor/ckeditor5-utils/src/emittermixin";
import { Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";

export default class ExportPdf extends Plugin implements Emitter, Observable {}

export interface ExportPdfConfig {
    converterOptions?: {
        margin_top?: 0 | string;
        margin_bottom?: 0 | string;
        margin_right?: 0 | string;
        margin_left?: 0 | string;
        format?: "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "Letter";
        page_orientation?: "portrait" | "landscape";
        header_and_footer_css?: string;
        footer_html?: string;
        header_html?: string;
        wait_for_selector?: string;
        wait_for_network?: boolean;
        wait_time?: number;
    };
    converterUrl?: string;
    dataCallback?(editor: Editor): string;
    fileName?: string;
    stylesheets?: string[];
    tokenUrl?: boolean | string | (() => Promise<string>);
}
