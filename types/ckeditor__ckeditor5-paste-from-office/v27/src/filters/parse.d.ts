import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import { StylesProcessor } from '@ckeditor/ckeditor5-engine';

export function parseHtml(
    htmlString: string,
    stylesProcessor: StylesProcessor,
): {
    body: DocumentFragment;
    bodyString: string;
    styles: CSSStyleSheet[];
    stylesString: string;
};
