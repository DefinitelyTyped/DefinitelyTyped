import { Plugin } from "@ckeditor/ckeditor5-core";
import CloudServicesUploadAdapter from "./cloudservicesuploadadapter";

export default class EasyImage extends Plugin {
    static requires: [typeof CloudServicesUploadAdapter, "Image", "ImageUpload"];
    static pluginName: "EasyImage";
}
