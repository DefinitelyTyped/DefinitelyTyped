import { Plugin } from "@ckeditor/ckeditor5-core";
import FileRepository from "../filerepository";

export default class Base64UploadAdapter extends Plugin {
    static requires: [typeof FileRepository];
    static pluginName: "Base64UploadAdapter";

    init(): void;
}
