import BuildDecoupled from '@ckeditor/ckeditor5-build-decoupled-document';
import { Context, Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

BuildDecoupled.create('', BuildDecoupled.defaultConfig);
BuildDecoupled.builtinPlugins.forEach(Plugin => {
    if (Plugin.isContextPlugin) {
        new Plugin(new Context());
    } else {
        new Plugin(editor);
    }
});

const el = document.querySelector('#editor');
if (el instanceof HTMLElement) {
    BuildDecoupled.create(el)
        .then(editor => {
            if (editor instanceof BuildDecoupled) {
                editor.locale.t('').startsWith('');
            }
        })
        .catch(error => {
            console.error(error);
        });
}
