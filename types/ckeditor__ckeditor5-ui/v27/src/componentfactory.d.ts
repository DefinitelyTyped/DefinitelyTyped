import { Editor } from "@ckeditor/ckeditor5-core";
import { Locale } from "@ckeditor/ckeditor5-utils";
import View from "./view";

export default class ComponentFactory {
    readonly editor: Editor;
    constructor(editor: Editor);
    add(name: string, callback: (locale: Locale) => View): void;
    create(name: string): View;
    has(name: string): boolean;
    names(): Generator<string>;
}
