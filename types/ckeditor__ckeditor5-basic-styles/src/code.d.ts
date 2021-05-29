import { Plugin } from "@ckeditor/ckeditor5-core";
import CodeEditing from "./code/codeediting";
import CodeUI from "./code/codeui";

export default class Code extends Plugin {
    static readonly requires: [typeof CodeEditing, typeof CodeUI];
    static readonly pluginName: "Code";
}
