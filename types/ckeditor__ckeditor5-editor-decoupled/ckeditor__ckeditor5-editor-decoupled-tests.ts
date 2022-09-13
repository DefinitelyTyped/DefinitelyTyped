import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { DecoupledEditor } from '@ckeditor/ckeditor5-editor-decoupled';
import DecoupledEditorUI from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitorui';
import DecoupledEditorUIView from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitoruiview';
import { StylesProcessor } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
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

const htmlElement = document.createElement('div');
// @ts-expect-error
new DecoupledEditor();

class MyPlugin extends Plugin {}

(async () => {
    let editor = await DecoupledEditor.create('foo');
    editor = await DecoupledEditor.create(htmlElement);
    editor = await DecoupledEditor.create(htmlElement, { plugins: [MyPlugin] });
    // @ts-expect-error
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // @ts-expect-error
    editor.setData();
    // $ExpectType HtmlDataProcessor
    editor.data.processor;
    // $ExpectType DecoupledEditorUI
    editor.ui;
    // $ExpectType DecoupledEditorUIView
    editor.ui.view;

    editor = await DecoupledEditor.create(htmlElement, {
        toolbar: {
            items: [],
            removeItems: [],
            shouldNotGroupWhenFull: true,
        },
        ui: {
            viewportTopOffset: {
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            },
        },
    });

    editor.destroy().then(() => {});

    editor.ui.init();
    // $ExpectType boolean
    editor.ui.focusTracker.isFocused;
    // $ExpectType boolean
    editor.ui.view.isRendered;
    // $ExpectType HTMLElement | undefined
    editor.ui.getEditableElement();

    editor.ui.view.render();
    // $ExpectType ToolbarView
    editor.ui.view.toolbar;
    // $ExpectType Locale
    editor.ui.view.toolbar.locale!;
})();
