import { Plugin } from "@ckeditor/ckeditor5-core";
import CloudServicesUploadAdapter from "./cloudservicesuploadadapter";

export default class EasyImage extends Plugin {
    static requires: [typeof CloudServicesUploadAdapter, "Image", "ImageUpload"];
    static pluginName: "EasyImage";
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        EasyImage: EasyImage;
    }
}
