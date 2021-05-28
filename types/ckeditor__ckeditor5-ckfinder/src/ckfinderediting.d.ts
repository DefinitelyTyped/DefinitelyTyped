import { Plugin } from "@ckeditor/ckeditor5-core";
import { LinkEditing } from "@ckeditor/ckeditor5-link";
import { Notification } from "@ckeditor/ckeditor5-ui";

export default class CKFinderEditing extends Plugin {
    static pluginName: "CKFinderEditing";
    static requires: [typeof Notification, "ImageEditing", typeof LinkEditing];
    init(): void;
}
