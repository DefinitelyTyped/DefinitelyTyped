declare namespace CKEDITOR {
    interface CKEditorStatic {
        xml: typeof xml;
    }
    class xml {
        baseXml: unknown;

        constructor(xmlObjectOrData: unknown);

        getInnerXml(xpath: string, contextNode?: unknown): string;

        selectNodes(xpath: string, contextNode?: unknown): unknown[];

        selectSingleNode(xpath: string, contextNode?: unknown): unknown;
    }
}
