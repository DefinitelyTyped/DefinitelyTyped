import { Editor } from '@ckeditor/ckeditor5-core';
import F from '@ckeditor/ckeditor5-font';
import DocumentColorCollection from '@ckeditor/ckeditor5-font/src/documentcolorcollection';
import ColorTableView from '@ckeditor/ckeditor5-font/src/ui/colortableview';
import ColorUI from '@ckeditor/ckeditor5-font/src/ui/colorui';
import { Locale } from '@ckeditor/ckeditor5-utils';
// import Font from '@ckeditor/ckeditor5-font/src/font';
// import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
// import FontBackgroundColorUI from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor/fontbackgroundcoloreditingui';
// import FontBackgroundColorEditing from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor/fontbackgroundcolorediting';
// import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
// import FontColorEditing from '@ckeditor/ckeditor5-font/src/fontcolor/fontcolorediting';
// import FontColorUI from '@ckeditor/ckeditor5-font/src/fontcolor/fontcolorui';
// import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
// import FontFamilyEditing from '@ckeditor/ckeditor5-font/src/fontfamily/fontfamilyediting';
// import FontFamilyUI from '@ckeditor/ckeditor5-font/src/fontfamily/fontfamilyui';
// import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
// import FontSizeEditing from '@ckeditor/ckeditor5-font/src/fontsize/fontsizeediting';
// import FontSizeUI from '@ckeditor/ckeditor5-font/src/fontsize/fontsizeui';

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
