import BuildInline from '@ckeditor/ckeditor5-build-inline';
import { Context, Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

BuildInline.create('', BuildInline.defaultConfig);
BuildInline.builtinPlugins.forEach(Plugin => {
    if (Plugin.isContextPlugin) {
        new Plugin(new Context());
    } else {
        new Plugin(editor);
    }
});

const el = document.querySelector('#editor');
if (el instanceof HTMLElement) {
    BuildInline.create(el)
        .then(editor => {
            editor.locale.t('').startsWith('');
        })
        .catch(error => {
            console.error(error);
        });
}
