import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import Range from '@ckeditor/ckeditor5-engine/src/view/range';
import { Normalizer } from '../normalizer';

export default class GoogleDocsNormalizer implements Normalizer {
    constructor(document: Document);
    readonly document: Document;
    isActive(htmlString: string): boolean;
    execute(
        data:
            | {
                  content: DocumentFragment;
                  dataTransfer: CKDataTransfer;
                  method: 'drop';
                  targetRanges: Range[];
              }
            | {
                  content: DocumentFragment;
                  dataTransfer: CKDataTransfer;
                  method: 'paste';
              },
    ): void;
}
