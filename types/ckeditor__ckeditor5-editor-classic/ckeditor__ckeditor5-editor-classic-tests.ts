import { Editor, Plugin } from "@ckeditor/ckeditor5-core";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic";
import ClassicEditorUI from "@ckeditor/ckeditor5-editor-classic/src/classiceditorui";
import ClassicEditorUIView from "@ckeditor/ckeditor5-editor-classic/src/classiceditoruiview";
import { HtmlDataProcessor, StylesProcessor } from "@ckeditor/ckeditor5-engine";
import View from "@ckeditor/ckeditor5-engine/src/view/view";
import { EditorUIView, ToolbarView } from "@ckeditor/ckeditor5-ui";
import { Locale } from "@ckeditor/ckeditor5-utils";

ClassicEditor.ClassicEditor.create("", { placeholder: "foo" }).then(editor => {
    editor.commands.get("");
    ClassicEditor.ClassicEditor.defaultConfig?.plugins?.map(strOrPlugin => {
        if (typeof strOrPlugin !== "string") {
            new strOrPlugin(editor);
        }
    });
    editor.ui.editor instanceof Editor;
    const classicEditorUI = new ClassicEditorUI(editor, new EditorUIView());
    classicEditorUI.init(document.createElement("div"));
    classicEditorUI.init();
    new ClassicEditorUIView(new Locale(), new View(new StylesProcessor()), {
        shouldToolbarGroupWhenFull: true,
    });
});

let htmlElement: HTMLElement = document.createElement("div");
// $ExpectError;
new ClassicEditor.ClassicEditor();

class MyPlugin extends Plugin {}

(async () => {
    let editor = await ClassicEditor.ClassicEditor.create("foo");
    editor = await ClassicEditor.ClassicEditor.create(htmlElement);
    editor = await ClassicEditor.ClassicEditor.create(htmlElement, { plugins: [MyPlugin] });
    // $ExpectError
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // $ExpectError
    editor.setData();
    const processor: HtmlDataProcessor = editor.data.processor;
    editor.updateSourceElement();
    const elem: HTMLElement = editor.sourceElement!;
    const ui: ClassicEditorUI = editor.ui;
    const uiView: ClassicEditorUIView = editor.ui.view;

    editor = await ClassicEditor.ClassicEditor.create(htmlElement, {
        toolbar: {
            items: [],
            removeItems: [],
            viewportTopOffset: 0,
            shouldNotGroupWhenFull: true,
        },
    });

    editor.destroy().then(() => {});

    ui.init();
    ui.init(null);
    ui.init(htmlElement);
    let bool: boolean = ui.focusTracker.isFocused;

    bool = uiView.isRendered;
    bool = uiView.stickyPanel.isSticky;
    const num: number = uiView.stickyPanel.viewportTopOffset;

    htmlElement = ui.getEditableElement()!;

    uiView.render();
    const toolbarView: ToolbarView = uiView.toolbar;
    const locale: Locale = uiView.toolbar.locale!;
})();
