import { Editor } from '@ckeditor/ckeditor5-core';
import {
    Font,
    FontBackgroundColor,
    FontBackgroundColorEditing,
    FontBackgroundColorUI,
    FontColor,
    FontColorEditing,
    FontColorUI,
    FontFamily,
    FontFamilyEditing,
    FontFamilyUI,
    FontSize,
    FontSizeEditing,
    FontSizeUI,
} from '@ckeditor/ckeditor5-font';
import DocumentColorCollection from '@ckeditor/ckeditor5-font/src/documentcolorcollection';
import ColorTableView from '@ckeditor/ckeditor5-font/src/ui/colortableview';
import ColorUI from '@ckeditor/ckeditor5-font/src/ui/colorui';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

Font.requires.map(Plugin => new Plugin(editor));
new Font(editor);

FontSize.requires.map(Plugin => new Plugin(editor).init());
// $ExpectType FontSizeOption[]
new FontSize(editor).normalizeSizeOptions(['']);
// $ExpectType FontSizeOption[]
new FontSize(editor).normalizeSizeOptions([5]);

FontColor.requires.map(Plugin => new Plugin(editor));
new FontColor(editor);

FontFamily.requires.map(Plugin => new Plugin(editor).init());
new FontFamily(editor);

new FontSizeUI(editor).init();

FontBackgroundColor.requires.map(Plugin => new Plugin(editor));
new FontBackgroundColor(editor);

new FontBackgroundColorEditing(editor);

new FontBackgroundColorUI(editor);

new FontColorEditing(editor);

new FontColorUI(editor).init();

new FontFamilyEditing(editor).init();

new FontFamilyUI(editor).init();

new FontSizeEditing(editor).init();

new FontSizeUI(editor).init();

new DocumentColorCollection().add({ color: '', label: '', options: { hasBorder: true } });

new ColorTableView(new Locale(), {
    colors: [{ color: '', label: '', options: { hasBorder: true } }],
    columns: 1,
    removeButtonLabel: '',
    documentColorsLabel: '',
    documentColorsCount: 0,
}).destroy();

new ColorUI(editor, { commandName: '', icon: '', componentName: '', dropdownLabel: '' }).init();

// $ExpectType Font
editor.plugins.get('Font');

// $ExpectType FontBackgroundColor
editor.plugins.get('FontBackgroundColor');

// $ExpectType FontBackgroundColorEditing
editor.plugins.get('FontBackgroundColorEditing');

// $ExpectType FontBackgroundColorUI
editor.plugins.get('FontBackgroundColorUI');

// $ExpectType FontColor
editor.plugins.get('FontColor');

// $ExpectType FontColorEditing
editor.plugins.get('FontColorEditing');

// $ExpectType FontColorUI
editor.plugins.get('FontColorUI');

// $ExpectType FontFamily
editor.plugins.get('FontFamily');

// $ExpectType FontFamilyEditing
editor.plugins.get('FontFamilyEditing');

// $ExpectType FontFamilyUI
editor.plugins.get('FontFamilyUI');

// $ExpectType FontSize
editor.plugins.get('FontSize');

// $ExpectType FontSizeEditing
editor.plugins.get('FontSizeEditing');

// $ExpectType FontSizeUI
editor.plugins.get('FontSizeUI');
