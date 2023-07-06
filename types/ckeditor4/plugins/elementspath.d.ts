declare namespace CKEDITOR {
    interface CKEditorPluginsEditorInternal {
        elementsPath?: elementsPath;
    }
    interface elementsPath {
        idBase: string;
        list: dom.element[];
        filters: filter[];
        onClick(elementsIndex: number): void;
    }

    namespace elementsPath {
        namespace events {
            interface elementsPathUpdate extends eventData {
                space: dom.element;
            }

            interface selectionChange extends eventData {
                selection: dom.selection;
            }
        }
    }
}
