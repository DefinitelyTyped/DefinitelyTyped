import DataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import Range from '@ckeditor/ckeditor5-engine/src/view/range';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import { Normalizer } from '../normalizer';

export default class MSWordNormalizer implements Normalizer {
    constructor(document: Document);
    readonly document: Document;
    isActive(htmlString: string): boolean;
    execute(
        data:
            | {
                  content: DocumentFragment;
                  dataTransfer: DataTransfer;
                  method: 'drop';
                  targetRanges: Range[];
              }
            | {
                  content: DocumentFragment;
                  dataTransfer: DataTransfer;
                  method: 'paste';
              },
    ): void;
}
