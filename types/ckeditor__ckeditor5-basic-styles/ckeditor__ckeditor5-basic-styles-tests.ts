import {
    Bold,
    BoldEditing,
    BoldUI,
    Code,
    CodeEditing,
    CodeUI,
    Italic,
    ItalicEditing,
    ItalicUI,
    Strikethrough,
    StrikethroughEditing,
    StrikethroughUI,
    Subscript,
    SubscriptEditing,
    SubscriptUI,
    Superscript,
    SuperscriptEditing,
    SuperscriptUI,
    Underline,
    UnderlineEditing,
    UnderlineUI,
} from '@ckeditor/ckeditor5-basic-styles';
import { Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

const plugins = [Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript] as const;
plugins.map(Plugin => {
    new Plugin(new MyEditor());
    const Required = Plugin.requires[0];
    const required = new Required(new MyEditor());
    required.init();
    const Required2 = Plugin.requires[1];
    const required2 = new Required2(new MyEditor());
    required2.init();
});

// $ExpectType Bold
editor.plugins.get('Bold');

// $ExpectType BoldEditing
editor.plugins.get('BoldEditing');

// $ExpectType BoldUI
editor.plugins.get('BoldUI');

// $ExpectType Code
editor.plugins.get('Code');

// $ExpectType CodeEditing
editor.plugins.get('CodeEditing');

// $ExpectType CodeUI
editor.plugins.get('CodeUI');

// $ExpectType Italic
editor.plugins.get('Italic');

// $ExpectType ItalicEditing
editor.plugins.get('ItalicEditing');

// $ExpectType ItalicUI
editor.plugins.get('ItalicUI');

// $ExpectType Strikethrough
editor.plugins.get('Strikethrough');

// $ExpectType StrikethroughEditing
editor.plugins.get('StrikethroughEditing');

// $ExpectType StrikethroughUI
editor.plugins.get('StrikethroughUI');

// $ExpectType Subscript
editor.plugins.get('Subscript');

// $ExpectType SubscriptEditing
editor.plugins.get('SubscriptEditing');

// $ExpectType SubscriptUI
editor.plugins.get('SubscriptUI');

// $ExpectType Superscript
editor.plugins.get('Superscript');

// $ExpectType SuperscriptEditing
editor.plugins.get('SuperscriptEditing');

// $ExpectType SuperscriptUI
editor.plugins.get('SuperscriptUI');

// $ExpectType Underline
editor.plugins.get('Underline');

// $ExpectType UnderlineEditing
editor.plugins.get('UnderlineEditing');

// $ExpectType UnderlineUI
editor.plugins.get('UnderlineUI');
