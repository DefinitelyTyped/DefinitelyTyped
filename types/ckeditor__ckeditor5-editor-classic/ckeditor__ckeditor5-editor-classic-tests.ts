import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic';
import ClassicEditorUI from '@ckeditor/ckeditor5-editor-classic/src/classiceditorui';
import ClassicEditorUIView from '@ckeditor/ckeditor5-editor-classic/src/classiceditoruiview';
import { StylesProcessor } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { EditorUIView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

ClassicEditor.ClassicEditor.create('', { placeholder: 'foo' }).then(editor => {
    editor.commands.get('');
    ClassicEditor.ClassicEditor.defaultConfig?.plugins?.map(strOrPlugin => {
        if (typeof strOrPlugin !== 'string') {
            new strOrPlugin(editor);
        }
    });
    editor.ui.editor instanceof Editor;
    const classicEditorUI = new ClassicEditorUI(editor, new EditorUIView());
    classicEditorUI.init(document.createElement('div'));
    classicEditorUI.init();
    new ClassicEditorUIView(new Locale(), new View(new StylesProcessor()), {
        shouldToolbarGroupWhenFull: true,
    });
});

new ClassicEditor.ClassicEditor();

class MyPlugin extends Plugin {}

(async () => {
    let editor = await ClassicEditor.ClassicEditor.create('foo');
    editor = await ClassicEditor.ClassicEditor.create(document.body);
    editor = await ClassicEditor.ClassicEditor.create(document.body, { plugins: [MyPlugin] });
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
    // $ExpectType ClassicEditorUI
    editor.ui;
    // $ExpectType ClassicEditorUIView
    editor.ui.view;

    editor = await ClassicEditor.ClassicEditor.create(document.body, {
        toolbar: {
            items: [],
            removeItems: [],
            shouldNotGroupWhenFull: true,
        },
        ui: {
            viewportTopOffset: {
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
            },
        },
    });

    editor.destroy().then(() => {});

    editor.ui.init();
    editor.ui.init(null);
    editor.ui.init(document.body);
    // $ExpectType boolean
    editor.ui.focusTracker.isFocused;
    // $ExpectType boolean
    editor.ui.view.isRendered;
    // $ExpectType boolean
    editor.ui.view.stickyPanel.isSticky;
    // $ExpectType number
    editor.ui.view.stickyPanel.viewportTopOffset;
    // $ExpectType HTMLElement | undefined
    editor.ui.getEditableElement();

    editor.ui.view.render();
    // $ExpectType ToolbarView
    editor.ui.view.toolbar;
    // $ExpectType Locale | undefined
    editor.ui.view.toolbar.locale;
})();
