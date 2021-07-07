import { Locale } from "@ckeditor/ckeditor5-utils";
import View from "../view";
import ViewCollection from "../viewcollection";

export default class BodyCollection extends ViewCollection {
    locale: Locale;

    constructor(locale: Locale, initialItems?: Iterable<View>);
    attachToDom(): void;
    detachFromDom(): void;
}
