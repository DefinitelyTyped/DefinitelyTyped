import { Plugin } from "@ckeditor/ckeditor5-core";
import LinkEditing from "@ckeditor/ckeditor5-link/src/linkediting";
import { Notification } from "@ckeditor/ckeditor5-ui";

export default class CKFinderEditing extends Plugin {
    static pluginName: "CKFinderEditing";
    static requires: [typeof Notification, "ImageEditing", typeof LinkEditing];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CKFinderEditing: CKFinderEditing;
    }
}
