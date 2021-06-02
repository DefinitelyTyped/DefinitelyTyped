import { Plugin } from "@ckeditor/ckeditor5-core";
import FileRepository from "../filerepository";

export default class SimpleUploadAdapter extends Plugin {
    static requires: [typeof FileRepository];
    static pluginName: "SimpleUploadAdapter";

    init(): void;
}
