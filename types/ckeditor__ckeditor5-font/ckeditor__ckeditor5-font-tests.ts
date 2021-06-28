import { Editor } from '@ckeditor/ckeditor5-core';
import F from '@ckeditor/ckeditor5-font';
import DocumentColorCollection from '@ckeditor/ckeditor5-font/src/documentcolorcollection';
import ColorTableView from '@ckeditor/ckeditor5-font/src/ui/colortableview';
import ColorUI from '@ckeditor/ckeditor5-font/src/ui/colorui';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

F.Font.requires.map(Plugin => new Plugin(editor));
new F.Font(editor);

F.FontSize.requires.map(Plugin => new Plugin(editor).init());
new F.FontSize(editor);

F.FontColor.requires.map(Plugin => new Plugin(editor));
new F.FontColor(editor);

F.FontFamily.requires.map(Plugin => new Plugin(editor).init());
new F.FontFamily(editor);

new F.FontSizeUI(editor).init();

F.FontBackgroundColor.requires.map(Plugin => new Plugin(editor));
new F.FontBackgroundColor(editor);

new F.FontBackgroundColorEditing(editor);

new F.FontBackgroundColorUI(editor);

new F.FontColorEditing(editor);

new F.FontColorUI(editor).init();

new F.FontFamilyEditing(editor).init();

new F.FontFamilyUI(editor).init();

new F.FontSizeEditing(editor).init();

new F.FontSizeUI(editor).init();

new DocumentColorCollection().add({ color: '', label: '' , options: {hasBorder: true}});

new ColorTableView(new Locale(), {
    colors: [{ color: '', label: '' , options: {hasBorder: true}}],
    columns: 1,
    removeButtonLabel: '',
    documentColorsLabel: '',
    documentColorsCount: 0,
});

new ColorUI(editor, { commandName: '', icon: '', componentName: '', dropdownLabel: '' }).init();
