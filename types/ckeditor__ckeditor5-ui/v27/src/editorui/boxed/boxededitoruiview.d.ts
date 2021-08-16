import { Locale } from "@ckeditor/ckeditor5-utils";
import ViewCollection from "../../viewcollection";
import EditorUIView from "../editoruiview";

export default class BoxedEditorUIView extends EditorUIView {
    main: ViewCollection;
    top: ViewCollection;

    constructor(locale: Locale);
}
