import { Plugin } from "@ckeditor/ckeditor5-core";
import { Notification } from "@ckeditor/ckeditor5-ui";

export default class CKFinderEditing extends Plugin {
    static pluginName: "CKFinderEditing";
    static requires: [typeof Notification, "ImageEditing", "LinkEditing"];
    init(): void;
}
