import { Editor } from "@ckeditor/ckeditor5-core";
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import BoldEditing from '@ckeditor/ckeditor5-basic-styles/src/bold/boldediting';
import BoldUI from '@ckeditor/ckeditor5-basic-styles/src/bold/boldui';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeEditing from '@ckeditor/ckeditor5-basic-styles/src/code/codeediting';
import CodeUI from '@ckeditor/ckeditor5-basic-styles/src/code/codeui';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import ItalicEditing from '@ckeditor/ckeditor5-basic-styles/src/italic/italicediting';
import ItalicUI from '@ckeditor/ckeditor5-basic-styles/src/italic/italicui';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import StrikethroughEditing from '@ckeditor/ckeditor5-basic-styles/src/strikethrough/strikethroughediting';
import StrikethroughUI from '@ckeditor/ckeditor5-basic-styles/src/strikethrough/strikethroughui';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import SubscriptEditing from '@ckeditor/ckeditor5-basic-styles/src/subscript/subscriptediting';
import SubscriptUI from '@ckeditor/ckeditor5-basic-styles/src/subscript/subscriptui';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import SuperscriptEditing from '@ckeditor/ckeditor5-basic-styles/src/superscript/superscriptediting';
import SuperscriptUI from '@ckeditor/ckeditor5-basic-styles/src/superscript/superscriptui';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UnderlineEditing from '@ckeditor/ckeditor5-basic-styles/src/underline/underlineediting';
import UnderlineUI from '@ckeditor/ckeditor5-basic-styles/src/underline/underlineui';

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
