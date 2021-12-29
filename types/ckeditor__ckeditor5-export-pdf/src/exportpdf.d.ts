import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { Emitter } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

export default class ExportPdf extends Plugin implements Emitter, Observable {}

export interface ExportPdfConfig {
    converterOptions?:
        | {
              margin_top?: 0 | string | undefined;
              margin_bottom?: 0 | string | undefined;
              margin_right?: 0 | string | undefined;
              margin_left?: 0 | string | undefined;
              format?: 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6' | 'Letter' | undefined;
              page_orientation?: 'portrait' | 'landscape' | undefined;
              header_and_footer_css?: string | undefined;
              footer_html?: string | undefined;
              header_html?: string | undefined;
              wait_for_selector?: string | undefined;
              wait_for_network?: boolean | undefined;
              wait_time?: number | undefined;
          }
        | undefined;
    converterUrl?: string | undefined;
    dataCallback?(editor: Editor): string;
    fileName?: string | undefined;
    stylesheets?: string[] | undefined;
    tokenUrl?: boolean | string | (() => Promise<string>) | undefined;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ExportPdf: ExportPdf;
    }
}
