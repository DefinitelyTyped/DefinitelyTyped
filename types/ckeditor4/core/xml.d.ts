declare namespace CKEDITOR {
    interface CKEditorStatic {
        xml: { new(xmlObjectOrData: unknown): xml };
    }
    interface xml {
        baseXml: unknown;

        getInnerXml(xpath: string, contextNode?: unknown): string;

        selectNodes(xpath: string, contextNode?: unknown): unknown[];

        selectSingleNode(xpath: string, contextNode?: unknown): unknown;
    }
}
