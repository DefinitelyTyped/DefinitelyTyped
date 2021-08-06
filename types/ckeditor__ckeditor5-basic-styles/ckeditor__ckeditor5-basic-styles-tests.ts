import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}

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
