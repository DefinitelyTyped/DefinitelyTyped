import { Plugin } from "@ckeditor/ckeditor5-core";
import { FileRepository } from "@ckeditor/ckeditor5-upload";

export default class CloudServicesUploadAdapter extends Plugin {
    static pluginName: "CloudServicesUploadAdapter";
    static requires: ["CloudServices", typeof FileRepository];
}
