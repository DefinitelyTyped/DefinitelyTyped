import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
import BalloonEditorUI from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditorui';
import BalloonEditorUIView from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditoruiview';
import { StylesProcessor } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { EditorUIView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

BalloonEditor.create('', { placeholder: 'foo' }).then(editor => {
    editor.commands.get('');
    BalloonEditor.defaultConfig?.plugins?.map(strOrPlugin => {
        if (typeof strOrPlugin !== 'string') {
            new strOrPlugin(editor);
        }
    });
    editor.ui.editor instanceof Editor;
    const classicEditorUI = new BalloonEditorUI(editor, new EditorUIView());
    // @ts-expect-error
    classicEditorUI.init(document.createElement('div'));
    classicEditorUI.init();
    new BalloonEditorUIView(new Locale(), new View(new StylesProcessor()), document.createElement('div'));
});

const htmlElement: HTMLElement = document.createElement('div');
// @ts-expect-error
new BalloonEditor();

class MyPlugin extends Plugin {}

(async () => {
    let editor = await BalloonEditor.create('foo');
    editor = await BalloonEditor.create(htmlElement);
    editor = await BalloonEditor.create(htmlElement, { plugins: [MyPlugin] });
    // @ts-expect-error
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // @ts-expect-error
    editor.setData();
    // $ExpectType HtmlDataProcessor
    editor.data.processor;
    editor.updateSourceElement();
    // $ExpectType HTMLElement | undefined
    editor.sourceElement;
    // $ExpectType BalloonEditorUI
    editor.ui;
    // $ExpectType BalloonEditorUIView
    editor.ui.view;

    editor = await BalloonEditor.create(htmlElement, {
        toolbar: {
            items: [],
            removeItems: [],
            shouldNotGroupWhenFull: true,
        },
        ui: {
            viewportTopOffset: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
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
})();
