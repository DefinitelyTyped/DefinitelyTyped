import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { InlineEditor } from '@ckeditor/ckeditor5-editor-inline';
import InlineEditorUIView from '@ckeditor/ckeditor5-editor-inline/src/inlineeditoruiview';
import InlineEditorUI from '@ckeditor/ckeditor5-editor-inline/src/inlineeditorui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { HtmlDataProcessor, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import { ToolbarView } from '@ckeditor/ckeditor5-ui';

InlineEditor.create('', { placeholder: 'foo' }).then(editor => {
    editor.commands.get('');
    InlineEditor.defaultConfig?.plugins?.map(strOrPlugin => {
        if (typeof strOrPlugin !== 'string') {
            new strOrPlugin(editor);
        }
    });
    editor.ui.editor instanceof Editor;
    const inlineEditorUI = new InlineEditorUI(
        editor,
        new InlineEditorUIView(new Locale(), new View(new StylesProcessor())),
    );
// $ExpectError
    inlineEditorUI.init(document.createElement('div'));
    inlineEditorUI.init();
    new InlineEditorUIView(new Locale(), new View(new StylesProcessor()), document.createElement('div'), {
        shouldToolbarGroupWhenFull: true,
    });
});

let htmlElement: HTMLElement = document.createElement('div');
// $ExpectError
new InlineEditor();

class MyPlugin extends Plugin {
    init(): void {}
}

(async () => {
    let editor = await InlineEditor.create('foo');
    editor = await InlineEditor.create(htmlElement);
    editor = await InlineEditor.create(htmlElement, { plugins: [MyPlugin] });
    // $ExpectError
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // $ExpectError
    editor.setData();
    const processor: HtmlDataProcessor = editor.data.processor;
    editor.updateSourceElement();
    const elem: HTMLElement = editor.sourceElement!;
    const ui: InlineEditorUI = editor.ui;
    const uiView: InlineEditorUIView = editor.ui.view;

    editor = await InlineEditor.create(htmlElement, {
        toolbar: {
            items: [],
            removeItems: [],
            viewportTopOffset: 0,
            shouldNotGroupWhenFull: true,
        },
    });

    editor.destroy().then(() => {});

    ui.init();
    // $ExpectError
    ui.init(null);
    // $ExpectError
    ui.init(htmlElement);
    let bool: boolean = ui.focusTracker.isFocused;

    bool = uiView.isRendered;

    htmlElement = ui.getEditableElement()!;

    uiView.render();
    const toolbarView: ToolbarView = uiView.toolbar;
    const locale: Locale = uiView.toolbar.locale!;
})();
