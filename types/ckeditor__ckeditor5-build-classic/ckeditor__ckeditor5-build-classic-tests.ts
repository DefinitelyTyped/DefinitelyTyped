import BuildClassic from '@ckeditor/ckeditor5-build-classic';
import { Context, Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

BuildClassic.create('');
BuildClassic.create('', BuildClassic.defaultConfig);
BuildClassic.builtinPlugins.forEach(Plugin => {
    if (Plugin.isContextPlugin) {
        new Plugin(new Context());
    } else {
        new Plugin(editor);
    }
});

const el = document.querySelector('#editor');
if (el instanceof HTMLElement) {
    BuildClassic.create(el)
        .then(editor => {
            editor.locale.t('').startsWith('');
        })
        .catch(error => {
            console.error(error);
        });
}
