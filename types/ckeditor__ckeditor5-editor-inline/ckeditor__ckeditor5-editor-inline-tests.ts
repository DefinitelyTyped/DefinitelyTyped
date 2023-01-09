import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { InlineEditor } from '@ckeditor/ckeditor5-editor-inline';
import InlineEditorUI from '@ckeditor/ckeditor5-editor-inline/src/inlineeditorui';
import InlineEditorUIView from '@ckeditor/ckeditor5-editor-inline/src/inlineeditoruiview';
import { HtmlDataProcessor, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { ToolbarView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

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
    // @ts-expect-error
    inlineEditorUI.init(document.createElement('div'));
    inlineEditorUI.init();
    new InlineEditorUIView(new Locale(), new View(new StylesProcessor()), document.createElement('div'), {
        shouldToolbarGroupWhenFull: true,
    });
});

const htmlElement: HTMLElement = document.createElement('div');
// @ts-expect-error
new InlineEditor();

class MyPlugin extends Plugin {
    init(): void {}
}

(async () => {
    let editor = await InlineEditor.create('foo');
    editor = await InlineEditor.create(htmlElement);
    editor = await InlineEditor.create(htmlElement, { plugins: [MyPlugin] });
    // @ts-expect-error
    editor.create();
    const str: string = editor.getData();
    editor.setData(str);
    // @ts-expect-error
    editor.setData();
    const processor: HtmlDataProcessor = editor.data.processor;
    editor.updateSourceElement();
    // $ExpectType HTMLElement | undefined
    editor.sourceElement;
    const ui: InlineEditorUI = editor.ui;
    const uiView: InlineEditorUIView = editor.ui.view;
    // $ExpectType number
    uiView.viewportTopOffset;
    // @ts-expect-error
    uiView.viewportTopOffset = 4;

    editor = await InlineEditor.create(htmlElement, {
        toolbar: {
            items: [],
            removeItems: [],
            shouldNotGroupWhenFull: true,
        },
    });

    editor.destroy().then(() => {});

    ui.init();
    // @ts-expect-error
    ui.init(null);
    // @ts-expect-error
    ui.init(htmlElement);
    let bool: boolean = ui.focusTracker.isFocused;

    bool = uiView.isRendered;

    // $ExpectType HTMLElement | undefined
    ui.getEditableElement();

    uiView.render();
    const toolbarView: ToolbarView = uiView.toolbar;
    const locale: Locale = uiView.toolbar.locale!;
})();
