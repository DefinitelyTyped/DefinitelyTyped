declare namespace CKEDITOR {
    interface CKEditorStatic {
        dtd: dtdDefinition;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dtd.html */
    interface dtdDefinition {
        [outerTagName: string]: { [innerTagName: string]: 1 };

        $block: { [tagName: string]: 1 };
        $blockLimit: { [tagName: string]: 1 };
        $cdata: { [tagName: string]: 1 };
        $editable: { [tagName: string]: 1 };
        $empty: { [tagName: string]: 1 };
        $inline: { [tagName: string]: 1 };
        $intermediate: { [tagName: string]: 1 };
        $list: { [tagName: string]: 1 };
        $listItem: { [tagName: string]: 1 };
        $nonBodyContent: { [tagName: string]: 1 };
        $nonEditable: { [tagName: string]: 1 };
        $object: { [tagName: string]: 1 };
        $removeEmpty: { [tagName: string]: 1 };
        $tabIndex: { [tagName: string]: 1 };
        $tableContent: { [tagName: string]: 1 };
        $transparent: { [tagName: string]: 1 };
    }
}
