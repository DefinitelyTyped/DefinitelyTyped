import { Locale } from "@ckeditor/ckeditor5-utils";
import View from "../view";
import ViewCollection from "../viewcollection";

export default class FormHeaderView extends View {
    readonly children: ViewCollection;
    class: string;
    label: string;

    constructor(locale: Locale, options?: { label: string; class?: string | undefined });
}
