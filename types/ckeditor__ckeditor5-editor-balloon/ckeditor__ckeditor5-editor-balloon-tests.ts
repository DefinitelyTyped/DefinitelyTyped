import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { BalloonEditor } from '@ckeditor/ckeditor5-editor-balloon';
import BalloonEditorUI from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditorui';
import BalloonEditorUIView from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditoruiview';
import { HtmlDataProcessor, StylesProcessor } from '@ckeditor/ckeditor5-engine';
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
    // $ExpectError
    classicEditorUI.init(document.createElement('div'));
    classicEditorUI.init();
    new BalloonEditorUIView(new Locale(), new View(new StylesProcessor()), document.createElement('div'));
});

let htmlElement: HTMLElement = document.createElement('div');
// $ExpectError
new BalloonEditor();

class MyPlugin extends Plugin {}

(async () => {
    let editor = await BalloonEditor.create('foo');
    editor = await BalloonEditor.create(htmlElement);
    editor = await BalloonEditor.create(htmlElement, { plugins: [MyPlugin] });
    // $ExpectError
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // $ExpectError
    editor.setData();
    const processor: HtmlDataProcessor = editor.data.processor;
    editor.updateSourceElement();
    const elem: HTMLElement = editor.sourceElement!;
    const ui: BalloonEditorUI = editor.ui;
    const uiView: BalloonEditorUIView = editor.ui.view;

    editor = await BalloonEditor.create(htmlElement, {
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
})();
