import { DataProcessor } from '@ckeditor/ckeditor5-engine/src/dataprocessor/dataprocessor';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import { MatcherPattern } from '@ckeditor/ckeditor5-engine/src/view/matcher';

export default class GFMDataProcessor implements DataProcessor {
    constructor(document: Document);
    keepHtml(element: string): void;
    toView(data: string): DocumentFragment;
    toData(viewFragment: DocumentFragment): string;
    registerRawContentMatcher(pattern: MatcherPattern): void;
    useFillerType(): void;
}
