import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { DecoupledEditor } from '@ckeditor/ckeditor5-editor-decoupled';
import DecoupledEditorUI from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitorui';
import DecoupledEditorUIView from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitoruiview';
import { HtmlDataProcessor, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { ToolbarView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

DecoupledEditor.create('', { placeholder: 'foo' }).then(editor => {
    editor.commands.get('');
    DecoupledEditor.defaultConfig?.plugins?.map(strOrPlugin => {
        if (typeof strOrPlugin !== 'string') {
            new strOrPlugin(editor);
        }
    });
    editor.ui.editor instanceof Editor;
    const decoupledEditorUI = new DecoupledEditorUI(
        editor,
        new DecoupledEditorUIView(new Locale(), new View(new StylesProcessor())),
    );
    decoupledEditorUI.init();
    new DecoupledEditorUIView(new Locale(), new View(new StylesProcessor()), {
        editableElement: document.createElement('div'),
        shouldToolbarGroupWhenFull: true,
    });
});

let htmlElement: HTMLElement = document.createElement('div');
// $ExpectError
new DecoupledEditor();

class MyPlugin extends Plugin {}

(async () => {
    let editor = await DecoupledEditor.create('foo');
    editor = await DecoupledEditor.create(htmlElement);
    editor = await DecoupledEditor.create(htmlElement, { plugins: [MyPlugin] });
    // $ExpectError
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // $ExpectError
    editor.setData();
    const processor: HtmlDataProcessor = editor.data.processor;
    const ui: DecoupledEditorUI = editor.ui;
    const uiView: DecoupledEditorUIView = editor.ui.view;

    editor = await DecoupledEditor.create(htmlElement, {
        toolbar: {
            items: [],
            removeItems: [],
            viewportTopOffset: 0,
            shouldNotGroupWhenFull: true,
        },
    });

    editor.destroy().then(() => {});

    ui.init();
    let bool: boolean = ui.focusTracker.isFocused;

    bool = uiView.isRendered;

    htmlElement = ui.getEditableElement()!;

    uiView.render();
    const toolbarView: ToolbarView = uiView.toolbar;
    const locale: Locale = uiView.toolbar.locale!;
})();
