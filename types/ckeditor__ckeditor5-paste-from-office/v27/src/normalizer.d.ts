import DataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import Range from '@ckeditor/ckeditor5-engine/src/view/range';

export interface Normalizer {
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
    isActive(htmlString: string): boolean;
}
